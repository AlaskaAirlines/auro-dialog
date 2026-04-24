// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/no-undefined-types, lit-a11y/click-events-have-key-events, jsdoc/require-description-complete-sentence, lit/binding-positions, lit/no-invalid-html, prefer-destructuring, max-lines */

import { LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import { FocusTrap } from "@aurodesignsystem/auro-library/scripts/runtime/FocusTrap/index.mjs";
import AuroFloatingUI from "@aurodesignsystem/auro-library/scripts/runtime/floatingUI.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";

import buttonVersion from "./buttonVersion.js";
import iconVersion from "./iconVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import styleUnformattedCss from "./styles/style-unformatted.scss";
import tokensCss from "./styles/tokens.scss";

const MOBILE_BREAKPOINT = '--ds-grid-breakpoint-md';
/**
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @slot ariaLabel.dialog.close - Text to describe the "x" icon close button for screen readers. Default: "Close".
 * @event toggle - Event fires when the element is closed
 * @csspart close-button - adjust position of the close X icon in the dialog window
 * @csspart dialog-overlay - DEPRECATED. Use `--ds-auro-dialog-overlay-modal-background-color` or `--ds-auro-dialog-overlay-open-background-color` for backdrop styling instead.
 * @csspart dialog - apply CSS to the entire dialog
 * @csspart dialog-header - apply CSS to the header of the dialog
 * @csspart dialog-content - apply CSS to the content of the dialog
 * @csspart dialog-footer - apply CSS to the footer of the dialog
 */
export default class ComponentBase extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.modal = false;
    this.unformatted = false;
    this.closeButtonAppearance = 'default';

    this.isPopoverVisible = false;
    this.isBibFullscreen = false;
    this.floater = new AuroFloatingUI(this, 'dialog');

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {

      /**
       * Defines whether the close button should be light colored for use on dark backgrounds.
       * @type {'default'|'inverse'}
       * @default 'default'
       */
      closeButtonAppearance: {
        type: String,
        attribute: 'close-button-appearance',
        reflect: true
      },

      /**
       * Sets dialog box to large style. Adding both lg and sm/md will set the dialog to lg for mobile and sm/md for desktop.
       * Must be used in conjunction with sm or md to have an effect.
       */
      lg: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile.
       */
      md: {
        type: Boolean,
        reflect: true
      },

      /**
       * Modal dialog restricts the user to take an action (no default close actions).
       */
      modal: { type: Boolean },

      /**
       * DEPRECATED - use `close-button-appearance="inverse" instead.
       */
      onDark: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets state of dialog to open.
       */
      isPopoverVisible: {
        type: Boolean,
        reflect: true,
        attribute: 'open'
      },

      /**
       * If true, the dialog bib is in fullscreen mode.
       * @private
       */
      isBibFullscreen: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile.
       */
      sm: {
        type: Boolean,
        reflect: true
      },

      /**
       * The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened.
       * @type {HTMLElement}
      */
      triggerElement: {
        type: Object,
        attribute: false
      },

      /**
       * Unformatted dialog window, edge-to-edge fill for content.
       */
      unformatted: {
        type: Boolean,
        reflect: true
      }
    };
  }

  get open() {
    return this.isPopoverVisible;
  }

  set open(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * @ignore
   */
  get floaterConfig() {
    if (!ComponentBase._mobileBreakpointValue) {
      const docStyle = getComputedStyle(document.documentElement);
      ComponentBase._mobileBreakpointValue = docStyle.getPropertyValue(MOBILE_BREAKPOINT)
    }
    return {
      prefix: 'auroDialog',
      fullscreenBreakpoint: ComponentBase._mobileBreakpointValue,
     };
  }

  get behavior() {
    return 'dialog';
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-dialog");

    const slot = this.shadowRoot.querySelector("#footer");
    const slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.dialog = this.shadowRoot.getElementById("dialog");
    this.bib = this.dialog;

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      slotWrapper.classList.remove("dialog-footer");
    }

    this.floater.configure(this, this.floaterConfig.prefix);

    // Forward FloatingUI toggle event to backward-compatible 'toggle' event
    this.addEventListener('auroDialog-toggled', (event) => {
      console.log('auroDialog-toggled', event.detail.expanded);
      if (!event.detail.expanded) {
        this.dispatchToggleEvent();
      }
    });

    // Always intercept the native ESC/cancel event so we can decide
    // whether to honour it based on `modal`. Re-dispatch via FloatingUI
    // for non-modal so the hide lifecycle runs correctly.
    this.dialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      if (!this.modal) {
        this.hide();
      }
    });

    // Clicks that land directly on the <dialog> element (not on a child) are
    // backdrop clicks. With the dialog in the top layer the ::backdrop sits above
    // the deprecated overlay div, so this listener replaces the overlay div's
    // click handler for backdrop-area interactions.
    this.dialog.addEventListener('click', (e) => {
      if (e.target === this.dialog) {
        this.handleOverlayClick();
      }
    });
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    this.floater.handleUpdate(changedProperties);

    if (changedProperties.has('isPopoverVisible')) {
      if (this.isPopoverVisible) {
        if (!this.floater.showing) {
          this.show();
        }
      } else {
        if (this.floater.showing) {
          this.hide();
        }
      }
    }

    if (changedProperties.has('triggerElement')) {
      this.floater.configure(this, this.floaterConfig.prefix);
      this.floater.position = () => {};
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.floater.disconnect();
    clearTimeout(this._resizeTimer);
  }

  /**
   * @private
   * @returns {void}
   */
  openDialog() {
    this.defaultTrigger = document.activeElement;

    if (this.modal) {
      this.floater.lockScroll();
      this.dialog.showModal();
    } else {
      this.dialog.showPopover();
      window.addEventListener('resize', this._boundResizeHandler);
    }

    this.focusTrap = new FocusTrap(this.dialog);
    // Focus is moved after the CSS open animation completes (see onDialogTransitionEnd).
  }

  /**
   * set the focus on the first element after opening transition effect is complete.
   * @private
   */
  onDialogTransitionEnd() {
    if (this.isPopoverVisible && this.focusTrap) {
      this.focusTrap.focusFirstElement();
    }
  }

  /**
   * @private
   * @returns {void}
   */
  closeDialog() {
    if (this.focusTrap) {
      this.focusTrap.disconnect();
      this.focusTrap = undefined;
    }

    if (this.modal) {
      // Dialog spec: close() immediately so the top-layer focus restriction is
      // lifted before we attempt to restore focus to the trigger.
      if (this.dialog?.open) {
        this.dialog.close();
      }
    } else {
      if (this._boundResizeHandler) {
        window.removeEventListener('resize', this._boundResizeHandler);
        this._boundResizeHandler = undefined;
      }
      clearTimeout(this._resizeTimer);
      // Popover spec: delay hidePopover() so the dialog stays in the top layer
      // during the CSS close animation before leaving it.
      setTimeout(() => {
        this.dialog?.hidePopover?.();
      }, 300);
    }

    if (this.defaultTrigger) {
      this.defaultTrigger.focus();
      this.defaultTrigger = undefined;
    }
  }

  /**
   * @private
   * @returns {void}
   */
  dispatchToggleEvent() {
    const toggleEvent = new Event("toggle", {
      bubbles: true,
      cancelable: false
    });

    this.dispatchEvent(toggleEvent);
  }

  /**
   * @private
   * @returns {void}
   */
  handleOverlayClick() {
    if (this.isPopoverVisible && !this.modal) {
      const dropdownComponents = [
        ...this.querySelectorAll(
          "auro-combobox, [auro-combobox], auro-select, [auro-select], auro-datepicker, [auro-datepicker]",
        ),
      ];
      const dropdowns = [
        ...this.querySelectorAll("auro-dropdown, [auro-dropdown]"),
        ...dropdownComponents.map((comp) => comp.dropdown),
      ];

      const isAnyDropdownOpen = dropdowns.some(
        (dropdown) => dropdown.isPopoverVisible,
      );
      if (!isAnyDropdownOpen) {
        this.hide();
      }
    }
  }

  /**
   * @private
   * @returns {void}
   */
  handleCloseButtonClick() {
    this.hide();
  }

  /**
   * Focus the dialog.
   * @private
   * @returns {void}
   */
  focus() {
    if (this.isPopoverVisible) {
      this.dialog.focus();
    }
  }

  /**
   * Opens the dialog.
   * @returns {void}
   */
  show() {
    this.floater.showBib();
    this.openDialog();
  }

  /**
   * Closes the dialog.
   * @returns {void}
   */
  hide() {
    this.floater.hideBib();
    this.closeDialog();
  }

  static get styles() {
    return [styleCss, styleUnformattedCss, colorCss, tokensCss];
  }

  /**
   * @private
   * @returns {TemplateResult} - The close button template.
   */
