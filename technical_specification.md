# 🏗️ TÀI LIỆU KỸ THUẬT (TECHNICAL SPECIFICATION) — Dự án DH4HN Website

Dự án này là nền tảng chia sẻ và đánh giá kiến thức cho chương trình **Delivering Happiness Masterclass**.

---

## 🛠️ Giải pháp Kỹ thuật Đã triển khai

### 1. Hệ thống Theo dõi Đa cấp (Multi-sheet Tracking via Google Apps Script)
*   **Giải pháp:** Sử dụng Google Apps Script làm trung gian (Web App) để nhận dữ liệu từ Website qua phương thức POST và ghi vào Google Sheets.
*   **Webhook CRM URL:** `https://script.google.com/macros/s/AKfycbxxbba8bvb7H2Em179HgJUv0Tj8dnxWIuGynmVqjDcPVwADrTBXxx7UwE5AKroIQR5i/exec`
*   **Sheet CRM Link:** `https://docs.google.com/spreadsheets/d/1ZToRX6J5Vo6UgHzYEE_eUxU0bVnsGxBRLt-8tduI5CA/edit`
*   **Cấu trúc dữ liệu:**
    *   **`Tong_hop` (Summary):** Theo dõi mỗi phiên làm việc là 1 dòng. Ghi nhận điểm số cuối cùng và trạng thái hoàn thành.
    *   **`Chi_tiet` (Details):** Ghi lại chi tiết từng câu trả lời đúng/sai để khảo sát mức độ nắm giữ kiến thức.

### 2. Hệ thống Analytics Hợp nhất (Unified Site Analytics)
*   **Giải pháp:** Tạo file `tracking.js` dùng chung cho toàn bộ Website (Home & Quiz). Dùng `IntersectionObserver` để theo dõi cuộn trang (Scroll Depth).
*   **Lý do:** Theo dõi hành trình người dùng toàn diện: từ bản Personal/Official -> Cuộn tới mục Đăng ký -> Vào làm Quiz. Giúp đo lường tỷ lệ chuyển đổi (Conversion Rate) chính xác hơn.
*   **Quản lý Cache (Cache Busting):** Sử dụng tham số version `?v=X.X` khi load Script để vượt qua bộ nhớ đệm của trình duyệt.

### 3. Tích hợp AI Kiến Thức (NotebookLM MCP)
*   **Giải pháp:** Ứng dụng kiến trúc hệ thống Model Context Protocol (MCP) thông qua máy chủ `notebooklm-mcp` để kết nối Agent AI với Google NotebookLM.
*   **Lý do:** Tự động hóa tạo các Studio Artifacts (Audio podcast, visual infographic, quiz flashcards) từ tài liệu chuẩn của chương trình. Rút ngắn thời gian sản xuất học liệu.
*   **Mở rộng:** Hỗ trợ kết xuất tài liệu động, xây dựng hệ thống học tập tương tác không cần viết nội dung thủ công.

---

## 🌳 Kiến trúc Triển khai & Ánh xạ Files (Multi-Repo Strategy)

Dự án được duy trì song song trên hai Repository độc lập để đảm bảo việc phân tách nội dung (Public vs Demo). 

Dưới đây là Chiến lược Hai Tệp (Two-File System Strategy) và ánh xạ từng phiên bản:

| Môi trường / Mục tiêu | Repository (Kênh triển khai) | File Gốc Local (Source of Truth) | Cấu trúc Hiển thị |
| :--- | :--- | :--- | :--- |
| **Bản SẠCH (Official)**<br>Dành cho cộng đồng, public 100% | `culturecodefeedforward/DeliveringHappiness` | `index_OFFICIAL.html` | Có chứa mục Thư viện Kiến thức (LMS Login). **Không** chứa các bản demo (Artifacts). |
| **Bản DEMO (Personal)**<br>Training, Sales, Testing Artifacts | `vuhoang2708/culture_code_VN.DH` | `index.html` | Hình ảnh Demo của Studio Artifacts (Audio, Visual, Flashcards) cho khách hàng/nội bộ. |
| **Cổng Đăng ký (Register)**<br>Thu thập Lead trực tiếp | Toàn bộ 2 Repositories | `register.html` | Form đăng ký 3 trường (Tên, SĐT, Email). Gửi dữ liệu về CRM Sheet qua GAS Webhook. |

