<auro-header level="1" id="overview">Dialog - VoiceOver Behavior</auro-header>
<p>This page documents the screen reader experience when using the <code>&lt;auro-dialog&gt;</code> component. Because the component is built on the native <code>&lt;dialog&gt;</code> element, announcements follow the platform's standard dialog conventions.</p>
<auro-header level="2" id="openAnnouncement">Opening the Dialog</auro-header>
<p>When the dialog opens, focus is moved into it and the screen reader announces:</p>
<ol>
<li><strong>Role:</strong> <em>"dialog"</em> (from the native <code>&lt;dialog&gt;</code> element).</li>
<li><strong>Accessible name:</strong> the <code>header</code> slot content, via <code>aria-labelledby</code>.</li>
<li><strong>Description:</strong> the <code>content</code> slot, via <code>aria-describedby</code>.</li>
<li><strong>First control:</strong> the first focusable element inside the dialog receives focus and is announced.</li>
</ol>
<auro-header level="2" id="navigatingContent">Navigating Content</auro-header>
<p>Within the dialog, the user navigates with the standard reading and Tab commands. Focus is trapped, so swiping or tabbing past the last element wraps back to the first and never lands on the obscured page behind the dialog. For a modal dialog, the rest of the page is <code>inert</code>, so the screen reader's virtual cursor cannot reach it either.</p>
<auro-header level="2" id="closeGesture">Closing the Dialog</auro-header>
<ul>
<li><strong>Non-modal:</strong> the dialog can be dismissed with the close button (announced using the <code>ariaLabel.dialog.close</code> slot text, or <em>"Close"</em> by default), the <code>Esc</code> key, or the platform dismiss gesture.</li>
<li><strong>Modal:</strong> passive dismissal is disabled. The dismiss gesture and <code>Esc</code> have no effect — the user must activate the explicit action in the footer.</li>
</ul>
<div class="note"><strong>iOS VoiceOver:</strong> the two-finger <em>"scrub"</em> (a <em>"Z"</em> shape) acts as the <code>Esc</code> key. <strong>Android TalkBack:</strong> the back gesture (swipe inward from a screen edge) dismisses a non-modal dialog.</div>
<p>When the dialog closes, focus returns to the triggering element, so the screen reader resumes from where the user left off on the page.</p>