getCloseButton() {
  return this.modal
    ? html``
    : html`
      <${this.buttonTag}
        aria-label="${this.runtimeUtils.getSlotText(this, 'ariaLabel.dialog.close') || 'Close'}"
        variant="ghost"
        shape="circle"
        size="sm"
        appearance=${this.hasAttribute("ondark") ? 'inverse' : this.closeButtonAppearance}
        class="dialog-header--action"
        id="dialog-close"
        @click="${this.handleCloseButtonClick}"
        part="close-button"
      >
        <${this.iconTag} customColor category="interface" name="x-lg"></${this.iconTag}>
      </${this.buttonTag}>
    `;
  }

  render() {
    const classes = {
      dialogOverlay: true,
      "dialogOverlay--modal": this.modal && this.isPopoverVisible,
      "dialogOverlay--open": this.isPopoverVisible,
      util_displayHidden: !this.isPopoverVisible,
    };
    const contentClasses = {
      dialog: true,
      "dialog--open": this.isPopoverVisible,
    };

    return html`
      <!-- Hidden slot for close button aria-label -->
      <slot name="ariaLabel.dialog.close" hidden @slotchange=${this.requestUpdate}></slot>

      <!-- FloatingUI bib anchor for lifecycle management (ESC, click-outside, state) -->
      <div id="bib" aria-hidden="true"></div>

      <!-- @deprecated dialog-overlay: backdrop styling is now provided by ::backdrop on the dialog element.
           Retained for backward compatibility; part="dialog-overlay" remains available for custom CSS. -->
      <div class="${classMap(classes)}" id="dialog-overlay" part="dialog-overlay" @click=${this.handleOverlayClick}></div>

      <dialog
        id="dialog"
        popover="${ifDefined(this.modal ? undefined : 'manual')}"
        class="${classMap(contentClasses)}"
        part="dialog"
        aria-labelledby="dialog-header"
        aria-describedby="dialog-content"
        @transitionend="${this.onDialogTransitionEnd}">
        ${
          this.unformatted
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
      </dialog>
    `;
  }
}
