<auro-header level="1" id="overview">Dialog - Design</auro-header>
<div class="contentWrapper">
<nav>
<auro-nav anchorNavContent=".scrollWrapper">
<span slot="mobileToggleCollapsed">View More</span>
<span slot="mobileToggleExpanded">View Less</span>
<auro-anchorlink fluid href="#anatomy">Anatomy</auro-anchorlink>
<auro-anchorlink fluid href="#dialogVsModal">Dialog vs. Modal</auro-anchorlink>
<auro-anchorlink fluid href="#sizes">Sizes</auro-anchorlink>
<auro-anchorlink fluid href="#unformatted">Unformatted &amp; Padding</auro-anchorlink>
</auro-nav>
</nav>
<div class="mainContent">
<div class="scrollWrapper">
<auro-header level="2" id="anatomy">Component Anatomy</auro-header>
<p>A formatted <code>&lt;auro-dialog&gt;</code> is composed of three stacked regions, each backed by a named slot:</p>
<ul>
<li><strong>Header</strong> (<code>header</code> slot) — a short, descriptive title. It is rendered as the dialog's labelled heading and provides the dialog's accessible name.</li>
<li><strong>Content</strong> (<code>content</code> slot) — the body of the dialog. Keep it focused on a single task or message.</li>
<li><strong>Footer</strong> (<code>footer</code> slot) — reserved for action buttons. Place the primary action here; for <code>modal</code> dialogs this region must contain the control that dismisses the dialog.</li>
</ul>
<p>A non-modal dialog also renders a close (&times;) button in the top corner of the header. The dialog is centered over a dimmed backdrop that overlays the rest of the page.</p>
<auro-header level="2" id="dialogVsModal">Dialog vs. Modal</auro-header>
<p>The component supports two behavioral modes. Choosing between them is the most important design decision when using <code>&lt;auro-dialog&gt;</code>.</p>
<auro-header level="3" id="dialogMode">Dialog (non-modal)</auro-header>
<p>The default mode. The user is presented with content they should attend to, but can dismiss it passively — via the close button, the <code>Esc</code> key, or by clicking the backdrop outside the dialog. Use this for supplemental information the user can accept or ignore.</p>
<auro-header level="3" id="modalMode">Modal (blocking)</auro-header>
<p>Enabled with the <code>modal</code> attribute. The user is locked into the content and must take an explicit action to continue — passive dismissal is disabled. Use this sparingly, only when the user genuinely must make a decision or acknowledge something before proceeding. A modal dialog must always provide an action in its footer, since no close button is rendered.</p>
<div class="note"><strong>Note:</strong> Auro follows the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> guidance on dialog and modal use. Prefer a non-modal dialog unless blocking the user is truly justified.</div>
<auro-header level="2" id="sizes">Sizes</auro-header>
<p>The dialog supports three sizes — <code>sm</code>, <code>md</code>, and <code>lg</code> — with <code>lg</code> as the default.</p>
<ul>
<li><strong>Desktop</strong> — size sets the width of the dialog; height is driven by content up to a maximum of 80% of the viewport.</li>
<li><strong>Mobile</strong> — size sets the maximum viewport height the dialog occupies; width is fixed at 100%.</li>
</ul>
<p>Sizes can be decoupled between breakpoints: adding <code>lg</code> in addition to <code>sm</code> or <code>md</code> forces the <code>lg</code> size on mobile while retaining the smaller size on desktop.</p>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size-options.html) -->
<!-- The below content is automatically added from ./../apiExamples/size-options.html -->
<div>
<auro-button id="openDefaultSize">Open default dialog</auro-button>
<auro-button id="openMediumSize">Open medium dialog</auro-button>
<auro-button id="openSmallSize">Open small dialog</auro-button>
</div>
<auro-dialog id="defaultSizeDialog">
<span slot="header">Default Dialog</span>
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
<auro-button secondary id="closeDefaultSize">Close</auro-button>
</div>
</auro-dialog>
<auro-dialog id="mediumSizeDialog" md>
<span slot="header">Medium Dialog</span>
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
<auro-button secondary id="closeMediumSize">Close</auro-button>
</div>
</auro-dialog>
<auro-dialog id="smallSizeDialog" sm>
<span slot="header">Small Dialog</span>
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
<auro-button secondary id="closeSmallSize">Close</auro-button>
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
&lt;auro-dialog id="defaultSizeDialog"&gt;
  &lt;span slot="header"&gt;Default Dialog&lt;/span&gt;
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
    &lt;auro-button secondary id="closeDefaultSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&lt;auro-dialog id="mediumSizeDialog" md&gt;
  &lt;span slot="header"&gt;Medium Dialog&lt;/span&gt;
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
    &lt;auro-button secondary id="closeMediumSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&lt;auro-dialog id="smallSizeDialog" sm&gt;
  &lt;span slot="header"&gt;Small Dialog&lt;/span&gt;
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
    &lt;auro-button secondary id="closeSmallSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="3" id="mixedSizes">Mixed (decoupled) sizes</auro-header>
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/decoupled.html) -->
<!-- The below content is automatically added from ./../apiExamples/decoupled.html -->
<div>
<auro-button id="openSmLg">Open [sm lg] dialog</auro-button>
<auro-button id="openMdLg">Open [md lg] dialog</auro-button>
</div>
<auro-dialog id="smLgDialog" sm lg>
<span slot="header">Small Modal Dialog</span>
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
<auro-icon category="interface" name="check-lg" emphasis appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-dialog>
<auro-dialog id="mdLgDialog" md lg>
<span slot="header">Medium Modal Dialog</span>
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
<auro-icon category="interface" name="check-lg" emphasis appearance="inverse"></auro-icon>
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
  &lt;auro-button id="openSmLg"&gt;Open [sm lg] dialog&lt;/auro-button&gt;
  &lt;auro-button id="openMdLg"&gt;Open [md lg] dialog&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-dialog id="smLgDialog" sm lg&gt;
  &lt;span slot="header"&gt;Small Modal Dialog&lt;/span&gt;
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
      &lt;auro-icon category="interface" name="check-lg" emphasis appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;
