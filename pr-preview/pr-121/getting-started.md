<auro-header level="1" id="overview">Dialog - Getting Started</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#setup">Setup</auro-anchorlink>
<auro-anchorlink fluid href="#recommendedAccordion" class="level2 body-xs" onclick="openAccordion('recommendedAccordion')">Recommended</auro-anchorlink>
<auro-anchorlink fluid href="#autoAccordion" class="level2 body-xs" onclick="openAccordion('autoAccordion')">Auto</auro-anchorlink>
<auro-anchorlink fluid href="#cdnAccordion" class="level2 body-xs" onclick="openAccordion('cdnAccordion')">CDN</auro-anchorlink>
<auro-anchorlink fluid href="#frameworks">Frameworks</auro-anchorlink>
<auro-anchorlink fluid href="#react" class="level2 body-xs" onclick="openAccordion('react')">React</auro-anchorlink>
<auro-anchorlink fluid href="#svelte" class="level2 body-xs" onclick="openAccordion('svelte')">Svelte</auro-anchorlink>
<auro-anchorlink fluid href="#minimalConfig">Minimal Config</auro-anchorlink>
<auro-anchorlink fluid href="#slots">Slots</auro-anchorlink>
<auro-anchorlink fluid href="#stateManagement">State Management</auro-anchorlink>
<auro-anchorlink fluid href="#open" class="level2 body-xs">open</auro-anchorlink>
<auro-anchorlink fluid href="#modal" class="level2 body-xs">modal</auro-anchorlink>
<auro-anchorlink fluid href="#triggerElement" class="level2 body-xs">triggerElement</auro-anchorlink>
<auro-anchorlink fluid href="#publicFunctions">Functions</auro-anchorlink>
<auro-anchorlink fluid href="#show" class="level2 body-xs">show()</auro-anchorlink>
<auro-anchorlink fluid href="#hide" class="level2 body-xs">hide()</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="setup">Setup</auro-header>
<auro-accordion-group Emphasis>
<auro-accordion expanded class="section" id="recommendedAccordion">
<span slot="trigger">Recommended Installation and Implementation</span>
<div class="accordion-content">
<auro-header level="3">Install</auro-header>
<p>Install the <code>@aurodesignsystem/auro-dialog</code> package from npm:</p>

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-dialog</code></pre>

<p>Installing as a dependency automatically installs its own dependencies (<code>auro-button</code> and <code>auro-icon</code>), which are registered internally under versioned tag names — you do not need to register them yourself.</p>
<auro-header level="3">Implementation</auro-header>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/customRegistration.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/customRegistration.md -->
<p>Every Auro component consists of a JavaScript <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</auro-hyperlink> and a <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">custom element registration</auro-hyperlink>. The class defines the component's behavior, and the registration maps it to an HTML tag name so it can be used in markup.</p>
<p>The default import handles both steps automatically, registering the component under its standard <code>&lt;auro-dialog&gt;</code> tag name.</p>
<p>If you need multiple versions of the same component on a single page — for example, when two projects depend on different versions — you can register the class under a custom tag name to avoid conflicts. Import the component class directly and call its <code>register(name)</code> method with a unique name:</p>

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
// Register with a custom name
AuroDialog.register('custom-dialog');</code></pre>

<p>This creates a new custom element <code>&lt;custom-dialog&gt;</code> that behaves exactly like <code>&lt;auro-dialog&gt;</code>, allowing both to coexist on the same page without interfering with each other.</p>

<pre class="language-html"><code class="language-html">&lt;custom-dialog id="custom-dialog-example"&gt;
  &lt;span slot="header"&gt;Dialog header&lt;/span&gt;
  &lt;div slot="content"&gt;Dialog content&lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeCustom"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/custom-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
