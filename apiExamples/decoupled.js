export function initDecoupledExample() {
  const smLgButtons = [
    document.querySelector("#openSmLg"),
    document.querySelector("#closeSmLg"),
  ];
  const smLgDialog = document.querySelector("#smLgDialog");

  const mdLgButtons = [
    document.querySelector("#openMdLg"),
    document.querySelector("#closeMdLg"),
  ];
  const mdLgDialog = document.querySelector("#mdLgDialog");

  smLgButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (smLgDialog.hasAttribute("open")) {
        smLgDialog.removeAttribute("open");
      } else {
        smLgDialog.setAttribute("open", true);
      }
    });
  });

  mdLgButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (mdLgDialog.hasAttribute("open")) {
        mdLgDialog.removeAttribute("open");
      } else {
        mdLgDialog.setAttribute("open", true);
      }
    });
  });
}
