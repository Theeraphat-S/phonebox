<p align="center"><img src="../agent/PhoneBox.Agent/phonebox.ico" width="72" alt="ไอคอน PhoneBox"></p>

<h1 align="center">PhoneBox</h1>

<p align="center">
  <a href="../README.md">English</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.it.md">Italiano</a> ·
  <a href="README.pt.md">Português</a> ·
  <a href="README.nl.md">Nederlands</a> ·
  <a href="README.pl.md">Polski</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.vi.md">Tiếng Việt</a> ·
  <b>ไทย</b> ·
  <a href="README.zh.md">中文 (简体)</a>
</p>

<p align="center"><b>เปลี่ยนโทรศัพท์ Android เครื่องเก่าให้เป็นจอตั้งโต๊ะสำหรับคอมพิวเตอร์ของคุณ</b><br>
สถานะของพีซี เซสชันเขียนโค้ดด้วย AI เพลง และปุ่มควบคุมแบบสัมผัส ผ่าน USB หรือ Wi-Fi<br>
รองรับ Windows, Linux และ macOS ไม่ต้องรูท ไม่ต้องมีบัญชี PhoneBox และไม่ต้องใช้บริการคลาวด์</p>

<p align="center">
  <a href="https://ersinkoc.github.io/phonebox/"><b>ลองใช้เดโมออนไลน์</b></a> ·
  <a href="https://github.com/ersinkoc/phonebox/releases/latest"><b>ดาวน์โหลด</b></a> ·
  <a href="#เริ่มต้นใช้งานด่วน"><b>เริ่มต้นใช้งานด่วน</b></a>
</p>

<p align="center">
  <a href="https://github.com/ersinkoc/phonebox/actions/workflows/build.yml"><img src="https://github.com/ersinkoc/phonebox/actions/workflows/build.yml/badge.svg" alt="สถานะการบิลด์"></a>
  <a href="https://github.com/ersinkoc/phonebox/releases/latest"><img src="https://img.shields.io/github/v/release/ersinkoc/phonebox?label=release" alt="รุ่นล่าสุด"></a>
  <img src="https://img.shields.io/badge/Windows%20%C2%B7%20Linux%20%C2%B7%20macOS-.NET%2010-512bd4" alt="Windows, Linux, macOS; .NET 10">
  <img src="https://img.shields.io/badge/Android-7%2B-3ddc84" alt="Android 7+">
  <a href="../LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="สัญญาอนุญาต MIT"></a>
</p>

<p align="center"><img src="hero-0.6.png" width="900" alt="PhoneBox บนโทรศัพท์สามเครื่อง แสดงหน้าระบบอัตโนมัติ หน้าหลัก และหน้าแพลนเนอร์"><br>
<sub>ตัวอย่างการจัดวางพร้อมข้อมูลเดโม</sub></p>

PhoneBox ประกอบด้วย **แอป Android** แบบเต็มหน้าจอที่จับคู่กับ **Agent บนเดสก์ท็อป** ตัวเล็ก คุณสร้างแผงของคุณเองได้ในตัวแก้ไขแบบภาพบนเบราว์เซอร์:
**122 widget**, **30 เทมเพลต**, หลายหน้า และตัวอย่างสด เชื่อมต่อโทรศัพท์ได้หลายเครื่องโดยแต่ละเครื่องมีการจัดวางของตัวเอง
หรือสลับโทรศัพท์เครื่องเดียวระหว่างคอมพิวเตอร์ที่จับคู่ไว้ก็ได้

## ทำอะไรได้บ้าง

