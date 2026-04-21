# 📋 Kế hoạch khắc phục: Hệ thống Lưu trữ & Xuất bản Nội dung Biên tập
*File: implementation_plan_20260420_Editor_Persistence.md*

### 1. Giải pháp kỹ thuật (Technical Solution)
1.  **Cơ chế Auto-save (localStorage):** 
    - Lắng nghe sự kiện `input` trên tất cả các thẻ `.edit-box`.
    - Lưu nội dung vào `localStorage` ngay lập tức (Real-time).
    - Tự động Load lại nội dung cũ khi trình duyệt mở lại (Persistence).
2.  **Đồng bộ Google Sheets (Cloud Integration):**
    - Tạo nút "🚀 GỬI BAN BIÊN TẬP (LƯU LÊN CLOUD)".
    - Sử dụng Google Apps Script làm API trung gian để đẩy dữ liệu vào Google Sheet.
3.  **Hành động bảo vệ (Exit Protection):** 
    - Dùng `localStorage` để đảm bảo dù đóng tab đột ngột dữ liệu vẫn không mất.
    - Hiện thông báo nhắc nhở nếu người dùng chưa bấm "Gửi".

### 2. Các file bị ảnh hưởng (Impacted Files)
- `generate_editor.py`: Cập nhật mã nguồn Python để sinh ra HTML có kèm Javascript.
- `editor/index.html`: Sẽ có chức năng mới sau khi chạy script.

### 3. Rủi ro tiềm ẩn (Risks)
- Trình duyệt bật chế độ Ẩn danh (Incognito) có thể không lưu được localStorage -> Cần thêm cảnh báo nhỏ.

### 4. Auditor Review
- Đã kiểm soát: Đảm bảo nút Export hoạt động trên cả điện thoại và máy tính.
