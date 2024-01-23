function toggleDialog(elem) {
  let dialog = document.querySelector(elem);

  dialog.hasAttribute('open')
  ? dialog.removeAttribute("open")
  : (dialog.removeAttribute("open"),
    dialog.setAttribute("open", true));
}
