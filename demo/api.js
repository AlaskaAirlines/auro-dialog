import { toggleDialog } from "../apiExamples/toggleDialog";

export function initDialogApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    toggleDialog();
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initDialogApiExamples(initCount + 1);
      }, 100);
    }
  }
}
