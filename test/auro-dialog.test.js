import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-dialog';

describe('auro-dialog', () => {
  it('sets the CSS class on auro-dialog > div element', async () => {
    const el = await fixture(html`
      <auro-dialog cssclass="testClass"></auro-dialog>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-dialog is accessible', async () => {
    const el = await fixture(html`
      <auro-dialog cssclass="testClass"></auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dialog custom element is defined', async () => {
    const el = await !!customElements.get("auro-dialog");

    await expect(el).to.be.true;
  });
});
