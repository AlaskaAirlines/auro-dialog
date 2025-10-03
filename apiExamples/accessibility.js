export function initAccessibilityExample() {
  const button = document.querySelector("#openAccessibility");
  const dialog = document.querySelector("#unformattedMdDialog");

  button.addEventListener("click", () => {
    if (dialog.hasAttribute("open")) {
      dialog.removeAttribute("open");
    } else {
      dialog.setAttribute("open", true);
    }
  });
}
