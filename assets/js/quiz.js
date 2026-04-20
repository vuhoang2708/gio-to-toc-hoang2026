// --- CONFIGURATION ---
// Quiz sử dụng chung logToSheet và SHEET_WEBAPP_URL từ tracking.js lo liệu.

const quizData = [
    {
        q: "Bạn có một định hướng cuộc đời (Mục tiêu/Đam mê) rất rõ ràng và hay nói về nó, nhưng lại không dành thời gian hay tiền bạc để rèn luyện. Trạng thái này gọi là gì?",
        options: [
            { text: "Kẻ mộng mơ, lười biếng.", isCorrect: false },
            { text: "Chỉ nói không làm (NATO).", isCorrect: true },
            { text: "Người thiếu kỷ luật bản thân.", isCorrect: false },
            { text: "Người có tư duy tích cực nhưng thiếu thực tế.", isCorrect: false }
        ],
        explanation: "Chỉ nói không làm (NATO - No Action Talk Only) – Trạng thái chỉ có Kim chỉ nam (Compass) mà thiếu Thời gian (Watch) và Nguồn lực (Dollar)."
    },
    {
        q: "Công thức thực tế nhất để tạo ra Giá trị (Value) không thể thay thế của một con người là gì?",
        options: [
            { text: "Thái độ + Kỹ năng + Kiến thức.", isCorrect: false },
            { text: "Giá trị = Kim chỉ nam + Thời gian + Nguồn lực.", isCorrect: true },
            { text: "Chỉ số thông minh + Chỉ số cảm xúc + May mắn.", isCorrect: false },
            { text: "Nỗ lực x Sự thông minh.", isCorrect: false }
        ],
        explanation: "Giá trị (Value) = Kim chỉ nam (Compass) + Thời gian (Watch) + Nguồn lực (Dollar). Định hướng đúng kết hợp với kỷ luật thời gian và tối ưu hóa nguồn lực."
    },
    {
        q: "Khi đối mặt với một cơn giận hoặc một quyết định bốc đồng sắp xảy ra, phương pháp 'sơ cứu tâm lý' ngay lập tức là gì?",
        options: [
            { text: "Cố gắng kiềm chế, uống nước, đi chỗ khác.", isCorrect: false },
            { text: "Tỉnh thức với công cụ SBA.", isCorrect: true },
            { text: "Hít sâu 3 lần và nhắm mắt lại.", isCorrect: false },
            { text: "Đếm từ 1 đến 10 để kiềm chế cơn giận.", isCorrect: false }
        ],
        explanation: "Tỉnh thức (Mindfulness) với công cụ SBA: Stop (Dừng lại) - Breathe (Hít thở) - Ask (Tự hỏi mình một câu hỏi chất lượng)."
    },
    {
        q: "Cảm giác thỏa mãn khi ăn một món ngon, lướt Tiktok hoặc chơi game giải trí thuộc nhóm hạnh phúc nào?",
        options: [
            { text: "Sở thích, niềm vui.", isCorrect: false },
            { text: "Cấp độ 1 - Thú vui.", isCorrect: true },
            { text: "Đam mê nhất thời.", isCorrect: false },
            { text: "Sự thư giãn đơn thuần.", isCorrect: false }
        ],
        explanation: "Cấp độ 1 - Thú vui (Pleasure). Những khoái cảm ngắn hạn cần nhận biết để không bị nghiện và nhầm lẫn với Hạnh phúc đích thực (Higher Purpose)."
    },
    {
        q: "Để một nhân sự thực sự hạnh phúc và cống hiến hết mình tại nơi làm việc, sếp cần cung cấp 3 đòn bẩy tâm lý nào?",
        options: [
            { text: "Lương cao, sếp tâm lý, đồng nghiệp vui vẻ.", isCorrect: false },
            { text: "Sự Tiến bộ, Quyền Tự chủ và Sự Kết nối.", isCorrect: true },
            { text: "Môi trường làm việc chuyên nghiệp + Chế độ đãi ngộ tốt.", isCorrect: false },
            { text: "Công việc ổn định + Cơ hội thăng tiến rõ ràng.", isCorrect: false }
        ],
        explanation: "Gồm có: Sense of Progress (Thấy mình tiến bộ), Control (Có quyền kiểm soát/Tự chủ) và Connectedness (Sự kết nối ý nghĩa)."
    },
    {
        q: "Để rèn luyện thói quen Lạc quan một cách có hệ thống chứ không phải kiểu tích cực độc hại, bạn dùng công cụ nào?",
        options: [
            { text: "Cứ cười lên thôi, nghĩ về những điều tốt đẹp.", isCorrect: false },
            { text: "Mô hình ABCDE.", isCorrect: true },
            { text: "Viết nhật ký biết ơn mỗi ngày.", isCorrect: false },
            { text: "Tự ám thị những điều tích cực.", isCorrect: false }
        ],
        explanation: "Mô hình ABCDE: Phân tích Sự kiện (Adversity), Niềm tin (Belief), Hệ quả (Consequence), Tranh luận (Disputation) và Thôi thúc (Energization) để tái định hình tư duy logic."
    },
    {
        q: "Trạng thái bạn làm việc say mê đến mức quên cả thời gian và không cảm thấy mệt mỏi, năng suất tăng gấp nhiều lần được gọi là gì?",
        options: [
            { text: "Đang vào phom, làm việc năng suất.", isCorrect: false },
            { text: "Trạng thái Dòng chảy (Flow).", isCorrect: true },
            { text: "Làm việc bằng cả niềm đam mê.", isCorrect: false },
            { text: "Sự tập trung tuyệt đối.", isCorrect: false }
        ],
        explanation: "Trạng thái Dòng chảy (Flow) hoặc rèn luyện qua các 'Dòng chảy nhỏ' (Microflow) hàng ngày."
    },
    {
        q: "Văn hóa nền tảng số 1 để một tập thể dám nói lên sự thật, dám sáng tạo và cống hiến là gì?",
        options: [
            { text: "Môi trường thân thiện, văn hóa gia đình.", isCorrect: false },
            { text: "Sự An toàn tâm lý.", isCorrect: true },
            { text: "Hệ thống quản trị minh bạch.", isCorrect: false },
            { text: "Sự tôn trọng và lắng nghe cấp dưới.", isCorrect: false }
        ],
        explanation: "An toàn tâm lý (Psychological Safety) – Đảm bảo nhân sự không sợ bị trừng phạt khi nêu ý kiến hay mắc sai lầm có tính toán."
    },
    {
        q: "Công cụ nào rẻ nhất nhưng hiệu quả nhất để xây dựng văn hóa Biết ơn trong một tổ chức?",
        options: [
            { text: "Thưởng tiền nóng, tặng quà.", isCorrect: false },
            { text: "Thẻ ghi nhận (WOW Cards).", isCorrect: true },
            { text: "Bình chọn nhân viên xuất sắc nhất tháng.", isCorrect: false },
            { text: "Tổ chức các buổi tiệc gắn kết đội ngũ.", isCorrect: false }
        ],
        explanation: "Thẻ ghi nhận (WOW Cards) – Những tấm thiệp/ghi nhận cụ thể, chân thành và kịp thời gửi đến đồng nghiệp."
    },
    {
        q: "Để phát triển năng lực của bản thân một cách bền vững theo thói quen Vị nhân, cách nhanh nhất là gì?",
        options: [
            { text: "Đi học thêm thật nhiều khóa học, đọc nhiều sách.", isCorrect: false },
            { text: "Người đồng hành / Người dẫn dắt.", isCorrect: true },
            { text: "Tự mày mò nghiên cứu và trải nghiệm thực tế.", isCorrect: false },
            { text: "Thay đổi môi trường làm việc để học hỏi thêm.", isCorrect: false }
        ],
        explanation: "Tìm kiếm Người đồng hành (Buddy) hoặc Người dẫn dắt (Mentor) để cùng chia sẻ, giúp đỡ hoặc được dẫn dắt."
    }
];

