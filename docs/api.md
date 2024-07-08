# auro-dialog

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `md`      | `Boolean` | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile. |
| `onDark`  | `Boolean` | Sets close icon to white for dark backgrounds    |
| `sm`      | `Boolean` | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Default | Description                                      |
|------------------|---------------|---------------|---------|--------------------------------------------------|
| `modal`          | `modal`       | `Boolean`     | false   | Modal dialog restricts the user to take an action (no default close actions) |
| `open`           | `open`        | `Boolean`     |         | Sets state of dialog to open                     |
| `triggerElement` |               | `HTMLElement` |         | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened. |
| `unformatted`    | `unformatted` | `Boolean`     | false   | Unformatted dialog window, edge-to-edge fill for content |

## Events

| Event    | Description                            |
|----------|----------------------------------------|
| `toggle` | Event fires when the element is closed |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |

## CSS Shadow Parts

| Part             | Description                                      |
|------------------|--------------------------------------------------|
| `close-button`   | adjust position of the close X icon in the dialog window |
| `dialog`         | apply CSS to the entire dialog                   |
| `dialog-content` | apply CSS to the content of the dialog           |
| `dialog-footer`  | apply CSS to the footer of the dialog            |
| `dialog-header`  | apply CSS to the header of the dialog            |
| `dialog-overlay` | apply CSS on the overlay of the dialog           |