</auro-accordion>
<auro-accordion class="section" id="autoAccordion">
<span slot="trigger">Auto Installation and Implementation</span>
<div class="accordion-content">
<p class="warning"><strong>Warning:</strong> Default registration can cause conflicts if another package registers the same tag name using a different version of the component, leading to unexpected behavior. Use custom registration to avoid this risk.</p>
<auro-header level="3">Implementation</auro-header>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/defaultRegistration.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/defaultRegistration.md -->
<p>Once installed, the component can be used in your project by importing the component's registered module:</p>

<pre class="language-js"><code class="language-js">import '@aurodesignsystem/auro-dialog';</code></pre>

<p>This import registers the <code>&lt;auro-dialog&gt;</code> custom element globally. You can then use it in your HTML:</p>

<pre class="language-html"><code class="language-html">&lt;auro-dialog id="default-dialog"&gt;
  &lt;span slot="header"&gt;Dialog header&lt;/span&gt;
  &lt;div slot="content"&gt;Dialog content&lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeDefault"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
</auro-accordion>
<auro-accordion class="section" id="cdnAccordion">
<span slot="trigger">CDN Installation</span>
<div class="accordion-content">
<p class="warning"><strong>Warning:</strong> CDN registration can cause conflicts if another package registers the same tag name using a different version of the component, leading to unexpected behavior. Use custom registration to avoid this risk.</p>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/cdnRegistration.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/cdnRegistration.md -->
<p>Add the following script tag to your HTML to load the component directly from a CDN:</p>

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-dialog@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<p>This script registers the <code>&lt;auro-dialog&gt;</code> custom element globally. You can then use it in your HTML:</p>

<pre class="language-html"><code class="language-html">&lt;auro-dialog id="cdn-dialog"&gt;
  &lt;span slot="header"&gt;Dialog header&lt;/span&gt;
  &lt;div slot="content"&gt;Dialog content&lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeCdn"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
</auro-accordion>
</auro-accordion-group>
<auro-header level="2" id="frameworks">Frameworks</auro-header>
<auro-accordion-group Emphasis>
<auro-accordion class="section" id="react">
<span slot="trigger">React</span>
<div class="accordion-content">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/react.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/react.md -->
React 19 includes <auro-hyperlink href="https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements">native support for custom elements</auro-hyperlink>, so <code>&lt;auro-dialog&gt;</code> works directly in JSX without any wrapper library.

<auro-header level="3" id="reactImport">Import the Component</auro-header>
Import and register the component at the top level of your application (e.g. in your root `main.tsx` or `App.tsx`):

<pre class="language-js"><code class="language-js">import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
AuroDialog.register('custom-dialog');</code></pre>

<auro-header level="3" id="reactTypeScript">TypeScript Declarations</auro-header>
The component ships with TypeScript type definitions for the `AuroDialog` class. However, React's JSX does not automatically map custom element tag names to their types. React 19 removed the global `JSX` namespace, so custom element types are registered by augmenting the `react` module rather than using `declare global`. Add the following declaration to a `.d.ts` file in your project:

<pre class="language-ts"><code class="language-ts">import type { HTMLAttributes } from 'react';
import type { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'custom-dialog': HTMLAttributes&lt;AuroDialog&gt; &amp; Partial&lt;AuroDialog&gt;;
    }
  }
}</code></pre>

If your `tsconfig.json` uses the automatic runtime (`"jsx": "react-jsx"`, the React 19 default) and the types are not picked up, augment `'react/jsx-runtime'` instead of `'react'`.

<auro-header level="3" id="reactState">Controlling the Open State</auro-header>
The dialog's visibility is controlled by the `open` attribute. Use component state to toggle it, and listen for the component's `toggle` event (which fires when the dialog closes) to keep your state in sync:

<pre class="language-jsx"><code class="language-jsx">import { useState, useRef, useEffect } from 'react';
​
export default function Example() {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);
​
  useEffect(() =&gt; {
    const dialog = dialogRef.current;
    const handleToggle = () =&gt; setOpen(false);
    dialog?.addEventListener('toggle', handleToggle);
    return () =&gt; dialog?.removeEventListener('toggle', handleToggle);
  }, []);
