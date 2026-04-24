# Implementation Plan - Xóa DH Logo Login
**Date**: 2026-04-24
**Task**: Gỡ bỏ logo cũ từ dự án DH trên trang đăng nhập (login.html) và dọn dẹp các đường dẫn rác liên quan.

## 1. Giải pháp kỹ thuật
1. **Gỡ bỏ UI Element**: Xóa thẻ `<img src="data/logo.jpg" ...>` tại file `login.html`.
2. **Clean-up CSS**: Xóa block css `.logo` tương ứng bên trong phần `<style>`.
3. **Delete Source Files**: Thực hiện việc xóa các file trực tiếp chứa logo cũ bao gồm `data/logo.jpg` và thư mục rác `assets/images/culcurecode_logo.jpeg`.

## 2. Các file bị ảnh hưởng
- **Modify**: `login.html`
- **Delete**: `data/logo.jpg`
- **Delete**: `assets/images/culcurecode_logo.jpeg` (thư viện sót)

## 3. Rủi ro tiềm ẩn & Giải pháp Mitigation
- **Rủi ro layout**: Khi gỡ logo, màn hình `.login-card` có thể bị hụt 1 đoạn không gian. Tuy nhiên vì thiết kế dùng `text-align: center` và các margin linh hoạt, Card sẽ tự động co lại một cách đẹp mắt.

## 4. Auditor Review / Self-Audit Check
- Việc xóa node `<img class="logo">` không phá luồng JS vì không có element tham chiếu tới ID này trong thẻ script.
- Đảm bảo tính clean của repo.
