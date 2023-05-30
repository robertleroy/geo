import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.0ab2736a.js","_app/immutable/chunks/index.764ff3e9.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ee82a79c.js","_app/immutable/chunks/index.ee134f59.js","_app/immutable/chunks/store.3c6a101a.js"];
export const stylesheets = ["_app/immutable/assets/0.475f1822.css"];
export const fonts = [];
