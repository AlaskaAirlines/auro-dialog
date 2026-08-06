Svelte works with custom elements out of the box, so <code>&lt;auro-dialog&gt;</code> can be used directly in your markup.

<auro-header level="3" id="svelteImport">Import the Component</auro-header>

Import and register the component in a script block — either once at the app root, or in the component that uses it:

```html
<script lang="ts">
  import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

  AuroDialog.register('custom-dialog');
</script>
```

<auro-header level="3" id="svelteTypeScript">TypeScript Declarations</auro-header>

Svelte does not automatically know about custom element attributes. To get autocomplete and type checking for `<auro-dialog>` props in templates, add the following to a `.d.ts` file in your project (e.g. `src/auro-elements.d.ts`):

```ts
import type { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

declare namespace svelteHTML {
  interface IntrinsicElements {
    'custom-dialog': Partial<AuroDialog> & svelteHTML.HTMLAttributes<AuroDialog>;
  }
}
```

<auro-header level="3" id="svelteState">Controlling the Open State</auro-header>

Bind the `open` attribute to a reactive state value, and listen for the component's `toggle` event to reset it when the dialog is dismissed:

```html
<script lang="ts">
  import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

  AuroDialog.register('custom-dialog');

  let open = $state(false);
</script>

<auro-button onclick={() => (open = true)}>Open dialog</auro-button>

<custom-dialog {open} ontoggle={() => (open = false)}>
  <span slot="header">Dialog header</span>
  <div slot="content">Dialog content</div>
  <div slot="footer">
    <auro-button onclick={() => (open = false)}>Close</auro-button>
  </div>
</custom-dialog>
```

<auro-header level="3" id="svelteModuleResolution">Module Resolution</auro-header>

Ensure your `tsconfig.json` uses `"moduleResolution": "bundler"` so TypeScript can resolve the component's package exports:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```
