import { c as create_ssr_component, a as subscribe, b as set_store_value, e as each, d as escape, f as add_attribute } from "../../chunks/index3.js";
import "devalue";
import { i as ipStore, m as msg, c as currentLocation } from "../../chunks/store.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1i8jnqm.svelte-1i8jnqm{display:grid;grid-template-rows:auto 1fr auto;height:100%}header.svelte-1i8jnqm.svelte-1i8jnqm{border-bottom:1px solid #ccc}header.svelte-1i8jnqm .flex.svelte-1i8jnqm{display:flex;justify-content:space-between;align-items:center;gap:0 1rem;padding:1rem 2rem 0.5rem;max-width:var(--max-width);margin:0 auto}header.svelte-1i8jnqm nav.svelte-1i8jnqm{display:flex;align-items:baseline;gap:0 1rem}header.svelte-1i8jnqm .btn svg.svelte-1i8jnqm{height:1.5rem}.router.svelte-1i8jnqm.svelte-1i8jnqm{padding:0.5rem 2rem;max-width:var(--max-width);margin:0 auto;height:100%}footer.svelte-1i8jnqm.svelte-1i8jnqm{border-top:1px solid #ccc}footer.svelte-1i8jnqm .flex.svelte-1i8jnqm{display:flex;justify-content:center;align-items:center;gap:0 1rem;padding:0.5rem 2rem;max-width:var(--max-width);margin:0 auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_msg;
  let $$unsubscribe_currentLocation;
  let $ipStore, $$unsubscribe_ipStore;
  $$unsubscribe_msg = subscribe(msg, (value) => value);
  $$unsubscribe_currentLocation = subscribe(currentLocation, (value) => value);
  $$unsubscribe_ipStore = subscribe(ipStore, (value) => $ipStore = value);
  let { data } = $$props;
  set_store_value(ipStore, $ipStore = data?.ipData, $ipStore);
  const routes = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_msg();
  $$unsubscribe_currentLocation();
  $$unsubscribe_ipStore();
  return `<div class="app svelte-1i8jnqm"><header class=" svelte-1i8jnqm"><div class="flex svelte-1i8jnqm"><div class="title"><a href="https://geo-nine-teal.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel App</a></div>

      <div class="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1i8jnqm"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg></div>

      <form method="POST" action="?/search"><input type="text" name="searchTerm"></form>

      
      <div><a href="/" data-sveltekit-reload button>reload</a></div>

      <nav class="svelte-1i8jnqm">${each(routes, (route) => {
    return `<div class="route"><a${add_attribute("href", route.path, 0)}>${escape(route.name)}</a>
          </div>`;
  })}</nav></div></header>

  <main><div class="router svelte-1i8jnqm">${slots.default ? slots.default({}) : ``}</div></main>

  <footer class="svelte-1i8jnqm">
    <div class="flex svelte-1i8jnqm">${escape(new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format())}</div></footer>
</div>`;
});
export {
  Layout as default
};
