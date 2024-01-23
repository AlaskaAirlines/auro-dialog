<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Size Options

The auro-dialog supports three different sizes. A default dialog is equal to the large size dialog. Using the `sm` and `md` attributes, the component supports these sizes for both mobile and desktop.

The size attribute effects the `width` of the desktop dialog. Its `height` is dictated by the content with a max height of `80%`. On mobile, the `size` attribute effects the `maximum height` the dialog will use of the device screen. Its width will be 100%.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sizeOptions.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sizeOptions.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Modal and Size Options

The auro-dialog supports a modal dialog state that will lock a user into interacting with the modal dialog. To activate, use the modal attribute.

When using this state, the modal dialog must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the `modal` dialog to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/modal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/modal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Dialogs with Decoupled Experience

For use case where the size of the dialog on desktop should not influence the size of the dialog on mobile, the combination API of `sm lg` and `md lg` can be used.

The use of these combinations will set the first value to the dialog for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen depending on the length of the content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/decoupled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/decoupled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Dialog with Popover and Dropdown Components

This is a use case where there is a popover and combobox component inside the dialog component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverAndDropdown.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverAndDropdown.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Edit close button position

When using the dialog with the `unformatted` attribute, some may want to adjust the positioning of the X close button. This can be addressed using the CSS `::part` CSS pseudo-element API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/editCloseButton.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/editCloseButton.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
