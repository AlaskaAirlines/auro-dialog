export function initBasicExample() {
  if (initBasicExample._initialized) {
    return;
  }
  const buttons = [
    document.querySelector("#openBasic"),
    document.querySelector("#closeBasic"),
  ];
  const dialog = document.querySelector("#defaultDialog");
  if (buttons.length === 0 || !dialog) {
    return;
  }
  initBasicExample._initialized = true;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (dialog.hasAttribute("open")) {
        dialog.removeAttribute("open");
      } else {
        dialog.setAttribute("open", true);
      }
    });
  });
}
