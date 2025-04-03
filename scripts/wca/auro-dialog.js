
import { AuroDialog } from '../../src/auro-dialog.js';

/**
   * This will register this element with the browser.
   * */
class AuroDialogWCA extends AuroDialog {}

if (!customElements.get("auro-dialog")) {
  customElements.define("auro-dialog", AuroDialogWCA);
}
