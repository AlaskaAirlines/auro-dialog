// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable curly, no-underscore-dangle, jsdoc/no-undefined-types, jsdoc/require-description-complete-sentence, lit/binding-positions, lit/no-invalid-html, max-lines */

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from "lit/directives/ref.js";

import styleCss from "./styles/style-css.js";
import styleUnformattedCss from './styles/style-unformatted-css.js';
import colorCss from "./styles/color-css.js";
import tokensCss from "./styles/tokens-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

// import { FocusTrap } from "@aurodesignsystem/auro-library/scripts/runtime/FocusTrap/index.mjs";

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import { AuroLayover } from '@aurodesignsystem/auro-layover/class';
import layoverVersion from './layoverVersion.js';

const ESCAPE_KEYCODE = 27;


// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-dialog appear above the page and require the user's attention.
 *
 * @attr {Boolean} modal - Modal dialog restricts the user to take an action (no default close actions)
 * @attr {Boolean} unformatted - Unformatted dialog window, edge-to-edge fill for content
 * @attr {Boolean} sm - Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile.
 * @attr {Boolean} md - Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile.
 * @attr {Boolean} onDark - Sets close icon to white for dark backgrounds
 * @attr {Boolean} open - Sets state of dialog to open
 * @prop {HTMLElement} triggerElement - The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened.
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 * @event toggle - Event fires when the element is closed
 * @csspart close-button - adjust position of the close X icon in the dialog window
 * @csspart dialog-overlay - apply CSS on the overlay of the dialog
 * @csspart dialog - apply CSS to the entire dialog
 * @csspart dialog-header - apply CSS to the header of the dialog
 * @csspart dialog-content - apply CSS to the content of the dialog
 * @csspart dialog-footer - apply CSS to the footer of the dialog
 */

export default class ComponentBase extends LitElement {
  constructor() {
    super();

    this.modal = false;
    this.unformatted = false;

    const versioning = new AuroDependencyVersioning();
    this._createElementRefs();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.layoverTag = versioning.generateTag('auro-layover', layoverVersion, AuroLayover);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {
      modal: { type: Boolean },
      unformatted: {
        type: Boolean,
        reflect: true
      },
      open: {
        type: Boolean,
        reflect: true
      },
      triggerElement: {
        attribute: false
      }
    };
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-dialog');

    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.dialog = this.shadowRoot.getElementById('dialog');

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      slotWrapper.classList.remove("dialog-footer");
    }
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.keydownEventHandler = this.handleKeydown.bind(this);
    window.addEventListener('keydown', this.keydownEventHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.keydownEventHandler);
  }

  /**
   * Open the dialog.
   * @returns {void}
   */
  openDialog() {
    this.layover.show();
    this.open = true;

    if (this.layover.type === 'manual') this.defaultTrigger = document.activeElement;
  }

  /**
   * set the focus on the first element after opening transition effect is complete.
   * @private
   */
  // onDialogTransitionEnd() {
  //   if (this.open && this.focusTrap) {
  //     this.focusTrap.focusFirstElement();
  //   }
  // }

  /**
   * Close the dialog
   * @returns {void}
   */
  closeDialog() {

    this.layover.hide();
    this.open = false;

    // if (this.focusTrap) {
    //   // If the dropdown is not open, disconnect the focus trap if it exists
    //   this.focusTrap.disconnect();
    //   this.focusTrap = undefined;
    // }

    if (this.defaultTrigger && this.layover.type === 'manual') {
      this.defaultTrigger.focus();
      this.defaultTrigger = undefined;
    }

    this.dispatchToggleEvent();
  }

  /**
   * @private
   * @returns {void}
   */
  dispatchToggleEvent() {
    // replace with Event constructor once IE support dropped
    const toggleEvent = document.createEvent("HTMLEvents");

    toggleEvent.initEvent("toggle", true, false);
    this.dispatchEvent(toggleEvent);
  }

  /**
   * @private
   * @returns {void}
   */
  handleOverlayClick() {
    if (this.open && !this.modal) {
      const dropdownComponents = [...this.querySelectorAll('auro-combobox, [auro-combobox], auro-select, [auro-select], auro-datepicker, [auro-datepicker]')];
      const dropdowns = [
        ...this.querySelectorAll('auro-dropdown, [auro-dropdown]'),
        ...dropdownComponents.map((comp) => comp.dropdown),
      ];

      const isAnyDropdownOpen = dropdowns.some((dropdown) => dropdown.isPopoverVisible);
      if (!isAnyDropdownOpen) {
        this.handleCloseButtonClick();
      }
    }
  }

  /**
   * @private
   * @returns {void}
   */
  handleCloseButtonClick() {
    console.debug('click to close from dialog');
    this.closeDialog();
  }

  /**
   * @private
   * @param {KeyboardEvent} event - The keyboard event containing the key and keyCode.
   * @returns {void}
   */
  handleKeydown({ key, keyCode }) {
    if (this.open && !this.modal && (key === 'Escape' || keyCode === ESCAPE_KEYCODE)) {
      this.open = false;
    }
  }

  /**
   * Focus the dialog.
   * @private
   * @returns {void}
   */
  focus() {
    if (this.open) {
      this.dialog.focus();
    }
  }

  /** Creates refs for elements in the template @returns {void} @private */
  _createElementRefs() {
    // A reference to the layover element itself
    this._layoverRef = createRef();
  }

  /**
   * A reference to the layover element that wraps the dialog.
   * @returns {HTMLElement} The layover element that wraps the dialog
   */
  get layover() {
    return this._layoverRef.value;
  }

  static get styles() {
    return [
      styleCss,
      styleUnformattedCss,
      colorCss,
      tokensCss
    ];
  }

  /**
   * @private
   * @returns {TemplateResult} - The close button template.
   */
  getCloseButton() {
    return this.modal
      ? html``
      : html`
        <${this.buttonTag} variant="ghost" shape="circle" size="sm" aria-label="Close" ?onDark=${this.hasAttribute('onDark')} class="dialog-header--action" id="dialog-close" @click="${this.handleCloseButtonClick}" part="close-button">
          <${this.iconTag} customColor category="interface" name="x-lg"></${this.iconTag}>
        </${this.buttonTag}>
      `;
  }

  render() {
    const contentClasses = {
      'dialog': true,
      'dialog--open': this.open
    };

    return html`
      <${this.layoverTag}
        ${ref(this._layoverRef)}
        behavior="dialog"
        role="dialog" 
        id="dialog" 
        part="dialog"
        aria-labelledby="dialog-header"
        aria-describedby="dialog-content"
        >
        <slot name="trigger" slot="trigger"></slot>
        <div class="${classMap(contentClasses)}">
        ${this.unformatted
        ? html`
          <slot name="content"></slot>
          ${this.getCloseButton()}
        `
        : html`
          <div class="dialog-header" part="dialog-header">
            <h1 class="heading heading-lg util_stackMarginNone--top" id="dialog-header">
              <slot name="header">Default header...</slot>
            </h1>
            ${this.getCloseButton()}
          </div>
          <div class="dialog-content body-default" part="dialog-content">
            <slot name="content"></slot>
          </div>
          <div class="dialog-footer" id="footerWrapper" part="dialog-footer">
            <slot name="footer" id="footer"></slot>
          </div>
        `
        }
        </div>
      </${this.layoverTag}>
    `;
  }
}
