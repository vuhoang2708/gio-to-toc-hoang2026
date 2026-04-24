# 🤝 HƯỚNG DẪN CỘNG TÁC & VẬN HÀNH DỰ ÁN (COLLABORATION GUIDE)

Tài liệu này được soạn thảo để giúp bạn (Kỹ thuật viên / Người cộng tác) có thể thiết lập môi trường làm việc nhanh nhất và hiểu rõ cấu trúc dự án **Tộc Hoàng Đông Yên** để bảo trì hoặc tùy biến sang một hệ thống tương tự.

---

## 🛠️ Bước 1: Thiết lập Môi trường (Setup Environment)

Để AI Assistant (Antigravity) hoạt động tối ưu, bạn cần thiết lập như sau:

### 1. Cài đặt Runtime
*   **Python (Môi trường Local Server):** Được tích hợp sẵn trong thư mục `scratch/tools/python/`. Dùng để chạy server localhost kiểm thử.
    *   *Lệnh chạy server local:* `python -m http.server 8000`
*   **Git & GitHub CLI:** Dùng để đẩy mã nguồn (Push) kích hoạt quá trình tự động Deploy trên Vercel.

### 2. Thiết lập Mã Nguồn
*   **Clone dự án:**
    ```bash
    git clone https://github.com/vuhoang2708/toc-hoang-dong-yen-duy-xuyen.git
    ```

---

## 📂 Bước 2: Hiểu Cấu trúc Dự án (Project Structure)

Dự án này là sự kết hợp giữa **Static Hosting (Vercel)** và **Google Apps Script Serverless**. Các thành phần chính trị yếu bao gồm:

*   **`index.html` (Cổng thông tin):** Landing Page chính của dự án, thiết kế theo hướng Modern Heritage.
*   **`admin.html` (Trang Quản Trị):** Bảng điều khiển trung tâm, dẫn tới các công cụ nội bộ.
*   **`editor/index.html` (Trình Biên Tập):** Giao diện 3 cột dùng để nhập liệu đối soát nguyên văn. Các thay đổi được push trực tiếp thông qua cơ chế API Fetch.
*   **`genealogy/index.html` (Cập nhật Gia Phả):** Biểu mẫu tiếp nhận thông tin các thành viên mới.
*   **`assets/` (Tài nguyên):** Chứa hình ảnh, CSS, logic giao diện và các tập lệnh (tracking, styling).
*   **`google_apps_script.js` (Backend):** Bộ não điều khiển API, phân luồng Payload (Dữ liệu gửi từ Editor, Đăng ký, Gia Phả) vào đúng Tab lưu trữ định sẵn trên Google Sheets.
*   **`TOC_HOANG_TECHNICAL_SPEC.md`**: "Trí nhớ" của dự án, bao quát kiến trúc và đặc tả kỹ thuật chuyên sâu nhất.

---

## 🎨 Bước 3: Gợi ý Tùy chỉnh (Re-skinning Strategies)

Mã nguồn này được thiết kế theo hướng Component-Modular. Nếu bạn muốn tận dụng bộ khung này cho một dòng họ, hiệp hội hoặc dự án tương đương, đây là các hướng tùy biến chính:

### 1. Đổi nhận diện (Branding)
*   Hãy mở `assets/css/style.css` (hoặc file CSS chính) và thay đổi các biến màu CSS Variables: `--clan-gold`, `--clan-red-deep` cho phù hợp với nhận diện của dòng họ bạn.
*   Logo và Video Hero nằm tại `assets/images/` và `assets/videos/`.

### 2. Thiết lập Cơ Sở Dữ Liệu Tách Biệt
Hệ thống sử dụng Data Layer là Google Sheets. Bạn không cần thiết lập MySQL hay MongoDB.
*   **Bước 1:** Lập 1 file Google Sheets mới bảo mật riêng tư lẻ.
*   **Bước 2:** Mở file `google_apps_script.js` rà quy trình, cập nhật biến cố định `SPREADSHEET_ID` bằng ID sheet file trang tính mới.
*   **Bước 3:** Tạo bản New Deployment (Triển khai) tại nền tảng Google, lấy Endpoint HTTPS mới.
*   **Bước 4:** Gắn đè đường dẫn mới đó vào biến `GOOGLE_APP_URL` trong các UI HTML (Ví dụ: `editor/index.html`). 

### 3. Quy hoạch Hệ thống Video / AI
Hệ thống tương thích mở cho các MCP (Model Context Protocol). Ví dụ kịch bản lấy ảnh báo cáo video có thể kết hợp với bộ công cụ `tai-video` (tích hợp trong thư mục tools `skills/`).

---

## 🚀 Bước 4: Quy trình Làm việc (Workflow)

Khi bạn muốn thay đổi bất kì điều gì với sự trợ giúp của AI:
1.  **Giao việc dứt khoát:** Yêu cầu các Agent/AI lập kế hoạch thay đổi (Tạo `implementation_plan.md` để đối chiếu).
2.  **Kiểm tra Local/Live:** Agent tự động chạy trình duyệt (`browser_subagent`) để lấy ảnh xác thực hoặc sử dụng `localhost:8000` kiểm toán thực quan.
3.  **Cập nhật Đặc tả Kỹ thuật:** Sau mỗi Update lớn, yêu cầu cập nhật lại file `TOC_HOANG_TECHNICAL_SPEC.md` để người kế thừa đọc lại dễ tiếp nhận dự án.

---
*📍 Xây dựng kiến trúc vì sự chuyên nghiệp và minh bạch dài lâu - Phiên bản 24/04/2026*
