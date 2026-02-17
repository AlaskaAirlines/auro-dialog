import { initBasicExample } from "../apiExamples/basic";
import { initCustomExample } from "../apiExamples/custom";

import { AuroDialog } from "../src/index";

AuroDialog.register();
AuroDialog.register("custom-dialog");

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
    initBasicExample();
    initCustomExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
