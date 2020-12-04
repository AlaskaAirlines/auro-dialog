// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import 'inert-polyfill/inert-polyfill.min.js';
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';
import closeIcon from '@alaskaairux/orion-icons/dist/icons/close-lg_es6.js';
import { inertSiblings } from './util.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-dialog appear above the page and require the user's attention.
 *
 * @attr {Boolean} modal - Modal dialog restricts the user to take an action (no default close actions)
 * @attr {Boolean} sm - Sets dialog box to small style
 * @attr {Boolean} md - Sets dialog box to medium style
 * @attr {Boolean} open - Sets state of dialog to open
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 */

// build the component class
class AuroDialog extends LitElement {
  constructor() {
    super();

    /**
     * @private internal variable
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private internal variable
     */
    this.svg = this.dom.body.firstChild;

    this._open = false;
    this.inertElements = [];
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      modal: { type: Boolean },
      open: {
        type: Boolean,
        reflect: true
      }
    };
  }

  get open() {
    return this._open;
  }

  set open(val) {
    const oldVal = this._open;

    this._open = val;
    this.requestUpdate('open', oldVal).then(() => {
      this.open ? this.openDialog() : this.closeDialog()
    });
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

  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.dialog = this.shadowRoot.getElementById('dialog');

    if (slot.assignedNodes().length === 0) {
      slotWrapper.classList.remove("dialog-footer");
    }
  }

  /**
   * @private handles click on overlay
   * @param {object} evt - click event
   */
  handleOverlayClick(evt) {
    if (this.open && !this.modal) {
      this.handleCloseButtonClick(evt);
    }
  }

  /**
   * @private handles click on close button
   * @param {object} evt - click event
   */
  handleCloseButtonClick(evt) {
    // TODO: do we need to?
    evt.stopPropagation();
    this.open = false;
  }

  handleKeydown({ key, keyCode }) {
    if (this.open && !this.modal && (key === 'Escape' || keyCode === 27)) {
      this.open = false;
    }
  }

  /**
   * @private opens the dialog
   */
  openDialog() {
    this.triggerElement = document.activeElement;
    this.shadowRoot.querySelector('#dialog-header').focus();
    this.inertElements = inertSiblings(this);
  }

  /**
   * @private closes the dialog
   */
  closeDialog() {
    // TODO: why is this here? should we set this in openDialog()?
    document.documentElement.style.overflow = '';
    // TODO: why is this using old event syntax?
    const toggleEvent = document.createEvent("HTMLEvents");
    toggleEvent.initEvent("toggle", true, false);
    this.dispatchEvent(toggleEvent);

    this.inertElements.forEach(el => el.removeAttribute('inert'));
    this.triggerElement.focus();
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'dialogOverlay': true,
      'dialogOverlay--modal': this.modal && this.open,
      'dialogOverlay--open': this.open
    },
      contentClasses = {
      'dialog': true,
      'dialog--open': this.open
    };

    // TODO: should we be using <dialog>?
    return html`
      <div class="${classMap(classes)}" id="dialog-overlay" @click=${this.handleOverlayClick}>
      </div>
  
      <dialog id="dialog" class="${classMap(contentClasses)}" aria-labelledby="dialog-header">
        <div class="dialog-header">
          <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header" tabindex="-1">
            <slot name="header">Default header ...</slot>
          </h1>
          ${this.modal
            ? html``
            : html`
              <button class="dialog-header--action" id="dialog-close" @click="${this.handleCloseButtonClick}">
                <div>${this.svg}</div>
                <div class="util_displayHiddenVisually">Close</div>
              </button>
          `}
        </div>
        <div class="dialog-content">
          <slot name="content"></slot>
        </div>
        <div class="dialog-footer" id="footerWrapper">
          <slot name="footer" id="footer"></slot>
        </div>
      </dialog>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dialog")) {
  customElements.define("auro-dialog", AuroDialog);
}
