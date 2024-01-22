import { AuroDialog } from './src/auro-dialog';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-dialog') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroDialog {});
  }
}

export { registerComponent }
