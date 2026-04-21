# KẾ HOẠCH SỬA LỖI & TÁI CẤU TRÚC GIA DIỆN GIA PHẢ

Tôi chân thành xin lỗi vì sự hiểu nhầm trong lượt thực hiện trước. Tôi sẽ hiệu chỉnh lại chính xác theo trình tự và nội dung bạn đã chỉ định.

## User Review Required

> [!IMPORTANT]
> **Trình tự Luồng Thông Tin:** Tôi sẽ gom nhóm các phần liên quan đến cập nhật vào một mạch chảy duy nhất:
> 1. Tiêu đề chính: **Cập Nhật Thông Tin Gia Phả**
> 2. Nội dung **Thư Ngỏ** (Văn bản lịch sử/lời kêu gọi).
> 3. Khối **NỘI DUNG CUNG CẤP THÔNG TIN** (Đã gỡ bỏ đoạn "Từ đời thứ 10").
> 4. Nút bấm hành động: **Bổ sung thông tin gia phả ngay**.
>
> **Hiệu chỉnh Phả Hệ:** Khôi phục tiêu đề "Cây Phả Hệ Trực Tuyến" cho phần hình ảnh Preview.

## Proposed Changes

### [Component: Homepage Restructure]

#### [MODIFY] [index.html](file:///C:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/index.html)
- **Section #tree-map:** Thêm lại `<h2>Cây Phả Hệ Trực Tuyến</h2>` và phần `.section-header`.
- **Luồng Cập Nhật:** 
    - Đưa tiêu đề "Cập Nhật Thông Tin Gia Phả" lên đầu.
    - Di chuyển nội dung `<div class="letter-parchment">` vào bên dưới tiêu đề này.
    - Di chuyển khối thông tin cung cấp (clan-card) vào sau Thư ngỏ.
    - Đặt nút bấm ở cuối cùng của luồng này.
- **Thống nhất thuật ngữ:** Tìm và thay thế tất cả "Phả đồ" thành "Phả Hệ".

### [Component: Map Viewer]

#### [MODIFY] [map/index.html](file:///C:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/map/index.html)
- Thay thế tiêu đề và các nhãn từ "Phả đồ" thành "Phả Hệ".

---

## Open Questions
- Bạn có muốn giữ màu nền vàng nhạt (`rgba(245, 158, 11, 0.03)`) cho toàn bộ luồng Cập nhật này để phân biệt với các phần khác không?

## Verification Plan

### Automated Tests
- Kiểm tra sự tồn tại của chuỗi "Phả Hệ" và sự biến mất của "Phả đồ".
- Xác nhận văn bản "Từ đời thứ 10" đã bị xóa.

### Manual Verification
- Sử dụng Browser Tool kiểm tra luồng đọc từ trên xuống dưới có đúng thứ tự: Tiêu đề -> Thư Ngỏ -> Nội dung cung cấp -> Nút bấm.