​
  return (
    &lt;&gt;
      &lt;auro-button onClick={() =&gt; setOpen(true)}&gt;Open dialog&lt;/auro-button&gt;
      &lt;custom-dialog ref={dialogRef} open={open || undefined}&gt;
        &lt;span slot="header"&gt;Dialog header&lt;/span&gt;
        &lt;div slot="content"&gt;Dialog content&lt;/div&gt;
        &lt;div slot="footer"&gt;
          &lt;auro-button onClick={() =&gt; setOpen(false)}&gt;Close&lt;/auro-button&gt;
        &lt;/div&gt;
      &lt;/custom-dialog&gt;
    &lt;/&gt;
  );
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
</auro-accordion>
<auro-accordion class="section" id="svelte">
<span slot="trigger">Svelte</span>
<div class="accordion-content">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/svelte.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/svelte.md -->
Svelte works with custom elements out of the box, so <code>&lt;auro-dialog&gt;</code> can be used directly in your markup.

<auro-header level="3" id="svelteImport">Import the Component</auro-header>
Import and register the component in a script block — either once at the app root, or in the component that uses it:

<pre class="language-html"><code class="language-html">&lt;script lang="ts"&gt;
  import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
  AuroDialog.register('custom-dialog');
&lt;/script&gt;</code></pre>

<auro-header level="3" id="svelteTypeScript">TypeScript Declarations</auro-header>
Svelte does not automatically know about custom element attributes. To get autocomplete and type checking for `<auro-dialog>` props in templates, add the following to a `.d.ts` file in your project (e.g. `src/auro-elements.d.ts`):

