<p>Add the following script tag to your HTML to load the component directly from a CDN:</p>

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-dialog@latest/+esm"></script>
```

<p>This script registers the <code>&lt;auro-dialog&gt;</code> custom element globally. You can then use it in your HTML:</p>

```html
<auro-dialog id="cdn-dialog">
  <span slot="header">Dialog header</span>
  <div slot="content">Dialog content</div>
  <div slot="footer">
    <auro-button id="closeCdn">Close</auro-button>
  </div>
</auro-dialog>
```
