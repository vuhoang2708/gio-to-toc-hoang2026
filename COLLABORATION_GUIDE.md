# 🤝 HƯỚNG DẪN CỘNG TÁC & TÙY CHỈNH DỰ ÁN (COLLABORATION GUIDE)

Tài liệu này được soạn thảo để giúp bạn (người cộng tác) có thể thiết lập môi trường làm việc nhanh nhất và hiểu rõ cấu trúc dự án để tùy chỉnh theo nhu cầu riêng.

---

## 🛠️ Bước 1: Thiết lập Môi trường (Setup Environment)

Để AI Assistant (Antigravity) hoạt động tối ưu, bạn cần cài đặt các thành phần sau:

### 1. Cài đặt Node.js & Python
*   **Node.js (LTS):** Dùng để chạy các script tự động hóa và các công cụ MCP. Tải tại [nodejs.org](https://nodejs.org/).
*   **Python (Bản Microsoft Store):** Dùng để chạy server local nhanh. Cài từ Microsoft Store để tránh xung đột quyền hệ thống (IT Policy). 
    *   *Lệnh chạy server local:* `python -m http.server 8000`

### 2. Cài đặt Git & GitHub
*   Cài đặt Git tại [git-scm.com](https://git-scm.com/).
*   **Clone dự án:**
    ```bash
    git clone https://github.com/vuhoang2708/culture_code_VN.DH.git
    ```

### 3. Cài đặt Antigravity (AI Assistant)
*   Antigravity là IDE chuyên dụng cho lập trình agentic. Sau khi cài đặt, hãy mở thư mục dự án vừa clone.

### 4. Thiết lập NotebookLM MCP (Đặc thù DH Project)
Dự án DH sử dụng NotebookLM để tạo ra các "Artifacts" (Audio/Quiz/Infographic). Để AI có thể tạo nội dung này cho bạn:
1.  Mở Terminal trong Antigravity.
2.  Chạy lệnh: `nlm login`.
3.  Làm theo hướng dẫn để đăng nhập tài khoản Google của bạn.

---

## 📂 Bước 2: Hiểu Cấu trúc Dự án (Project Structure)

Dự án này sử dụng chiến lược **"Hai Tệp - Hai Kho"** để phân tách bản Demo và bản Sạch:

*   **`index.html` (Bản Demo/Gốc):** Chứa đầy đủ các "Studio Artifacts". Đây là file bạn sẽ dùng để trình diễn tính năng AI.
*   **`index_OFFICIAL.html` (Bản Sạch/Công ty):** Đã loại bỏ Artifacts, chỉ giữ lại phần Giới thiệu và Đăng nhập LMS. Dùng để public chính thức.
*   **`js/tracking.js`:** Hệ thống theo dõi hành vi người dùng (scroll depth, click).
*   **`assessment.html` & `js/quiz.js`:** Hệ thống bài kiểm tra/đánh giá kiến thức kết nối trực tiếp với Google Sheets.
*   **`technical_specification.md`**: "Trí nhớ" của dự án, lưu trữ mọi quyết định kỹ thuật đã triển khai.

---

## 🎨 Bước 3: Gợi ý Tùy chỉnh (Customization Strategies)

Nếu bạn muốn biến trang này thành một mục đích khác, đây là các hướng đi gợi ý:

### 🏠 1. Trung tâm Đào tạo (Training Center)
*   **Hero Section:** Đổi tiêu đề thành "Khám phá Lộ trình Học tập của Bạn".
*   **Quiz Tool:** Dùng `assessment.html` làm bài test đầu vào (Placement Test). Kết quả sẽ tự động gửi về Google Sheets giúp tư vấn viên liên hệ ngay.
*   **Artifacts:** Thay Audio Series bằng các "Video học thử" hoặc "Lộ trình học tập (Infographic)".

### 🛍️ 2. Trang Bán hàng (Landing Page Sales)
*   **Hero Section:** Tập trung vào giải quyết nỗi đau của khách hàng + Nút mua hàng (Buy Now).
*   **Quản lý Khách hàng:** Sử dụng Form quan tâm hiện nay để thu thập Lead (Thông tin khách hàng tiềm năng).
*   **Artifacts:** Tạo "Review sản phẩm" (Audio) hoặc "Bảng so sánh tính năng" (Infographic) từ NotebookLM để tăng độ tin cậy.

### 📈 3. Môi giới Chứng khoán (Stock Brokerage)
*   **Nội dung chính:** Thay thế các phần giới thiệu bằng "Nhận định thị trường hàng ngày".
*   **Artifacts (Cực kỳ hiệu quả):** 
    *   Dùng AI tóm tắt các báo cáo tài chính dài hàng trăm trang thành **Audio Podcast 5 phút** để khách hàng nghe khi di chuyển.
    *   Tạo **Infographic Lộ trình đầu tư** dựa trên khẩu vị rủi ro.
*   **CTA:** Đổi nút "Quan tâm" thành "Mở tài khoản VIP/Nhận tư vấn 1-1".

---

## 🚀 Bước 4: Quy trình Làm việc (Workflow)

Khi bạn muốn thay đổi điều gì đó:
1.  **Nhờ Antigravity thiết kế:** "Hãy giúp tao thiết kế lại mục Hero theo phong cách chuyên nghiệp hơn cho mảng trung tâm ngoại ngữ".
2.  **Kiểm tra Local:** Chạy `python -m http.server` để xem trước tại `localhost:8000`.
3.  **Cập nhật Tài liệu:** Luôn yêu cầu AI cập nhật `technical_specification.md` sau mỗi thay đổi lớn để người khác vào sau có thể hiểu kịp.

---
*📍 Chúc bạn tạo ra những trang Landing Page tuyệt vời!*
