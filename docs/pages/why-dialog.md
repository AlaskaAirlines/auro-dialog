<auro-header level="1" id="overview">Dialog - Why auro-dialog?</auro-header>
<p>The native HTML <code>&lt;dialog&gt;</code> element provides the foundation for overlays, but building a production-ready, accessible, on-brand dialog on top of it requires a substantial amount of repeated work. <code>&lt;auro-dialog&gt;</code> is built on the native element and layers on the behavior, styling, and accessibility that Alaska experiences need. This page explains what the component adds.</p>
<auro-header level="2" id="modalControl">Unified modal and non-modal modes</auro-header>
<p>Native <code>&lt;dialog&gt;</code> exposes two very different entry points — <code>show()</code> for non-modal and <code>showModal()</code> for modal — with different dismissal semantics you must wire up yourself.</p>
<p><code>&lt;auro-dialog&gt;</code> exposes a single <code>open</code> attribute plus a <code>modal</code> toggle, and handles the rest:</p>
<ul>
<li>Non-modal dialogs use the Popover API and dismiss on close button, <code>Esc</code>, or backdrop click.</li>
<li>Modal dialogs use <code>showModal()</code>, suppress passive dismissal, and hide the close button so the user must take an explicit action.</li>
</ul>
<auro-header level="2" id="focusManagement">Focus management</auro-header>
<p>With the native element you are responsible for moving focus into the dialog, trapping it, and restoring it afterward. <code>&lt;auro-dialog&gt;</code> does all three automatically: it focuses the first element on open, traps <code>Tab</code> focus while open, and restores focus to the triggering element (or a configurable <code>triggerElement</code>) on close.</p>
<auro-header level="2" id="responsiveLayout">Responsive layout</auro-header>
<p>Native dialogs have no built-in responsive behavior. <code>&lt;auro-dialog&gt;</code> adapts to the viewport — presenting as a full-width, size-scaled panel below the mobile breakpoint — and offers <code>sm</code>, <code>md</code>, and <code>lg</code> sizes that can be decoupled between desktop and mobile.</p>
<auro-header level="2" id="theming">Styling &amp; theming</auro-header>
<p>Styling a native <code>&lt;dialog&gt;</code> and its <code>::backdrop</code> from scratch is tedious and easy to get wrong. <code>&lt;auro-dialog&gt;</code> ships with Auro Design System styling out of the box, plus <code>::part()</code> selectors (<code>dialog</code>, <code>dialog-header</code>, <code>dialog-content</code>, <code>dialog-footer</code>, <code>close-button</code>) and design tokens for backdrop and surface colors.</p>
<auro-header level="2" id="accessibility">Accessibility</auro-header>
<p>The component wires up <code>aria-labelledby</code> and <code>aria-describedby</code> from the header and content slots, renders an accessible close button with a customizable label, and manages the <code>inert</code> background for modal dialogs — the details that are easy to omit when hand-rolling a dialog.</p>
<auro-header level="2" id="layeredComponents">Layered components</auro-header>
<p>Placing other floating UI (popovers, dropdowns) inside a native dialog can lead to top-layer stacking conflicts. <code>&lt;auro-dialog&gt;</code> coordinates with the shared Auro floating-UI runtime so layered components stack and dismiss correctly.</p>
<auro-header level="2" id="summary">Summary</auro-header>
<table>
<thead>
<tr><th>Capability</th><th><code>&lt;dialog&gt;</code></th><th><code>auro-dialog</code></th></tr>
</thead>
<tbody>
<tr><td>Modal / non-modal API</td><td>Two separate methods</td><td>Single <code>open</code> + <code>modal</code></td></tr>
<tr><td>Focus trap &amp; restore</td><td>Manual</td><td>Automatic</td></tr>
<tr><td>Responsive / mobile presentation</td><td>No</td><td>Automatic at breakpoint</td></tr>
<tr><td>Size options</td><td>No</td><td><code>sm</code> / <code>md</code> / <code>lg</code>, decoupled by breakpoint</td></tr>
<tr><td>Design system styling</td><td>Unstyled</td><td>On-brand, themeable</td></tr>
<tr><td>Backdrop styling</td><td>Manual <code>::backdrop</code></td><td>Design tokens</td></tr>
<tr><td>Accessible close button</td><td>Build your own</td><td>Built-in, labelable</td></tr>
<tr><td>ARIA labelling</td><td>Manual</td><td>Wired from slots</td></tr>
<tr><td>Layered floating components</td><td>Stacking conflicts</td><td>Coordinated top-layer</td></tr>
</tbody>
</table>
