import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-dialog.js';

describe('auro-dialog', () => {
  it('auro-dialog is accessible', async () => {
    const el = await fixture(html`
      <auro-dialog open="true">
        <span slot="header">Blocking dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dialog has footer content', async () => {
    const el = await fixture(html`
      <auro-dialog open="true">
        <span slot="header">Blocking dialog</span>
        <span slot="content">Hello World!</span>
        <span slot="footer"><button>Click</button></span>
      </auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dialog custom element is defined', async () => {
    const el = await !!customElements.get("auro-dialog");

    await expect(el).to.be.true;
  });

  it('auro-dialog blocking does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });

  it('auro-dialog non-blocking renders a close icon', async () => {
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
});
