<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Dialog

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-dialog use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Set Up

The auro-dialog component now includes a built-in `trigger` slot, eliminating the need for external JavaScript functions. Simply add an `auro-button` with `slot="trigger"` inside the dialog component to create a trigger button.

## The Structure

The structure of the dialog consists of four slots: `trigger`, `header`, `content`, and `footer`. See the scaffolding example below for adding content to the component.

```html
<auro-dialog id="[unique ID]">
  <auro-button slot="trigger">[trigger button text]</auro-button>
  <span slot="header">[header content]</span>
  <span slot="content">
    [body content]
  </span>
  <span slot="footer">
    [footer content]
  </span>
</auro-dialog>
```

It should be noted that:

- The `trigger` slot is used for the button that opens the dialog
- The `footer` slot is reserved for the placement of action buttons (such as close, cancel, or submit buttons)

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Deprecated: External Trigger Pattern

**Note:** The external trigger button pattern shown below is deprecated and should no longer be used. This approach required manual JavaScript event handling and external button placement, which made the component less self-contained and harder to maintain.

The modern approach using the `trigger` slot (shown in the example above) provides several advantages:

- **No JavaScript required** - The dialog handles all trigger functionality internally
- **Better encapsulation** - The trigger button is part of the dialog component itself
- **Improved accessibility** - Built-in ARIA relationships between trigger and dialog
- **Simpler implementation** - Just add the button with `slot="trigger"` and you're done

Please use the `trigger` slot method instead of the deprecated pattern shown below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/externalButtonTrigger.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/externalButtonTrigger.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-dialog` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroDialog.register(name)` method and pass in a unique name.

```js
import { AuroDialog } from './src/auro-dialog.js';

AuroDialog.register('custom-dialog');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-dialog` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
