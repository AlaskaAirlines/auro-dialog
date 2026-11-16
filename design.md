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
<!-- The below content is automatically added from ./../apiExamples/size-options.html -->
<div>
<auro-button id="openDefaultSize">Open default dialog</auro-button>
<auro-button id="openMediumSize">Open medium dialog</auro-button>
<auro-button id="openSmallSize">Open small dialog</auro-button>
</div>
<auro-dialog id="defaultSizeDialog">
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
<auro-button variant="secondary" id="closeDefaultSize">Close</auro-button>
</div>
</auro-dialog>
<auro-dialog id="mediumSizeDialog" md>
<span slot="header">Medium dialog</span>
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
<auro-button variant="secondary" id="closeMediumSize">Close</auro-button>
</div>
</auro-dialog>
<auro-dialog id="smallSizeDialog" sm>
<span slot="header">Small dialog</span>
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
<auro-button variant="secondary" id="closeSmallSize">Close</auro-button>
</div>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size-options.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size-options.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openDefaultSize"&gt;Open default dialog&lt;/auro-button&gt;
  &lt;auro-button id="openMediumSize"&gt;Open medium dialog&lt;/auro-button&gt;
  &lt;auro-button id="openSmallSize"&gt;Open small dialog&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="defaultSizeDialog"&gt;
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
    &lt;auro-button variant="secondary" id="closeDefaultSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&#10;&lt;auro-dialog id="mediumSizeDialog" md&gt;
  &lt;span slot="header"&gt;Medium dialog&lt;/span&gt;
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
    &lt;auro-button variant="secondary" id="closeMediumSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&#10;&lt;auro-dialog id="smallSizeDialog" sm&gt;
  &lt;span slot="header"&gt;Small dialog&lt;/span&gt;
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
    &lt;auro-button variant="secondary" id="closeSmallSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="3" id="mixedSizes">Mixed (decoupled) sizes</auro-header>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/decoupled.html) -->
<!-- The below content is automatically added from ./../apiExamples/decoupled.html -->
<div>
<auro-button id="openSmLg">Open small dialog (large on mobile)</auro-button>
<auro-button id="openMdLg">Open medium dialog (large on mobile)</auro-button>
</div>
<auro-dialog id="smLgDialog" sm lg>
<span slot="header">Small dialog</span>
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
<auro-button id="closeSmLg">
      I understand
<auro-icon category="interface" name="check-lg" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<auro-dialog id="mdLgDialog" md lg>
<span slot="header">Medium dialog</span>
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
<auro-button id="closeMdLg">
      I understand
<auro-icon category="interface" name="check-lg" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/decoupled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/decoupled.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openSmLg"&gt;Open small dialog (large on mobile)&lt;/auro-button&gt;
  &lt;auro-button id="openMdLg"&gt;Open medium dialog (large on mobile)&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-dialog id="smLgDialog" sm lg&gt;
  &lt;span slot="header"&gt;Small dialog&lt;/span&gt;
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
    &lt;auro-button id="closeSmLg"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&#10;&lt;auro-dialog id="mdLgDialog" md lg&gt;
  &lt;span slot="header"&gt;Medium dialog&lt;/span&gt;
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
    &lt;auro-button id="closeMdLg"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
</div>
</div>
</div>
