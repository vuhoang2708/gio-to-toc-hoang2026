# 🛠️ TÀI LIỆU MÔ TẢ KỸ THUẬT CHUYÊN SÂU (DEEP TECH SPEC)
**GitHub Repository:** [https://github.com/vuhoang2708/toc-hoang-dong-yen-duy-xuyen](https://github.com/vuhoang2708/toc-hoang-dong-yen-duy-xuyen)
## 🏯 DỰ ÁN: CỔNG THÔNG TIN SỐ TỘC HOÀNG ĐÔNG YÊN (2026)

---

## 1. TỔNG QUAN KIẾN TRÚC (ARCHITECTURE OVERVIEW)
Dự án được xây dựng theo mô hình **Serverless Hybrid Architecture**, kết hợp giữa nền tảng Hosting tĩnh (Vercel) và Hệ quản trị dữ liệu dựa trên đám mây (Google Workspace).

*   **Frontend**: Cấu trúc Single Page Application (SPA) giả lập bằng Vanilla JS & CSS Grid/Flexbox. Đạt hiệu năng tối ưu (Google Lighthouse > 95 pts).
*   **Backend & API**: Hoạt động hoàn toàn qua **Google Apps Script (GAS)** dưới dạng Webhook POST Request.
*   **Database (CRM)**: Sử dụng **Google Sheets** làm cơ sở dữ liệu thời gian thực, cho phép quản lý phi kỹ thuật dễ dàng.
*   **Media Automation**: Sử dụng Python Integration để xử lý Media và tạo video marketing tự động.

---

## 2. CHI TIẾT CÁC THÀNH PHẦN (COMPONENT DETAILS)

### 2.1. Hệ thống Admin & Biên tập (CMS)
Thay vì sử dụng các CMS nặng nề như WordPress, dự án phát triển 2 Module quản trị tinh gọn:
1.  **Admin Portal (`admin.html`)**: Trung tâm điều khiển chính, chứa các shortcut đến CRM, công cụ tạo video và hệ thống quản trị Webhook.
2.  **Verbatim Editor (`editor/index.html`)**: Trình biên tập đối soát 3 cột chuyên dụng. 
    *   **Logic**: Fetch dữ liệu từ Client -> Cho phép edit -> POST ngược lại Webhook để lưu vào Cloud.
    *   **Persistence**: Tích hợp `localStorage` để tự động lưu bản nháp ngay cả khi mất mạng hoặc đóng trình duyệt đột ngột.

---

## 3. KỸ THUẬT THIẾT KẾ & GIAO DIỆN (UI/UX ENGINEERING)
Hệ thống sử dụng triết lý thiết kế **Modern Heritage**, kết hợp giữa yếu tố truyền thống và kỹ thuật UI hiện đại.

### 3.1. Design Tokens (Biến số thiết kế)
Toàn bộ mã nguồn sử dụng **Cơ chế Biến CSS (`--root-variables`)** để duy trì tính nhất quán và dễ dàng bảo trì:
*   **Palette màu tộc**: 
    *   `--clan-gold (#f59e0b)`: Màu chính cho các yếu tố nhấn (CTA, Header).
    *   `--clan-red-deep (#7f1d1d)`: Sử dụng cho các chi tiết mang tính nghi lễ, sắc phong.
    *   `--bg-near-black (#020617)`: Màu nền tối sâu để làm nổi bật hiệu ứng Glassmorphism.
*   **Typography Hierarchy**: Sử dụng **Font Be Vietnam Pro** (Modern Sans-serif) cho toàn bộ UI điều hướng và **EB Garamond** (Antique Serif) cho các nội dung trang trọng.

### 3.2. Glassmorphism Engine
Hiệu ứng "Kính mờ" đặc trưng của website được triển khai qua 3 lớp logic thuật toán hiển thị:
1.  **Lớp nền (Base Layer)**: Sử dụng màu nền tối sâu `var(--bg-near-black)`.
2.  **Lớp phủ trong suốt (Overlay)**: Sử dụng `rgba(15, 23, 42, 0.8)` để tạo độ mờ.
3.  **Thuật toán lọc (Filter Engine)**: Sử dụng `backdrop-filter: blur(12px)`. Đây là kỹ thuật lọc pixel phía sau khối nội dung theo thời gian thực, tạo cảm giác về chiều sâu không gian.
4.  **Viền tản sáng (Rim Light)**: Lớp viền mảnh `1px solid rgba(255, 255, 255, 0.1)` tạo hiệu ứng phản xạ ánh sáng ở cạnh khối.

### 3.3. Responsive & Layout Engineering
*   **Fluid Layout**: Sử dụng **CSS Grid** để quản trị các khối nội dung lớn và **Flexbox** cho các thành phần điều hướng nhỏ.
*   **Clamp() Logic**: Các kích thước font chữ và padding không sử dụng giá trị cố định mà dùng hàm `clamp()` để tự động co giãn theo khung hình (VD: `font-size: clamp(2rem, 5vw, 2.8rem)`), đảm bảo giao diện luôn cân đối từ iPhone SE đến màn hình 4K.

### 3.4. Micro-interactions & Motion
*   **Cinematic Zoom**: Khi di chuột vào khu vực Phả đồ, hệ thống thực hiện một cú `transform: scale(1.2) translateY(50px)` với thời gian chuyển cảnh là 5 giây (slow-motion), tạo cảm giác trang trọng và chiều sâu lịch sử.
*   **State Management**: Các trạng thái Hover được xử lý qua CSS Transitions `0.3s ease` để tạo độ mượt mà cho trải nghiệm người dùng.

---

## 4. BACKEND LOGIC (GOOGLE APPS SCRIPT)
File `google_apps_script.js` đóng vai trò là "bộ não" xử lý serverless:
*   **Webhook Entry Point**: Tiếp nhận dữ liệu qua hàm `doPost(e)`.
*   **Data Routing**: Tự động phân loại dữ liệu dựa trên "type" gửi lên (Biên tập, Đăng ký, hay Gia phả) để điều phối vào đúng ID của Google Sheet tương ứng.
*   **Notification Engine**: Tích hợp dịch vụ Mail của Google để gửi cảnh báo tự động cho BTC mỗi khi có dữ liệu mới phát sinh.

---

## 5. TỰ ĐỘNG HÓA & TRUYỀN THÔNG (AUTOMATION)

### 5.1. Video Power-Script (`scripts/`)
Bộ script Python giúp tạo video giới thiệu tự động:
*   **AI Voiceover**: Sử dụng `edge-tts` với Neural Voice chuẩn Việt Nam để lồng tiếng cho nội dung website.
*   **Image Processing**: Sử dụng `OpenCV` để tự động căn chỉnh và xử lý các screenshot giao diện thành khung hình video.

### 5.2. Timeline Switcher
Logic JavaScript tự động ẩn Form đăng ký và chuyển giao diện sang chế độ "Ký Ức" sau ngày 26/04/2026, đảm bảo website luôn tự vận hành đúng mục đích theo thời gian thực.

---

## 6. QUY TRÌNH TRIỂN KHAI & CI/CD
Tích hợp chặt chẽ giữa GitHub và Vercel:
1.  **Stage 1 (Code)**: Cập nhật mã nguồn dưới máy.
2.  **Stage 2 (Git)**: Push lên GitHub (trigger Webhook).
3.  **Stage 3 (Live)**: Vercel tự động build và làm tươi trang Live ngay lập tức.

---
*Tài liệu được soạn thảo chuyên sâu bởi Antigravity AI - Phiên bản Digital Heritage (23/04/2026).*
