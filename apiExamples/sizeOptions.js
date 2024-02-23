export function initSizeOptionsExample() {
  const defaultButtons = [document.querySelector('#openDefaultSize'), document.querySelector('#closeDefaultSize')];
  const defaultDialog = document.querySelector('#defaultSizeDialog');

  const mediumButtons = [document.querySelector('#openMediumSize'), document.querySelector('#closeMediumSize')];
  const mediumDialog = document.querySelector('#mediumSizeDialog');

  const smallButtons = [document.querySelector('#openSmallSize'), document.querySelector('#closeSmallSize')];
  const smallDialog = document.querySelector('#smallSizeDialog');

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
