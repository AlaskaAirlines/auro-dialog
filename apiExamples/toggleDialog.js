export function toggleDialog(dialogID) {
  const dialog = document.querySelector(dialogID);

  if (dialog.hasAttribute('open')) {
    dialog.removeAttribute('open');
  } else {
    dialog.setAttribute('open', true);
  }
}
