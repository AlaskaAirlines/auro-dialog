import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { setViewport, sendKeys } from "@web/test-runner-commands";

import "../src/registered.js";

/**
 * Runs the full dialog test suite for a given viewport.
 * @param {boolean} mobileView - Whether tests should run in a narrow mobile viewport.
 * @returns {void}
 */
function runFullTest(mobileView) {
  before(async () => {
    await setViewport(
      mobileView ? { width: 300, height: 800 } : { width: 900, height: 800 },
    );
  });

  it("auro-dialog is accessible", async () => {
    const el = await fixture(html`
      <auro-dialog open="true">

        <span slot="header">Blocking dialog</span>
        <span slot="content">
          Hello World!
          <button>Test Button</button>
        </span>
        <span slot="footer"><button>Click</button></span>
      </auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-dialog custom element is defined", async () => {
    const el = await !!customElements.get("auro-dialog");

    await expect(el).to.be.true;
  });

  it("dialog closes properly", async () => {
    const el = await fixture(html`
      <auro-dialog open="true">
        <span slot="header">Blocking dialog</span>
        <span slot="content">Hello World!</span>
        <span slot="footer"><button>Click</button></span>
      </auro-dialog>
    `);

    await expect(el.open).to.be.true;

    el.removeAttribute("open");

    await expect(el.open).to.be.false;
  });

  it("auro-dialog modal-dialog does not render a close icon", async () => {
    const el = await fixture(html`
      <auro-dialog modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector("#dialog-close");
    await expect(title).to.equal(null);
  });

  it("auro-dialog dialog renders a close icon", async () => {
    const el = await fixture(html`
      <auro-dialog></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector("#dialog-close");
    await expect(title).to.not.equal(null);
  });

  it("auro-dialog closes on non-blocking background click", async () => {
    const el = await fixture(html`
      <auro-dialog>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    const root = el.shadowRoot;
    const background = root.querySelector("#dialog-overlay");
    const listener = oneEvent(background, "click");
    background.click();
    await listener;
    expect(el.getAttribute("dialogOverlay--open")).to.equal(null);
  });

  it("auro-dialog renders only a close icon", async () => {
    const el = await fixture(html`
      <auro-dialog unformatted></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector("#dialog-close");
    await expect(title).to.not.equal(null);
  });

  it("auro-dialog renders no close icon", async () => {
    const el = await fixture(html`
      <auro-dialog unformatted modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector("#dialog-close");
    await expect(title).to.equal(null);
  });

  // --- FloatingUI + native dialog/popover spec ---

  it("non-modal dialog element has popover='manual'", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    const dialogEl = el.shadowRoot.querySelector("#dialog");
    expect(dialogEl.getAttribute("popover")).to.equal("manual");
  });

  it("modal dialog element does not have popover attribute", async () => {
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);
    const dialogEl = el.shadowRoot.querySelector("#dialog");
    expect(dialogEl.hasAttribute("popover")).to.be.false;
  });

  it("non-modal dialog closes when native cancel event fires on the inner dialog", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    const dialogEl = el.shadowRoot.querySelector("#dialog");
    dialogEl.dispatchEvent(new Event("cancel", { bubbles: false, cancelable: true }));
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it("modal dialog does not close when native cancel event fires", async () => {
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);
    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    const dialogEl = el.shadowRoot.querySelector("#dialog");
    dialogEl.dispatchEvent(new Event("cancel", { bubbles: false, cancelable: true }));
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it("modal dialog does not close when Escape keydown is dispatched (AB#1613688)", async () => {
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);
    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }));
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

it("show() opens the dialog and hide() closes it", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);

    expect(el.open).to.be.false;

    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    el.hide();
    await el.updateComplete;
    expect(el.open).to.be.false;
  });

  it("restores focus to the element that was active when the dialog opened", async () => {
    const root = await fixture(html`
      <div>
        <button id="trigger">Open</button>
        <auro-dialog></auro-dialog>
      </div>
    `);
    const trigger = root.querySelector("button");
    const el = root.querySelector("auro-dialog");

    trigger.focus();
    el.show();
    await el.updateComplete;

    el.hide();
    await el.updateComplete;

    expect(document.activeElement).to.equal(trigger);
  });

  it("focus() moves focus into the dialog when open when there is no focusable element in body", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    el.focus();

    await waitUntil(() => !!el.shadowRoot.activeElement, "Dialog did not receive focus");
  });

  it("focus() moves focus into the dialog when open", async () => {
    const el = await fixture(html`<auro-dialog><button></button></auro-dialog>`);
    el.show();
    await el.updateComplete;

    el.focus();

    await waitUntil(() => !!el.shadowRoot.activeElement, "Dialog did not receive focus");
  });

  it("focus() is a no-op when the dialog is closed", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    const before = document.activeElement;

    el.focus();

    expect(document.activeElement).to.equal(before);
  });

  it("dispatches toggle event when dialog is closed", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    const listener = oneEvent(el, "toggle");
    el.hide();
    await listener;

    expect(el.open).to.be.false;
  });

  it("dispatches auroDialog-toggled with expanded:true on open and expanded:false on close", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);

    const openListener = oneEvent(el, "auroDialog-toggled");
    el.show();
    const openEvent = await openListener;
    expect(openEvent.detail.expanded).to.be.true;

    const closeListener = oneEvent(el, "auroDialog-toggled");
    el.hide();
    const closeEvent = await closeListener;
    expect(closeEvent.detail.expanded).to.be.false;
  });

  it("modal dialog locks page scroll on open and restores it on close", async () => {
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);

    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;
    expect(document.body.style.position).to.equal("fixed");

    el.hide();
    await el.updateComplete;
    expect(document.body.style.position).to.equal("");
  });

  // Note: in WTR/JSDOM, showPopover() is a no-op and the element never enters
  // the actual top layer, so these tests exercise the click-handler logic path
  // but not the real ::backdrop interaction. For full coverage move to Playwright.
  it("backdrop click closes non-modal dialog", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    const dialogEl = el.shadowRoot.querySelector("#dialog");
    // Simulate a click with target === dialogEl (backdrop click)
    dialogEl.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it("backdrop click does not close modal dialog", async () => {
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);
    el.show();
    await el.updateComplete;

    const dialogEl = el.shadowRoot.querySelector("#dialog");
    dialogEl.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;

    expect(el.open).to.be.true;

    // clean up
    el.hide();
    await el.updateComplete;
  });

  it("backdrop click does not close parent dialog when a child floater is open (AB#1536579)", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);

    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    // Simulate a child floater (e.g. a dropdown inside the dialog) becoming
    // topOpeningFloatingUI. Two auro-dialogs share the same eventPrefix and
    // can't both be open simultaneously, so we inject a fake floater directly
    // into the AuroFloatingUI tracking state — exactly the mechanism the fix guards against.
    const savedExpandedAuroFloater = document.expandedAuroFloater;
    document.expandedAuroFloater = { element: { isPopoverVisible: true } };

    const dialogEl = el.shadowRoot.querySelector("#dialog");
    dialogEl.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;

    // Parent must remain open — child floater is topOpeningFloatingUI
    expect(el.open).to.be.true;

    // clean up
    document.expandedAuroFloater = savedExpandedAuroFloater;
    el.hide();
    await el.updateComplete;
  });

  it("close button defaults to appearance='default'", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    const closeBtn = el.shadowRoot.querySelector("#dialog-close");
    expect(closeBtn.getAttribute("appearance")).to.equal("default");
  });

  it("close-button-appearance='inverse' sets close button appearance to inverse", async () => {
    const el = await fixture(html`<auro-dialog close-button-appearance="inverse"></auro-dialog>`);
    const closeBtn = el.shadowRoot.querySelector("#dialog-close");
    expect(closeBtn.getAttribute("appearance")).to.equal("inverse");
  });

  it("ondark attribute overrides closeButtonAppearance and renders close button as inverse", async () => {
    const el = await fixture(html`<auro-dialog ondark></auro-dialog>`);
    const closeBtn = el.shadowRoot.querySelector("#dialog-close");
    expect(closeBtn.getAttribute("appearance")).to.equal("inverse");
  });

  it("ondark takes precedence over close-button-appearance='default'", async () => {
    const el = await fixture(html`<auro-dialog ondark close-button-appearance="default"></auro-dialog>`);
    const closeBtn = el.shadowRoot.querySelector("#dialog-close");
    expect(closeBtn.getAttribute("appearance")).to.equal("inverse");
  });

  it("setting open = true before firstUpdated does not throw", async () => {
    const el = document.createElement("auro-dialog");
    customElements.upgrade(el);
    // Append to DOM — LitElement schedules its first update as a microtask,
    // so firstUpdated() has not yet run and this.dialog is still undefined.
    document.body.appendChild(el);
    // Must not throw even though this.dialog is uninitialized.
    expect(() => { el.open = true; }).to.not.throw();
    await el.updateComplete;
    expect(el.open).to.be.true;
    el.hide();
    await el.updateComplete;
    document.body.removeChild(el);
  });

  it("setting open = true opens the dialog", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    expect(el.open).to.be.false;
    el.open = true;
    await el.updateComplete;
    expect(el.open).to.be.true;

    // clean up
    el.hide();
    await el.updateComplete;
  });

  it("setting open = false closes the dialog", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;

    el.open = false;
    await el.updateComplete;
    expect(el.open).to.be.false;
  });

  // --- focus trap on open (AB#1543191) ---

  it("moves focus into dialog after the open transition fires", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    await waitUntil(
      () => !!el.shadowRoot.activeElement,
      "Focus did not move into dialog after transitionend",
      { timeout: 1000 }
    );
  });

  it("moves focus into dialog when mounted already-open (no transitionend fires)", async () => {
    const el = await fixture(html`<auro-dialog open></auro-dialog>`);

    await waitUntil(
      () => !!el.shadowRoot.activeElement,
      "Focus did not move into dialog via fallback timer",
      { timeout: 600 }
    );
  });

  it("moves focus into a dynamically-created dialog that is already open", async () => {
    const el = document.createElement("auro-dialog");
    el.setAttribute("open", "");
    document.body.appendChild(el);
    await el.updateComplete;

    await waitUntil(
      () => !!el.shadowRoot.activeElement,
      "Focus did not move into dynamically-created already-open dialog",
      { timeout: 600 }
    );

    el.hide();
    await el.updateComplete;
    document.body.removeChild(el);
  });

  it("does not double-focus when transitionend fires before the fallback timer", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    const wrapper = el.shadowRoot.querySelector(".dialog");
    wrapper.dispatchEvent(new Event("transitionend", { bubbles: false }));

    expect(el._focusTrapActivated).to.be.true;

    await new Promise((resolve) => setTimeout(resolve, 400));

    expect(el.focusTrap).to.exist;

    el.hide();
    await el.updateComplete;
  });

  it("cancels the fallback timer when dialog is closed before 350ms elapses", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    expect(el._focusFallbackTimerId).to.exist;
    el.hide();
    await el.updateComplete;

    expect(el._focusFallbackTimerId).to.be.undefined;
    expect(el._focusTrapActivated).to.be.false;

    // Timer must not fire after close — focusTrap should be torn down
    await new Promise((resolve) => setTimeout(resolve, 400));
    expect(el.focusTrap).to.be.undefined;
  });

  it("rapid re-open disconnects the previous focusTrap before creating a new one", async () => {
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    el.show();
    await el.updateComplete;

    const firstTrap = el.focusTrap;
    let firstTrapDisconnected = false;
    const originalDisconnect = firstTrap.disconnect.bind(firstTrap);
    firstTrap.disconnect = () => {
      firstTrapDisconnected = true;
      originalDisconnect();
    };

    // Re-open without closing — the previous focusTrap must be disconnected.
    el.show();
    await el.updateComplete;

    expect(firstTrapDisconnected).to.be.true;
    expect(el.focusTrap).to.exist;
    expect(el.focusTrap).to.not.equal(firstTrap);

    el.hide();
    await el.updateComplete;
  });

  it("disconnectedCallback clears the fallback timer while dialog is open", async () => {
    const el = document.createElement("auro-dialog");
    document.body.appendChild(el);
    await el.updateComplete;
    el.show();
    await el.updateComplete;

    expect(el._focusFallbackTimerId).to.exist;

    // Call the lifecycle hook directly to test cleanup without removing an
    // active popover from the DOM (which crashes headless Chrome).
    el.disconnectedCallback();

    expect(el._focusFallbackTimerId).to.be.undefined;
    expect(el.focusTrap).to.be.undefined;
    expect(el._focusTrapActivated).to.be.false;

    el.hide();
    await el.updateComplete;
    document.body.removeChild(el);
  });

  it("Tab key keeps focus within the open dialog", async () => {
    const el = await fixture(html`
      <auro-dialog open>
        <button id="btn1" slot="content">One</button>
        <button id="btn2" slot="footer">Two</button>
      </auro-dialog>
    `);

    await waitUntil(
      () => el._focusTrapActivated === true,
      "Focus trap was not activated",
      { timeout: 600 }
    );

    await sendKeys({ press: "Tab" });

    expect(el.contains(document.activeElement)).to.be.true;
  });

  it("focus is trapped in a dynamically-created already-open dialog when Tab is pressed (AB#1543191)", async () => {
    // Regression: consumers who destroy/recreate the dialog on the same event
    // that opens it (e.g. flight-search refundable-upsell) mount it already in
    // the open state, so no closed->open CSS transition fires and transitionend
    // never runs. The fallback timer must engage the focus trap so Tab cannot
    // reach page content behind the dialog.
    const el = document.createElement("auro-dialog");
    el.setAttribute("open", "");
    const btn1 = document.createElement("button");
    btn1.id = "btn1";
    btn1.slot = "content";
    btn1.textContent = "One";
    const btn2 = document.createElement("button");
    btn2.id = "btn2";
    btn2.slot = "footer";
    btn2.textContent = "Two";
    el.appendChild(btn1);
    el.appendChild(btn2);
    document.body.appendChild(el);
    await el.updateComplete;

    await waitUntil(
      () => el._focusTrapActivated === true,
      "Focus trap was not activated for dynamically-created already-open dialog",
      { timeout: 600 }
    );

    await sendKeys({ press: "Tab" });

    expect(el.contains(document.activeElement)).to.be.true;

    el.hide();
    await el.updateComplete;
    document.body.removeChild(el);
  });

  it("Shift+Tab keeps focus within the open dialog", async () => {
    const el = await fixture(html`
      <auro-dialog open>
        <button id="btn1" slot="content">One</button>
        <button id="btn2" slot="footer">Two</button>
      </auro-dialog>
    `);

    await waitUntil(
      () => el._focusTrapActivated === true,
      "Focus trap was not activated",
      { timeout: 600 }
    );

    await sendKeys({ down: "Shift" });
    await sendKeys({ press: "Tab" });
    await sendKeys({ up: "Shift" });

    expect(el.contains(document.activeElement)).to.be.true;
  });
}

describe("auro-dialog", () => {
  runFullTest(false);
});

describe("auro-dialog in mobile viewport", () => {
  runFullTest(true);
});

function _sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
