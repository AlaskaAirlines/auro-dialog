<auro-header level="1" id="overview">Dialog - Design</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View more</span>
<span slot="mobileToggleExpanded">View less</span>
<auro-anchorlink fluid href="#anatomy">Anatomy</auro-anchorlink>
<auro-anchorlink fluid href="#dialogVsModal">Dialog vs. modal</auro-anchorlink>
<auro-anchorlink fluid href="#sizes">Sizes</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="anatomy">Component anatomy</auro-header>
<p>A formatted <code>&lt;auro-dialog&gt;</code> is composed of three stacked regions, each backed by a named slot:</p>
<ul>
<li><strong>Header</strong> (<code>header</code> slot): A short, descriptive title. It's rendered as the dialog's labelled heading and provides the dialog's accessible name.</li>
<li><strong>Content</strong> (<code>content</code> slot): The body of the dialog. Keep it focused on a single task or message.</li>
<li><strong>Footer</strong> (<code>footer</code> slot): Reserved for action buttons. Place the primary action here. For <code>modal</code> dialogs, this region must contain the control that dismisses the dialog.</li>
</ul>
<p>A non-modal dialog also renders a close (&times;) button in the top corner of the header. On desktop, the dialog appears centered horizontally near the top of the page, over a dimmed backdrop. On mobile, it slides up from the bottom of the screen.</p>
<auro-header level="2" id="dialogVsModal">Dialog vs. modal</auro-header>
<p>The component supports two behavioral modes. Choosing between them is the most important design decision when using <code>&lt;auro-dialog&gt;</code>.</p>
<auro-header level="3" id="dialogMode">Dialog (non-modal)</auro-header>
<p>The default mode. The user is presented with content they should attend to, but can dismiss it passively by using the close button, pressing the <code>Esc</code> key, or clicking the backdrop outside the dialog. Use this for supplemental information the user can accept or ignore.</p>
<auro-header level="3" id="modalMode">Modal (blocking)</auro-header>
<p>Enabled with the <code>modal</code> attribute. The user is locked into the content and must take an explicit action to continue, because passive dismissal is disabled. Use this sparingly, only when the user genuinely must make a decision or acknowledge something before proceeding. A modal dialog must always provide an action in its footer, since no close button is rendered.</p>
<div class="note"><strong>Note:</strong> Auro follows the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> guidance on dialog and modal use. Prefer a non-modal dialog unless blocking the user is truly justified.</div>
<auro-header level="2" id="sizes">Sizes</auro-header>
<p>The dialog supports three sizes: <code>sm</code>, <code>md</code>, and <code>lg</code>. The default is <code>lg</code>.</p>
<ul>
<li><strong>Desktop</strong>: Size sets the maximum width of the dialog. On wide screens, <code>md</code> and <code>lg</code> reach the same maximum width, and <code>sm</code> stays narrower. Height is driven by content, up to a maximum of 80% of the viewport.</li>
<li><strong>Mobile</strong>: Size sets the maximum viewport height the dialog occupies. Width is fixed at 100%.</li>
</ul>
<p>Sizes can be decoupled between breakpoints. Adding <code>lg</code> in addition to <code>sm</code> or <code>md</code> forces the <code>lg</code> size on mobile while retaining the smaller size on desktop.</p>
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
</div>
</div>
</div>
