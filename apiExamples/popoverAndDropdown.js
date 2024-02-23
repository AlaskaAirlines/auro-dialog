export function initPopoverAndDropdownExample() {
  const buttons = [document.querySelector('#openPopAndDrop'), document.querySelector('#closePopAndDrop')];
  const dialog = document.querySelector('#popover-dialog');

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
