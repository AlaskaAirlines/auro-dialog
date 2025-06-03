import { fixture, html, expect, oneEvent, waitUntil, elementUpdated } from '@open-wc/testing';
import '../index.js';
// import './nested-shadow.js';

describe('auro-dialog', () => {
  it('auro-dialog is accessible', async () => {
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

  it('auro-dialog custom element is defined', async () => {
    const el = await !!customElements.get("auro-dialog");

    await expect(el).to.be.true;
  });

  it('dialog closes properly', async () => {
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

  it('auro-dialog modal-dialog does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });

  it('auro-dialog dialog renders a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.not.equal(null);
  });

  it('auro-dialog closes on non-blocking background click', async () => {
    const el = await fixture(html`
      <auro-dialog>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    const root = el.shadowRoot;
    const background = root.querySelector('#dialog-overlay');
    let listener = oneEvent(background, 'click');
    background.click();
    await listener;
    expect(el.getAttribute('dialogOverlay--open')).to.equal(null);
  });

  it('auro-dialog renders only a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog unformatted></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.not.equal(null);
  });

  it('auro-dialog renders no close icon', async () => {
    const el = await fixture(html`
      <auro-dialog unformatted modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

