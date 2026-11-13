<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Dialog

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
<p>The <code>&lt;auro-dialog&gt;</code> component interrupts the page and moves focus into the dialog. Use it when people need to notice the content right away.</p>
<p>Use <code>modal</code> when people must act before they continue. A modal dialog can't be dismissed passively, so add a footer button that closes it.</p>
<p>Auro follows the <a class="hyperlink" href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</a>'s guidance on dialogs and modals.</p>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
<p>Use <code>&lt;auro-dialog&gt;</code> when people need to:</p>
<ul>
<li>Take an action before they do anything else or go back</li>
<li>View content that they can close when they're done</li>
</ul>
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-dialog/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-dialog/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-dialog?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-dialog)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-dialog?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-dialog</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-dialog>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-dialog";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-dialog@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openBasic"&gt;Open default dialog&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="defaultDialog"&gt;
  &lt;span slot="header"&gt;Default dialog&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeBasic"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';
&#10;// Register with a custom name if desired
AuroDialog.register('custom-dialog');</code></pre>

This creates a new custom element `<custom-dialog>` that behaves exactly like `<auro-dialog>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<div>
<auro-button id="openCustom">Open default dialog</auro-button>
</div>
<custom-dialog id="customDialog">
<span slot="header">Default dialog</span>
<div slot="content">
<p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
<p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
<auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
<ul>
<li>Caerphilly croque monsieur fondue</li>
<li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
<li>Cheddar cheese and biscuits chalk and cheese</li>
<li>Camembert de normandie stinking bishop bavarian bergkase</li>
</ul>
</div>
<div slot="footer">
<auro-button variant="secondary" id="closeCustom">Close</auro-button>
</div>
</custom-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openCustom"&gt;Open default dialog&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;custom-dialog id="customDialog"&gt;
  &lt;span slot="header"&gt;Default dialog&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeCustom"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/custom-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
