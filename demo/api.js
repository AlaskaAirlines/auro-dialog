import { initAccessibilityExample } from "../apiExamples/accessibility";
import { initBasicExample } from "../apiExamples/basic";
import { initDecoupledExample } from "../apiExamples/decoupled";
import { initEditCloseButtonExample } from "../apiExamples/editCloseButton";
import { initModalExample } from "../apiExamples/modal";
import { initPopoverAndDropdownExample } from "../apiExamples/popoverAndDropdown";
import { initSizeOptionsExample } from "../apiExamples/sizeOptions";
import { initAriaLabelSlotExample } from "../apiExamples/ariaLabelSlot";

import "../src/registered"

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initBasicExample();
    initAccessibilityExample();
    initDecoupledExample();
    initEditCloseButtonExample();
    initModalExample();
    initPopoverAndDropdownExample();
    initSizeOptionsExample();
    initAriaLabelSlotExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
