import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.ffb04538.js","_app/immutable/chunks/index.764ff3e9.js","_app/immutable/chunks/store.3c6a101a.js","_app/immutable/chunks/index.ee134f59.js"];
export const stylesheets = ["_app/immutable/assets/2.db867775.css"];
export const fonts = [];
