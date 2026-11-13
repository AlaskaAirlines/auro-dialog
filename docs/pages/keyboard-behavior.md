<auro-header level="1" id="overview">Dialog - Keyboard behavior</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View more</span>
<span slot="mobileToggleExpanded">View less</span>
<auro-anchorlink fluid href="#tabBehavior">Tab behavior</auro-anchorlink>
<auro-anchorlink fluid href="#keyEvents">Key events</auro-anchorlink>
<auro-anchorlink fluid href="#modalDifferences">Modal differences</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="tabBehavior">Tab behavior</auro-header>
<p>While the dialog is open, focus is trapped inside it. <code>Tab</code> moves forward through the dialog's focusable elements and <code>Shift</code> + <code>Tab</code> moves backward, both wrapping at the ends so focus never leaves the dialog. When the dialog closes, focus returns to the element that was active when the dialog opened. The <code>triggerElement</code> property is a fallback for when no element was active.</p>
<auro-header level="2" id="keyEvents">Key events</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/keyboard-behavior/keyEvents.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-header level="2" id="modalDifferences">Modal differences</auro-header>
<p>The <code>modal</code> attribute changes the dismissal keys. Because a modal dialog requires an explicit action to close, the native <code>Esc</code> or cancel behavior is intercepted and prevented, so pressing <code>Esc</code> doesn't close a modal dialog. Non-modal dialogs close on <code>Esc</code> as expected. In both modes, <code>Tab</code> focus trapping behaves identically.</p>
</div>
</div>
</div>
