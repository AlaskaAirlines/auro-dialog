<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-dialog

The `auro-dialog` appears on top of the page and presents information that requires the users immediate attention.

### Properties & Attributes

| Properties            | Attributes              | Modifiers | Type                   | Default   | Description                                                                                                                                                                          |
| --------------------- | ----------------------- | --------- | ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| closeButtonAppearance | close-button-appearance |           | `default` \| `inverse` | `default` | Defines whether the close button should be light colored for use on dark backgrounds.                                                                                                |
| isPopoverVisible      | open                    |           | boolean                |           | Sets state of dialog to open.                                                                                                                                                        |
| lg                    | lg                      |           | boolean                |           | Sets dialog box to large style. Adding both lg and sm/md will set the dialog to lg for mobile and sm/md for desktop.<br>Must be used in conjunction with sm or md to have an effect. |
| md                    | md                      |           | boolean                |           | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile.                                                                      |
| modal                 | modal                   |           | boolean                |           | Modal dialog restricts the user to take an action (no default close actions).                                                                                                        |
| onDark                | onDark                  |           | boolean                |           | DEPRECATED - use `close-button-appearance="inverse" instead.                                                                                                                         |
| sm                    | sm                      |           | boolean                |           | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile.                                                                       |
| triggerElement        |                         |           | HTMLElement            |           | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened.                                               |
| unformatted           | unformatted             |           | boolean                |           | Unformatted dialog window, edge-to-edge fill for content.                                                                                                                            |
|                       | isBibFullscreen         |           | boolean                |           | If true, the dialog bib is in fullscreen mode.                                                                                                                                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| hide     | None                                                                 | void   | Closes the dialog.                                |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
| show     | None                                                                 | void   | Opens the dialog.                                 |

### Events

| Name   | Description                            |
| ------ | -------------------------------------- |
| toggle | Event fires when the element is closed |

### Slots

| Name                   | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| ariaLabel.dialog.close | Text to describe the "x" icon close button for screen readers. Default: "Close". |
| content                | Injects content into the body of the modal                                       |
| footer                 | Used for action options, e.g. buttons                                            |
| header                 | Text to display as the header of the modal                                       |

### CSS Shadow Parts

| Name           | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| close-button   | adjust position of the close X icon in the dialog window                    |
| dialog         | apply CSS to the entire dialog                                              |
| dialog-content | apply CSS to the content of the dialog                                      |
| dialog-footer  | apply CSS to the footer of the dialog                                       |
| dialog-header  | apply CSS to the header of the dialog                                       |
| dialog-overlay | DEPRECATED: apply CSS on the overlay of the dialog. Use ::backdrop instead. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <div>
    <auro-button id="openBasic">Open default dialog</auro-button>
  </div>
  <auro-dialog id="defaultDialog">
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
      <auro-button secondary id="closeBasic">Close</auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<div>
  <auro-button id="openBasic">Open default dialog</auro-button>
</div>
<auro-dialog id="defaultDialog">
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
    <auro-button secondary id="closeBasic">Close</auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Size Options

The auro-dialog supports three different sizes via attribute, `sm`, `md`, and `lg`. The default size is `lg`.

#### Size Effects

##### Desktop
At desktop resolutions, size affects the width of the dialog, and its height is dictated by its contents with a max height of 80%.

##### Mobile
At mobile resolutions the size affects the maximum height the dialog will use of the browser viewport with a fixed width of 100%.

> *Note: `lg` may be added in addition to `sm` or `md` to force the `lg` size on mobile while using the other size for desktop.*

#### Single Size Examples:

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

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Mixed Size Examples:

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

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Modal

The auro-dialog supports a modal dialog state that will lock a user into interacting with the modal dialog via the `modal` attribute.

When using this state, the modal dialog must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the `modal` dialog to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/modal.html) -->
  <!-- The below content is automatically added from ./../apiExamples/modal.html -->
  <div>
    <auro-button id="openDefaultModal">Open default modal</auro-button>
    <auro-button id="openMediumModal">Open medium modal</auro-button>
    <auro-button id="openSmallModal">Open small modal</auro-button>
  </div>
  <auro-dialog id="defaultModalDialog" modal>
    <span slot="header">Default Modal Dialog</span>
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
        <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <auro-dialog id="mediumModalDialog" md modal>
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
      <auro-button id="closeMediumModal">I understand
        <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <auro-dialog id="smallModalDialog" sm modal>
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
      <auro-button id="closeSmallModal">I understand
        <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/modal.html -->

```html
<div>
  <auro-button id="openDefaultModal">Open default modal</auro-button>
  <auro-button id="openMediumModal">Open medium modal</auro-button>
  <auro-button id="openSmallModal">Open small modal</auro-button>
