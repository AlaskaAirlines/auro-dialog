# auro-dialog

The `auro-dialog` appears on top of the page and presents information that requires the users immediate attention.

### Properties & Attributes

| Properties            | Attributes              | Modifiers | Type                   | Default   | Description                                                                                                                                                                          |
| --------------------- | ----------------------- | --------- | ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| closeButtonAppearance | close-button-appearance |           | `default` \| `inverse` | `default` | Defines whether the close button should be light colored for use on dark backgrounds.                                                                                                |
| isPopoverVisible      | open                    |           | boolean                |           | Sets state of dialog to open.                                                                                                                                                        |
| lg                    | lg                      |           | boolean                |           | Sets dialog box to large style. Adding both lg and sm/md will set the dialog to lg for mobile and sm/md for desktop.<br>Must be used in conjunction with sm or md to have an effect. |
| md                    | md                      |           | boolean                |           | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile.                                                                      |
| modal                 | modal                   |           | boolean                |           | Modal dialog restricts the user to take an action (no default close actions).                                                                                                        |
| onDark                | onDark                  |           | boolean                |           | DEPRECATED - use `close-button-appearance="inverse" instead.                                                                                                                         |
| sm                    | sm                      |           | boolean                |           | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile.                                                                       |
| triggerElement        |                         |           | HTMLElement            |           | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened.                                               |
| unformatted           | unformatted             |           | boolean                |           | Unformatted dialog window, edge-to-edge fill for content.                                                                                                                            |
|                       | isBibFullscreen         |           | boolean                |           | If true, the dialog bib is in fullscreen mode.                                                                                                                                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| hide     | None                                                                 | void   | Closes the dialog.                                |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
| show     | None                                                                 | void   | Opens the dialog.                                 |

### Events

| Name   | Description                            |
| ------ | -------------------------------------- |
| toggle | Event fires when the element is closed |

### Slots

| Name                   | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| ariaLabel.dialog.close | Text to describe the "x" icon close button for screen readers. Default: "Close". |
| content                | Injects content into the body of the modal                                       |
| footer                 | Used for action options, e.g. buttons                                            |
| header                 | Text to display as the header of the modal                                       |

### CSS Shadow Parts

| Name           | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| close-button   | adjust position of the close X icon in the dialog window                    |
| dialog         | apply CSS to the entire dialog                                              |
| dialog-content | apply CSS to the content of the dialog                                      |
| dialog-footer  | apply CSS to the footer of the dialog                                       |
| dialog-header  | apply CSS to the header of the dialog                                       |
| dialog-overlay | DEPRECATED: apply CSS on the overlay of the dialog. Use ::backdrop instead. |