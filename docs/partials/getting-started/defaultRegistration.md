<p>Once installed, the component can be used in your project by importing the component's registered module:</p>

```js
import '@aurodesignsystem/auro-dialog';
```

<p>This import registers the <code>&lt;auro-dialog&gt;</code> custom element globally. You can then use it in your HTML:</p>

```html
<auro-dialog id="default-dialog">
  <span slot="header">Dialog header</span>
  <div slot="content">Dialog content</div>
  <div slot="footer">
    <auro-button id="closeDefault">Close</auro-button>
  </div>
</auro-dialog>
```
