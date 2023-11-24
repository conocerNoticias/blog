import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_19ec0a37.mjs';

const _page0  = () => import('./chunks/generic_e7314301.mjs');
const _page1  = () => import('./chunks/index_33526be9.mjs');
const _page2  = () => import('./chunks/galeria_8e5ecd44.mjs');
const _page3  = () => import('./chunks/PostsLayout_fb27bb8a.mjs');
const _page4  = () => import('./chunks/post_1_593a3138.mjs');
const _page5  = () => import('./chunks/post_2_12860901.mjs');
const _page6  = () => import('./chunks/post_3_67bc58dc.mjs');
const _page7  = () => import('./chunks/post_4_72b39bcb.mjs');
const _page8  = () => import('./chunks/post_5_a9d59333.mjs');
const _page9  = () => import('./chunks/post_6_61cc0e5c.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/galeria.astro", _page2],["src/pages/posts/PostsLayout.astro", _page3],["src/pages/posts/post_1.md", _page4],["src/pages/posts/post_2.md", _page5],["src/pages/posts/post_3.md", _page6],["src/pages/posts/post_4.md", _page7],["src/pages/posts/post_5.md", _page8],["src/pages/posts/post_6.md", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
