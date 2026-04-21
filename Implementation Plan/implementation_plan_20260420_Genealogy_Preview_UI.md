# KẾ HOẠCH NÂNG CẤP GIAO DIỆN PHẢ ĐỒ TRÊN TRANG CHỦ

Yêu cầu: Bổ sung hình ảnh xem trước (thumbnail) của Phả hệ ngay tại trang chủ để thu hút sự chú ý, thay vì chỉ có nút bấm văn bản thuần túy.

## User Review Required

> [!IMPORTANT]
> **Thiết kế hình ảnh:** Tôi sẽ sử dụng chính file `assets/images/tree-map.png` (bản đồ gốc) làm ảnh nền cho một khung Preview. Tuy nhiên, vì file gốc rất lớn (11MB), tôi sẽ sử dụng thuộc tính CSS `background-size: cover` và `loading="lazy"` để đảm bảo trang chủ không bị load chậm.
> 
> **Hiệu ứng Premium:** Khung hình sẽ có viền vàng (Clan Gold), bóng đổ sâu, và hiệu ứng phóng nhẹ (zoom) khi di chuột vào để kích thích hành vi "Click" của người dùng.

## Proposed Changes

### [Component: Homepage Index]

#### [MODIFY] [index.html](file:///C:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/index.html)
- Khôi phục Section `#tree-map` bị thiếu.
- Cấu trúc lại nội dung bên trong: Chia làm 2 phần (Lời dẫn và Khung hình Preview).
- Thêm mã CSS inline (hoặc cập nhật `style-v2.css`) để tạo hiệu ứng cho khung hình.

### [Component: Styles]

#### [MODIFY] [style-v2.css](file:///C:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/assets/css/style-v2.css)
- Bổ sung class `.tree-map-preview` để quản lý giao diện khung hình xem trước.

---

## Open Questions
- Bạn có muốn thêm một dòng chữ nhỏ "Bấm để phóng to" đè lên bức ảnh không? 

## Verification Plan

### Automated Tests
- Kiểm tra link liên kết `href="map/"` đảm bảo hoạt động.
- Kiểm tra thuộc tính `object-fit` hoặc `background-size` để ảnh không bị méo.

### Manual Verification
- Sử dụng Browser Tool chụp ảnh trang chủ để xác nhận khung hình hiển thị "Wow" và Premium.
- Thử nghiệm hiệu ứng Hover trên trình duyệt.
