<p>The <code>&lt;auro-dialog&gt;</code> component responds to the following keys while it's open.</p>

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Tab</code></td>
      <td>Moves focus to the next focusable element inside the dialog. Focus is trapped within the dialog, so tabbing past the last element wraps to the first.</td>
    </tr>
    <tr>
      <td><code>Shift</code> + <code>Tab</code></td>
      <td>Moves focus to the previous focusable element inside the dialog, wrapping from the first element to the last.</td>
    </tr>
    <tr>
      <td><code>Esc</code></td>
      <td>Dismisses a non-<code>modal</code> dialog. In a <code>modal</code> dialog the default cancel action is prevented, so <code>Esc</code> doesn't close it. People must use an explicit action in the footer.</td>
    </tr>
    <tr>
      <td><code>Enter</code> / <code>Space</code></td>
      <td>Activates the focused control (for example, a footer button), following the native behavior of that control.</td>
    </tr>
  </tbody>
</table>