---

## 📋 Cấu trúc Cổng Đăng ký (Native Registration Form)

Hệ thống sử dụng file `register.html` để thu thập thông tin khách hàng trực tiếp mà không cần dùng Google Form nhúng (iFrame), giúp tăng tốc độ tải trang và tính thẩm mỹ.

*   **Các trường dữ liệu (Fields):**
    *   `fullName`: Họ và tên khách hàng (Bắt buộc).
    *   `phone`: Số điện thoại/Zalo liên hệ (Bắt buộc).
    *   `email`: Địa chỉ email nhận tài liệu (Bắt buộc).
*   **Sự kiện Tracking (`REGISTER_SUBMIT`):**
    *   Khi nhấn gửi, hệ thống gọi hàm `logToSheet` trong `tracking.js` với nhãn `type: 'CRM_LEAD'`.
    *   Dữ liệu bao gồm `sessionId` duy nhất để liên kết với hành vi cuộn trang trước đó.
*   **Công nghệ:** CSS Glassmorphism, JS Fetch API (No-cors mode).

---

## 🚦 Quy trình Quản lý GitHub (Git Patch-and-Revert Protocol)

Để tránh nhầm lẫn nội dung giữa hai repo (ví dụ: lỡ đẩy Artifacts lên repo của công ty), áp dụng quy trình đẩy code như sau:

1.  **Cập nhật Bản Demo (Repo Personal - `vuhoang2708`):**
    *   Làm việc trực tiếp và lưu code lên `index.html`.
    *   Lệnh: `git push personal main --force`
    
2.  **Cập nhật Bản Sạch (Repo Official - `culturecodefeedforward`):**
    *   Lấy file `index_OFFICIAL.html` ghi đè tạm thời sang file chính: `cp index_OFFICIAL.html index.html`
    *   Lệnh: `git add index.html && git commit -m "deploy clean version"`
    *   Lệnh đẩy: `git push origin main --force`
    
3.  **Khôi phục Môi trường Dev (Revert Local):**
    *   Lệnh: `git reset --hard HEAD~1` (Trả `index.html` về trạng thái Demo để tiếp tục lập trình).
    *   Kiểm tra tham số cache `URL?v=TIMESTAMP` trên trình duyệt sau khi deploy.


---

## 🔗 Danh sách Link Dự án Chính thức

| Hệ thống | Đường dẫn (URL) |
|---|---|
| **Landing Page** | `https://culturecodefeedforward.github.io/DeliveringHappiness/` |
| **Trang Quiz** | `https://culturecodefeedforward.github.io/DeliveringHappiness/assessment.html` |
| **File Dashboard** | `https://docs.google.com/spreadsheets/d/1ZToRX6J5Vo6UgHzYEE_eUxU0bVnsGxBRLt-8tduI5CA/edit` |

---

## 🛡️ Quy tắc Dự án (Work Rules)

### 1. Local-First Protocol
Tuyệt đối không push code lên GitHub nếu chưa chạy thử thành công tại Local (`python -m http.server`) và xác nhận qua giao diện.

### 2. Môi trường Local (Python Fix)
Sử dụng bản Python Microsoft Store để vượt rào IT công ty. Lệnh chạy: `python -m http.server 8000`.

### 3. Đường dẫn Mặc định (Project Root)
Tất cả các tệp tin, dữ liệu và hội thoại của dự án phải nằm tại: `G:\My Drive\antigravity`.

---

## 📅 Lịch sử Thay đổi Kỹ thuật (Change Log)

| Ngày | Thay đổi | Chi tiết |
|---|---|---|
| 19/03 | Tracking Quiz & Unified Analytics | Mở rộng theo dõi Analytics và logic G-Sheets |
| 22/03 | Kiến trúc Repo | Chuyển đổi Repo sang `DeliveringHappiness` |
| 27/03 | System Restoration | Tạo chiến lược Hai Tệp - Hai Kho (Demo vs Official). |
| 02/04 | Sync Verification | Đồng bộ hóa toàn diện qua quy trình Patch-and-Revert. |
| 03/04 | Native Register Portal | Triển khai form đăng ký 3 trường (`register.html`) và tích hợp GAS CRM. |
| 04/04 | Final Documentation | Cập nhật toàn bộ tài liệu kỹ thuật, kiến trúc file và luồng dữ liệu đăng ký. |
