import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { setViewport, sendKeys } from "@web/test-runner-commands";

import "../src/registered.js";

/**
 * Runs the full dialog test suite for a given viewport.
 * @param {boolean} mobileView - Whether tests should run in a narrow mobile viewport.
 * @returns {void}
 */
function runFullTest(mobileView) {
  const passViewport = mobileView
    ? { width: 300, height: 800 }
    : { width: 900, height: 800 };

  before(async () => {
    await setViewport(passViewport);
  });

  /**
   * Cleanups registered by the current test, run in reverse order after it.
   */
  let cleanups = [];

  /**
   * Registers work to undo after the current test, whether it passes or throws.
   *
   * The page scroll lock tests mutate global state — `body { position: fixed }`,
   * `html { overflow: hidden }`, the window scroll offset, host nodes appended
   * to `body`. A failed `expect()` is exactly what these tests exist to produce,
   * and a trailing restore statement never runs when one fires: the page stays
   * frozen and every later test in both viewport passes fails for a reason that
   * has nothing to do with it. Registering the restore here keeps one real
   * regression legible as one failure.
   * @param {Function} fn - Restore work; may be async.
   * @returns {void}
   */
  function onCleanup(fn) {
    cleanups.push(fn);
  }

  afterEach(async () => {
    const pending = cleanups.reverse();
    cleanups = [];

    // Run them all even if one throws, then surface the first failure: a
    // cleanup that breaks must not strand the restores queued before it.
    let firstError;
    for (const fn of pending) {
      try {
        await fn();
      } catch (error) {
        firstError ??= error;
      }
    }
    if (firstError) {
      throw firstError;
    }
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

  /**
   * Clears the inline styles and scroll offset the page scroll lock mutates,
   * and registers a cleanup that puts the previous values back.
   *
   * Clearing matters: several tests in this file leave a dialog open, which
   * leaves the page locked. Without the clear, a test would snapshot that leaked
   * lock and the restore would faithfully put it back, so the leak outlives
   * every test that touches it and later assertions read it as a failure.
   *
   * What this does *not* do is isolate the page from a still-live floater. It
   * only touches the page; a leaked instance keeps its own `_scrollLocked` and
   * `_savedScrollStyles`, so if one is still holding the lock it can write its
   * saved values back onto the page mid-test. Those are library internals with
   * no public release path from here, and every test below closes or removes its
   * dialog through `onCleanup`, which is what actually keeps them from leaking.
   * @returns {void}
   */
  function snapshotPageScrollStyles() {
    const root = document.documentElement.style;
    const body = document.body.style;
    const saved = [
      [root, "scrollbarGutter", root.scrollbarGutter],
      [root, "overflow", root.overflow],
      [body, "overflow", body.overflow],
      [body, "position", body.position],
      [body, "top", body.top],
      [body, "width", body.width],
    ];
    const savedScrollY = window.scrollY;

    for (const [style, prop] of saved) {
      style[prop] = "";
    }
    // The lock captures window.scrollY and negates it into body.top, so a
    // leftover offset is part of the starting page too.
    window.scrollTo(0, 0);

    onCleanup(() => {
      for (const [style, prop, value] of saved) {
        style[prop] = value;
      }
      window.scrollTo(0, savedScrollY);
    });
  }

  /**
   * Asserts all six properties the page scroll lock sets, not just one of them.
   *
   * `body.top` is asserted as present rather than by value: the lock writes the
   * negated scroll offset, and on an unscrolled page that is `-0px`, which the
   * browser normalizes — so only the test that scrolls the page first can assert
   * its value meaningfully.
   * @param {String} because - Context included in assertion failures.
   * @returns {void}
   */
  function expectPageScrollLocked(because) {
    expect(document.documentElement.style.overflow, because).to.equal("hidden");
    expect(document.documentElement.style.scrollbarGutter, because).to.equal(
      "stable",
    );
    expect(document.body.style.overflow, because).to.equal("hidden");
    // position:fixed is what blocks the VoiceOver three-finger swipe; overflow
    // alone does not.
    expect(document.body.style.position, because).to.equal("fixed");
    expect(document.body.style.width, because).to.equal("100%");
    expect(document.body.style.top, because).to.not.equal("");
  }

  it("modal dialog locks page scroll on open and restores it on close", async () => {
    snapshotPageScrollStyles();
    const el = await fixture(html`<auro-dialog modal></auro-dialog>`);
    onCleanup(() => el.hide());

    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;
    expectPageScrollLocked("modal dialog must lock page scroll");

    el.hide();
    await el.updateComplete;
    expect(document.documentElement.style.overflow).to.equal("");
    expect(document.documentElement.style.scrollbarGutter).to.equal("");
    expect(document.body.style.overflow).to.equal("");
    expect(document.body.style.position).to.equal("");
    expect(document.body.style.top).to.equal("");
    expect(document.body.style.width).to.equal("");
  });

  it("non-modal dialog locks page scroll on open and restores it on close (AB#1625424)", async () => {
    // The everyday, dismissible dialog. Above the fullscreen breakpoint this
    // resolves to the "dialog" positioning strategy, which used to leave the
    // page behind the dialog scrollable — the desktop pass of this suite is the
    // one that reproduced AB#1625424.
    snapshotPageScrollStyles();
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    onCleanup(() => el.hide());

    el.show();
    await el.updateComplete;
    expect(el.open).to.be.true;
    expect(el.modal).to.not.be.true;
    expectPageScrollLocked(
      "a dismissible dialog must freeze the page behind it",
    );

    el.hide();
    await el.updateComplete;
    expect(document.body.style.position).to.equal("");
    expect(document.body.style.overflow).to.equal("");
    expect(document.documentElement.style.overflow).to.equal("");
  });

  it("holds the page still while the dialog repositions (AB#1647843)", async () => {
    // The gate lived in configureBibStrategy(), which Floating UI's autoUpdate
    // re-runs on every resize and scroll tick — so the old code did not merely
    // skip the lock, it released it repeatedly while the dialog was open. That
    // is why the consuming component could not work around it locally.
    //
    // This drives a real resize rather than calling configureBibStrategy()
    // directly. A direct call picks the strategy for the library, which skips
    // getPositioningStrategy() — the resolution that decides whether an
    // auro-dialog is an overlay at all, and the exact gap behind AB#1625424.
    // Reaching it through autoUpdate also keeps the assertion on observable
    // page state instead of the library's private _scrollLocked.
    snapshotPageScrollStyles();
    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    onCleanup(() => el.hide());
    onCleanup(() => setViewport(passViewport));

    el.show();
    await el.updateComplete;
    expectPageScrollLocked("dialog is open");

    // Without this the test passes trivially: isPopoverVisible is the guard on
    // the lock call, so a false value makes the reposition below a no-op under
    // both the old and new code.
    expect(
      el.isPopoverVisible,
      "the reposition must actually reach the scroll lock",
    ).to.be.true;

    let repositions = 0;
    const originalPosition = el.floater.position.bind(el.floater);
    el.floater.position = () => {
      repositions += 1;
      originalPosition();
    };

    // Stay on this pass's side of the fullscreen breakpoint: each viewport pass
    // asserts the strategy it actually resolves to ("dialog" on desktop, which
    // is the one that used to release the lock; "fullscreen" on mobile).
    await setViewport({ width: passViewport.width - 40, height: 700 });
    await waitUntil(
      () => repositions > 0,
      "autoUpdate did not reposition the dialog after the resize",
      { timeout: 1000 },
    );

    expectPageScrollLocked("after repositioning while open");
  });

  it("scroll lock restores page styles the consumer had already set", async () => {
    snapshotPageScrollStyles();
    // A host application may legitimately own these already; the lock must hand
    // them back rather than wipe them to empty.
    document.body.style.overflow = "scroll";
    document.documentElement.style.scrollbarGutter = "auto";

    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    onCleanup(() => el.hide());
    el.show();
    await el.updateComplete;

    expect(document.body.style.overflow).to.equal("hidden");
    expect(document.documentElement.style.scrollbarGutter).to.equal("stable");

    el.hide();
    await el.updateComplete;

    expect(
      document.body.style.overflow,
      "pre-existing body overflow must be restored, not cleared",
    ).to.equal("scroll");
    expect(document.documentElement.style.scrollbarGutter).to.equal("auto");
  });

  it("scroll lock restores the scroll offset the page was at", async () => {
    snapshotPageScrollStyles();
    const savedBodyHeight = document.body.style.height;
    onCleanup(() => {
      window.scrollTo(0, 0);
      document.body.style.height = savedBodyHeight;
    });
    // The page has to actually be scrollable, or this asserts nothing: at
    // offset 0 the lock writes top:-0px, which the browser normalizes to 0px.
    document.body.style.height = "3000px";
    window.scrollTo(0, 120);
    const scrollOffset = window.scrollY;
    expect(scrollOffset, "test page must be scrolled").to.be.greaterThan(0);

    const el = await fixture(html`<auro-dialog></auro-dialog>`);
    onCleanup(() => el.hide());
    el.show();
    await el.updateComplete;

    // body.top holds the negated offset while locked; that is what the page is
    // scrolled back to on close.
    expect(document.body.style.top).to.equal(`-${scrollOffset}px`);

    // Prove the outcome rather than only the mechanism: with the body taken out
    // of flow the document has no scrollable overflow left, so an attempt to
    // scroll the page behind the dialog does nothing.
    window.scrollTo(0, 500);
    expect(
      window.scrollY,
      "the page must not scroll while the dialog is open",
    ).to.equal(0);

    el.hide();
    await el.updateComplete;

    expect(document.body.style.top).to.equal("");
    expect(
      window.scrollY,
      "closing must return the page to where the reader left it",
    ).to.equal(scrollOffset);
  });

  it("disconnectedCallback releases the page scroll lock while open", async () => {
    snapshotPageScrollStyles();
    const el = document.createElement("auro-dialog");
    onCleanup(() => el.remove());
    document.body.appendChild(el);
    await el.updateComplete;
    el.show();
    await el.updateComplete;

    expectPageScrollLocked("dialog is open");

    // A real removal, not a direct disconnectedCallback() call: teardown is now
    // deferred a microtask and skipped when the element is still connected, so
    // invoking the hook by hand would correctly do nothing.
    //
    // Removing the node while its popover is open is safe: the platform takes a
    // disconnected element out of the top layer itself, and the crash this file
    // once avoided by never removing an open dialog does not reproduce on
    // current headless Chrome — this test and the two below exercise exactly
    // that removal, in both viewport passes.
    el.remove();
    await Promise.resolve();

    expect(
      document.body.style.position,
      "unmounting while open must not leave the page frozen",
    ).to.equal("");
    expect(document.body.style.overflow).to.equal("");
    expect(document.documentElement.style.overflow).to.equal("");
  });

  it("keeps an open dialog intact when it is moved in the DOM (AB#1625424)", async () => {
    // disconnectedCallback also fires on a same-document move. Tearing down
    // there released the scroll lock and killed autoUpdate, so the dialog came
    // back visible over a page that scrolled freely behind it.
    snapshotPageScrollStyles();
    const firstHost = document.createElement("div");
    const secondHost = document.createElement("div");
    onCleanup(() => {
      firstHost.remove();
      secondHost.remove();
    });
    document.body.append(firstHost, secondHost);

    const el = document.createElement("auro-dialog");
    onCleanup(() => el.remove());
    firstHost.appendChild(el);
    await el.updateComplete;
    el.show();
    await el.updateComplete;
    expectPageScrollLocked("dialog is open before the move");

    let configures = 0;
    const originalConfigure = el.floater.configure.bind(el.floater);
    el.floater.configure = (...args) => {
      configures += 1;
      originalConfigure(...args);
    };

    // appendChild of an already-parented node moves it: disconnect + reconnect
    // in one task.
    secondHost.appendChild(el);
    await Promise.resolve();
    await el.updateComplete;

    expect(el.isConnected, "the dialog is still in the document").to.be.true;
    expect(el.open, "a DOM move must not close an open dialog").to.be.true;
    expectPageScrollLocked(
      "a DOM move must not release the lock behind an open dialog",
    );
    // Nothing was torn down, so connectedCallback() must not rewire either: a
    // second configure() on a live floater is wasted work at best.
    expect(
      configures,
      "a DOM move must not re-configure a floater that is still wired",
    ).to.equal(0);
  });

  it("rewires an open dialog that is remounted in a later task (AB#1625424)", async () => {
    // The other side of the deferred teardown. A cross-task remove/re-insert is
    // a real unmount — Vue <keep-alive>, a caching tab host, a virtualized list,
    // or a node parked in a DocumentFragment in one task and inserted in the
    // next — so _teardown() runs and releases everything. Lit does not re-run
    // firstUpdated() on reconnect, so without connectedCallback() rewiring the
    // floater the remounted dialog comes back permanently dead: no trigger
    // listeners, no autoUpdate, and a page that no longer locks behind it.
    snapshotPageScrollStyles();
    const host = document.createElement("div");
    document.body.appendChild(host);
    onCleanup(() => host.remove());

    const el = document.createElement("auro-dialog");
    onCleanup(() => el.remove());
    host.appendChild(el);
    await el.updateComplete;
    el.show();
    await el.updateComplete;
    expectPageScrollLocked("dialog is open before the unmount");

    let configures = 0;
    const originalConfigure = el.floater.configure.bind(el.floater);
    el.floater.configure = (...args) => {
      configures += 1;
      originalConfigure(...args);
    };

    // A genuine unmount: the deferred teardown runs, and the release it performs
    // is what the test above asserts.
    el.remove();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(el._floaterTornDown, "a cross-task removal is a real unmount").to.be
      .true;

    host.appendChild(el);
    await el.updateComplete;

    expect(el.isConnected).to.be.true;
    expect(el.open, "the dialog is still open across the remount").to.be.true;
    expect(
      configures,
      "the remount must rewire the floater exactly once",
    ).to.equal(1);
    expect(el._floaterTornDown, "the floater is live again").to.be.false;
    // The page ends up locked again too, which is the user-visible contract.
    // It is asserted second because it is not the discriminating signal on its
    // own: configureBibStrategy() self-schedules retries for this component (the
    // bib has no shadow root), so the lock can be reapplied briefly after a
    // teardown even with nothing rewired.
    await waitUntil(
      () => document.body.style.position === "fixed",
      "remounting an open dialog must lock the page again",
      { timeout: 1000 },
    );
    expectPageScrollLocked("after the remount");
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

    // A real removal, not a direct disconnectedCallback() call: teardown is now
    // deferred a microtask and skipped while the element is still connected, so
    // invoking the hook by hand would correctly do nothing.
    el.remove();
    await Promise.resolve();

    expect(el._focusFallbackTimerId).to.be.undefined;
    expect(el.focusTrap).to.be.undefined;
    expect(el._focusTrapActivated).to.be.false;
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