<pre class="language-ts"><code class="language-ts">import type { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
declare namespace svelteHTML {
  interface IntrinsicElements {
    'custom-dialog': Partial&lt;AuroDialog&gt; &amp; svelteHTML.HTMLAttributes&lt;AuroDialog&gt;;
  }
}</code></pre>

<auro-header level="3" id="svelteState">Controlling the Open State</auro-header>
Bind the `open` attribute to a reactive state value, and listen for the component's `toggle` event to reset it when the dialog is dismissed:

<pre class="language-html"><code class="language-html">&lt;script lang="ts"&gt;
  import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
​
  AuroDialog.register('custom-dialog');
​
  let open = $state(false);
&lt;/script&gt;
&lt;auro-button onclick={() =&gt; (open = true)}&gt;Open dialog&lt;/auro-button&gt;
&lt;custom-dialog {open} ontoggle={() =&gt; (open = false)}&gt;
  &lt;span slot="header"&gt;Dialog header&lt;/span&gt;
  &lt;div slot="content"&gt;Dialog content&lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button onclick={() =&gt; (open = false)}&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/custom-dialog&gt;</code></pre>

<auro-header level="3" id="svelteModuleResolution">Module Resolution</auro-header>
Ensure your `tsconfig.json` uses `"moduleResolution": "bundler"` so TypeScript can resolve the component's package exports:

<pre class="language-json"><code class="language-json">{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
</auro-accordion>
</auro-accordion-group>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/minimal-config.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/minimal-config.md -->
<auro-header level="2" id="minimalConfig">Minimal Configuration</auro-header>
<p>Every <code>&lt;auro-dialog&gt;</code> implementation requires:</p>
<ul>
<li><strong>A unique <code>id</code> attribute</strong> — so the dialog can be targeted by the trigger that opens it.</li>
<li><strong>Content in the <code>header</code>, <code>content</code>, and <code>footer</code> slots</strong> — the three structural regions of a formatted dialog. The <code>footer</code> is reserved for action buttons.</li>
<li><strong>A trigger that toggles the <code>open</code> state</strong> — the dialog does not open on its own; a control on the page sets its <code>open</code> attribute (or <code>open</code> property) to <code>true</code>.</li>
</ul>

<pre class="language-html"><code class="language-html">&lt;auro-dialog id="minimal"&gt;
  &lt;span slot="header"&gt;Header content&lt;/span&gt;
  &lt;div slot="content"&gt;Body content&lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeMinimal"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>

<auro-header level="3" id="minimalConfigTrigger">Opening and closing the dialog</auro-header>
<p>The <code>open</code> state is controlled via the <code>open</code> attribute, or programmatically by setting the <code>open</code> property to <code>true</code>. The example below toggles the attribute from a helper function:</p>

<pre class="language-js"><code class="language-js">function toggleDialog(dialogID) {
  const dialog = document.querySelector(dialogID);
​
  if (dialog.hasAttribute('open')) {
    dialog.removeAttribute('open');
  } else {
    dialog.setAttribute('open', true);
  }
}</code></pre>

<pre class="language-html"><code class="language-html">&lt;auro-button onClick="toggleDialog('#minimal')"&gt;Open dialog&lt;/auro-button&gt;</code></pre>

<p>The component also exposes <code>show()</code> and <code>hide()</code> methods for imperative control, and dispatches a <code>toggle</code> event when it closes.</p>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/slots.md) -->
<!-- The below content is automatically added from ./../docs/partials/getting-started/slots.md -->
<auro-header level="2" id="slots">Slots</auro-header>
<p>The following slots are available on the <code>&lt;auro-dialog&gt;</code> element.</p>
<auro-header level="3" id="slot-header">header</auro-header>
<p>Text to display as the header of the dialog. Rendered inside the dialog's labelled heading (<code>id="dialog-header"</code>), which provides the dialog's accessible name.</p>
<auro-header level="3" id="slot-content">content</auro-header>
<p>Injects content into the body of the dialog. In an <code>unformatted</code> dialog this slot fills the entire dialog window edge-to-edge.</p>
<auro-header level="3" id="slot-footer">footer</auro-header>
<p>Used for action options, e.g. buttons. In a <code>modal</code> dialog this slot must contain the control that dismisses the dialog, since no default close button is rendered.</p>
<auro-header level="3" id="slot-ariaLabel-dialog-close">ariaLabel.dialog.close</auro-header>
<p>Text to describe the "x" icon close button for screen readers. If no text is provided, the default text <code>"Close"</code> is used. Has no effect on <code>modal</code> dialogs, which do not render a close button.</p>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-header level="2" id="stateManagement">State Management</auro-header>
<p>The following properties reflect and control the current state of the component and can be accessed via JavaScript.</p>
<auro-header level="3" id="open">open</auro-header>
<p>Gets or sets the visibility of the dialog. Setting <code>open</code> to <code>true</code> shows the dialog; setting it to <code>false</code> hides it. Reflected to the <code>open</code> attribute.</p>
<auro-header level="3" id="modal">modal</auro-header>
<p>When <code>true</code>, the dialog is blocking: the close button is not rendered, <code>Esc</code> and backdrop clicks do not dismiss it, and the user must resolve it with an explicit footer action.</p>
<auro-header level="3" id="triggerElement">triggerElement</auro-header>
<p>A fallback element to focus when the dialog closes. By default focus returns to whatever element was active (<code>document.activeElement</code>) when the dialog opened; <code>triggerElement</code> is used only when no element was active at that moment.</p>
<auro-header level="2" id="publicFunctions">Functions</auro-header>
<p>The following public methods provide imperative control over the dialog.</p>
<auro-header level="3" id="show">show()</auro-header>
<p>Opens the dialog. Equivalent to setting the <code>open</code> property to <code>true</code>.</p>
<auro-header level="3" id="hide">hide()</auro-header>
<p>Closes the dialog. Equivalent to setting the <code>open</code> property to <code>false</code>. Closing the dialog dispatches the <code>toggle</code> event.</p>
</div>
</div>
</div>
