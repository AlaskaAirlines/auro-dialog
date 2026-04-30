import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";

import "../src/registered.js";

describe("auro-dialog", () => {
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
    expect(document.body.style.position).to.equal("fixed");

    el.hide();
    await el.updateComplete;
    expect(document.body.style.position).to.equal("");
  });

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
});

function _sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
