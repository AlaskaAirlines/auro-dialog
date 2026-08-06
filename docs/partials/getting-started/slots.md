<auro-header level="2" id="slots">Slots</auro-header>
<p>The following slots are available on the <code>&lt;auro-dialog&gt;</code> element.</p>
<auro-header level="3" id="slot-header">header</auro-header>
<p>Text to display as the header of the dialog. Rendered inside the dialog's labelled heading (<code>id="dialog-header"</code>), which provides the dialog's accessible name.</p>
<auro-header level="3" id="slot-content">content</auro-header>
<p>Injects content into the body of the dialog. In an <code>unformatted</code> dialog this slot fills the entire dialog window edge-to-edge.</p>
<auro-header level="3" id="slot-footer">footer</auro-header>
<p>Used for action options, e.g. buttons. In a <code>modal</code> dialog this slot must contain the control that dismisses the dialog, since no default close button is rendered.</p>
<auro-header level="3" id="slot-ariaLabel-dialog-close">ariaLabel.dialog.close</auro-header>
<p>Text to describe the "x" icon close button for screen readers. If no text is provided, the default text <code>"Close"</code> is used. Has no effect on <code>modal</code> dialogs, which do not render a close button.</p>
