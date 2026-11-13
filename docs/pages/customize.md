<auro-header level="1" id="overview">Dialog - Customize</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View more</span>
<span slot="mobileToggleExpanded">View less</span>
<auro-anchorlink fluid href="#cssParts">CSS shadow parts</auro-anchorlink>
<auro-anchorlink fluid href="#closeButtonPart">Close button</auro-anchorlink>
<auro-anchorlink fluid href="#tokens">Design tokens</auro-anchorlink>
<auro-anchorlink fluid href="#customRegistration">Custom registration</auro-anchorlink>
<auro-anchorlink fluid href="#layeredComponents">Layered components</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="cssParts">CSS shadow parts</auro-header>
<p>The dialog exposes the following <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">CSS shadow parts</auro-hyperlink> for targeted styling, for example <code>auro-dialog::part(dialog-header)</code>.</p>
<table>
<thead>
<tr><th>Part</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>dialog</code></td><td>The dialog window.</td></tr>
<tr><td><code>dialog-header</code></td><td>The header region, which holds the <code>header</code> slot and the close button. Isn't rendered when <code>unformatted</code> is set.</td></tr>
<tr><td><code>dialog-content</code></td><td>The body region that holds the <code>content</code> slot. Isn't rendered when <code>unformatted</code> is set.</td></tr>
<tr><td><code>dialog-footer</code></td><td>The footer region that holds the <code>footer</code> slot. Isn't rendered when <code>unformatted</code> is set.</td></tr>
<tr><td><code>close-button</code></td><td>The close (&times;) button in the dialog header. Isn't rendered when <code>modal</code> is set.</td></tr>
<tr><td><code>dialog-overlay</code></td><td>Deprecated: Use <code>--ds-auro-dialog-overlay-modal-background-color</code> or <code>--ds-auro-dialog-overlay-open-background-color</code> instead.</td></tr>
</tbody>
</table>
<auro-header level="2" id="closeButtonPart">Close button</auro-header>
<p>The close button can be repositioned via the <code>close-button</code> part.</p>
<auro-header level="2" id="tokens">Design tokens</auro-header>
<p>Override the following component-specific design tokens to restyle the component.</p>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="customRegistration">Custom registration</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/customRegistration.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="layeredComponents">Layered components</auro-header>
<p>A common pattern places floating components, such as a popover and a dropdown, inside the dialog to create a stack of layered components.</p>
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
