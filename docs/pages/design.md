<auro-header level="1" id="overview">Dialog - Design</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#anatomy">Anatomy</auro-anchorlink>
<auro-anchorlink fluid href="#dialogVsModal">Dialog vs. Modal</auro-anchorlink>
<auro-anchorlink fluid href="#sizes">Sizes</auro-anchorlink>
<auro-anchorlink fluid href="#unformatted">Unformatted &amp; Padding</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="anatomy">Component Anatomy</auro-header>
<p>A formatted <code>&lt;auro-dialog&gt;</code> is composed of three stacked regions, each backed by a named slot:</p>
<ul>
<li><strong>Header</strong> (<code>header</code> slot) — a short, descriptive title. It is rendered as the dialog's labelled heading and provides the dialog's accessible name.</li>
<li><strong>Content</strong> (<code>content</code> slot) — the body of the dialog. Keep it focused on a single task or message.</li>
<li><strong>Footer</strong> (<code>footer</code> slot) — reserved for action buttons. Place the primary action here; for <code>modal</code> dialogs this region must contain the control that dismisses the dialog.</li>
</ul>
<p>A non-modal dialog also renders a close (&times;) button in the top corner of the header. The dialog is centered over a dimmed backdrop that overlays the rest of the page.</p>
<auro-header level="2" id="dialogVsModal">Dialog vs. Modal</auro-header>
<p>The component supports two behavioral modes. Choosing between them is the most important design decision when using <code>&lt;auro-dialog&gt;</code>.</p>
<auro-header level="3" id="dialogMode">Dialog (non-modal)</auro-header>
<p>The default mode. The user is presented with content they should attend to, but can dismiss it passively — via the close button, the <code>Esc</code> key, or by clicking the backdrop outside the dialog. Use this for supplemental information the user can accept or ignore.</p>
<auro-header level="3" id="modalMode">Modal (blocking)</auro-header>
<p>Enabled with the <code>modal</code> attribute. The user is locked into the content and must take an explicit action to continue — passive dismissal is disabled. Use this sparingly, only when the user genuinely must make a decision or acknowledge something before proceeding. A modal dialog must always provide an action in its footer, since no close button is rendered.</p>
<div class="note"><strong>Note:</strong> Auro follows the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> guidance on dialog and modal use. Prefer a non-modal dialog unless blocking the user is truly justified.</div>
<auro-header level="2" id="sizes">Sizes</auro-header>
<p>The dialog supports three sizes — <code>sm</code>, <code>md</code>, and <code>lg</code> — with <code>lg</code> as the default.</p>
<ul>
<li><strong>Desktop</strong> — size sets the width of the dialog; height is driven by content up to a maximum of 80% of the viewport.</li>
<li><strong>Mobile</strong> — size sets the maximum viewport height the dialog occupies; width is fixed at 100%.</li>
</ul>
<p>Sizes can be decoupled between breakpoints: adding <code>lg</code> in addition to <code>sm</code> or <code>md</code> forces the <code>lg</code> size on mobile while retaining the smaller size on desktop.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size-options.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size-options.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<auro-header level="3" id="mixedSizes">Mixed (decoupled) sizes</auro-header>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/decoupled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/decoupled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<auro-header level="2" id="unformatted">Unformatted &amp; Responsive Padding</auro-header>
<p>For freeform use cases that still want the dialog's behavior and tooling, the <code>unformatted</code> property renders an edge-to-edge window with no built-in header/content/footer structure. This is ideal for full-bleed media or a fully custom composition.</p>
<p>Part of the dialog design spec is its responsive padding. To apply that same padding to your own content inside an unformatted dialog, wrap it with the <code>unformattedWrapper</code> selector, imported from the package:</p>

```css
@import '@aurodesignsystem/auro-dialog/dist/style-unformatted.css';
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
</div>
</div>
</div>