</div>
<auro-dialog id="defaultModalDialog" modal>
  <span slot="header">Default Modal Dialog</span>
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
      <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
<auro-dialog id="mediumModalDialog" md modal>
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
    <auro-button id="closeMediumModal">I understand
      <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
<auro-dialog id="smallModalDialog" sm modal>
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
    <auro-button id="closeSmallModal">I understand
      <auro-icon category="interface" name="chevron-right" emphasis appearance="inverse"></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Unformatted dialog

For use case where the use of a dialog is to be more freeform, but the experience and base tooling for the dialog are still requested, there is the `unformatted` property.

This property can be used in combination with any other use case of the dialog, but it will render an unformatted dialog window, allowing for full customization of content within the scope of the window.

## Slot Examples

### Close button aria-label slot

To customize the aria-label text for the close button, use the `ariaLabel.dialog.close` slot to provide custom text. If no text is provided, the default text `"Close"` will be used.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
  <!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
  <div>
    <auro-button id="openAriaLabelSlot">Unformatted Dialog w/ custom close button aria-label</auro-button>
  </div>
  <auro-dialog id="ariaLabelMdDialog" unformatted md lg ondark>
    <span slot="ariaLabel.dialog.close">This will be the new aria label for the close button</span>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

```html
<div>
  <auro-button id="openAriaLabelSlot">Unformatted Dialog w/ custom close button aria-label</auro-button>
</div>
<auro-dialog id="ariaLabelMdDialog" unformatted md lg ondark>
  <span slot="ariaLabel.dialog.close">This will be the new aria label for the close button</span>
  <span slot="content">
    <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header" class="heading-lg">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS Shadow Part Examples

### Close Button

The close button can be targetted via the `close-button` CSS part, e.g. `auro-dialog::part(close-button)`.

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

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Dialog with Popover and Dropdown Components

This is a use case where there is a popover and combobox component inside the dialog component, creating a stack of layered components.

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

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Accessibility

Within the scope of the auro-dialog there is `aria-labelledby="dialog-header"`. To make proper use of this, in an unformatted dialog, the developer is required to add `id="dialog-header"` to the content header within the dialog content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../apiExamples/accessibility.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility.html -->

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Responsive padding

Part of the dialog design spec is its responsive padding. To take advantage of this for your content within the scope of the dialog, be sure to use the selector `unformattedWrapper` that can be imported from the package here:

```css
import '@aurodesignsystem/auro-dialog/dist/style-unformatted.scss'

or

import '@aurodesignsystem/auro-dialog/dist/style-unformatted.css'
```

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-dialog-container-color: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-dialog-boxshadow-color: var(--ds-elevation-300, #{vac.$ds-elevation-300});
  --ds-auro-dialog-overlay-modal-background-color: var(--ds-advanced-color-shared-scrim, #{v.$ds-advanced-color-shared-scrim});
  --ds-auro-dialog-overlay-open-background-color: var(--ds-advanced-color-shared-scrim, #{v.$ds-advanced-color-shared-scrim});
  --ds-auro-dialog-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
