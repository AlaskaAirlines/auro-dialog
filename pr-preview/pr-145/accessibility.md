<auro-header level="1" id="overview">Dialog - Accessibility</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View more</span>
<span slot="mobileToggleExpanded">View less</span>
<auro-anchorlink fluid href="#semantics">Semantics and roles</auro-anchorlink>
<auro-anchorlink fluid href="#labelling">Labelling</auro-anchorlink>
<auro-anchorlink fluid href="#focusManagement">Focus management</auro-anchorlink>
<auro-anchorlink fluid href="#backgroundScroll">Background scroll</auro-anchorlink>
<auro-anchorlink fluid href="#unformattedA11y">Unformatted dialogs</auro-anchorlink>
<auro-anchorlink fluid href="#closeButtonLabel">Close button label</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="semantics">Semantics and roles</auro-header>
<p>The component renders its content inside a native HTML <code>&lt;dialog&gt;</code> element, which carries the implicit <code>role="dialog"</code> and the built-in semantics that screen readers expect.</p>
<ul>
<li>A <strong>non-modal</strong> dialog is presented using the Popover API. Focus is trapped inside it and the page behind it is frozen while it's open, so it's exposed to screen readers as <code>aria-modal="true"</code>.</li>
<li>A <strong>modal</strong> dialog is opened with <code>showModal()</code>, which does all of the above and also makes the rest of the page <code>inert</code>. Content outside the dialog can't be focused or interacted with until the dialog closes.</li>
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
<p>In a formatted dialog, the <code>header</code> slot is rendered inside the <code>#dialog-header</code> heading for you, so providing header content gives you a correctly labelled dialog.</p>
<auro-header level="2" id="focusManagement">Focus management</auro-header>
<p>The component manages focus across the full open and close lifecycle:</p>
<ul>
<li><strong>On open</strong>: Once the open animation completes, focus moves to the first focusable element inside the dialog.</li>
<li><strong>While open</strong>: Focus is trapped within the dialog. <code>Tab</code> and <code>Shift</code> + <code>Tab</code> cycle through the dialog's focusable elements and wrap at the ends, and elements outside the dialog aren't reachable.</li>
<li><strong>On close</strong>: Focus returns to the element that was active (<code>document.activeElement</code>) when the dialog opened. The <code>triggerElement</code> property sets a fallback focus target, used only when no element was active at open time.</li>
<li><strong>Dismissing with the keyboard</strong>: <code>Escape</code> closes a <strong>non-modal</strong> dialog. A <strong>modal</strong> dialog deliberately ignores <code>Escape</code> and must be dismissed through an explicit action, such as a footer button. People can also dismiss a non-modal dialog by clicking the page behind it, but screen readers don't announce that option while <code>aria-modal="true"</code> is set. <code>Escape</code> is the equivalent path for keyboard and screen reader users.</li>
</ul>
<auro-header level="2" id="backgroundScroll">Background scroll</auro-header>
<p>Both presentations freeze the page behind the dialog for as long as it's open, and restore the previous scroll position when it closes. This is deliberate. Content drifting out of view behind an open dialog is disorienting, and on touch devices and with a screen reader the page can otherwise move unexpectedly while someone is reading the dialog.</p>
<p>The lock blocks every scroll vector: wheel, trackpad, touch, and the arrow and space keys. That includes the VoiceOver three-finger swipe, which <code>overflow: hidden</code> alone doesn't prevent. Content <em>inside</em> the dialog still scrolls normally.</p>
<auro-header level="2" id="unformattedA11y">Unformatted dialogs</auro-header>
<p>An <code>unformatted</code> dialog doesn't render the default header heading, so the <code>aria-labelledby="dialog-header"</code> relationship has nothing to point at unless you supply it. To keep the dialog properly labelled, add <code>id="dialog-header"</code> to the heading element within your slotted content:</p>

<pre class="language-html"><code class="language-html">&lt;auro-dialog unformatted&gt;
  &lt;span slot="content"&gt;
    &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
    Custom, edge-to-edge content.
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- The below content is automatically added from ./../apiExamples/accessibility-unformatted-header.html -->
<div>
<auro-button id="openAccessibility">Open unformatted medium dialog</auro-button>
</div>
<auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse">
<span slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" />
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility-unformatted-header.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openAccessibility"&gt;Open unformatted medium dialog&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse"&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
      These are words that are slotted into the scope of the custom element.
    &lt;/div&gt;
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="2" id="closeButtonLabel">Close button label</auro-header>
<p>The non-modal close button has an accessible label of <code>"Close"</code> by default. To override it when the surrounding context calls for more specific wording, provide the <code>ariaLabel.dialog.close</code> slot.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
<div>
<auro-button id="openAriaLabelSlot">Open dialog with a custom close button label</auro-button>
</div>
<auro-dialog id="ariaLabelMdDialog" unformatted md lg close-button-appearance="inverse">
<span slot="ariaLabel.dialog.close">Close photo dialog</span>
<span slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" />
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
  &lt;auro-button id="openAriaLabelSlot"&gt;Open dialog with a custom close button label&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="ariaLabelMdDialog" unformatted md lg close-button-appearance="inverse"&gt;
  &lt;span slot="ariaLabel.dialog.close"&gt;Close photo dialog&lt;/span&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" /&gt;
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
