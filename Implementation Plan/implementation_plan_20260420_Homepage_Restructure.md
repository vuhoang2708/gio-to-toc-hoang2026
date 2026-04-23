# KẾ HOẠCH TÁI CẤU TRÚC TRANG CHỦ (RESTRUCTURE)

Yêu cầu: Tối ưu lại thứ tự hiển thị và loại bỏ các phần nội dung bị thừa để trang chủ tinh gọn, tập trung vào hành động.

## User Review Required

> [!IMPORTANT]
> **Thứ tự mới:** Tôi sẽ sắp xếp lại các Section theo trình tự:
> 1. Hero (Đầu trang)
> 2. About (Cội nguồn)
> 3. Values (Giá trị)
> 4. **Genealogy Update (Cập nhật Gia Phả)** - *Được đưa lên cao để bà con dễ thấy.*
> 5. **Phả Hệ Preview** - *Chỉ hiển thị khung ảnh nghệ thuật, không có tiêu đề/văn bản thừa.*
> 6. Letter (Thư ngỏ)
> 7. Event (Lễ tế xuân)
>
> **Tinh gọn Section Phả Hệ:** Toàn bộ tiêu đề "Cây Phả Hệ Trực Tuyến" và đoạn mô tả dài dòng sẽ được gỡ bỏ. Chỉ giữ lại khối ảnh tương tác (Interactive Preview) để tạo điểm nhấn thị giác.

## Proposed Changes

### [Component: Layout Restructuring]

#### [MODIFY] [index.html](file:///C:/Users/vu.hoang/.gemini/antigravity/scratch/gio-to-toc-hoang2026/index.html)
- Di chuyển toàn bộ khối `<section id="genealogy">` từ sau Thư ngỏ lên trước Thư ngỏ.
- Trong khối `<section id="tree-map">`: Xóa bỏ phần `.section-header` và thẻ `<p>` mô tả.

## Open Questions
- Bạn có muốn đưa khung ảnh Preview Phả Hệ vào **bên trong** khối "Cập nhật Gia Phả" không? Hay để nó là một dải phân cách thẩm mỹ riêng biệt giữa các phần như hiện tại?

## Verification Plan

### Automated Tests
- Kiểm tra thứ tự các ID trên DOM đảm bảo đúng trình tự yêu cầu.

### Manual Verification
- Sử dụng Browser Tool kiểm tra luồng cuộn trang (Scrolling Flow) xem có mượt mà và logic không.
