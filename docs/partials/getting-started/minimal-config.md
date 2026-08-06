<auro-header level="2" id="minimalConfig">Minimal Configuration</auro-header>
<p>Every <code>&lt;auro-dialog&gt;</code> implementation requires:</p>
<ul>
  <li><strong>A unique <code>id</code> attribute</strong> — so the dialog can be targeted by the trigger that opens it.</li>
  <li><strong>Content in the <code>header</code>, <code>content</code>, and <code>footer</code> slots</strong> — the three structural regions of a formatted dialog. The <code>footer</code> is reserved for action buttons.</li>
  <li><strong>A trigger that toggles the <code>open</code> state</strong> — the dialog does not open on its own; a control on the page sets its <code>open</code> attribute (or <code>open</code> property) to <code>true</code>.</li>
</ul>

```html
<auro-dialog id="minimal">
  <span slot="header">Header content</span>
  <div slot="content">Body content</div>
  <div slot="footer">
    <auro-button id="closeMinimal">Close</auro-button>
  </div>
</auro-dialog>
```

<auro-header level="3" id="minimalConfigTrigger">Opening and closing the dialog</auro-header>
<p>The <code>open</code> state is controlled via the <code>open</code> attribute, or programmatically by setting the <code>open</code> property to <code>true</code>. The example below toggles the attribute from a helper function:</p>

```js
function toggleDialog(dialogID) {
  const dialog = document.querySelector(dialogID);

  if (dialog.hasAttribute('open')) {
    dialog.removeAttribute('open');
  } else {
    dialog.setAttribute('open', true);
  }
}
```

```html
<auro-button onclick="toggleDialog('#minimal')">Open dialog</auro-button>
```

<p>The component also exposes <code>show()</code> and <code>hide()</code> methods for imperative control, and dispatches a <code>toggle</code> event when it closes.</p>
