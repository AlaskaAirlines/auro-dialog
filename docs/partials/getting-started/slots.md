<auro-header level="2" id="slots">Slots</auro-header>
<p>The following slots are available on the <code>&lt;auro-dialog&gt;</code> element.</p>
<auro-header level="3" id="slot-header">header</auro-header>
<p>Text for the dialog's heading, which also names the dialog for screen readers. Isn't shown when <code>unformatted</code> is set.</p>
<auro-header level="3" id="slot-content">content</auro-header>
<p>Content for the body of the dialog. In an <code>unformatted</code> dialog, this slot fills the whole dialog window edge to edge.</p>
<auro-header level="3" id="slot-footer">footer</auro-header>
<p>Action buttons for the dialog, such as Close. A <code>modal</code> dialog needs a button here, because it has no close button. Isn't shown when <code>unformatted</code> is set.</p>
<auro-header level="3" id="slot-ariaLabel-dialog-close">ariaLabel.dialog.close</auro-header>
<p>Text screen readers read for the close button, for example "Close dialog". Defaults to "Close". Has no effect when <code>modal</code> is set, because a modal dialog has no close button.</p>
