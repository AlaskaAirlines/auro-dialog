<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-dialog

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [fixed](#fixed)   | `Boolean` | Uses fixed pixel values for element shape        |
| [md](#md)      | `Boolean` | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile. |
| [onDark](#onDark)  | `Boolean` | Sets close icon to white for dark backgrounds    |
| [sm](#sm)      | `Boolean` | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Default | Description                                      |
|------------------|---------------|---------------|---------|--------------------------------------------------|
| [modal](#modal)          | `modal`       | `Boolean`     | false   | Modal dialog restricts the user to take an action (no default close actions) |
| [open](#open)           | `open`        | `Boolean`     |         | Sets state of dialog to open                     |
| [triggerElement](#triggerElement) |               | `HTMLElement` |         | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened. |
| [unformatted](#unformatted)    | `unformatted` | `Boolean`     | false   | Unformatted dialog window, edge-to-edge fill for content |

## Events

| Event    | Description                            |
|----------|----------------------------------------|
| [toggle](#toggle) | Event fires when the element is closed |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| [content](#content) | Injects content into the body of the modal |
| [footer](#footer)  | Used for action options, e.g. buttons      |
| [header](#header)  | Text to display as the header of the modal |

## CSS Shadow Parts

| Part             | Description                                      |
|------------------|--------------------------------------------------|
| `close-button`   | adjust position of the close X icon in the dialog window |
| [dialog](#dialog)         | apply CSS to the entire dialog                   |
| `dialog-content` | apply CSS to the content of the dialog           |
| `dialog-footer`  | apply CSS to the footer of the dialog            |
| `dialog-header`  | apply CSS to the header of the dialog            |
| `dialog-overlay` | apply CSS on the overlay of the dialog           |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <div>
    <auro-button onClick="toggleDialog('#defaultDialog')">Open default dialog</auro-button>
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
      <auro-button secondary onClick="toggleDialog('#defaultDialog')">Close</auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#defaultDialog')">Open default dialog</auro-button>
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
    <auro-button secondary onClick="toggleDialog('#defaultDialog')">Close</auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size Options

The auro-dialog supports three different sizes. A default dialog is equal to the large size dialog. Using the `sm` and `md` attributes, the component supports these sizes for both mobile and desktop.

The size attribute effects the `width` of the desktop dialog. Its `height` is dictated by the content with a max height of `80%`. On mobile, the `size` attribute effects the `maximum height` the dialog will use of the device screen. Its width will be 100%.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sizeOptions.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/sizeOptions.html -->
  <div>
    <auro-button onClick="toggleDialog('#defaultDialog')">Open default dialog</auro-button>
    <auro-button onClick="toggleDialog('#mediumDialog')">Open medium dialog</auro-button>
    <auro-button onClick="toggleDialog('#smallDialog')">Open small dialog</auro-button>
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
      <auro-button secondary onClick="toggleDialog('#defaultDialog')">Close</auro-button>
    </div>
  </auro-dialog>
  <auro-dialog id="mediumDialog" md>
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
      <auro-button secondary onClick="toggleDialog('#mediumDialog')">Close</auro-button>
    </div>
  </auro-dialog>
  <auro-dialog id="smallDialog" sm>
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
      <auro-button secondary onClick="toggleDialog('#smallDialog')">Close</auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sizeOptions.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/sizeOptions.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#defaultDialog')">Open default dialog</auro-button>
  <auro-button onClick="toggleDialog('#mediumDialog')">Open medium dialog</auro-button>
  <auro-button onClick="toggleDialog('#smallDialog')">Open small dialog</auro-button>
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
    <auro-button secondary onClick="toggleDialog('#defaultDialog')">Close</auro-button>
  </div>
</auro-dialog>
<auro-dialog id="mediumDialog" md>
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
    <auro-button secondary onClick="toggleDialog('#mediumDialog')">Close</auro-button>
  </div>
</auro-dialog>
<auro-dialog id="smallDialog" sm>
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
    <auro-button secondary onClick="toggleDialog('#smallDialog')">Close</auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Modal and Size Options

The auro-dialog supports a modal dialog state that will lock a user into interacting with the modal dialog. To activate, use the modal attribute.

When using this state, the modal dialog must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the `modal` dialog to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/modal.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/modal.html -->
  <div>
    <auro-button onClick="toggleDialog('#defaultModalDialog')">Open default modal</auro-button>
    <auro-button onClick="toggleDialog('#mediumModalDialog')">Open medium modal</auro-button>
    <auro-button onClick="toggleDialog('#smallModalDialog')">Open small modal</auro-button>
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
      <auro-button onClick="toggleDialog('#defaultModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
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
      <auro-button onClick="toggleDialog('#mediumModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
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
      <auro-button onClick="toggleDialog('#smallModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/modal.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#defaultModalDialog')">Open default modal</auro-button>
  <auro-button onClick="toggleDialog('#mediumModalDialog')">Open medium modal</auro-button>
  <auro-button onClick="toggleDialog('#smallModalDialog')">Open small modal</auro-button>
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
    <auro-button onClick="toggleDialog('#defaultModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
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
    <auro-button onClick="toggleDialog('#mediumModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
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
    <auro-button onClick="toggleDialog('#smallModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Dialogs with Decoupled Experience

For use case where the size of the dialog on desktop should not influence the size of the dialog on mobile, the combination API of `sm lg` and `md lg` can be used.

The use of these combinations will set the first value to the dialog for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen depending on the length of the content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/decoupled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/decoupled.html -->
  <div>
    <auro-button onClick="toggleDialog('#smLgDialog')">Open [sm lg] dialog</auro-button>
    <auro-button onClick="toggleDialog('#smMdDialog')">Open [md lg] dialog</auro-button>
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
      <auro-button onClick="toggleDialog('#smLgDialog')">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <auro-dialog id="smMdDialog" md lg>
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
      <auro-button onClick="toggleDialog('#smMdDialog')">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/decoupled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/decoupled.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#smLgDialog')">Open [sm lg] dialog</auro-button>
  <auro-button onClick="toggleDialog('#smMdDialog')">Open [md lg] dialog</auro-button>
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
    <auro-button onClick="toggleDialog('#smLgDialog')">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
<auro-dialog id="smMdDialog" md lg>
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
    <auro-button onClick="toggleDialog('#smMdDialog')">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Dialog with Popover and Dropdown Components

This is a use case where there is a popover and combobox component inside the dialog component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverAndDropdown.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/popoverAndDropdown.html -->
  <div>
    <auro-button onClick="toggleDialog('#popover-dialog')">Open dialog with popover</auro-button>
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
      <auro-button onClick="toggleDialog('#popover-dialog')">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverAndDropdown.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/popoverAndDropdown.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#popover-dialog')">Open dialog with popover</auro-button>
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
    <auro-button onClick="toggleDialog('#popover-dialog')">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Unformatted dialog

For use case where the use of a dialog is to be more freeform, but the experience and base tooling for the dialog are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the dialog, but it will render a unformatted dialog window allowing for full customization of content within the scope of the window.

### Responsive padding

Part of the dialog design spec is its responsive padding. To take advantage of this for your content within the scope of the dialog, be sure to use the selector `unformattedWrapper` that can be imported from the package here:

```css
import '@aurodesignsystem/auro-dialog/dist/style-unformatted.scss'

or

import '@aurodesignsystem/auro-dialog@/dist/style-unformatted.css'
```

### Accessibility

Within the scope of the auro-dialog there is `aria-labelledby="dialog-header"`. To make proper use of this, in an unformatted dialog, the developer is required to add `id="dialog-header"` to the content header within the dialog content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/accessibility.html -->
  <div>
    <auro-button onClick="toggleDialog('#unformattedMdDialog')">Unformatted Medium Dialog</auro-button>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/auro-dialog@latest/dist/style-unformatted.css" />
  <auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
    <span slot="content">
      <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
      <div class="unformattedWrapper">
        <h1 id="dialog-header">This is a header</h1>
        These are words that are slotted into the scope of the custom element.
      </div>
    </span>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/accessibility.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#unformattedMdDialog')">Unformatted Medium Dialog</auro-button>
</div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/auro-dialog@latest/dist/style-unformatted.css" />
<auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
  <span slot="content">
    <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Edit close button position

When using the dialog with the `unformatted` attribute, some may want to adjust the positioning of the X close button. This can be addressed using the CSS `::part` CSS pseudo-element API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/editCloseButton.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/editCloseButton.html -->
  <div>
    <auro-button onClick="toggleDialog('#unformattedCustomMdDialog')">Unformatted w/custom close button</auro-button>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/auro-dialog@latest/dist/style-unformatted.css" />
  <style>
    .example::part(close-button) {
      top: var(--ds-size-400);
      right: var(--ds-size-400);
      color: var(--ds-color-brand-flamingo-500);
    }
  </style>
  <auro-dialog id="unformattedCustomMdDialog" unformatted md lg class="example">
    <span slot="content">
      <img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" />
      <div class="unformattedWrapper">
        <h1 id="dialog-header">Unformatted w/custom close button</h1>
        Notice the custom location of the close button as well as the custom color.
      </div>
    </span>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/editCloseButton.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/editCloseButton.html -->

```html
<div>
  <auro-button onClick="toggleDialog('#unformattedCustomMdDialog')">Unformatted w/custom close button</auro-button>
</div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/auro-dialog@latest/dist/style-unformatted.css" />
<style>
  .example::part(close-button) {
    top: var(--ds-size-400);
    right: var(--ds-size-400);
    color: var(--ds-color-brand-flamingo-500);
  }
</style>
<auro-dialog id="unformattedCustomMdDialog" unformatted md lg class="example">
  <span slot="content">
    <img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header">Unformatted w/custom close button</h1>
      Notice the custom location of the close button as well as the custom color.
    </div>
  </span>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
