React 19 includes <auro-hyperlink href="https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements">native support for custom elements</auro-hyperlink>, so <code>&lt;auro-dialog&gt;</code> works directly in JSX without any wrapper library.

<auro-header level="3" id="reactImport">Import the Component</auro-header>

Import and register the component at the top level of your application (e.g. in your root `main.tsx` or `App.tsx`):

```js
import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

AuroDialog.register('custom-dialog');
```

<auro-header level="3" id="reactTypeScript">TypeScript Declarations</auro-header>

The component ships with TypeScript type definitions for the `AuroDialog` class. However, React's JSX does not automatically map custom element tag names to their types. React 19 removed the global `JSX` namespace, so custom element types are registered by augmenting the `react` module rather than using `declare global`. Add the following declaration to a `.d.ts` file in your project:

```ts
import type { HTMLAttributes } from 'react';
import type { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'custom-dialog': HTMLAttributes<AuroDialog> & Partial<AuroDialog>;
    }
  }
}
```

If your `tsconfig.json` uses the automatic runtime (`"jsx": "react-jsx"`, the React 19 default) and the types are not picked up, augment `'react/jsx-runtime'` instead of `'react'`.

<auro-header level="3" id="reactState">Controlling the Open State</auro-header>

The dialog's visibility is controlled by the `open` attribute. Use component state to toggle it, and listen for the component's `toggle` event (which fires when the dialog closes) to keep your state in sync:

```jsx
import { useState, useRef, useEffect } from 'react';

export default function Example() {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleToggle = () => setOpen(false);
    dialog?.addEventListener('toggle', handleToggle);
    return () => dialog?.removeEventListener('toggle', handleToggle);
  }, []);

  return (
    <>
      <auro-button onClick={() => setOpen(true)}>Open dialog</auro-button>
      <custom-dialog ref={dialogRef} open={open || undefined}>
        <span slot="header">Dialog header</span>
        <div slot="content">Dialog content</div>
        <div slot="footer">
          <auro-button onClick={() => setOpen(false)}>Close</auro-button>
        </div>
      </custom-dialog>
    </>
  );
}
```
