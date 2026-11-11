<div align="center">

# 🛡️ Element Zero — Smart Page Cleaner

[ภาษาไทย (TH)](./README.md) | [English (EN)](./README_EN.md)

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 12px 0;">
  <img src="https://img.shields.io/badge/version-4.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/platform-Chrome-informational.svg" alt="Platform">
  <img src="https://img.shields.io/badge/sync-Google%20Account-orange.svg" alt="Cloud Sync">
</div>

*Say goodbye to annoying popups and website clutter in real-time.*

</div>

---

> กำจัดปอปอัปและองค์ประกอบกวนใจบนหน้าเว็บได้อย่างแม่นยำ ทำงานแบบเรียลไทม์ พร้อมระบบซิงก์คลาวด์และสำรองข้อมูลครบจบในที่เดียว

---

## 💡 ตัวอย่างการใช้งาน (Usage Example)

รูปแบบการจัดการและบล็อก Element กวนใจผ่านหน้าต่าง Extension ของเรา:

```text
[ กำหนด CSS Selector ] ──► [ ตรวจจับ DOM แบบ Real-time ] ──► [ ลบปอปอัปออกทันที ]

```

* **หน้าต่างจัดการ (Popup UI):** แยกตั้งค่าอิสระตาม Domain / Subdomain พร้อมระบบ Backup/Restore เป็นไฟล์ JSON ทันที

---

## 🌟 ฟีเจอร์หลัก (Key Features)

* **🧹 Custom Element & Popup Blocker:** บล็อกและลบ Element หรือปอปอัปน่ารำคาญ (เช่น ปอปอัปเลือกข้อความ, ปุ่มลอย, เมนูแปลภาษา) บนหน้าเว็บได้อย่างแม่นยำ
* **🌐 Domain/Subdomain Isolation:** แยกการตั้งค่าการบล็อกเป็นรายโดเมนและซับโดเมนได้อย่างอิสระ ไม่รบกวนการทำงานของเว็บไซต์อื่นๆ
* **☁️ Cloud Sync (Google Account):** ซิงก์การตั้งค่าทั้งหมดข้ามอุปกรณ์อัตโนมัติผ่านบัญชี Google ที่ใช้งานร่วมกับเบราว์เซอร์ Chrome
* **📥 Backup & Restore (JSON):** รองรับการสำรองข้อมูล (Export) และกู้คืนข้อมูล (Import) การตั้งค่าทั้งหมดเป็นไฟล์ JSON ได้อย่างปลอดภัย
* **⚡ High Performance:** ทำงานเบื้องหลังด้วย `MutationObserver` ร่วมกับระบบ `Debounce` และการตรวจสอบสถานะการแสดงผล (`Visible Check`) ทำให้ไม่กินทรัพยากรเครื่อง

---

## 📜 ประวัติการพัฒนา (Changelog)

บันทึกการพัฒนาและอัปเดตฟีเจอร์อย่างต่อเนื่องของโปรเจกต์ Element Zero:

* **v4.0 (ปัจจุบัน):**
* เพิ่มระบบ Backup และ Restore การตั้งค่าทั้งหมดเป็นไฟล์ JSON
* ปรับปรุงหน้าต่าง UI Popup ให้ใช้งานง่ายและแสดงสถานะการซิงก์ชัดเจน


* **v3.0:**
* เพิ่มระบบ Cloud Sync เชื่อมโยงข้อมูลการตั้งค่ากับบัญชี Google อัตโนมัติผ่าน `chrome.storage.sync`
* อัปเดต Content Script ให้รองรับการซิงก์ข้อมูลแบบ Real-time (`storage.onChanged`)


* **v2.0:**
* เพิ่มระบบแยกเก็บและจัดการ CSS Selectors อิสระตาม Domain / Subdomain ของแต่ละเว็บไซต์
* พัฒนาหน้าต่าง Popup UI ให้สามารถเพิ่มและลบรายการ Selector ได้ทันที


* **v1.0:**
* เปิดตัวครั้งแรกด้วยความสามารถพื้นฐานในการตรวจจับและลบ Element / ปอปอัปตาม Custom Selectors
* ใช้ระบบ `MutationObserver` ร่วมกับ `Debounce` เพื่อประสิทธิภาพสูงในการทำงานเบื้องหลัง



---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
element-zero/
├── manifest.json    # ไฟล์กำหนดค่าและขอสิทธิ์ของ Extension
├── popup.html       # หน้าต่าง UI สำหรับจัดการ Selector และ Backup/Restore
├── popup.js         # จัดการตรรกะการทำงานหน้าบ้านและการเชื่อมต่อ Storage
└── content.js       # สคริปต์หลักสำหรับตรวจจับและลบ Element บนหน้าเว็บแบบเรียลไทม์

```

---

## 🛠 วิธีการติดตั้ง (Installation Guide)

1. **ดาวน์โหลดหรือสร้างไฟล์:** คัดลอกโค้ดทั้ง 4 ไฟล์หลักไปบันทึกไว้ในโฟลเดอร์เดียวกันบนคอมพิวเตอร์ของคุณ
2. **เปิดโหมดนักพัฒนาซอฟต์แวร์:**
* เปิด Google Chrome แล้วพิมพ์ `chrome://extensions/` ที่แถบ URL แล้วกด Enter
* เปิดสวิตช์ **"Developer mode" (โหมดนักพัฒนาซอฟต์แวร์)** ที่มุมบนขวา


3. **ติดตั้ง Extension:**
* คลิกที่ปุ่ม **"Load unpacked" (โหลดส่วนขยายที่ไม่ได้บรรจุ)** ทางมุมบนขวา
* เลือกโฟลเดอร์ที่เก็บไฟล์โปรเจกต์ของคุณ


4. **พร้อมใช้งาน:** ไอคอนของ Extension จะปรากฏขึ้นบนแถบเครื่องมือของ Chrome พร้อมใช้งานทันที!

---

## 📄 License

MIT License © 2026 Element Zero Project. สามารถนำไปพัฒนาต่อยอดหรือใช้งานได้อย่างอิสระครับ