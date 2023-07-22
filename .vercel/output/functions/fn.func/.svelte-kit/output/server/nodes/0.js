

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.196853df.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aa148a0c.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = ["_app/immutable/assets/0.2bb267ec.css"];
export const fonts = [];
