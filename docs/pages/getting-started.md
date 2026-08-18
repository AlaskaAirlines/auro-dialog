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

```shell
$ npm i @aurodesignsystem/auro-dialog
```

<p>Installing as a dependency automatically installs its own dependencies (<code>auro-button</code> and <code>auro-icon</code>), which are registered internally under versioned tag names — you do not need to register them yourself.</p>
<auro-header level="3">Implementation</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/customRegistration.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

</div>
</auro-accordion>
<auro-accordion class="section" id="autoAccordion">
<span slot="trigger">Auto Installation and Implementation</span>
<div class="accordion-content">
<p class="warning"><strong>Warning:</strong> Default registration can cause conflicts if another package registers the same tag name using a different version of the component, leading to unexpected behavior. Use custom registration to avoid this risk.</p>
<auro-header level="3">Implementation</auro-header>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/defaultRegistration.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

</div>
</auro-accordion>
<auro-accordion class="section" id="cdnAccordion">
<span slot="trigger">CDN Installation</span>
<div class="accordion-content">
<p class="warning"><strong>Warning:</strong> CDN registration can cause conflicts if another package registers the same tag name using a different version of the component, leading to unexpected behavior. Use custom registration to avoid this risk.</p>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/cdnRegistration.md) -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</div>
</auro-accordion>
<auro-accordion class="section" id="svelte">
<span slot="trigger">Svelte</span>
<div class="accordion-content">

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/svelte.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

</div>
</auro-accordion>
</auro-accordion-group>

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/minimal-config.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/getting-started/slots.md) -->
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
