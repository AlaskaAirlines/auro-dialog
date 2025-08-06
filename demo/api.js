import { AuroDialog } from '../src/auro-dialog.js';

AuroDialog.register();

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
