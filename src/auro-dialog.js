// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
import ComponentBase from './componentBase.js';

/**
 * The auro-dialog appears above the page and requires the user's attention.
 */

// build the component class
export class AuroDialog extends ComponentBase {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      // use custom accessors on base class
      open: {
        ...super.properties.open,
        noAccessor: true
      }
    };
  }

  static get styles() {
    return [super.styles];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-dialog"] - The name of element that you want to register to.
   *
   * @example
   * AuroDialog.register("custom-dialog") // this will register this element to <custom-dialog/>
   *
   */
  static register(name = "auro-dialog") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDialog);
  }
}
