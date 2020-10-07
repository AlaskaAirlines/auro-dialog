# auro-dialog

auro-dialog appear above the page and require the user's attention.

## Attributes

| Attribute   | Type      | Description                            |
|-------------|-----------|----------------------------------------|
| `dkoverlay` | `Boolean` | Sets the dialog overlay to dark style  |
| `ltoverlay` | `Boolean` | Sets the dialog overlay to light style |
| `md`        | `Boolean` | Sets dialog box to medium style        |
| `nooverlay` | `Boolean` | Disables the dialog overlay            |
| `sm`        | `Boolean` | Sets dialog box to small style         |

## Properties

| Property | Attribute | Type      | Description                                      |
|----------|-----------|-----------|--------------------------------------------------|
| `modal`  | `modal`   | `Boolean` | Modal dialog restricts the user to take an action (no default close actions) |
| `open`   | `open`    | `Boolean` | Sets state of dialog to open                     |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |
