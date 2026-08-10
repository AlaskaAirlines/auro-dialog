import { initAccessibilityExample } from "../apiExamples/accessibility";
import { initBasicExample } from "../apiExamples/basic";
import { initDecoupledExample } from "../apiExamples/decoupled";
import { initEditCloseButtonExample } from "../apiExamples/close-button";
import { initModalExample } from "../apiExamples/modal";
import { initPopoverAndDropdownExample } from "../apiExamples/popover-and-dropdown";
import { initSizeOptionsExample } from "../apiExamples/size-options";
import { initAriaLabelSlotExample } from "../apiExamples/aria-label";

import "../src/registered"

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initBasicExample();
    initSizeOptionsExample();
    initModalExample();
    initDecoupledExample();
    initPopoverAndDropdownExample();
    initEditCloseButtonExample();
    initAriaLabelSlotExample();
    initAccessibilityExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
