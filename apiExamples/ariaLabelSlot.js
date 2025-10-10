export function initAriaLabelSlotExample() {
  const button = document.querySelector("#openAriaLabelSlot");
  const dialog = document.querySelector("#ariaLabelMdDialog");

  button.addEventListener("click", () => {
    if (dialog.hasAttribute("open")) {
      dialog.removeAttribute("open");
    } else {
      dialog.setAttribute("open", true);
    }
  });
}
