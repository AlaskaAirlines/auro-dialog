export function inertSiblings(node) {
  const inertElements = [];

  function handleInert(node) {
    if (node.parentNode) {
      for (let i in node.parentNode.childNodes) {
        const elem = node.parentNode.childNodes[i];
        if (elem !== node && elem.nodeType === Node.ELEMENT_NODE) {
          elem.inert = true;
          inertElements.push(elem);
        }
      }
      if (node.parentNode !== document.body) {
        handleInert(node.parentNode);
      }
    }
  }

  handleInert(node);
  return inertElements;
}
