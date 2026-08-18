<auro-header level="1" id="overview">Dialog - Accessibility</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#semantics">Semantics &amp; Roles</auro-anchorlink>
<auro-anchorlink fluid href="#labelling">Labelling</auro-anchorlink>
<auro-anchorlink fluid href="#focusManagement">Focus Management</auro-anchorlink>
<auro-anchorlink fluid href="#unformattedA11y">Unformatted Dialogs</auro-anchorlink>
<auro-anchorlink fluid href="#closeButtonLabel">Close Button Label</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="semantics">Semantics &amp; Roles</auro-header>
<p>The component renders its content inside a native HTML <code>&lt;dialog&gt;</code> element, which carries the implicit <code>role="dialog"</code> and the built-in semantics that assistive technology expects.</p>
<ul>
<li>A <strong>non-modal</strong> dialog is presented using the Popover API, so the page behind it remains reachable.</li>
<li>A <strong>modal</strong> dialog is opened with <code>showModal()</code>, which makes the rest of the page <code>inert</code> — content outside the dialog cannot be focused or interacted with until the dialog closes.</li>
</ul>
<auro-header level="2" id="labelling">Labelling</auro-header>
<p>The dialog wires up two ARIA relationships automatically:</p>
<table>
<thead>
<tr><th>Attribute</th><th>Points to</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td><code>aria-labelledby</code></td><td><code>#dialog-header</code></td><td>Gives the dialog its accessible name from the header content.</td></tr>
<tr><td><code>aria-describedby</code></td><td><code>#dialog-content</code></td><td>Associates the body content as the dialog's description.</td></tr>
</tbody>
</table>
<p>In a formatted dialog, the <code>header</code> slot is rendered inside the <code>#dialog-header</code> heading for you, so simply providing header content yields a correctly labelled dialog.</p>
<auro-header level="2" id="focusManagement">Focus Management</auro-header>
<p>The component manages focus across the full open/close lifecycle:</p>
<ul>
<li><strong>On open</strong> — once the open animation completes, focus is moved to the first focusable element inside the dialog.</li>
<li><strong>While open</strong> — focus is trapped within the dialog. <code>Tab</code> and <code>Shift</code> + <code>Tab</code> cycle through the dialog's focusable elements and wrap at the ends; elements outside the dialog are not reachable.</li>
<li><strong>On close</strong> — focus is restored to the element that was active (<code>document.activeElement</code>) when the dialog opened. The <code>triggerElement</code> property sets a fallback focus target, used only when no element was active at open time.</li>
</ul>
<auro-header level="2" id="unformattedA11y">Unformatted Dialogs</auro-header>
<p>An <code>unformatted</code> dialog does not render the default header heading, so the <code>aria-labelledby="dialog-header"</code> relationship has nothing to point at unless you supply it. To keep the dialog properly labelled, add <code>id="dialog-header"</code> to the heading element within your slotted content:</p>

```html
<auro-dialog unformatted>
  <span slot="content">
    <h1 id="dialog-header" class="heading-lg">This is a header</h1>
    Custom, edge-to-edge content.
  </span>
</auro-dialog>
```

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<auro-header level="2" id="closeButtonLabel">Close Button Label</auro-header>
<p>The non-modal close button has an accessible label of <code>"Close"</code> by default. Provide the <code>ariaLabel.dialog.close</code> slot to override it — useful when the surrounding context calls for more specific wording.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
</div>
</div>
</div>
