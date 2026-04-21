# Implementation Plan - 20260421 - CMS Professionalization & Email Integration

User feedback indicated that the current Google Sheets integration is unprofessional ("chán", "không tiêu đề") and the email notification is missing or not working as expected. This plan addresses these issues by revamping the synchronization logic and the destination sheet's aesthetics.

## 1. Professionalize Google Sheets (Aesthetics & Structure)

Instead of a raw list of rows, we will transform the sheet into a **"Editorial Tracking Dashboard"**.

- **Row 1:** Main Header - "HỆ THỐNG QUẢN TRỊ NỘI DUNG - TỘC HOÀNG ĐÔNG YÊN" (Large font, merged, distinct background).
- **Row 2:** Information/Status - Showing total updates and Last Updated timestamp.
- **Row 3:** Column Headers - "Thời gian", "Mục (Section)", "Mô tả", "Nội dung Cũ", "Nội dung Mới", "Trạng thái Duyện".
- **Styling:** Alternate row colors, borders, frozen headers, and auto-resized columns.

## 2. Batch Update Logic (Admin Dashboard)

Currently, the dashboard sends a request for *every* edited box. We will change this to:
- Collect all `contenteditable` changes that are not empty.
- Package them into a single `JSON` array.
- Send a single `POST` request to the Google Script.

## 3. Revamped Google Apps Script (`google_apps_script.js`)

- New `handleBatchUpdate` function.
- Iterates through the received array and appends rows.
- Triggers a **single** aggregated email to `vuhoang2708@gmail.com` with a professional HTML table of all changes.

## 4. Content Updates

- Ensure the Facebook section and Google Maps location section are correctly labeled in the internal tracking.
- Update `index.html` with the specific Google Maps location name: "Nhà thờ Tộc Hoàng - Đông Yên, Duy Xuyên, Đà Nẵng, Việt Nam".

## 5. Auditor Review (Rule 3.1)

- **Technical Check:** Verify that `MailApp.sendEmail` is correctly configured and the Google Sheet ID is dynamically handled.
- **Visual Check:** Use the browser tool to confirm the dashboard's "Submit" action triggers the success toast.

## 6. Files Affected

- `admin/index.html`: Update JS logic to batch data.
- `google_apps_script.js`: Complete rewrite for better aesthetics and batching.
- `index.html`: Minor text polish for Google Maps.

---
**Status:** Awaiting Approval to execute.
