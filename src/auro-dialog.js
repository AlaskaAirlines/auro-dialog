// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import ComponentBase from "./componentBase.js";

/**
 * The `auro-dialog` appears on top of the page and presents information that requires the users immediate attention.
 * @customElement auro-dialog
 */
export class AuroDialog extends ComponentBase {

  static get properties() {
    return {
      ...ComponentBase.properties,
      // use custom accessors on base class
      open: Object.assign(ComponentBase.properties.open, { noAccessor: true }),
    };
  }

  static get styles() {
    return [ComponentBase.styles];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-dialog"] - The name of the element that you want to register.
   *
   * @example
   * AuroDialog.register("custom-dialog") // this will register this element to <custom-dialog/>
   *
   */
  static register(name = "auro-dialog") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDialog);
  }
}
