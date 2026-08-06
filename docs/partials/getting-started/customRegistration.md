<p>Every Auro component consists of a JavaScript <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</auro-hyperlink> and a <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">custom element registration</auro-hyperlink>. The class defines the component's behavior, and the registration maps it to an HTML tag name so it can be used in markup.</p>
<p>The default import handles both steps automatically, registering the component under its standard <code>&lt;auro-dialog&gt;</code> tag name.</p>
<p>If you need multiple versions of the same component on a single page — for example, when two projects depend on different versions — you can register the class under a custom tag name to avoid conflicts. Import the component class directly and call its <code>register(name)</code> method with a unique name:</p>

```js
// Import the class only
import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

// Register with a custom name
AuroDialog.register('custom-dialog');
```

<p>This creates a new custom element <code>&lt;custom-dialog&gt;</code> that behaves exactly like <code>&lt;auro-dialog&gt;</code>, allowing both to coexist on the same page without interfering with each other.</p>

```html
<custom-dialog id="custom-dialog-example">
  <span slot="header">Dialog header</span>
  <div slot="content">Dialog content</div>
  <div slot="footer">
    <auro-button id="closeCustom">Close</auro-button>
  </div>
</custom-dialog>
```
