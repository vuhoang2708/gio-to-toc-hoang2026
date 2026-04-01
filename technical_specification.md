# 🏗️ TÀI LIỆU KỸ THUẬT (TECHNICAL SPECIFICATION) — Dự án DH4HN Website

Dự án này là nền tảng chia sẻ và đánh giá kiến thức cho chương trình **Delivering Happiness Masterclass**.

---

## 🛠️ Giải pháp Kỹ thuật Đã triển khai

### 1. Hệ thống Theo dõi Đa cấp (Multi-sheet Tracking)
*   **Giải pháp:** Sử dụng Google Apps Script làm trung gian (Web App) để nhận dữ liệu từ Website qua phương thức POST và ghi vào Google Sheets.
*   **Lý do:** Đảm bảo dữ liệu được thu thập thời gian thực, dễ quản trị, không tốn chi phí server và dễ dàng tạo biểu đồ phân tích (Dashboard).
*   **Cấu trúc dữ liệu:**
    *   **`Tong_hop` (Summary):** Theo dõi mỗi phiên làm việc là 1 dòng. Ghi nhận điểm số cuối cùng và trạng thái hoàn thành.
    *   **`Chi_tiet` (Details):** Ghi lại chi tiết từng câu trả lời đúng/sai để khảo sát mức độ nắm giữ kiến thức.

### 2. Hệ thống Analytics Hợp nhất (Unified Site Analytics)
*   **Giải pháp:** Tạo file `tracking.js` dùng chung cho toàn bộ Website (Home & Quiz). Dùng `IntersectionObserver` để theo dõi cuộn trang (Scroll Depth).
*   **Lý do:** Theo dõi hành trình người dùng toàn diện: từ bản Personal/Official -> Cuộn tới mục Đăng ký -> Vào làm Quiz. Giúp đo lường tỷ lệ chuyển đổi (Conversion Rate) chính xác hơn.
*   **Quản lý Cache (Cache Busting):** Sử dụng tham số version `?v=X.X` khi load Script để vượt qua bộ nhớ đệm của trình duyệt khi cập nhật URL Tracking mới.

---

## 📅 Lịch sử Thay đổi Kỹ thuật (Change Log)

| Ngày | Thay đổi | Lý do Chi tiết |
|---|---|---|
| 19/03 | Triển khai Tracking Quiz | Cần theo dõi lượt làm bài và điểm số ban đầu. |
| 19/03 | Thiết kế Welcome Screen | Thử nghiệm tăng tính gợi mở và giảm tỷ lệ thoát (Bounce rate). |
| 19/03 | **Rollback** Welcome Screen | USER yêu cầu vào thẳng nội dung câu hỏi để tối ưu tốc độ. |
| 19/03 | Nâng cấp Multi-sheet | USER cần phân tách bảng Tổng hợp và Chi tiết để làm báo cáo Dashboard dễ dàng. |
| 19/03 | Unified Analytics | Mở rộng theo dõi lượt view từng link (Official/Personal) và lượt cuộn xuống mục Đăng ký ở trang chủ. |
| 20/03 | Sửa lỗi Quiz "đứng hình" | Loại bỏ trùng lặp hằng số `SHEET_WEBAPP_URL` gây SyntaxError giữa `tracking.js` và `quiz.js`. |
| 20/03 | Thiết lập Work Rules | Đồng bộ hệ thống Log và Tài liệu kỹ thuật chuyên nghiệp. |
| 22/03 | Upgrade Hero UI | Cập nhật bộ Tiêu đề Hero song ngữ "Delivering Happiness - Trao gửi Hạnh phúc". |
| 22/03 | Chuyển đổi Repo | Di chuyển mã nguồn sang Repo mới: `DeliveringHappiness`. |
| 23/03 | Fix Analytics v2.3 | Xử lý lỗi CORS và sai Spreadsheet ID. Đưa Dashboard vào hoạt động chính thức. |

