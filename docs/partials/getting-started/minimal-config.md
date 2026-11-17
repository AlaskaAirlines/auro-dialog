<auro-header level="2" id="minimalConfig">Minimal configuration</auro-header>
<p>A minimal <code>&lt;auro-dialog&gt;</code> has:</p>
<ul>
  <li><strong>A unique <code>id</code></strong>: Lets the control that opens the dialog find it.</li>
  <li><strong>Content in the <code>header</code> and <code>content</code> slots</strong>: The <code>header</code> slot labels the dialog for screen readers, and the <code>content</code> slot holds the body.</li>
  <li><strong>A trigger that sets <code>open</code></strong>: The dialog doesn't open on its own, so a control on the page must set its <code>open</code> attribute or property.</li>
</ul>
<p>Add a button in the <code>footer</code> slot so people can close the dialog. A <code>modal</code> dialog needs one, because it has no close button.</p>

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
<p>Control the open state with the <code>open</code> attribute, or set the <code>open</code> property to <code>true</code> in JavaScript. The example below toggles the attribute from a helper function:</p>

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

<p>The component also has <code>show()</code> and <code>hide()</code> methods, and dispatches a <code>toggle</code> event when it closes.</p>
