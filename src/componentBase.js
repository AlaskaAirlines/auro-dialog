// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable no-underscore-dangle, jsdoc/no-undefined-types, lit-a11y/click-events-have-key-events */

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';
import styleUnformattedCss from './style-unformatted-css.js';
import styleUnformattedCssFixed from './style-unformatted-fixed-css.js';
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';

/* eslint-disable one-var, prefer-destructuring */

const ESCAPE_KEYCODE = 27,
  FOCUS_TIMEOUT = 50;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-dialog appear above the page and require the user's attention. // eslint-disable-line jsdoc/require-description-complete-sentence
 *
 * @attr {Boolean} modal - Modal dialog restricts the user to take an action (no default close actions)
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
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

    /**
     * @private
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private
     */
    this.svg = this.dom.body.firstChild;

    this.modal = false;
    this.unformatted = false;
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
   * @private
   * @returns {void}
   */
  openDialog() {
    this.defaultTrigger = document.activeElement;

    setTimeout(() => {
      this.focus();

      this.handleFocusLoss();
    }, FOCUS_TIMEOUT);
  }

  /**
   * @private
   * @returns {void}
   */
  closeDialog() {
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
   * @returns {void} Determines if dropdown bib should be closed on focus change.
   */
  handleFocusLoss() {
    const focusable = [...this.querySelectorAll('button, auro-button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];

    const firstFocusableElement = focusable[0];
    const lastFocusableElement = focusable[focusable.length - 1];

    const closeButton = this.shadowRoot.getElementById('dialog-close');

    lastFocusableElement.addEventListener('focusout', () => {
      if (closeButton !== null) { // eslint-disable-line no-negated-condition
        closeButton.focus();
      } else {
        firstFocusableElement.focus();
      }
    });
  }

  /**
   * @private
   * @returns {void}
   */
  handleOverlayClick() {
    if (this.open && !this.modal) {
      this.handleCloseButtonClick();
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
      styleCssFixed,
      styleUnformattedCss,
      styleUnformattedCssFixed
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
        <button class="dialog-header--action" id="dialog-close" @click="${this.handleCloseButtonClick}" part="close-button">
          <span>${this.svg}</span>
          <span class="util_displayHiddenVisually">Close</span>
        </button>
      `;
  }

  render() {
    const classes = {
        'dialogOverlay': true,
        'dialogOverlay--modal': this.modal && this.open,
        'dialogOverlay--open': this.open,
        'util_displayHidden': !this.open
      },

      contentClasses = {
        'dialog': true,
        'dialog--open': this.open
      };

    return html`
      <div class="${classMap(classes)}" id="dialog-overlay" part="dialog-overlay" @click=${this.handleOverlayClick}></div>

      <div role="dialog" id="dialog" class="${classMap(contentClasses)}" part="dialog" aria-labelledby="dialog-header" tabindex="-1">
        ${this.unformatted
        ? html`
          <slot name="content"></slot>
          ${this.getCloseButton()}
        `
        : html`
          <div class="dialog-header" part="dialog-header">
            <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header">
              <slot name="header">Default header ...</slot>
            </h1>
            ${this.getCloseButton()}
          </div>
          <div class="dialog-content" part="dialog-content">
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
}