let currentStep = 0;
let score = 0;
let answered = false;

// --- TRACKING (Dùng chung bộ sessionId từ tracking.js) ---
if (typeof logToSheet === 'undefined') {
    window.logToSheet = () => { console.log('Hệ thống tracking chưa được tải'); };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    logToSheet('START_QUIZ', 'User entered assessment page');
    renderQuestion();
}

function renderQuestion() {
    const data = quizData[currentStep];
    const container = document.getElementById('quizContent');
    const progressBar = document.getElementById('quizProgressBar');

    progressBar.style.width = `${((currentStep) / quizData.length) * 100}%`;

    // Sort options to randomly place correct answer
    const currentOptions = [...data.options];
    shuffleArray(currentOptions);
    data.shuffledOptions = currentOptions;

    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
        <div class="quiz-question-tag">Câu hỏi ${currentStep + 1}/${quizData.length}</div>
        <div class="quiz-question-text">${data.q}</div>
        <div class="quiz-options">
            ${currentOptions.map((opt, idx) => `
                <div class="quiz-option" onclick="handleAnswer(${idx}, ${opt.isCorrect})">
                    <span style="font-weight:800; color:var(--warm-yellow); margin-right:12px; font-size:1.1rem">${labels[idx]}.</span>
                    ${opt.text}
                </div>
            `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback">
            <h4>Đáp án đúng:</h4>
            <p>${data.explanation}</p>
        </div>
        <button class="btn-quiz-next" id="quizNextBtn" onclick="nextQuestion()">Tiếp theo</button>
    `;
    answered = false;
}

function handleAnswer(index, isCorrect) {
    if (answered) return;
    answered = true;

    const options = document.querySelectorAll('.quiz-option');
    options[index].classList.add(isCorrect ? 'correct' : 'wrong');

    // Logging chi tiết từng câu
    logToSheet('ANSWER_QUESTION', quizData[currentStep].q, {
        questionNum: currentStep + 1,
        result: isCorrect ? 'Đúng' : 'Sai'
    });

    // Find and highlight correct option if user was wrong
    if (!isCorrect) {
        options.forEach((opt, idx) => {
            if (quizData[currentStep].shuffledOptions[idx].isCorrect) {
                opt.classList.add('correct');
            }
        });
    } else {
        score++;
    }

    document.getElementById('quizFeedback').style.display = 'block';
    document.getElementById('quizNextBtn').style.display = 'block';
}

function nextQuestion() {
    currentStep++;
    if (currentStep < quizData.length) {
        renderQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    document.getElementById('quizProgressBar').style.width = '100%';
    const container = document.getElementById('quizContent');
    const summary = document.getElementById('quizSummary');

    if (container) container.style.display = 'none';
    if (summary) summary.style.display = 'block';

    const finalScoreEl = document.getElementById('finalScore');
    const scoreStr = `${score}/${quizData.length}`;
    if (finalScoreEl) finalScoreEl.innerText = scoreStr;

    // Logging tổng hợp khi xong bài
    logToSheet('FINISH_QUIZ', 'User reached summary screen', { score: scoreStr });

    // Track buttons at footer of summary
    document.querySelectorAll('.summary-actions a').forEach(btn => {
        btn.addEventListener('click', () => {
            logToSheet('CTA_CLICK', btn.innerText.trim());
        });
    });
}

function finishQuiz() {
    // Navigate back to home or just hide
    document.getElementById('quizOverlay').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
