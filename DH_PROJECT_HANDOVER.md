# 📦 TÀI LIỆU CHUYỂN GIAO DỰ ÁN VÀ HƯỚNG DẪN CÀI ĐẶT
(Project Handover & Setup Guide)

👉 **Mục đích:** Tài liệu này dành cho nhà phát triển mới muốn hiểu rõ quy trình dự án hiện tại, các cơ chế kỹ thuật đã áp dụng, định hướng mở rộng (Landing page, Portal cho môi giới...) và hướng dẫn thiết lập từ con số 0.

---

## PHẦN 1: TỔNG QUAN DỰ ÁN VÀ KIẾN TRÚC HIỆN TẠI

### 1. Ý tưởng cốt lõi
Dự án được xây dựng sơ khởi nhằm mục đích chia sẻ và phân phối các Artifacts (Tài liệu học tập) xoay quanh chương trình **Delivering Happiness Masterclass**.
Tuy nhiên, cấu trúc dự án cực kỳ tinh gọn, giúp bạn dễ dàng copy & paste (nhân bản) hệ thống này thành:
*   **Sales Landing Page** bán khóa học hoặc bất động sản/sản phẩm số.
*   **Customer Support Portal** (Cổng thông tin hỗ trợ KH cho nhân viên môi giới).
*   **Interest Survey Systems** (Khảo sát hành vi & độ sâu cuộn trang của KH).

### 2. Bộ ba Công cụ Kỹ thuật Lõi
1.  **Hệ thống Form & Tracking qua Google Apps Script (GAS)**
    *   **Mục đích:** Đã hoàn thiện hệ thống thu thập danh sách khách hàng chuyên nghiệp (Họ tên, Email, SĐT) thông qua file `register.html`, thay thế hoàn toàn cho Google Form bên ngoài.
    *   **Cơ chế:** Thay vì cần Backend tốn phí, thông tin submitted từ `register.html` được đẩy qua Webhook của Google Apps Script và lưu chính xác vào **CRM Google Sheets**. Điều này đảm bảo tính thẩm mỹ cao (Glassmorphism) và tốc độ tải trang tối ưu.
    *   **Tracking nâng cao:** Tích hợp sẵn `tracking.js` để đo lường tỷ lệ chuyển đổi từ các trang đích (Landing Pages) vào trang đăng ký.
2.  **Kiến trúc Đa kho lưu trữ (Multi-Repo & Two-File Strategy)**
    *   Dự án quản lý chung trong 1 thư mục code nhưng đẩy ra 2 Link web khác nhau.
    *   `index_OFFICIAL.html` là file Sạch (không quảng cáo/demo), được đẩy lên Repo của Công ty.
    *   `index.html` là file Chứa Demo (âm thanh, podcast, flashcard test), đẩy lên GitHub Personal repo để sales show cho khách hàng. Quy trình push có giải thích trong `technical_specification.md`.
3.  **Tích hợp AI Context (NotebookLM MCP)**
    *   AI của dự án có khả năng móc nối thẳng với tài liệu dạng PDF/Docs qua Model Context Protocol của NotebookLM Google.
    *   Qua đó, mọi form Quiz, câu hỏi Khảo sát hay Podcast (Studio Artifacts) đều có thể được tự động tạo và nhúng trực tiếp vào Web bởi trình hỗ trợ Antigravity.

---

## PHẦN 2: HƯỚNG DẪN CÀI ĐẶT MÔI TRƯỜNG TỪ A-Z (DÀNH CHO NGƯỜI MỚI)

Để chạy được hệ thống y hệt như hiện tại và có sự trợ lý của AI Antigravity, bạn cần thiết lập theo đúng thứ tự sau:

