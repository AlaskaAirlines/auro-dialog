export function initEditCloseButtonExample() {
  const button = document.querySelector("#openEditDialog");
  const dialog = document.querySelector("#unformattedCustomMdDialog");

  button.addEventListener("click", () => {
    if (dialog.hasAttribute("open")) {
      dialog.removeAttribute("open");
    } else {
      dialog.setAttribute("open", true);
    }
  });
}
