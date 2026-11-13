// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.
//
// Local-demo renderer for auro-dialog. Vendored from the Auro formkit
// `@aurodesignsystem/utils/demo-support` module (which is a private, unpublished
// workspace package and cannot be installed here). Renders demo pages with the
// same unified/remark/rehype pipeline AuroDocsSite uses — NOT marked.js — so the
// rich `docs/pages` markup (HTML + tables + fenced code) renders correctly. Also
// injects the top page-nav from `pages.json`.
//
// The remark/rehype stack is loaded from the jsDelivr ESM CDN, consistent with
// the other CDN imports in the demo HTML files.

import { unified } from 'https://cdn.jsdelivr.net/npm/unified@11/+esm';
import remarkParse from 'https://cdn.jsdelivr.net/npm/remark-parse@11/+esm';
import remarkGfm from 'https://cdn.jsdelivr.net/npm/remark-gfm@4/+esm';
import remarkRehype from 'https://cdn.jsdelivr.net/npm/remark-rehype@11/+esm';
import rehypeRaw from 'https://cdn.jsdelivr.net/npm/rehype-raw@7/+esm';
import rehypeHighlight from 'https://cdn.jsdelivr.net/npm/rehype-highlight@7/+esm';
import rehypeStringify from 'https://cdn.jsdelivr.net/npm/rehype-stringify@10/+esm';

/**
 * Fetches `pages.json`, builds a top nav bar with a link to each page, and
 * prepends it to <body>.
 * @param {string} pagesDir - Directory containing pages.json (relative to the HTML file).
 * @param {string} [activeFile] - Filename (e.g. "index.md") of the current page.
 */
export async function injectPageNav(pagesDir, activeFile) {
  let files = [];
  try {
    const res = await fetch(`${pagesDir}pages.json`);
    if (!res.ok) {
      return;
    }
    files = await res.json();
  } catch {
    return;
  }

  if (!files.length || document.getElementById('page-nav')) {
    return;
  }

  const nav = document.createElement('nav');
  nav.id = 'page-nav';

  files.forEach((file) => {
    const label = file.replace(/\.md$/, '').replace(/-/g, ' ');
    const a = document.createElement('auro-hyperlink');
    a.textContent = label;
    a.setAttribute('href', `./${file.replace(/\.md$/, '.html')}`);
    a.setAttribute('type', 'cta');
    a.setAttribute('variant', 'ghost');
    a.setAttribute('size', 'sm');
    a.dataset.page = file;

    if (file === activeFile) {
      a.setAttribute('variant', 'tertiary');
    }

    nav.appendChild(a);
  });

  document.body.prepend(nav);
}

export async function renderPage(mdPath) {
  const pagesDir = mdPath.substring(0, mdPath.lastIndexOf('/') + 1);
  const activeFile = mdPath.split('/').pop().split('?')[0];
  await injectPageNav(pagesDir, activeFile);

  try {
    const response = await fetch(mdPath);
    if (!response.ok) {
      console.error(`Failed to load "${mdPath}": ${response.status} ${response.statusText}`);
      return;
    }

    const text = await response.text();
    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(text);

    // Parse the rendered HTML into detached nodes and move them into <main>.
    // Content is the repo's own trusted docs markdown; avoiding innerHTML keeps
    // the write explicit and lets custom elements upgrade on connection.
    const parsed = new DOMParser().parseFromString(String(result), 'text/html');
    const main = document.querySelector('main');
    if (!main) {
      console.error('renderPage: no <main> element found; cannot render page content.');
      return;
    }
    main.replaceChildren(...parsed.body.childNodes);
    addCopyButtons();
  } catch (err) {
    console.error('Error rendering markdown page:', err);
  }
}

function addCopyButtons() {
  document.querySelectorAll('pre code[class*="language-"], pre code[class*="hljs"]').forEach((code) => {
    const pre = code.parentElement;
    const wrapper = document.createElement('div');
    wrapper.className = 'pre-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const raw = code.textContent;
      const text = raw.replace(/​/g, '').replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/^\$ /, '');
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
      });
    });
    wrapper.appendChild(btn);
  });
}

export function openAccordion(id) {
  document.querySelectorAll('auro-accordion').forEach((accordion) => {
    accordion.removeAttribute('expanded');
  });
  const target = document.getElementById(id);
  if (target) {
    target.setAttribute('expanded', '');
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 550);
  }
}

window.openAccordion = openAccordion;
