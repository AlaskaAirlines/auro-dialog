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
<!-- The below content is automatically added from ./../docs/partials/keyboard-behavior/keyEvents.md -->
<p>The <code>&lt;auro-dialog&gt;</code> component responds to the following keys while it's open.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Tab</code></td>
<td>Moves focus to the next focusable element inside the dialog. Focus is trapped within the dialog, so tabbing past the last element wraps to the first.</td>
</tr>
<tr>
<td><code>Shift</code> + <code>Tab</code></td>
<td>Moves focus to the previous focusable element inside the dialog, wrapping from the first element to the last.</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td>Dismisses a non-<code>modal</code> dialog. In a <code>modal</code> dialog the default cancel action is prevented, so <code>Esc</code> doesn't close it. People must use an explicit action in the footer.</td>
</tr>
<tr>
<td><code>Enter</code> / <code>Space</code></td>
<td>Activates the focused control (for example, a footer button), following the native behavior of that control.</td>
</tr>
</tbody>
</table>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-header level="2" id="modalDifferences">Modal differences</auro-header>
<p>The <code>modal</code> attribute changes the dismissal keys. Because a modal dialog requires an explicit action to close, the native <code>Esc</code> or cancel behavior is intercepted and prevented, so pressing <code>Esc</code> doesn't close a modal dialog. Non-modal dialogs close on <code>Esc</code> as expected. In both modes, <code>Tab</code> focus trapping behaves identically.</p>
</div>
</div>
</div>
