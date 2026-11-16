<auro-header level="1" id="overview">Dialog - Overview and UX guide</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View more</span>
<span slot="mobileToggleExpanded">View less</span>
<auro-anchorlink fluid href="#description">Description</auro-anchorlink>
<auro-anchorlink fluid href="#useCases">Use cases</auro-anchorlink>
<auro-anchorlink fluid href="#userStories">User stories</auro-anchorlink>
<auro-anchorlink fluid href="#modalExample">Modal</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="description">Description</auro-header>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
<p>The <code>&lt;auro-dialog&gt;</code> component interrupts the page and moves focus into the dialog. Use it when people need to notice the content right away.</p>
<p>Use <code>modal</code> when people must act before they continue. A modal dialog can't be dismissed passively, so add a footer button that closes it.</p>
<p>Auro follows the <a class="hyperlink" href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</a>'s guidance on dialogs and modals.</p>
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<div>
<auro-button id="openBasic">Open default dialog</auro-button>
</div>
<auro-dialog id="defaultDialog">
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
<auro-button variant="secondary" id="closeBasic">Close</auro-button>
</div>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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
</auro-accordion>
<auro-header level="2" id="useCases">Use cases</auro-header>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
<p>Use <code>&lt;auro-dialog&gt;</code> when people need to:</p>
<ul>
<li>Take an action before they do anything else or go back</li>
<li>View content that they can close when they're done</li>
</ul>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-header level="2" id="userStories">User stories</auro-header>
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/index/userStories.md) -->
<!-- The below content is automatically added from ./../docs/partials/index/userStories.md -->
<p>The following user stories describe the primary ways the <code>&lt;auro-dialog&gt;</code> component is intended to be used.</p>
<auro-header level="3" id="story-dismissible">Dismissible dialog</auro-header>
<p>As a user, I want to be shown important supplemental information in a focused overlay that I can dismiss by pressing the close button, pressing <code>Esc</code>, or clicking outside the dialog, so I can return to the main content when I'm done reading.</p>
<auro-header level="3" id="story-modal">Modal (blocking) dialog</auro-header>
<p>As a user, I need to be prompted to make a decision or acknowledge information before I can continue, so the experience presents a modal dialog that I must resolve with an explicit action before returning to the page.</p>
<auro-header level="3" id="story-unformatted">Unformatted dialog</auro-header>
<p>As a developer, I want the open/close behavior, focus management, and accessibility tooling of the dialog while supplying my own edge-to-edge layout, so I can present rich media or a fully custom composition inside the dialog window.</p>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-header level="2" id="modalExample">Modal</auro-header>
<p>The <code>modal</code> attribute locks the user into interacting with the dialog. The close icon isn't rendered and clicking outside the dialog doesn't dismiss it, so a <code>modal</code> dialog must include an explicit action button in the footer to dismiss it.</p>
<p>Freezing the page behind the dialog isn't what <code>modal</code> controls. Every dialog does that while it's open, and restores the scroll position on close. What <code>modal</code> changes is how the dialog can be dismissed. See the Accessibility page for details.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/modal.html) -->
<!-- The below content is automatically added from ./../apiExamples/modal.html -->
<div>
<auro-button id="openDefaultModal">Open default modal</auro-button>
<auro-button id="openMediumModal">Open medium modal</auro-button>
<auro-button id="openSmallModal">Open small modal</auro-button>
</div>
<auro-dialog id="defaultModalDialog" modal>
<span slot="header">Default modal dialog</span>
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
<auro-button id="closeDefaultModal">I understand
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<auro-dialog id="mediumModalDialog" md modal>
<span slot="header">Medium modal dialog</span>
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
<auro-button id="closeMediumModal">I understand
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<auro-dialog id="smallModalDialog" sm modal>
<span slot="header">Small modal dialog</span>
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
<auro-button id="closeSmallModal">I understand
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/modal.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openDefaultModal"&gt;Open default modal&lt;/auro-button&gt;
  &lt;auro-button id="openMediumModal"&gt;Open medium modal&lt;/auro-button&gt;
  &lt;auro-button id="openSmallModal"&gt;Open small modal&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="defaultModalDialog" modal&gt;
  &lt;span slot="header"&gt;Default modal dialog&lt;/span&gt;
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
    &lt;auro-button id="closeDefaultModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&#10;&lt;auro-dialog id="mediumModalDialog" md modal&gt;
  &lt;span slot="header"&gt;Medium modal dialog&lt;/span&gt;
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
    &lt;auro-button id="closeMediumModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&#10;&lt;auro-dialog id="smallModalDialog" sm modal&gt;
  &lt;span slot="header"&gt;Small modal dialog&lt;/span&gt;
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
    &lt;auro-button id="closeSmallModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
</div>
</div>
</div>
