<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Dialog

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-dialog use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Set Up

Triggering the dialog relies on functions being installed. See the following example code that is installed into this demo.

```javascript
function toggleDialog(elem) {
  let dialog = document.querySelector(elem);

  dialog.hasAttribute('open')
  ? dialog.removeAttribute("open")
  : (dialog.removeAttribute("open"),
    dialog.setAttribute("open", true));
}

// This function can be retrieved from https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-dialog@latest/dist/toggleDialog.js
```

Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a dialog with the ID of `#demo1`.

```javascript
<auro-button onClick="toggleDialog('#demo1')">Open Default Dialog</auro-button>
```

## The Structure

The structure of the dialog itself consists of three slots. The `header`, `content` and `footer` slots. See the scaffolding example below for adding content to the component.

```javascript
  <auro-dialog id="[unique ID]">
    <span slot="header">[header content]</span>
    <span slot="content">
      [body content]
    </span>
    <span slot="footer">
      [footer content]
    </span>
  </auro-dialog>
```

It should be noted that the `footer` slot is reserved for the placement of action buttons.

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Having a closing statement about your example helps to really complete the thought with your reader.

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-dialog` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-dialog';
registerComponent('custom-dialog');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-dialog` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
