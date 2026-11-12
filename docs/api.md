# auro-dialog

Presents information that needs people's immediate attention in a window on top of the page.

**Key capabilities**
- **Blocking mode**: Set `modal` to require an explicit action before people can continue.
- **Sizes**: Set `sm` or `md` to change the dialog's size, and add `lg` to use the large size on mobile.
- **Edge-to-edge content**: Set `unformatted` to fill the dialog with your own content.
- **Focus handling**: Focus is always trapped while the dialog is open and returns to where it was when the dialog closes.

**Example**
```html
<auro-dialog id="example">
  <span slot="header">Dialog header</span>
  <div slot="content">Dialog content</div>
  <div slot="footer"><auro-button>Close</auro-button></div>
</auro-dialog>
```

### Properties and attributes

| Properties            | Attributes              | Modifiers | Type                   | Default   | Description                                                                                                                                                                                                                                                                              |
| --------------------- | ----------------------- | --------- | ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| closeButtonAppearance | close-button-appearance |           | `default` \| `inverse` | `default` | Sets the close button's color. Use `inverse` for a light button over dark content, such as a dark image in an unformatted dialog. Has no effect when `modal` is set.                                                                                                                     |
| isPopoverVisible      | open                    |           | boolean                |           | Shows the dialog. Remove the attribute or set it to `false` to hide it.                                                                                                                                                                                                                  |
| lg                    | lg                      |           | boolean                |           | Sets the large size, which is the default. Add `lg` with `sm` or `md` to use the large size on mobile and the smaller size on desktop. Has no effect on its own.                                                                                                                         |
| md                    | md                      |           | boolean                |           | Sets the medium size. Add `lg` with `md` to use the large size on mobile and the medium size on desktop.                                                                                                                                                                                 |
| modal                 | modal                   |           | boolean                |           | Requires people to take an explicit action to close the dialog. The close button is hidden, and `Esc` and clicks outside the dialog don't close it, so add a button in the `footer` slot that closes it. Use it only when people must decide or acknowledge something before continuing. |
| sm                    | sm                      |           | boolean                |           | Sets the small size, the narrowest on desktop and the shortest on mobile. Add `lg` with `sm` to use the large size on mobile and the small size on desktop.                                                                                                                              |
| triggerElement        |                         |           | HTMLElement            |           | Sets a fallback element to focus when the dialog closes. Focus returns to the element that was active when the dialog opened, and uses `triggerElement` only when no element was active.                                                                                                 |
| unformatted           | unformatted             |           | boolean                |           | Removes the built-in header, content, and footer layout so the `content` slot fills the dialog edge to edge. The close button is still shown unless `modal` is set.                                                                                                                      |
| onDark                | ondark                  |           | boolean                |           | Deprecated: Use `close-button-appearance="inverse"` instead.<br>Sets the close button to a light color for use on dark backgrounds.                                                                                                                                                      |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| hide     | None                                                          | void   | Closes the dialog.                                       |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |
| show     | None                                                          | void   | Opens the dialog.                                        |

### Events

| Name   | Description                   |
| ------ | ----------------------------- |
| toggle | Fires when the dialog closes. |

### Slots

| Name                   | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ariaLabel.dialog.close | Text screen readers read for the close button, for example "Close dialog". Defaults to "Close". Has no effect when `modal` is set, because a modal dialog has no close button. |
| content                | Content for the body of the dialog.                                                                                                                                            |
| footer                 | Action buttons for the dialog, such as Close. A `modal` dialog needs a button here, because it has no close button. Isn't shown when `unformatted` is set.                     |
| header                 | Text for the dialog's heading, which also names the dialog for screen readers. Isn't shown when `unformatted` is set.                                                          |

### CSS shadow parts

| Name           | Description                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| close-button   | The close button in the dialog header. Isn't rendered when `modal` is set.                                                     |
| dialog         | The dialog window.                                                                                                             |
| dialog-content | The body region that holds the `content` slot. Isn't rendered when `unformatted` is set.                                       |
| dialog-footer  | The footer region that holds the `footer` slot. Isn't rendered when `unformatted` is set.                                      |
| dialog-header  | The header region, which holds the `header` slot and the close button. Isn't rendered when `unformatted` is set.               |
| dialog-overlay | Deprecated: Use `--ds-auro-dialog-overlay-modal-background-color` or `--ds-auro-dialog-overlay-open-background-color` instead. |