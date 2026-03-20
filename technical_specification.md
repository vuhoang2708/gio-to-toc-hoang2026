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

---
*📍 Tài liệu này sẽ được bổ sung ngay khi có bất kỳ thay đổi kỹ thuật nào mới.*
