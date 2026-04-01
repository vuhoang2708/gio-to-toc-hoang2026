# 📂 HƯỚNG DẪN CẤU TRÚC GITHUB (GITHUB STRUCTURE GUIDE)

Tài liệu này hướng dẫn cách quản lý và đồng bộ mã nguồn giữa hai Repository song song của dự án DH4HN.

---

## 🏛️ Danh sách các Remote

| Tên Remote | URL GitHub | Vai trò |
|---|---|---|
| **`origin` (Official)** | `https://github.com/culturecodefeedforward/DeliveringHappiness.git` | Trang web chính thức (LMS/Bản Sạch) |
| **`personal` (Demo)** | `https://github.com/vuhoang2708/culture_code_VN.DH.git` | Trang web trình diễn (Artifacts Demo) |

---

## 📝 Quy trình Cập nhật Mã nguồn (Workflow)

⚠️ **QUY TẮC VÀNG:** Tuyệt đối **không** được sử dụng lệnh push đồng thời lên cả hai remote nếu chưa kiểm tra nội dung `index.html`.

### 1. Phân tách Nội dung (Content Split)
*   **Bản Official:** `index.html` của bản này chỉ chứa mục "Thư viện kiến thức". Mọi dấu vết của "Studio Artifacts" phải được ẩn hoặc xóa.
*   **Bản Personal:** `index.html` của bản này PHẢI chứa đầy đủ danh mục "Studio Artifacts" (Audio, Visual, Quiz).

### 2. Các lệnh Git cơ bản

#### 🔹 Cập nhật logic chung (CSS, JS Tracking, Quiz logic)
Khi sửa các file này, bạn nên đẩy lên cả hai:
```bash
git push origin main
git push personal main
```

#### 🔹 Cập nhật nội dung Demo (Artifacts)
Chỉ thực hiện trên remote cá nhân:
```bash
git push personal main
```

#### 🔹 Cập nhật nội dung Chính thức (LMS)
Chỉ thực hiện trên remote chính thức:
```bash
git push origin main
```

---

## 🛡️ Kiểm soát an toàn (Reflog & Rollback)
Nếu lỡ push sai mảng nội dung giữa hai Repo:
1.  Dùng `git reflog` để tìm lại commit SHA trước khi push.
2.  Dùng `git push [remote] [SHA]:main --force` để ghi đè lại bản cũ.

---
*Cập nhật ngày 29/03/2026 sau khi khôi phục hệ thống.*
