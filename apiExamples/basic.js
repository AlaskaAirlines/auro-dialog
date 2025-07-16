export function initBasicExample() {
  const buttons = [document.querySelectorAll('#openBasic, #closeBasic')];
  const dialog = document.querySelector('#defaultDialog');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Button clicked:', button.id);
      console.log('Dialog open state before toggle:', dialog.hasAttribute('open'));
      if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
      } else {
        dialog.setAttribute('open', true);
      }
      console.log('Dialog open state after toggle:', dialog.hasAttribute('open'));
    });
  });
}
