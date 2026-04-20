const topics = [
  {
    num: 1,
    name: "Khoa học hạnh phúc",
    en: "Science of Happiness",
    desc: "Nền tảng của khóa học dựa trên các nghiên cứu về tâm lý học tích cực và các yếu tố tạo nên hạnh phúc thực sự và bền vững trong công việc cũng như cuộc sống."
  },
  {
    num: 2,
    name: "3 cấp độ hạnh phúc",
    en: "3 Levels of Happiness",
    desc: "Khám phá 3 tầng nấc cảm xúc: Pleasure (Thú vui) -> Passion (Đam mê) -> Higher Purpose (Mục đích cao cả). Hạnh phúc bền vững tỷ lệ thuận với cấp độ sâu sắc của mục đích sống."
  },
  {
    num: 3,
    name: "3 đòn bẩy hạnh phúc",
    en: "3 Levers of Happiness",
    desc: "Khám phá Thuyết Tự quyết với 3 đòn bẩy: Cảm giác Tiến bộ (Progress), Cảm giác Tự chủ (Control) và Cảm giác Kết nối (Connection)."
  },
  {
    num: 4,
    name: "Giá trị cốt lõi",
    en: "Core Values",
    desc: "Sự đồng bộ giữa giá trị bản thân, những gì chúng ta thực sự hành động (thay vì chỉ tuyên ngôn) và cách phân bổ tài nguyên Thời gian, Tiền bạc theo chiếc La bàn cuộc đời."
  },
  {
    num: 5,
    name: "Thói quen hạnh phúc",
    en: "Happiness Habits",
    desc: "Bộ 5 thói quen cụ thể giúp kích hoạt 3 đòn bẩy hạnh phúc: Biết ơn, Lạc quan, Vị nhân, Tỉnh thức và Phiêu."
  }
];

// Render topics
const list = document.getElementById('topicsList');
topics.forEach(t => {
  const item = document.createElement('div');
  item.className = 'topic-item';
  item.innerHTML = `
    <div class="topic-header">
      <div class="topic-num">${t.num}</div>
      <div style="flex:1">
        <div class="topic-name">${t.name}</div>
        <div class="topic-en">${t.en}</div>
      </div>
      <div class="topic-chevron">▾</div>
    </div>
    <div class="topic-body">${t.desc}</div>
  `;
  item.querySelector('.topic-header').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.topic-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
  list.appendChild(item);
});
