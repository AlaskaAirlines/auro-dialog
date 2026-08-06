<auro-header level="1" id="overview">Dialog - Keyboard Behavior</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#tabBehavior">Tab Behavior</auro-anchorlink>
<auro-anchorlink fluid href="#keyEvents">Key Events</auro-anchorlink>
<auro-anchorlink fluid href="#modalDifferences">Modal Differences</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="tabBehavior">Tab Behavior</auro-header>
<p>While the dialog is open, focus is trapped inside it. <code>Tab</code> moves forward through the dialog's focusable elements and <code>Shift</code> + <code>Tab</code> moves backward, both wrapping at the ends so focus never leaves the dialog. When the dialog closes, focus returns to the element that opened it (or to the element set via <code>triggerElement</code>).</p>
<auro-header level="2" id="keyEvents">Key Events</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/keyboard-behavior/keyEvents.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="modalDifferences">Modal Differences</auro-header>
<p>The <code>modal</code> attribute changes the dismissal keys. Because a modal dialog requires an explicit action to close, the native <code>Esc</code> / cancel behavior is intercepted and prevented — pressing <code>Esc</code> will not close a modal dialog. Non-modal dialogs close on <code>Esc</code> as expected. In both modes, <code>Tab</code> focus trapping behaves identically.</p>
</div>
</div>
</div>
