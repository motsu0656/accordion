document.querySelectorAll('.accordion-item').forEach(item => {
  const button = item.querySelector('.accordion-toggle');
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // すべてのアコーディオンを閉じる
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-content').style.maxHeight = null;
      i.querySelector('.accordion-toggle').textContent = '+';
    });

    // アコーディオンを開く
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px'; // 開いたときの高さを設定
      button.textContent = '×';
    }
  });
});
