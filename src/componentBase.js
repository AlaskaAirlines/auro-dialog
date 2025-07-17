// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable curly, no-underscore-dangle, no-return-assign, jsdoc/no-undefined-types, lit-a11y/click-events-have-key-events, jsdoc/require-description-complete-sentence, lit/binding-positions, lit/no-invalid-html, max-lines */

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';

import styleCss from "./style-css.js";
import styleUnformattedCss from './style-unformatted-css.js';
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { FocusTrap } from "@aurodesignsystem/auro-library/scripts/runtime/FocusTrap/index.mjs";

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';
import { PopoverPositioner } from "./PopoverPositioner.js";

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

const _DEFAULTS = {
  type: "dialog",
  modal: false,
  unformatted: false
};

export default class ComponentBase extends LitElement {
  constructor() {
    super();
    this.dropdownOptions = JSON.parse(this.getAttribute('dropdownOptions') || '{}');

    const versioning = new AuroDependencyVersioning();
    this._setDefaults(_DEFAULTS);

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
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  /**
   * Set default values for component properties.
   * @param {Object} defaults - The default values to set.
   * @private
   * @returns {void}
   */
  _setDefaults(defaults) {
    Object.keys(defaults).forEach((key) => {
      if (this[key] === undefined) this[key] = defaults[key];
    });
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
      },
      ready: {
        type: Boolean,
        reflect: false,
        attribute: false,
        state: true
      },

      // "dropdown" || "dialog"
      type: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * set the focus on the first element after opening transition effect is complete.
   * @private
   */
  onDialogTransitionEnd() {
    // if (this.open && this.focusTrap) {
    //   this.focusTrap.focusFirstElement();
    // }
  }

  /**
   * @private
   * @returns {void}
   */
  openDialog() {
    this.defaultTrigger = document.activeElement;

    // this.focusTrap = new FocusTrap(this.dialog);

    if (this.type === 'dropdown') {
      this.popoverPositioner = new PopoverPositioner(this.trigger, this.dialog, {
        placement: 'bottom-start',
        offset: 10,
        ...this.dropdownOptions || {}
      });
    }

    setTimeout(() => {
      this.ready = true;
      if (!this.dialog.matches(":popover-open")) {
        this.dialog.showPopover();
      }
    }, 0);
  }

  /**
   * @private
   * @returns {void}
   */
  closeDialog() {
    this.ready = false;
    if (this.focusTrap) {
      // If the dropdown is not open, disconnect the focus trap if it exists
      this.focusTrap.disconnect();
      this.focusTrap = undefined;
    }

    if (this.defaultTrigger) {
      this.defaultTrigger.focus();
      this.defaultTrigger = undefined;
    }

    setTimeout(() => {
      if (this.dialog.matches(":popover-open")) {
        this.dialog.hidePopover();
      }
    }, 0);

    this.dispatchToggleEvent();
    if (this.popoverPositioner) {
      this.popoverPositioner.disconnect();
      this.popoverPositioner = undefined;
    }
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
    this.open = false;
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

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-dialog');

    // const slot = this.shadowRoot.querySelector("#footer"),
    //   slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.dialog = this.shadowRoot.getElementById('dialog');
    this.dialog.addEventListener('beforetoggle', (e) => this.open = e.newState === 'open');
    this.trigger = this.renderRoot.querySelector('button.trigger');

    // if (!this.unformatted && slot.assignedNodes().length === 0) {
    //   slotWrapper.classList.remove("dialog-footer");
    // }
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

  renderDialog(contentClasses) {
    return html`
      <div 
        class="${classMap(contentClasses)}"
        popover="auto"
        id="dialog"
        part="dialog"
        role="dialog"
        aria-labelledby="dialog-header"
        aria-describedby="dialog-content"
        @transitionend="${this.onDialogTransitionEnd}">
        ${this.unformatted
        ? html`
          <slot name="content"></slot>
          ${this.getCloseButton()}
        `
        : html`
          <div id="dialog-header" class="dialog-header" part="dialog-header">
            <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header">
              <slot name="header">Default header ...</slot>
            </h1>
            ${this.getCloseButton()}
          </div>
          <div id="dialog-content" class="dialog-content" part="dialog-content">
            <slot name="content"></slot>
          </div>
          <div class="dialog-footer" id="footerWrapper" part="dialog-footer">
            <slot name="footer" id="footer"></slot>
          </div>
        `
      }
      </div>
    `;
  }

  renderPopover(contentClasses) {
    return html`
      <div
        class="${classMap(contentClasses)}"
        popover="auto"
        id="dialog"
        part="dialog"
        role="dialog"
        aria-labelledby="dialog-header"
        aria-describedby="dialog-content"
      >
        <slot name="content"></slot>
      </div>
    `;
  }

  render() {
    const contentClasses = {
      'dialog': this.type === 'dialog',
      'dialog--open': this.type === 'dialog' && this.open,
      'dropdown': this.type === 'dropdown',
      'dropdown--open': this.type === 'dropdown' && this.open,
      'open': this.ready,
      'container': true
    };

    return html`
      <button class="trigger" popovertarget="dialog" aria-haspopup="dialog" aria-expanded="${this.open}" aria-controls="dialog" part="trigger" ?aria-hidden="${!this.hasTriggerContent}">
        <slot @slotchange="${this.handleTriggerSlotChange}" name="trigger">
          <${this.buttonTag} variant="primary" size="md" class="trigger-button">
            Open dialog
          </${this.buttonTag}>
        </slot>
      </button>
      ${this.type === "dialog"
        ? this.renderDialog(contentClasses)
        : this.renderPopover(contentClasses)
      }
    `;
  }
}
