<auro-header level="1" id="overview">Dialog - Customize</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#cssParts">CSS Shadow Parts</auro-anchorlink>
<auro-anchorlink fluid href="#closeButtonPart">Close Button</auro-anchorlink>
<auro-anchorlink fluid href="#tokens">Design Tokens</auro-anchorlink>
<auro-anchorlink fluid href="#customRegistration">Custom Registration</auro-anchorlink>
<auro-anchorlink fluid href="#layeredComponents">Layered Components</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="cssParts">CSS Shadow Parts</auro-header>
<p>The dialog exposes the following <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">CSS shadow parts</auro-hyperlink> for targeted styling, e.g. <code>auro-dialog::part(dialog-header)</code>.</p>
<table>
<thead>
<tr><th>Part</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>dialog</code></td><td>Apply CSS to the entire dialog.</td></tr>
<tr><td><code>dialog-header</code></td><td>Apply CSS to the header of the dialog.</td></tr>
<tr><td><code>dialog-content</code></td><td>Apply CSS to the content of the dialog.</td></tr>
<tr><td><code>dialog-footer</code></td><td>Apply CSS to the footer of the dialog.</td></tr>
<tr><td><code>close-button</code></td><td>Adjust the position of the close (&times;) icon in the dialog window.</td></tr>
<tr><td><code>dialog-overlay</code></td><td><strong>Deprecated.</strong> Use <code>--ds-auro-dialog-overlay-modal-background-color</code> or <code>--ds-auro-dialog-overlay-open-background-color</code> for backdrop styling instead.</td></tr>
</tbody>
</table>
<auro-header level="2" id="closeButtonPart">Close Button</auro-header>
<p>The close button can be repositioned via the <code>close-button</code> part.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/close-button.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/close-button.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<auro-header level="2" id="tokens">Design Tokens</auro-header>
<p>The component may be restyled by overriding the values of the following component-specific design token(s).</p>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="customRegistration">Custom Registration</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/customRegistration.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="layeredComponents">Layered Components</auro-header>
<p>A common pattern places floating components — such as a popover and a dropdown — inside the dialog, creating a stack of layered components.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
</div>
</div>
</div>