| ใช้ทำอะไร | สิ่งที่แสดงบนโทรศัพท์ |
|---|---|
| **เฝ้าดูพีซี** | CPU, GPU, RAM, ดิสก์, เครือข่าย และ ping กราฟ รายละเอียด GPU และตัวควบคุมโพรเซส |
| **เขียนโค้ดด้วย AI** | โควตา เวลารีเซ็ต และพยากรณ์อัตราการใช้ของ Claude, Codex และ Antigravity เซสชัน Claude Code และ Codex ในเครื่อง สถานะรีวิวและ CI ของ GitHub |
| **ควบคุมด้วยการสัมผัส** | ทางลัดแอปและ URL คีย์ลัด และแมโคร เสียงของแอป ไมโครโฟน สื่อ OBS และตัวควบคุมระบบผ่าน [Control Deck](CONTROL-DECK.md) |
| **ใช้ในชีวิตประจำวัน** | กำลังเล่น วิทยุอินเทอร์เน็ต นาฬิกา สภาพอากาศ ปฏิทิน โน้ต เช็กลิสต์ โพโมโดโร และตัวจับเวลา |
| **ระบบอัตโนมัติ** | ค่าและการแจ้งเตือนผ่าน webhook ตัวควบคุม Home Assistant และกฎที่ตอบสนองต่อกิจกรรมบนคอมพิวเตอร์ |

