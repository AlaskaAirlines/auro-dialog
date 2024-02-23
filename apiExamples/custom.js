export function initCustomExample() {
  const buttons = [document.querySelector('#openCustom'), document.querySelector('#closeCustom')];
  const dialog = document.querySelector('#defaultDialog');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
      } else {
        dialog.setAttribute('open', true);
      }
    });
  });
}
