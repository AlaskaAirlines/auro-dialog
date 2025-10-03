import { AuroDialog } from "../../src/auro-dialog.js";

/**
 * The auro-dialog appears above the page and requires the user's attention.
 */
class AuroDialogWCA extends AuroDialog {}

if (!customElements.get("auro-dialog")) {
  customElements.define("auro-dialog", AuroDialogWCA);
}
