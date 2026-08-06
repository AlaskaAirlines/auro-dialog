import { initEditCloseButtonExample } from "../apiExamples/close-button";
import { initPopoverAndDropdownExample } from "../apiExamples/popover-and-dropdown";

import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initEditCloseButtonExample();
    initPopoverAndDropdownExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
