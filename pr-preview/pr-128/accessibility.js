import { initAccessibilityUnformattedHeaderExample } from "../apiExamples/accessibility-unformatted-header";
import { initAriaLabelSlotExample } from "../apiExamples/aria-label";

import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initAccessibilityUnformattedHeaderExample();
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
