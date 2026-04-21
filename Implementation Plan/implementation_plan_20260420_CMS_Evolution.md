# 📈 Kế hoạch Phát triển Hệ thống Quản trị Nội dung (CMS) Tộc Hoàng V3.0
*File: implementation_plan_20260420_CMS_Evolution.md*

## Mục tiêu (Goal)
Từ một trang web tĩnh (Static Web), chúng ta sẽ từng bước xây dựng một Hệ thống Quản trị Nội dung (CMS) chuyên nghiệp, an toàn, và dễ sử dụng cho Ban Biên tập lớn tuổi, tiến tới số hóa toàn diện quy trình hoạt động của Tộc Hoàng.

---

## Lộ trình Phát triển (Phases of Evolution)

### Phase 1: Trạm Thu Nhập Thông Tin (Hiện tại - The Data Collector)
*Nền tảng: HTML/JS nội bộ + Google Sheets (Cloud Backend)*
*   **Trạng thái:** Đã hoàn thành.
*   **Chức năng:** Ban biên tập sử dụng trang `/editor` làm màn hình nháp. Dữ liệu chỉnh sửa sẽ được đẩy thẳng về Google Sheet của Admin (người quản trị chính - Hoàng Vũ).
*   **Quy trình xuất bản:** Thử công (Manual). Vũ nhận nội dung từ Sheet, tự tay copy vào file `index.html` của code và bấm push/deploy lên Vercel.
*   **Ưu điểm:** An toàn tuyệt đối, code không bị hỏng, kiểm soát 100% nội dung đăng tải.

### Phase 2: CMS Nội dung Động dựa trên Google Sheets (The Hybrid CMS)
*Nền tảng: Github Actions / Vercel + Google API*
*   **Mục tiêu:** Tự động hóa khâu đưa nội dung từ Sheet lên Giao diện Live.
*   **Chức năng:**
    *   Danh mục Tin tức (News/Events) sẽ không nằm cứng trong `index.html` nữa, mà Website sẽ tự động kết nối (Fetch) dữ liệu từ một bảng Google Sheet "Tin tức Public".
    *   Mỗi khi các bác Trưởng tộc gõ tin mới vào Sheet, 5 phút sau Website tự cập nhật.
*   **Quy trình xuất bản:** Tự động hóa 80% (Semi-Automated).
*   **Ứng dụng:** Thích hợp để làm danh sách sự kiện lễ Tết, danh sách ban khuyến học, tin tức nhanh.

### Phase 3: Headless CMS & Tích hợp Gia Phả (The Modern CMS)
*Nền tảng: Decap CMS (Netlify CMS) hoặc Sanity.io / Supabase*
*   **Mục tiêu:** Xây dựng một ứng dụng Quản trị (Admin Dashboard) chuyên nghiệp, có Mật khẩu bảo vệ với mức giá $0.
*   **Chức năng:**
    *   Ban biên tập đăng nhập vào bằng tài khoản (Hội đồng gia tộc).
    *   Hệ thống cho phép Tải ảnh nhà thờ, up tin tức, sửa văn bản như Word/Zalo.
    *   **Mô-đun Gia phả (Core):** Tại đây, nhập liệu thế hệ thứ N, tự động nối đồ thị cây phả hệ (DTree) lên trang chủ.
*   **Quy trình xuất bản:** Tự động 100% bằng CI/CD Trigger lên Github.

### Phase 4: Hub Trung Tâm Thông Tin (The Unified Clan Automation Hub)
*Nền tảng: Next.js + Tích hợp Công cụ Tự động hóa (Python/AI)*
*   **Mục tiêu:** Gom toàn bộ nền tảng mạng xã hội về Website.
*   **Chức năng:**
    *   Gắn các Script Tự động (Python) đã phát triển (V11-V14).
    *   Tự động Quét (Crawl) ảnh sự kiện trên Group Facebook/Zalo Tộc Hoàng và đưa về trang chủ.
    *   Trích xuất file PDF báo cáo tài chính/quỹ khuyến học của các hội chi nhánh, tổng hợp thành tài liệu thư viện.

---

## 🔍 Đề xuất Quyết định (Decision Required)

> [!TIP]
> Hiện tại Website mới ở giai đoạn truyền thông Tế Xuân 2026. Chúng ta **NÊN dừng lại và duy trì ở Phase 1** thêm một thời gian để Ban biên tập quen với việc duyệt chữ trên màn hình. Nếu hệ thống này chạy trơn tru, ta mới quyết định có nên tự động hóa mạnh tay hay không.

Mong nhận được ý kiến đánh giá từ bạn (Lead Architect) về định hướng này!
