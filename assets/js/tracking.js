// tracking.js - Hệ thống Analytics hợp nhất cho Dự án DH4HN
const SHEET_WEBAPP_URL = window.CUSTOM_WEBAPP_URL || "https://script.google.com/macros/s/AKfycbw3nzeW2UU6RqArz6DSONtuyApU77jYz5TlW7AoQgYqH0uMNbh4oySWco61PCQNWpqK/exec";
const sessionId = 'dh-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);

window.sessionId = sessionId; // Export cho quiz.js dùng chung

async function logToSheet(event, detail, extra = {}) {
    const targetUrl = window.CUSTOM_WEBAPP_URL || SHEET_WEBAPP_URL;
    if (!targetUrl) return;
    try {
        await fetch(targetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId: sessionId,
                event: event,
                detail: detail,
                url: window.location.href,
                ...extra
            })
        });
    } catch (e) { console.error('Tracking error', e); }
}

window.logToSheet = logToSheet; // Export ra global

// 1. Theo dõi lượt xem trang và cuộn trang
document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    logToSheet('PAGE_VIEW', `Truy cập trang: ${pageName}`);

    // Theo dõi cuộn trang chủ
    if (pageName === 'index.html' || pageName === '') {
        const registerBtn = document.querySelector('a[href*="docs.google.com/forms"]');
        if (registerBtn) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        logToSheet('SCROLL_REACH', 'Người dùng đã cuộn tới khu vực Đăng ký');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(registerBtn);

            registerBtn.addEventListener('click', () => {
                logToSheet('CTA_CLICK', 'Nhấn nút Đăng ký (Landing Page)');
            });
        }
    }
});
