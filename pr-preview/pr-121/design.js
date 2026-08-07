import { initSizeOptionsExample } from "../apiExamples/size-options";
import { initDecoupledExample } from "../apiExamples/decoupled";
import { initAccessibilityExample } from "../apiExamples/accessibility";

import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initSizeOptionsExample();
    initDecoupledExample();
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