### Bước 1: Cài đặt Hệ thống lõi
1.  **Cài đặt Node.js:**
    *   Bạn cần Node.js để chạy các phần mềm công cụ trung gian (như server MCP).
    *   Vào trang [nodejs.org](https://nodejs.org/), tải bản **LTS** mới nhất (ví dụ: v20 hoặc v22) và cài đặt mặc định (Next -> Next -> Install).
2.  **Cài đặt Python:**
    *   *Lưu ý quan trọng đối với máy tính công ty:* Hãy mở **Microsoft Store** của Windows, tìm kiếm `Python` (ưu tiên bản 3.11 hoặc mới nhất) và nhấn "Get/Install".
    *   Điều này giúp cài Python vào User Space, tránh bị chặn bởi các quyền Administrator của khối IT công ty.

### Bước 2: Cập nhật & Cài đặt Antigravity
1.  **Cài đặt VS Code:** Đây là Editor để viết code chính thức. (Download: [code.visualstudio.com](https://code.visualstudio.com/))
2.  **Cài đặt Extension Antigravity (Phiên bản Ưu tiên: 19.6):**
    *   Mở Visual Studio Code.
    *   Vào tab Extensions (Ctrl+Shift+X), tải file file/extension cài đặt của Antigravity kéo thả vào (nếu có file nội bộ) hoặc cài từ Marketplace nếu có.
    *   *Tại sao lại là 19.6?* Đây là phiên bản được cấu hình độ ổn định (stability) cao nhất cho các flow Tracking và MCP hiện tại của team.
3.  **Cấu hình Antigravity Workspace:**
    *   Đảm bảo thư mục lưu trữ code được đặt tại phân vùng rõ ràng (VD: `G:\My Drive\antigravity\dh4hn-website`).
    *   Truy cập Settings của extension và điều chỉnh Model AI ưa thích (VD: Gemini 3.1 Pro).

### Bước 3: Cài đặt Máy chủ MCP (NotebookLM)
Hệ thống sử dụng MCP để tạo câu hỏi và podcast từ lượng dữ liệu thô.
1. Mở Terminal (Command Prompt / PowerShell / Bash) trong VS Code.
2. Cài MCP server chạy ngầm cho NotebookLM:
   ```bash
   npx -y notebooklm-mcp@latest
   ```
   (Lệnh trên sẽ tự động kéo bản mới nhất của service này về).
3. Sau đó, chạy lệnh `nlm login` trong terminal để tự động xác thực tài khoản Google của bạn bằng trình duyệt.
4. Cấu hình MCP trong Antigravity để Agent nhận diện được `notebooklm-mcp` tools.

### Bước 4: Kiểm thử Local (Chạy trang web nội bộ)
Web xây bằng HTML/CSS/JS thuần, nên bạn chỉ cần dựng server bằng Python rất nhẹ nhàng:
1. Mở Terminal trong VSCode trỏ tới thư mục gốc dự án.
2. Chạy lệnh:
   ```bash
   python -m http.server 8000
   ```
3. Mở trình duyệt truy cập: `http://localhost:8000/`. Mọi tính năng giao diện sẽ chạy bình thường.

---

## PHẦN 3: HƯỚNG DẪN MỞ RỘNG & PHÁT TRIỂN (NEXT STEPS)

Khi đã nắm hệ thống này, bạn có thể triển khai thành các sản phẩm khác:
1.  **Làm Landing Page Bán hàng (Sales / Real Estate)**
    *   Mô hình hiện tại đang có form "Đăng ký nhận tài liệu". Bạn chỉ việc mở Google Apps Script (GAS), đổi các cột Name, SĐT thành Tên Khách/Loại BDS... 
    *   Đổi lại giao diện CSS Hero banner trên file `index.html`. 
    *   Vào `tracking.js` để đo lường thêm nút CTA "GỌI NGAY".
2.  **Làm Portal Hỗ trợ KH cho Môi giới (CS Portal)**
    *   Xây dựng hệ thống Tabs mới chia theo Tòa/Căn hộ/Chính sách.
    *   Liên kết Antigravity với NotebookLM MCP như ở trên, đưa toàn bộ quy định hỗ trợ của CDT vào để AI sinh ra file Q&A, Flashcards cho môi giới học nhanh dự án.
3.  **Quản lý Phản hồi (Feedback)**
    *   Viết lại form trang `assessment.html` để tạo luồng xin phản hồi chất lượng CSKH, nối thẳng vào Dashboard Sheets để team leader kiểm tra realtime.


---

## PHẦN 4: DANH SÁCH LINK QUAN TRỌNG (QUICK LINKS)

*   **Website (Live):** [https://dh-crm-landing.vercel.app/](https://dh-crm-landing.vercel.app/)
*   **CRM Lead Sheet (Chính):** [DH4HN CRM Leads - Landing Page](https://docs.google.com/spreadsheets/d/1ZToRX6J5Vo6UgHzYEE_eUxU0bVnsGxBRLt-8tduI5CA/edit)
*   **Google Apps Script (Webhook):** (Truy cập qua tài khoản quản lý Sheet trên)

**(HẾT TÀI LIỆU CHUYỂN GIAO)**
