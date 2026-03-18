/* =====================================================
   K-pop 音樂站 - script.js
   共用功能：Dark Mode（首頁 & 偶像介紹頁面使用）
   songs.html 的邏輯直接內嵌在該頁面的 <script> 中
   ===================================================== */

/* ── Dark Mode ── */
(function initDark() {
  const saved = localStorage.getItem('kpop_dark');
  if (saved === 'true') {
    document.body.classList.add('dark');
    const btn = document.getElementById('darkToggle');
    if (btn) btn.textContent = '☀️ Light';
  }
})();

const darkBtn = document.getElementById('darkToggle');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('kpop_dark', isDark);
    darkBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  });
}
