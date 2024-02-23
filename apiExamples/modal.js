export function initModalExample() {
  const defaultButtons = [document.querySelector('#openDefaultModal'), document.querySelector('#closeDefaultModal')];
  const defaultDialog = document.querySelector('#defaultModalDialog');

  const mediumButtons = [document.querySelector('#openMediumModal'), document.querySelector('#closeMediumModal')];
  const mediumDialog = document.querySelector('#mediumModalDialog');

  const smallButtons = [document.querySelector('#openSmallModal'), document.querySelector('#closeSmallModal')];
  const smallDialog = document.querySelector('#smallModalDialog');

  defaultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (defaultDialog.hasAttribute('open')) {
        defaultDialog.removeAttribute('open');
      } else {
        defaultDialog.setAttribute('open', true);
      }
    });
  });

  mediumButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (mediumDialog.hasAttribute('open')) {
        mediumDialog.removeAttribute('open');
      } else {
        mediumDialog.setAttribute('open', true);
      }
    });
  });

  smallButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (smallDialog.hasAttribute('open')) {
        smallDialog.removeAttribute('open');
      } else {
        smallDialog.setAttribute('open', true);
      }
    });
  });
}
