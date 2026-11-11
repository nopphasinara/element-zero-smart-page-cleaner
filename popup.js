document.addEventListener('DOMContentLoaded', () => {
  const selectorInput = document.getElementById('selectorInput');
  const addBtn = document.getElementById('addBtn');
  const selectorList = document.getElementById('selectorList');
  const currentDomainEl = document.getElementById('currentDomain');
  
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importFile = document.getElementById('importFile');

  let activeHostname = '';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url) {
      try {
        const urlObj = new URL(tabs[0].url);
        activeHostname = urlObj.hostname;
        currentDomainEl.textContent = activeHostname;
        loadSelectors(activeHostname);
      } catch (e) {
        currentDomainEl.textContent = 'Unable to read URL';
      }
    }
  });

  function loadSelectors(hostname) {
    if (!hostname) return;
    
    chrome.storage.sync.get({ domainSelectors: {} }, (data) => {
      const allData = data.domainSelectors;
      const selectors = allData[hostname] || [];
      
      selectorList.innerHTML = '';
      if (selectors.length === 0) {
        selectorList.innerHTML = '<div class="empty-text">No rules configured for this site yet</div>';
        return;
      }

      selectors.forEach((sel, index) => {
        const li = document.createElement('li');
        li.textContent = sel;
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => removeSelector(hostname, index);
        
        li.appendChild(delBtn);
        selectorList.appendChild(li);
      });
    });
  }

  addBtn.onclick = () => {
    const val = selectorInput.value.trim();
    if (!val || !activeHostname) return;

    chrome.storage.sync.get({ domainSelectors: {} }, (data) => {
      const allData = data.domainSelectors;
      if (!allData[activeHostname]) {
        allData[activeHostname] = [];
      }

      if (!allData[activeHostname].includes(val)) {
        allData[activeHostname].push(val);
        chrome.storage.sync.set({ domainSelectors: allData }, () => {
          selectorInput.value = '';
          loadSelectors(activeHostname);
        });
      }
    });
  };

  function removeSelector(hostname, index) {
    chrome.storage.sync.get({ domainSelectors: {} }, (data) => {
      const allData = data.domainSelectors;
      if (allData[hostname]) {
        allData[hostname].splice(index, 1);
        if (allData[hostname].length === 0) {
          delete allData[hostname];
        }
        chrome.storage.sync.set({ domainSelectors: allData }, () => {
          loadSelectors(hostname);
        });
      }
    });
  }

  exportBtn.onclick = () => {
    chrome.storage.sync.get({ domainSelectors: {} }, (data) => {
      const jsonStr = JSON.stringify(data.domainSelectors, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `element-zero-backup-${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      
      URL.revokeObjectURL(url);
    });
  };

  importBtn.onclick = () => {
    importFile.click();
  };

  importFile.onchange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (typeof importedData === 'object' && importedData !== null) {
          chrome.storage.sync.set({ domainSelectors: importedData }, () => {
            alert('Data successfully restored!');
            loadSelectors(activeHostname);
          });
        } else {
          alert('Invalid backup file format.');
        }
      } catch (err) {
        alert('Error parsing JSON file.');
      }
      importFile.value = '';
    };
    reader.readAsText(file);
  };
});