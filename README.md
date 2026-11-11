<div align="center">

# 🛡️ Element Zero — Smart Page Cleaner

[English (EN)](./README.md) | [ภาษาไทย (TH)](./README_TH.md)

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 12px 0;">
  <img src="https://img.shields.io/badge/version-4.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/platform-Chrome-informational.svg" alt="Platform">
  <img src="https://img.shields.io/badge/sync-Google%20Account-orange.svg" alt="Cloud Sync">
</div>

*Say goodbye to annoying popups and website clutter in real-time.*

</div>

---

> Accurately block and remove unwanted elements or popups from any webpage with real-time detection, cloud sync, and effortless backup.

---

## 💡 Usage Example

How element management and blocking works through our extension popup interface:

```text
[ Input CSS Selector ] ──► [ Real-time DOM Detection ] ──► [ Instant Popup Removal ]

```

* **Popup UI Management:** Independent settings per Domain / Subdomain with instant JSON Backup & Restore capabilities.

---

## 🌟 Key Features

* **🧹 Custom Element & Popup Blocker:** Accurately block and remove unwanted elements or popups (such as text selection popups, floating buttons, and translation menus) from any webpage.
* **🌐 Domain/Subdomain Isolation:** Independently manage block settings per domain and subdomain without affecting other websites.
* **☁️ Cloud Sync (Google Account):** Automatically sync all your configurations across devices via the Google account logged into Chrome.
* **📥 Backup & Restore (JSON):** Easily export and import your configurations as a JSON file for safety and easy device migration.
* **⚡ High Performance:** Operates in the background using `MutationObserver` combined with `Debounce` and `Visible Check` to ensure zero lag and minimal system resource usage.

---

## 📜 Changelog

A record of continuous development and updates for the Element Zero project:

* **v4.0 (Latest):**
* Added Backup and Restore functionality to export/import all configurations as a JSON file.
* Enhanced popup UI for a cleaner user experience with clear sync status indicators.


* **v3.0:**
* Integrated Cloud Sync via `chrome.storage.sync` to automatically bind configurations with the user's Google account.
* Updated Content Script to support real-time configuration sync using `storage.onChanged`.


* **v2.0:**
* Added Domain/Subdomain isolation allowing independent CSS selector management per website.
* Improved popup UI for quick and easy selector additions and removals.


* **v1.0:**
* Initial release featuring core DOM detection and element/popup removal based on custom selectors.
* Leveraged `MutationObserver` with `Debounce` for optimized background performance.



---

## 📂 Project Structure

```text
element-zero/
├── manifest.json    # Extension manifest and permissions configuration
├── popup.html       # User interface for managing selectors and backup/restore
├── popup.js         # Frontend logic and storage management
└── content.js       # Core script for real-time DOM detection and element removal

```

---

## 🛠 Installation Guide

1. **Prepare Files:** Save all four core extension files into a single folder on your computer.
2. **Open Developer Mode:**
* Open Google Chrome and navigate to `chrome://extensions/`.
* Toggle on **"Developer mode"** in the top-right corner.


3. **Install Extension:**
* Click **"Load unpacked"** in the top-left corner.
* Select your project folder.


4. **Ready to Use:** The extension icon will appear on your Chrome toolbar, ready for action!

---

## 📄 License

MIT License © 2026 Element Zero Project. Feel free to use and modify for your needs.
