# IMPLEMENTATION PLAN - CHARACTER EXTRACTION FROM MEET RECORDING
**Date:** 2026-04-20
**Task:** Extract character details from Google Meet recording `sxq-cgot-phb`.

## 1. TECHNICAL SOLUTION (GIẢI PHÁP KỸ THUẬT)
*   **Step 1: File Identification.** Xác định định dạng thực sự của file 750MB tại `G:\My Drive\APP COPY - sxq-cgot-phb (2026-04-17 17 16 GMT+7) (3)`. Dự kiến là MP4.
*   **Step 2: Audio Extraction & Compression.** Vì file > 200MB (~750MB), không thể upload trực tiếp lên NotebookLM. Tôi sẽ sử dụng `yt-dlp` (từ skill `tai-video`) hoặc script Python để trích xuất âm thanh chất lượng 64kbps (để tối ưu hóa dung lượng < 200MB). Trình tự: `Video -> MP3`.
*   **Step 3: NotebookLM Integration.** 
    *   Tạo Notebook mới: "Genealogy Research - sxq-cgot-phb".
    *   Upload file MP3 đã nén.
*   **Step 4: AI Analysis.** Sử dụng `notebook_query` để trích xuất:
    *   Danh sách các nhân vật (nhân vật lịch sử, cụ tổ, người trong gia phả) được nhắc tới.
    *   Thông tin chi tiết của từng người (đời thứ mấy, chức vụ, sự nghiệp, quan hệ gia đình).
*   **Step 5: Report.** Trình bày kết quả dưới dạng bảng hoặc JSON để chuẩn bị cho việc nạp vào database Gia phả.

## 2. AFFECTED FILES (CÁC FILE ẢNH HƯỞNG)
*   **New Scratch File:** `C:\Users\vu.hoang\.gemini\antigravity\scratch\sxq_audio_extract.mp3` (Tạm thời).
*   **Artifact:** `extraction_results.md` (Kết quả trích xuất).

## 3. POTENTIAL RISKS (RỦI RO TIỀM ẨN)
*   **File Format Error:** Nếu file không phải MP4/Video, cần tìm cách xử lý khác.
*   **Audio Quality:** Nếu nén quá mạnh, NotebookLM có thể nhận diện sai thuật ngữ chuyên môn.
*   **Permissions:** Cần đảm bảo quyền đọc file trên ổ `G:`.

## 4. AUDITOR REVIEW (DÀNH CHO CODEX)
*   [ ] Xác nhận đường dẫn file nguồn chính xác: `G:\My Drive\APP COPY - sxq-cgot-phb (2026-04-17 17 16 GMT+7) (3)`.
*   [ ] Kiểm tra khả năng chạy `yt-dlp` trên local.

---
**Hành động tiếp theo:** Chờ User phê duyệt (Approve) để tiến hành extract audio.
