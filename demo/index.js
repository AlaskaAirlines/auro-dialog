import { initBasicExample } from "../apiExamples/basic";
import { initCustomExample } from "../apiExamples/custom";

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    initBasicExample();
    initCustomExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
