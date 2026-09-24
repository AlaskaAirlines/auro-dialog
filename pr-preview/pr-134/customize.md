<auro-header level="1" id="overview">Dialog - Customize</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#cssParts">CSS Shadow Parts</auro-anchorlink>
<auro-anchorlink fluid href="#closeButtonPart">Close Button</auro-anchorlink>
<auro-anchorlink fluid href="#tokens">Design Tokens</auro-anchorlink>
<auro-anchorlink fluid href="#customRegistration">Custom Registration</auro-anchorlink>
<auro-anchorlink fluid href="#layeredComponents">Layered Components</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="cssParts">CSS Shadow Parts</auro-header>
<p>The dialog exposes the following <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">CSS shadow parts</auro-hyperlink> for targeted styling, e.g. <code>auro-dialog::part(dialog-header)</code>.</p>
<table>
<thead>
<tr><th>Part</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>dialog</code></td><td>Apply CSS to the entire dialog.</td></tr>
<tr><td><code>dialog-header</code></td><td>Apply CSS to the header of the dialog.</td></tr>
<tr><td><code>dialog-content</code></td><td>Apply CSS to the content of the dialog.</td></tr>
<tr><td><code>dialog-footer</code></td><td>Apply CSS to the footer of the dialog.</td></tr>
<tr><td><code>close-button</code></td><td>Adjust the position of the close (&times;) icon in the dialog window.</td></tr>
<tr><td><code>dialog-overlay</code></td><td><strong>Deprecated.</strong> Use <code>--ds-auro-dialog-overlay-modal-background-color</code> or <code>--ds-auro-dialog-overlay-open-background-color</code> for backdrop styling instead.</td></tr>
</tbody>
</table>
<auro-header level="2" id="closeButtonPart">Close Button</auro-header>
<p>The close button can be repositioned via the <code>close-button</code> part.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/close-button.html) -->
<!-- The below content is automatically added from ./../apiExamples/close-button.html -->
<div>
<auro-button id="openEditDialog">Unformatted w/custom close button</auro-button>
</div>
<style>
  .example::part(close-button) {
    top: var(--ds-size-400);
    right: var(--ds-size-400);
  }
</style>
<auro-dialog id="unformattedCustomMdDialog" unformatted md lg class="example">
<span slot="content">
<img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" />
<div class="unformattedWrapper">
<h1 id="dialog-header" class="heading-lg">Unformatted w/custom close button</h1>
      Notice the custom location of the close button as well as the custom color.
</div>
</span>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/close-button.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/close-button.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openEditDialog"&gt;Unformatted w/custom close button&lt;/auro-button&gt;
&lt;/div&gt;
&lt;style&gt;
  .example::part(close-button) {
    top: var(--ds-size-400);
    right: var(--ds-size-400);
  }
&lt;/style&gt;
&lt;auro-dialog id="unformattedCustomMdDialog" unformatted md lg class="example"&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1 id="dialog-header" class="heading-lg"&gt;Unformatted w/custom close button&lt;/h1&gt;
      Notice the custom location of the close button as well as the custom color.
    &lt;/div&gt;
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="2" id="tokens">Design Tokens</auro-header>
<p>The component may be restyled by overriding the values of the following component-specific design token(s).</p>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
​
:host {
  --ds-auro-dialog-container-color: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-dialog-boxshadow-color: var(--ds-elevation-300, #{vac.$ds-elevation-300});
  --ds-auro-dialog-overlay-modal-background-color: var(--ds-advanced-color-shared-scrim, #{v.$ds-advanced-color-shared-scrim});
  --ds-auro-dialog-overlay-open-background-color: var(--ds-advanced-color-shared-scrim, #{v.$ds-advanced-color-shared-scrim});
  --ds-auro-dialog-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-header level="2" id="customRegistration">Custom Registration</auro-header>
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
<auro-header level="2" id="layeredComponents">Layered Components</auro-header>
<p>A common pattern places floating components — such as a popover and a dropdown — inside the dialog, creating a stack of layered components.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- The below content is automatically added from ./../apiExamples/popover-and-dropdown.html -->
<div>
<auro-button id="openPopAndDrop">Open dialog with popover</auro-button>
</div>
<auro-dialog id="popover-dialog" sm lg>
<span slot="header">Small Modal Dialog</span>
<div slot="content">
<p>
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
</p>
<p>
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
</p>
<auro-header level="3" display="500">
      Before checking your bags, remember to:
</auro-header>
<auro-popover>
<div class="content">
<ul>
<li>Caerphilly croque monsieur fondue</li>
<li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
<li>Cheddar cheese and biscuits chalk and cheese</li>
<li>Camembert de normandie stinking bishop bavarian bergkase</li>
</ul>
</div>
<auro-hyperlink slot="trigger" href="#">Hover on me</auro-hyperlink>
</auro-popover>
<auro-combobox>
<span slot="label">Name</span>
<auro-menu>
<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
<auro-menuoption static nomatch>No matching option</auro-menuoption>
</auro-menu>
</auro-combobox>
</div>
<div slot="footer">
<auro-button id="closePopAndDrop">
      I understand
<auro-icon category="interface" name="check-lg" emphasis appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/popover-and-dropdown.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openPopAndDrop"&gt;Open dialog with popover&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-dialog id="popover-dialog" sm lg&gt;
  &lt;span slot="header"&gt;Small Modal Dialog&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
    &lt;/p&gt;
    &lt;p&gt;
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
    &lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;
      Before checking your bags, remember to:
    &lt;/auro-header&gt;
    &lt;auro-popover&gt;
      &lt;div class="content"&gt;
        &lt;ul&gt;
          &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
          &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
          &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
          &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;auro-hyperlink slot="trigger" href="#"&gt;Hover on me&lt;/auro-hyperlink&gt;
    &lt;/auro-popover&gt;
    &lt;auro-combobox&gt;
      &lt;span slot="label"&gt;Name&lt;/span&gt;
      &lt;auro-menu&gt;
        &lt;auro-menuoption value="Apples" id="option-0"&gt;Apples&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Oranges" id="option-1"&gt;Oranges&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Peaches" id="option-2"&gt;Peaches&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Grapes" id="option-3"&gt;Grapes&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Cherries" id="option-4"&gt;Cherries&lt;/auro-menuoption&gt;
        &lt;auro-menuoption static nomatch&gt;No matching option&lt;/auro-menuoption&gt;
      &lt;/auro-menu&gt;
    &lt;/auro-combobox&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closePopAndDrop"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" emphasis appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
</div>
</div>
</div>
