import "../src/registered";
import { AuroDialog } from "../src/index";
import { initCustomExample } from "../apiExamples/custom";

// The README's live example uses a custom-registered `<custom-dialog>` tag
// (see docs/partials/customRegistration.md). Register it so the element
// upgrades and renders on the README demo page.
AuroDialog.register("custom-dialog");

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy error handling
  initCount = initCount || 0;

  try {
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
