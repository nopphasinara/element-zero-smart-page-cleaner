let timeoutId = null;

function processSelectors() {
  const currentHostname = window.location.hostname;

  chrome.storage.sync.get({ domainSelectors: {} }, (data) => {
    const allData = data.domainSelectors;
    const selectors = allData[currentHostname];

    if (!selectors || selectors.length === 0) return;

    selectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            el.remove();
          }
        });
      } catch (e) {}
    });
  });
}

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.domainSelectors) {
    processSelectors();
  }
});

const observer = new MutationObserver(() => {
  if (!timeoutId) {
    timeoutId = setTimeout(() => {
      processSelectors();
      timeoutId = null;
    }, 200);
  }
});

if (document.body) {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class', 'jsname']
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'jsname']
    });
  });
}

processSelectors();