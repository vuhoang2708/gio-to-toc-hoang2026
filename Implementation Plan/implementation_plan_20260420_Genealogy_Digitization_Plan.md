# KẾ HOẠCH SỐ HÓA VÀ ĐƯA GIA PHẢ LÊN WEBSITE (MODULE 1)

Dựa trên việc kiểm tra thư mục `G:\My Drive\download\Hoang Toc-cay pha he -190322-Final\Hoang Toc-cay pha he -190322-Final`, hiện trạng dữ liệu của chúng ta là các file **thiết kế đồ họa vector** (Adobe Illustrator `.ai`, `.pdf`, và file ảnh `.png` chất lượng cao kích thước khổ A0 84x118cm). 

Dữ liệu hình ảnh này **chưa có cấu trúc dạng Database (JSON/SQL)**. Do đó, để đưa lên Website một cách "khả thi" và "chuyên nghiệp", chúng ta phải đối mặt với bài toán lớn: Làm sao để hiển thị một bản đồ khổng lồ lên màn hình web (đặc biệt là Mobile) mượt mà và dễ tìm kiếm?

Dưới đây là 3 Giải pháp khả thi kèm lộ trình đề xuất (từ dễ đến khó).

---

## Giải pháp 1: "Google Maps" cho Gia phả (Deep Zoom Image Viewer)
Sử dụng file `.png` (11MB) hiện có, chia nhỏ thành các mảnh (tiles) và dùng thư viện hiển thị bản đồ (như `OpenSeadragon` hoặc `Leaflet`) để cho phép người dùng kéo thả, phóng to/thu nhỏ (pan & zoom) hệt như xem bản đồ Google Maps.

*   **Ưu điểm:**
    *   **Cực nhanh:** Code chưa tới 1 tiếng là xong bản live.
    *   **Thẩm mỹ:** Giữ nguyên 100% thiết kế tuyệt đẹp gốc trên file Illustrator.
    *   **Siêu mượt:** Nhờ công nghệ chia tile, điện thoại yếu vẫn zoom mượt không bị lag/treo máy bởi file ảnh 11MB.
*   **Nhược điểm:**
    *   Nội dung là "ảnh chết": Không thể dùng ô tìm kiếm (Search) "Tên một người" để tự nhảy đến vị trí đó.
    *   Khó cập nhật: Khi có người mới, người quản lý phải mở phần mềm Illustrator, thêm người, xuất lại file ảnh và upload lại.

## Giải pháp 2: Bản đồ Vector (Interactive SVG)
Xuất định dạng từ AI thành `.svg` (Vector siêu nhẹ). Nhúng thẳng SVG vào HTML, sau đó dùng Javascript để tạo tương tác (nhấn vào tên sẽ hiện lên khung pop-up nổi bật (tooltip) hiển thị thông tin cha mẹ, con cái).

*   **Ưu điểm:**
    *   Văn bản (Text) trên sơ đồ có thể bôi đen copy được, có thể dùng `Ctrl + F` của trình duyệt để tìm kiếm.
    *   Dung lượng nhẹ, sắc nét tuyệt đối dù zoom ở mức nào.
*   **Nhược điểm:**
    *   File SVG xuất từ cấu trúc thiết kế phức tạp có thể gặp hiện tượng xô lệch, vỡ font hoặc giật lag cấu trúc DOM trên điện thoại (vì chứa hàng chục ngàn dòng code).
    *   Vẫn gặp khó khăn khi muốn Cập nhật/Thêm người mới bằng giao diện quản lý.

## Giải pháp 3: Số hóa Dữ liệu gốc & Ứng dụng Web Động (Database-Driven Tree)
Thực hiện quá trình "Data entry": Đọc dữ liệu từ bản vẽ và thiết kế lập trình lại thành cấu trúc dữ liệu JSON (Bao gồm Tên, Đời thứ mấy, Cha, Con, Ảnh đại diện...). Sau đó sử dụng thư viện vẽ Gia phả chuyên dụng cho web (như `BalkanGraph FamilyTreeJS` hoặc `d3-hierarchy`) để tự động vẽ lại Cây Gia phả trên trình duyệt.

*   **Ưu điểm:**
    *   **Chuẩn kỹ thuật phần mềm:** Là một hệ thống thật sự. Có bộ máy tìm kiếm (Search Box). Nhấn vào ai sẽ hiện ra Info Card, Lịch sử, Ảnh đại diện.
    *   **Dễ cập nhật:** Sau này form Đăng ký Cập nhật Gia phả (mà ta vừa sửa) đổ về, Admin chỉ cần nhập form là tên người đó tự mọc trên nhánh cây, không cần đụng đến Adobe Illustrator.
*   **Nhược điểm:**
    *   **Chất xám cực cao:** Phải tốn rất nhiều thời gian/nhân lực để cào và nhập liệu (typing) lại danh sách hàng trăm người từ file ảnh sang JSON. Giao diện sẽ đi theo format của thư viện javascript chứ không giữ 100% thiết kế hoa lá cành nguyên gốc.

---

## 🎯 ĐỀ XUẤT LỘ TRÌNH KÉP CỦA ANTIGRAVITY

Theo tôi, làm ngay Giải pháp 3 sẽ gây nản vì thời gian làm Data Entry rất lâu. Do đó, tôi đề xuất **Lộ trình Kép**:

### Giai đoạn 1 (Ra mắt ngay tuần này) - Triển khai Giải pháp 1 (Deep Zoom)
*   Tôi sẽ dùng file ảnh `.png` sẵn có.
*   Thiết lập một thư mục tên `/genealogy-map/` trên Web.
*   Xây dựng module **"Trình xem Gia phả tương tác"** với tính năng Touch/Drag/Zoom mượt mà. 
*   **Mục tiêu:** Bà con có ngay công cụ để ngắm nghía, xem lại Phả hệ hiện tại thật đã mắt trên mọi thiết bị.

### Giai đoạn 2 (Dài hạn) - Chuyển dịch sang Giải pháp 3
*   Sau khi form "Cập nhật Gia phả" (ở trang `/genealogy/`) thu về nhiều dữ liệu mới. Chúng ta sẽ có một Database lớn trên Google Sheet.
*   Lúc đó, ta sẽ khởi động Module 3.0: Biến dữ liệu Google Sheet đó thành Hệ thống cây phả đồ Động (Dynamic Tree) tự động vẽ.

---

## Hhành động yêu cầu
Bạn xem kỹ 3 giải pháp và Lộ trình tôi đề xuất nhé. 

> [!IMPORTANT]
> **Nếu bạn ĐỒNG Ý với lộ trình kép (Triển khai Giải pháp 1 trước):** 
> 
> Vui lòng xác nhận, tôi sẽ tiến hành ngay việc cấu hình thư viện và tích hợp module "Zoom Gia Phả" lên nhánh code Local!