---

## 🔗 Danh sách Link Dự án Chính thức

| Hệ thống | Đường dẫn (URL) |
|---|---|
| **Landing Page** | `https://culturecodefeedforward.github.io/DeliveringHappiness/` |
| **Trang Quiz** | `https://culturecodefeedforward.github.io/DeliveringHappiness/assessment.html` |
| **File Dashboard** | `https://docs.google.com/spreadsheets/d/1Fb7zuIJ1nqxi6n9GvV41CpjXcMdswNr3IjOTzHBdZG8/edit?usp=sharing` |

---

## 🛡️ Quy tắc Dự án (Work Rules)

### 1. Local-First Protocol
Tuyệt đối không push code lên GitHub nếu chưa chạy thử thành công tại Local (`python -m http.server`) và xác nhận qua ảnh chụp màn hình.

### 2. Môi trường Local (Python Fix)
Sử dụng bản Python Microsoft Store để vượt rào IT công ty. Lệnh chạy: `python -m http.server 8000`.

### 3. Đường dẫn Mặc định (Project Root)
Tất cả các tệp tin, dữ liệu và hội thoại của dự án Delivering Happiness phải được quản lý và lưu trữ tại thư mục mẹ: `G:\My Drive\antigravity`.

---
*📍 Tài liệu này sẽ được bổ sung ngay khi có bất kỳ thay đổi kỹ thuật nào mới.*

## 🌳 Kiến trúc Triển khai (Multi-Repo Strategy)
Dự án được duy trì song song trên hai Repository độc lập để đảm bảo việc phân tách nội dung rõ ràng:

1.  **Repo Official (`culturecodefeedforward/DeliveringHappiness`):**
    *   **Mục tiêu:** Bản công khai (Public) dành cho cộng đồng.
    *   **Nội dung:** Bản **SẠCH (Clean)**, có tích hợp **Thư viện kiến thức (LMS Login)**.
    *   **Cấu trúc:** Nhánh `main` luôn là bản Clean.

2.  **Repo Personal (`vuhoang2708/culture_code_VN.DH`):**
    *   **Mục tiêu:** Bản trình diễn (Demo) phục vụ thuyết trình và đào tạo.
    *   **Nội dung:** Bản **DEMO (Artifacts)**, hiển thị toàn bộ Studio Artifacts (Audio, Visual, Quiz).
    *   **Cấu trúc:** Nhánh `main` luôn là bản đầy đủ Artifacts.

---

## 🚦 Quy trình Cập nhật & Kiểm soát (Update Protocol)
Để tránh nhầm lẫn nội dung giữa hai môi trường, mọi lập trình viên/AI phải tuân thủ nghiêm ngặt:

### 1. Phân loại Cập nhật (Change Classification)
Trước khi code, phải xác định tính năng thuộc nhóm nào:
*   **Nhóm Chung (Core):** Logic Quiz, CSS layout, Tracking. (Cần update cả 2 Repo).
*   **Nhóm Riêng (Content):** Thư viện kiến thức (Official) hoặc Studio Artifacts (Personal). (Chỉ update Repo đích).

### 2. Thao tác GitHub (Git Protocol)
*   **KHÔNG** sử dụng lệnh push đồng loạt lên tất cả các remote.
*   **PHẢI** chỉ định chính xác remote:
    *   `git push origin main` (Chỉ update bản Chính thức).
    *   `git push personal main` (Chỉ update bản Demo).

### 3. Kiểm soát Hiển thị (Visual Verification)
Sau khi push, bắt buộc dùng trình duyệt kiểm tra:
*   Nếu là **Official**: Tuyệt đối không được thấy các khối có tiêu đề "Studio Artifacts".
*   Nếu là **Personal**: Phải thấy đầy đủ các khối Audio/Video/Quiz.

---
*📍 Tài liệu này được cập nhật ngày 29/03/2026 sau khi khôi phục hệ thống.*
