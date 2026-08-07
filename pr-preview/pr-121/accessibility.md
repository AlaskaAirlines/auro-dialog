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

<pre class="language-html"><code class="language-html">&lt;auro-dialog unformatted&gt;
  &lt;span slot="content"&gt;
    &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
    Custom, edge-to-edge content.
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
<!-- The below content is automatically added from ./../apiExamples/accessibility.html -->
<div>
<auro-button id="openAccessibility">Unformatted Medium Dialog</auro-button>
</div>
<auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse">
<span slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
<div class="unformattedWrapper">
<h1 id="dialog-header" class="heading-lg">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
</div>
</span>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openAccessibility"&gt;Unformatted Medium Dialog&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse"&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
      These are words that are slotted into the scope of the custom element.
    &lt;/div&gt;
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="2" id="closeButtonLabel">Close Button Label</auro-header>
<p>The non-modal close button has an accessible label of <code>"Close"</code> by default. Provide the <code>ariaLabel.dialog.close</code> slot to override it — useful when the surrounding context calls for more specific wording.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
<div>
<auro-button id="openAriaLabelSlot">Unformatted Dialog w/ custom close button aria-label</auro-button>
</div>
<auro-dialog id="ariaLabelMdDialog" unformatted md lg ondark>
<span slot="ariaLabel.dialog.close">This will be the new aria label for the close button</span>
<span slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
<div class="unformattedWrapper">
<h1 id="dialog-header" class="heading-lg">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
</div>
</span>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openAriaLabelSlot"&gt;Unformatted Dialog w/ custom close button aria-label&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-dialog id="ariaLabelMdDialog" unformatted md lg ondark&gt;
  &lt;span slot="ariaLabel.dialog.close"&gt;This will be the new aria label for the close button&lt;/span&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
      These are words that are slotted into the scope of the custom element.
    &lt;/div&gt;
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
</div>
</div>
</div>
