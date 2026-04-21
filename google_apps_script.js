/**
 * Google Apps Script for Đông Yên Clan Portal V3.0 - PROFESSIONAL EDITION
 * Feature: Batched CMS Updates, Styled Sheets, Real-time Email Summary
 */

const ADMIN_EMAILS = ["vuhoang2708@gmail.com", "hoangconghien@gmail.com"];
const SPREADSHEET_ID = "1Wa34sit-DkzrCq1U68JMlvMX1L11FES4VnFsO1Pxlts";

function doPost(e) {
  try {
    const contents = e.postData.contents;
    const data = JSON.parse(contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Determine update type
    if (data.type === 'GENEALOGY_UPDATE') {
      return handleGenealogy(ss, data);
    } else if (data.batch && data.batch.length > 0) {
      return handleBatchEditorUpdate(ss, data);
    } else if (data.type === 'EDITOR_UPDATE' || data.type === 'CMS_UPDATE') {
      // Legacy support for single update
      const singleBatch = { batch: [data] };
      return handleBatchEditorUpdate(ss, singleBatch);
    } else {
      return handleRegistration(ss, data);
    }
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle Batched Content Updates (Multiple sections at once)
 */
function handleBatchEditorUpdate(ss, data) {
  const SHEET_NAME = "Biên tập nội dung";
  const sheet = setupProfessionalSheet(ss, SHEET_NAME);
  
  const timestamp = new Date();
  data.batch.forEach(change => {
    sheet.appendRow([
      timestamp,
      change.section ? change.section.toUpperCase() : (change.sectionId ? change.sectionId.toUpperCase() : "UNKNOWN"),
      change.description || "Cập nhật từ Dashboard",
      change.old_content || change.oldContent || "...",
      change.new_content || change.newContent || change.content || "N/A",
      "CHỜ DUYỆT"
    ]);
  });
  
  // Basic styling for new rows (Vertical middle align)
  const lastRow = sheet.getLastRow();
  const numRows = data.batch.length;
  if (lastRow > 3) {
    sheet.getRange(lastRow - numRows + 1, 1, numRows, 6).setVerticalAlignment("middle").setWrap(true);
  }

  sendBatchNotification(data.batch);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success", count: data.batch.length }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup a professional looking sheet with headers and formatting
 */
function setupProfessionalSheet(ss, name) {
  let sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  
  // If empty, create professional structure
  if (sheet.getLastRow() === 0) {
    // Row 1: Main Title
    sheet.getRange("A1:F1").merge().setValue("HỆ THỐNG QUẢN TRỊ NỘI DUNG - TỘC HOÀNG ĐÔNG YÊN")
         .setBackground("#1e293b").setFontColor("white").setFontSize(14).setFontWeight("bold").setHorizontalAlignment("center");
    
    // Row 2: Info
    sheet.getRange("A2:F2").merge().setValue("Hướng dẫn: Admin kiểm tra cột 'Nội dung Mới' và cập nhật lên trang chủ. Đổi trạng thái sang 'ĐÃ DUYỆT' sau khi xong.")
         .setBackground("#f1f5f9").setFontStyle("italic").setFontSize(10);

    // Row 3: Headers
    const headers = ["THỜI GIAN", "MỤC (SECTION)", "MÔ TẢ", "NỘI DUNG CŨ", "NỘI DUNG MỚI", "TRẠNG THÁI"];
    sheet.getRange(3, 1, 1, 6).setValues([headers])
         .setBackground("#3b82f6").setFontColor("white").setFontWeight("bold");
    
    // Column widths
    sheet.setColumnWidth(1, 150); // Time
    sheet.setColumnWidth(2, 130); // Section
    sheet.setColumnWidth(3, 150); // Desc
    sheet.setColumnWidth(4, 350); // Old
    sheet.setColumnWidth(5, 350); // New
    sheet.setColumnWidth(6, 100); // Status
    
    sheet.setFrozenRows(3);
  }
  return sheet;
}

/**
 * Handle Genealogy Form Submissions
 */
function handleGenealogy(ss, data) {
  const SHEET_NAME = "Gia Phả";
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Người cung cấp", "Đời thứ", "Con thứ", "Ngày sinh", 
      "Quê quán", "Nơi cư trú", "Họ tên cha", "Họ tên ông nội", 
      "Số điện thoại", "Thông tin gia đình", "Thông tin người quá cố", "Source"
    ]);
    sheet.getRange(1, 1, 1, 13).setBackground("#dcfce7").setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  
  sheet.appendRow([
    new Date(),
    data.providerName || "",
    data.generation || "",
    data.childOrder || "",
    data.dob || "",
    data.hometown || "",
    data.residence || "",
    data.fatherName || "",
    data.gfName || "",
    data.phone || "",
    data.familyInfo || "",
    data.deceasedInfo || "",
    data.source || ""
  ]);
  
  sendEmail(`[CẬP NHẬT GIA PHẢ] Từ: ${data.providerName}`, `<h3>Thông tin bổ sung gia phả mới đã được ghi nhận.</h3><p>Vui lòng kiểm tra Google Sheet.</p>`);
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle Event Registrations
 */
function handleRegistration(ss, data) {
  const SHEET_NAME = "Registration";
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Họ tên", "Số điện thoại", "Email", "Số người dự", "Đi chung xe", "Session ID", "Source"]);
    sheet.getRange(1, 1, 1, 8).setBackground("#fee2e2").setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  
  sheet.appendRow([
    new Date(),
    data.fullName || "",
    data.phone || "",
    data.email || "",
    data.numAttendees || "1",
    data.shuttle_bus || "No",
    data.sessionId || "",
    data.source || ""
  ]);
  
  const subject = `[ĐĂNG KÝ MỚI] Lễ tế xuân Tộc Hoàng - ${data.fullName}`;
  const htmlBody = `<h3>Thông tin đăng ký mới:</h3><ul><li><b>Họ tên:</b> ${data.fullName}</li><li><b>Số điện thoại:</b> ${data.phone}</li><li><b>Số người dự:</b> ${data.numAttendees || "1"}</li></ul>`;
  sendEmail(subject, htmlBody);

  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send an aggregated notification for a batch of updates
 */
function sendBatchNotification(batch) {
  const subject = `[BIÊN TẬP] ${batch.length} nội dung Tộc Hoàng mới từ Admin Panel`;
  let rowsHtml = "";
  
  batch.forEach(c => {
    rowsHtml += `
      <tr>
        <td style="border:1px solid #ddd; padding:8px; font-weight:bold;">${c.section || c.sectionId}</td>
        <td style="border:1px solid #ddd; padding:8px; color:#666; font-size:12px;">${c.old_content || c.oldContent || "..."}</td>
        <td style="border:1px solid #ddd; padding:8px; color:#1e40af; background:#f0f7ff;">${c.new_content || c.newContent || c.content}</td>
      </tr>
    `;
  });

  const htmlBody = `
    <div style="font-family:sans-serif; max-width:600px; border:1px solid #eee; padding:20px;">
      <h2 style="color:#1e293b;">Thông báo cập nhật nội dung</h2>
      <p>Bác Vũ ơi, có <b>${batch.length}</b> mục nội dung vừa được Ban Biên Tập gửi lên hệ thống.</p>
      <table style="width:100%; border-collapse:collapse; margin:20px 0;">
        <thead>
          <tr style="background:#3b82f6; color:white;">
            <th style="padding:10px; border:1px solid #ddd;">Mục</th>
            <th style="padding:10px; border:1px solid #ddd;">Nội dung Cũ</th>
            <th style="padding:10px; border:1px solid #ddd;">Nội dung Mới</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
      <p><a href="https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit" style="display:inline-block; padding:10px 20px; background:#1e293b; color:white; text-decoration:none; border-radius:5px;">Xem toàn bộ trên Google Sheet</a></p>
      <hr style="border:0; border-top:1px solid #eee; margin:20px 0;" />
      <p style="font-size:12px; color:#888;">Đây là email tự động từ Hệ thống Quản trị Tộc Hoàng.</p>
    </div>
  `;
  
  sendEmail(subject, htmlBody);
}

/**
 * Universal email sender
 */
function sendEmail(subject, htmlBody) {
  ADMIN_EMAILS.forEach(email => {
    try {
      MailApp.sendEmail({
        to: email,
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (e) {
      Logger.log("Email error: " + e);
    }
  });
}
