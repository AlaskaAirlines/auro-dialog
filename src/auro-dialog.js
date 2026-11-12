// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import ComponentBase from "./componentBase.js";

/**
 * Presents information that needs people's immediate attention in a window on top of the page.
 *
 * **Key capabilities**
 * - **Blocking mode**: Set `modal` to require an explicit action before people can continue.
 * - **Sizes**: Set `sm` or `md` to change the dialog's size, and add `lg` to use the large size on mobile.
 * - **Edge-to-edge content**: Set `unformatted` to fill the dialog with your own content.
 * - **Focus handling**: Focus is always trapped while the dialog is open and returns to where it was when the dialog closes.
 *
 * **Example**
 * ```html
 * <auro-dialog id="example">
 *   <span slot="header">Dialog header</span>
 *   <div slot="content">Dialog content</div>
 *   <div slot="footer"><auro-button>Close</auro-button></div>
 * </auro-dialog>
 * ```
 * @summary An accessible dialog that opens on top of the page, with a blocking modal mode and three sizes.
 * @customElement auro-dialog
 */
export class AuroDialog extends ComponentBase {

  static get properties() {
    return {
      ...ComponentBase.properties,
    };
  }

  static get styles() {
    return [ComponentBase.styles];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-dialog"] - The tag name to register the element under.
   *
   * @example
   * AuroDialog.register("custom-dialog") // Registers the element as <custom-dialog>
   *
   */
  static register(name = "auro-dialog") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDialog);
  }
}
