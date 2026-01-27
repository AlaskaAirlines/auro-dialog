```js
// Import the class only
import { AuroDialog } from '@aurodesignsystem/auro-dialog/class';

// Register with a custom name if desired
AuroDialog.register('custom-dialog');
```

This will create a new custom element `<custom-dialog>` that behaves exactly like `<auro-dialog>`, allowing both to coexist on the same page without interfering with each other.