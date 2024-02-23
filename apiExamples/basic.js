export function initBasicExample() {
  const buttons = [document.querySelector('#openBasic'), document.querySelector('#closeBasic')];
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
