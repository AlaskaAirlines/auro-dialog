import { initSizeOptionsExample } from "../apiExamples/size-options";
import { initDecoupledExample } from "../apiExamples/decoupled";
import { initAccessibilityUnformattedHeaderExample } from "../apiExamples/accessibility-unformatted-header";

import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initSizeOptionsExample();
    initDecoupledExample();
    initAccessibilityUnformattedHeaderExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