&lt;auro-dialog id="mdLgDialog" md lg&gt;
  &lt;span slot="header"&gt;Medium Modal Dialog&lt;/span&gt;
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
      &lt;auro-icon category="interface" name="check-lg" emphasis appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<auro-header level="2" id="unformatted">Unformatted &amp; Responsive Padding</auro-header>
<p>For freeform use cases that still want the dialog's behavior and tooling, the <code>unformatted</code> property renders an edge-to-edge window with no built-in header/content/footer structure. This is ideal for full-bleed media or a fully custom composition.</p>
<p>Part of the dialog design spec is its responsive padding. To apply that same padding to your own content inside an unformatted dialog, wrap it with the <code>unformattedWrapper</code> selector, imported from the package:</p>

<pre class="language-css"><code class="language-css">@import '@aurodesignsystem/auro-dialog/dist/style-unformatted.css';</code></pre>

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- The below content is automatically added from ./../apiExamples/accessibility-unformatted-header.html -->
<div>
<auro-button id="openAccessibility">Unformatted Medium Dialog</auro-button>
</div>
<auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse">
<span slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
<div class="unformattedWrapper">
<h1 id="dialog-header" class="heading-lg">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
</div>
</span>
</auro-dialog>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility-unformatted-header.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility-unformatted-header.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openAccessibility"&gt;Unformatted Medium Dialog&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-dialog id="unformattedMdDialog" unformatted md lg close-button-appearance="inverse"&gt;
  &lt;span slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1 id="dialog-header" class="heading-lg"&gt;This is a header&lt;/h1&gt;
      These are words that are slotted into the scope of the custom element.
    &lt;/div&gt;
  &lt;/span&gt;
&lt;/auro-dialog&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
</div>
</div>
</div>