แตะที่เซสชัน AI เพื่อดูโมเดล เวลา และรายละเอียดโทเค็น เปิดใช้คำขออนุญาตของ Claude Code เพื่อกด
**อนุญาต (Allow)** หรือ **ปฏิเสธ (Deny)** จากโทรศัพท์ได้ การเชื่อมต่อ [CodexBar](GUIDE.md#widgets) (ไม่บังคับ) จะเพิ่มผู้ให้บริการโควตา
และภาพรวมค่าใช้จ่าย

<p align="center"><a href="tour-0.6.mp4"><img src="tour-0.6.gif" width="780" alt="ทัวร์ PhoneBox แสดงการแจ้งเตือน คำขออนุญาตของ Claude Code และการสลับหน้าอัตโนมัติ"></a><br>
<sub>ทัวร์ด้วยข้อมูลเดโม: การแจ้งเตือน คำขออนุญาต และการสลับหน้าอัตโนมัติ <a href="tour-0.6.mp4">ดูไฟล์ MP4</a></sub></p>

## เริ่มต้นใช้งานด่วน

สิ่งที่ต้องมีคือ **โทรศัพท์ Android 7 ขึ้นไป** และคอมพิวเตอร์ที่รองรับ การใช้ USB ต้องใช้สายข้อมูลและเปิดการแก้จุดบกพร่องผ่าน USB ส่วนการจับคู่ผ่าน Wi-Fi
ไม่ต้องใช้ทั้งสองอย่าง Agent รุ่นที่ปล่อยออกมามี .NET รวมอยู่แล้ว จึงไม่ต้องติดตั้งรันไทม์เอง

### 1. ติดตั้ง Agent บนเดสก์ท็อป

**Windows 10/11 x64** — วางในหน้าต่าง PowerShell ธรรมดา:

```powershell
irm https://raw.githubusercontent.com/ersinkoc/phonebox/main/setup.ps1 | iex
```

**Linux หรือ macOS** — รันด้วยผู้ใช้ของคุณเอง:

```sh
curl -fsSL https://raw.githubusercontent.com/ersinkoc/phonebox/main/setup.sh | bash
```

ตัวติดตั้งจะดาวน์โหลดรุ่นล่าสุด ตรวจสอบค่าแฮช SHA-256 เสนอให้ติดตั้งสิ่งที่ยังขาดและตั้งให้เริ่มทำงานเมื่อเข้าสู่ระบบ
แล้วเปิดหน้าการตั้งค่าที่ <http://127.0.0.1:8765> นอกจากนี้ยังติดตั้งแอป Android ผ่าน USB ให้ได้ด้วย
รันตัวติดตั้งอีกครั้งเพื่ออัปเดตหรือซ่อมแซมการติดตั้ง โดยการตั้งค่าและการจับคู่ยังอยู่ครบ

> **การลงนามบน Windows:** ขณะนี้ Agent รุ่นที่ปล่อยออกมายังไม่ได้ลงนามดิจิทัล เนื่องจากใบสมัครกับ SignPath Foundation ยังรออนุมัติ
> SmartScreen หรือโปรแกรมแอนติไวรัสอาจเตือนหรือบล็อก ดู[นโยบายการลงนามโค้ด](#นโยบายการลงนามโค้ด)
> และ[คำเตือนระหว่างติดตั้ง](SETUP.md#quick-start) ควรอนุญาตการแก้จุดบกพร่องผ่าน USB เฉพาะบนคอมพิวเตอร์ที่คุณเชื่อถือ

อ่านสคริปต์ก่อนรัน: [Windows](../setup.ps1) · [Linux/macOS](../setup.sh)
[คู่มือการติดตั้ง](SETUP.md) อธิบายตัวเลือก สิ่งที่ต้องมี พาธการติดตั้ง การแก้ไขปัญหา และการถอนการติดตั้ง

### 2. เชื่อมต่อโทรศัพท์

| USB | Wi-Fi เท่านั้น |
|---|---|
| เปิด **ตัวเลือกสำหรับนักพัฒนา → การแก้จุดบกพร่องผ่าน USB** เสียบสายข้อมูล แล้วกดยอมรับคำขออนุญาตบนโทรศัพท์ ให้ตัวติดตั้งติดตั้งแอปให้ หรือใช้ **การตั้งค่า → ทั่วไป → ติดตั้งแอปบนโทรศัพท์** | ติดตั้ง APK จาก[รุ่นล่าสุด](https://github.com/ersinkoc/phonebox/releases/latest) เปิด **การตั้งค่า → ทั่วไป → Wi-Fi & Tailscale** รีสตาร์ท Agent เมื่อถูกขอ แล้วเลือก **จับคู่โทรศัพท์ผ่าน Wi-Fi** สแกนคิวอาร์โค้ดจับคู่ และยืนยันว่ารหัสตรวจสอบตรงกัน |
| ปลุกและเปิด Panel ทันทีที่เชื่อมต่อ รองรับการอัปเดตแอปผ่าน adb | ไม่ต้องใช้ adb หรือตัวเลือกสำหรับนักพัฒนา อัปเดตแอปเองด้วยมือ เว้นแต่ภายหลังคุณตั้งค่า USB เพิ่ม |

หากต้องการให้สลับสำรองระหว่าง USB และ Wi-Fi อัตโนมัติ ให้เปิด Wi-Fi และเสียบโทรศัพท์ผ่าน USB หนึ่งครั้ง
[รายละเอียดการเชื่อมต่อและการตั้งค่า Tailscale →](SETUP.md#wi-fi--tailscale)

### 3. ปรับให้เป็นของคุณ

เปิด <http://127.0.0.1:8765> (หรือดับเบิลคลิกไอคอนในถาดระบบของ Windows) ที่ส่วน **หน้า (Pages)** เลือกเทมเพลต ลากและปรับขนาด
widget แล้วกด **บันทึก (Save)** ใช้ **ตัวอย่างสด (Live preview)** เพื่อดูการแก้ไขที่ยังไม่ได้บันทึกด้วยข้อมูลจริง
ปัดนิ้ว แตะจุดบอกหน้า หรือใช้ปุ่มปรับเสียงของโทรศัพท์เพื่อสลับหน้า

<details>
<summary><b>วิธีติดตั้งอื่น ๆ</b></summary>

- **ดาวน์โหลดเอง:** แตกไฟล์ Agent สำหรับระบบของคุณจาก[หน้ารุ่นที่ปล่อยออกมา](https://github.com/ersinkoc/phonebox/releases/latest)
  แล้วรัน จากนั้นติดตั้ง APK บนโทรศัพท์ ค่า checksum และข้อมูลที่มาของการบิลด์แนบมากับไฟล์ของรุ่นนั้น
- **Scoop (Windows):**

  ```powershell
  scoop bucket add phonebox https://github.com/ersinkoc/phonebox
  scoop install main/adb phonebox/phonebox
  ```

- **จากซอร์สโค้ด:** ดู[คู่มือการติดตั้ง](SETUP.md#other-ways-to-install)และ[คู่มือสำหรับนักพัฒนา](DEVELOPMENT.md)
- **winget:** เตรียม manifest ไว้ใน [packaging/winget](../packaging/winget) ดูรายละเอียดในคู่มือการติดตั้ง

</details>

## หน้าและเทมเพลต

เริ่มจากเทมเพลตหน้าหลัก ระบบ โควตา AI เซสชัน เพลง แพลนเนอร์ ระบบอัตโนมัติ หรือ Control Deck แล้วปรับตารางขนาด
12 × 6 ให้พอดีกับโทรศัพท์ของคุณ รองรับทั้งการจัดวางแนวตั้งและแนวนอน Smart Stack ใส่ widget ได้สูงสุด 12 ตัวในช่องเดียว

| หน้าหลัก | เซสชัน AI |
|---|---|
| ![นาฬิกา สภาพอากาศ สื่อ และตัวชี้วัดของพีซี](screenshots/home.png) | ![เซสชันเขียนโค้ดและกิจกรรมบน GitHub](screenshots/work.png) |
| **ระบบ** | **ตัวแก้ไขการจัดวาง** |
| ![กราฟ CPU, GPU, หน่วยความจำ และเครือข่าย](screenshots/system.png) | ![การตั้งค่าหน้าและ widget ในตัวแก้ไขแบบภาพ](screenshots/settings-editor.png) |

ภาพหน้าจอใช้ข้อมูลเดโม [เลือกดูแกลเลอรีเทมเพลตและ widget](GUIDE.md#pages--templates)
เปลี่ยนฟอนต์ ขนาด ระยะห่าง มุม และพื้นผิวได้ทั้งระบบหรือเฉพาะหน้าหรือ widget ด้วย[คู่มือรูปลักษณ์](APPEARANCE.md)

## แพลตฟอร์มที่รองรับ

| | Windows | Linux | macOS |
|---|---|---|---|
| รุ่นที่ปล่อยออกมา | x64 | x64 / ARM64, glibc | Apple silicon / Intel |
| CPU, RAM, ดิสก์, เครือข่าย, โพรเซส | ✓ | ✓ | ✓ |
| ข้อมูล GPU | ตัวนับของ Windows; NVIDIA ผ่าน `nvidia-smi`; เซ็นเซอร์เพิ่มเติมผ่าน [LibreHardwareMonitor](SETUP.md#librehardwaremonitor-on-windows) | NVIDIA / AMD; ความเร็วสัญญาณนาฬิกาของ Intel | Apple silicon เมื่อ macOS เปิดเผยข้อมูล |
| สื่อ | เซสชันสื่อของระบบ | `playerctl` | `nowplaying-cli`; สำรองด้วย Spotify / Music |
| ระดับเสียง | แบบเนทีฟ | `wpctl` / `pactl` | เอาต์พุตของระบบ ความพร้อมใช้งานขึ้นอยู่กับอุปกรณ์ |
| หน้าจอของ Agent | ไอคอนในถาดระบบ + การตั้งค่าบนเบราว์เซอร์ | การตั้งค่าบนเบราว์เซอร์ | การตั้งค่าบนเบราว์เซอร์ |

widget ขึ้นอยู่กับฮาร์ดแวร์ เครื่องมือที่ติดตั้ง และสิทธิ์ของเครื่องที่ใช้ ฟีเจอร์ขั้นสูงของ Control Deck มี
[ข้อกำหนดด้านแพลตฟอร์มของตัวเอง](CONTROL-DECK.md) Windows ARM และ Linux แบบ musl (เช่น Alpine) ไม่มี
รุ่นที่ปล่อยออกมา ดู[ตารางความเข้ากันได้ฉบับเต็ม](SETUP.md#what-works-where)

## เอกสาร

| คู่มือ | เนื้อหา |
|---|---|
| [การติดตั้งและการเชื่อมต่อ](SETUP.md) | ตัวเลือกการติดตั้ง คำเตือน การติดตั้งเองและจากซอร์สโค้ด USB, Wi-Fi, Tailscale การอัปเดต การถอนการติดตั้ง และการแก้ไขปัญหา |
| [คู่มือผู้ใช้](GUIDE.md) | แกลเลอรีเทมเพลต widget การเชื่อมต่อ AI ตัวแก้ไข คำขออนุญาตของ Claude Code webhook และกฎอัตโนมัติ |
| [รูปลักษณ์](APPEARANCE.md) | ฟอนต์ พื้นผิว พรีเซ็ต การสืบทอดค่า และตัวอย่างสด |
| [Control Deck](CONTROL-DECK.md) | เสียง สื่อ OBS ทางลัด งาน โปรโตคอล สิ่งที่ต้องมี และข้อจำกัดของแต่ละแพลตฟอร์ม |
| [widget Discord](DISCORD.md) | การสร้างแอปพลิเคชัน Discord การเชื่อมต่อ ตัวควบคุม และการแก้ไขปัญหา |
| [การพัฒนา](DEVELOPMENT.md) | สถาปัตยกรรม เดโมในเครื่อง การบิลด์ การทดสอบ ซอร์สของ widget และการรัน Agent แบบแยกส่วน |
| [การมีส่วนร่วม](../CONTRIBUTING.md) | ขอบเขตการมีส่วนร่วม สิ่งที่คาดหวังในการรีวิว ความเป็นส่วนตัว และการตรวจสอบที่จำเป็น |
| [บันทึกการเปลี่ยนแปลง](../CHANGELOG.md) | ประวัติรุ่นและการเปลี่ยนแปลงที่ยังไม่ปล่อย |
| [เช็กลิสต์การปล่อยรุ่น](RELEASING.md) | ขั้นตอนการบิลด์ ลงนาม และเผยแพร่สำหรับผู้ดูแล |

[ส่วนเสริมสำหรับ UMIDIGI BISON](../extras/umidigi-bison) เป็นการปรับแต่งที่ย้อนกลับได้และไม่ต้องรูท ซึ่งใช้กับโทรศัพท์เครื่องแรกที่ใช้พัฒนา

## ความปลอดภัยและความเป็นส่วนตัว

เซิร์ฟเวอร์การตั้งค่าบนเดสก์ท็อปรับฟังที่ `127.0.0.1:8765` โดย USB เข้าถึงได้ผ่าน `adb reverse`
Wi-Fi (ไม่บังคับ) ใช้ HTTPS ที่พอร์ต 8766 พร้อมใบรับรองที่ปักหมุดไว้และคีย์ที่จับคู่แล้ว ส่วนปลายทางของการตั้งค่าและการจับคู่
ใช้ได้เฉพาะในเครื่อง โทรศัพท์ขอให้ทำการกระทำที่ตั้งค่าไว้โดยอ้างอิงด้วย ID คำสั่งและข้อมูลรับรองของการเชื่อมต่อต่าง ๆ อยู่บนคอมพิวเตอร์เท่านั้น

PhoneBox ไม่มีการเก็บข้อมูลการใช้งาน (telemetry) ระบบวิเคราะห์ หรือบัญชีของตัวเอง widget และการเชื่อมต่อที่เป็นตัวเลือกจะติดต่อ
บริการภายนอกเพื่อดึงข้อมูลสภาพอากาศ โควตา GitHub และอื่น ๆ และ Agent จะตรวจสอบการอัปเดตจาก GitHub
ฟีดสาธารณะที่รองรับสามารถสำรองผ่าน Agent ทาง USB ได้เมื่อโทรศัพท์ไม่มีอินเทอร์เน็ต
[นโยบายความเป็นส่วนตัว](../PRIVACY.md) ระบุการเชื่อมต่อขาออกทั้งหมดและวิธีปิด
อ่าน[รายละเอียดด้านความปลอดภัย](GUIDE.md#security--privacy) หากต้องการรายงานช่องโหว่ ให้ทำตาม [SECURITY.md](../SECURITY.md)

## การพัฒนา

Agent ใช้ **.NET 10** ส่วนแอป Android ใช้ **Kotlin และ WebView** พร้อม widget ที่เขียนด้วย JavaScript ล้วน
สำหรับการบิลด์ Android ให้ติดตั้ง **JDK 17** และ **Android SDK Platform 35** (SDK ที่ใช้บิลด์แอป ตัวแอปเอง
ทำงานบน Android 7.0, API 24 ขึ้นไป)
ดูตัวอย่าง Panel และตัวแก้ไขจากซอร์สโค้ดด้วย Python 3 โดยใช้ข้อมูลจำลอง:

```sh
python tools/demo-server.py
```

เปิด <http://127.0.0.1:8790/panel/> หรือ <http://127.0.0.1:8790/settings/>
ดู[คำสั่งสำหรับการพัฒนา](DEVELOPMENT.md#development) เพื่อรัน Agent บิลด์ APK และทดสอบการเปลี่ยนแปลง
ยินดีรับการมีส่วนร่วม เริ่มต้นที่ [CONTRIBUTING.md](../CONTRIBUTING.md)

## นโยบายการลงนามโค้ด

บริการลงนามโค้ดฟรีโดย [SignPath.io](https://about.signpath.io/) และใบรับรองโดย
[SignPath Foundation](https://signpath.org/)

- **Agent บน Windows:** ใบสมัครกับ SignPath Foundation ยังรออนุมัติ รุ่นที่ปล่อยออกมาจะยังไม่ได้ลงนามจนกว่าจะได้รับอนุมัติ
  เป้าหมายที่ตั้งใจจะลงนามคือ `PhoneBoxAgent.exe` ในไฟล์ zip ของรุ่น `win-x64` ซึ่งบิลด์โดย
  [เวิร์กโฟลว์การปล่อยรุ่น](../.github/workflows/release.yml) ทุกคำขอลงนามต้องได้รับการอนุมัติด้วยมือ
  ประกาศเกี่ยวกับรันไทม์และไลบรารีที่รวมมาอยู่ใน [THIRD-PARTY-NOTICES.txt](../agent/PhoneBox.Agent/THIRD-PARTY-NOTICES.txt)
- **แอป Android:** APK ของรุ่นที่ปล่อยออกมาใช้คีย์ลงนามของโครงการเอง โดยไม่เกี่ยวข้องกับ SignPath
- **บทบาทในทีม:** ผู้ commit ผู้รีวิว และผู้อนุมัติการลงนาม: [ersinkoc](https://github.com/ersinkoc)
  Pull request จากผู้มีส่วนร่วมคนอื่นจะได้รับการรีวิวก่อนรวมเข้า
- **ความเป็นส่วนตัว:** ดู[นโยบายความเป็นส่วนตัว](../PRIVACY.md)

## ขอบคุณ

ผู้ที่ทดสอบ PhoneBox บนฮาร์ดแวร์ของตัวเอง:

- [anandyakshit](https://github.com/anandyakshit): รองรับ Android 7 ทดสอบบนโทรศัพท์ Android 7.1.1 ([#73](https://github.com/ersinkoc/phonebox/issues/73))

## ผู้สนับสนุน

<!-- sponsor: WrongStack -->
<p align="center">
  <a href="https://wrongstack.com">
    <img src="sponsors/wrongstack.svg" width="900" alt="สนับสนุนโดย WrongStack — การเขียนโค้ดด้วย AI แบบโอเพนซอร์ส พร้อมหน่วยความจำถาวรและเวิร์กโฟลว์หลาย Agent ดูได้ที่ wrongstack.com">
  </a>
</p>
<p align="center">
  <strong>สนับสนุนโดย <a href="https://wrongstack.com">WrongStack</a></strong> ·
  Agent เขียนโค้ดด้วย AI แบบโอเพนซอร์สที่จดจำโค้ดเบสของคุณ<br>
  <a href="https://wrongstack.com"><strong>ดู WrongStack →</strong></a> ·
  <a href="https://github.com/wrongstack/wrongstack"><strong>ดูบน GitHub &amp; กดดาวให้กำลังใจ ★</strong></a>
</p>
<!-- /sponsor: WrongStack -->

## ประวัติจำนวนดาว

<a href="https://www.star-history.com/#ersinkoc/phonebox&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=ersinkoc/phonebox&type=Date&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=ersinkoc/phonebox&type=Date">
    <img alt="ประวัติจำนวนดาวของ ersinkoc/phonebox" src="https://api.star-history.com/svg?repos=ersinkoc/phonebox&type=Date">
  </picture>
</a>

## สัญญาอนุญาต

[MIT](../LICENSE)
