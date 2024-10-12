document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
      button.textContent = '+';
    } else {

      document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.display = 'none';
      });
      document.querySelectorAll('.accordion-toggle').forEach(toggleButton => {
        toggleButton.textContent = '+';
      });

      accordionContent.style.display = 'block';
      button.textContent = '×';
    }
  });
});
