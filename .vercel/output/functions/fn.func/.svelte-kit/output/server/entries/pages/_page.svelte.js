import { c as create_ssr_component, a as subscribe, b as set_store_value, d as escape, v as validate_component } from "../../chunks/index3.js";
import { c as currentLocation, i as ipStore, m as msg } from "../../chunks/store.js";
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Notes</h2>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">ipLocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dev <span class="token operator">?</span> ipapi <span class="token operator">:</span> vercel<span class="token operator">-</span>ip
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">geolocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  success <span class="token operator">?</span> geoData <span class="token operator">:</span> ipData
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">apiFetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-1d4mx0x{display:flex;gap:0 3rem}.locationData.svelte-1d4mx0x{display:grid;grid-template-columns:max-content max-content;justify-content:start;align-content:start;gap:0 1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentLocation, $$unsubscribe_currentLocation;
  let $ipStore, $$unsubscribe_ipStore;
  let $msg, $$unsubscribe_msg;
  $$unsubscribe_currentLocation = subscribe(currentLocation, (value) => $currentLocation = value);
  $$unsubscribe_ipStore = subscribe(ipStore, (value) => $ipStore = value);
  $$unsubscribe_msg = subscribe(msg, (value) => $msg = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  set_store_value(currentLocation, $currentLocation = form?.newLocation, $currentLocation);
  $$unsubscribe_currentLocation();
  $$unsubscribe_ipStore();
  $$unsubscribe_msg();
  return `<div class="page svelte-1d4mx0x"><div><div class="locationData svelte-1d4mx0x"><div class="key">Ip:</div>
      <div class="value">${escape($ipStore?.ip)}</div>

      <div class="key">Ip City:</div>
      <div class="value">${escape($ipStore?.city)}, ${escape($ipStore?.region)}   ${escape($ipStore?.country)}</div>

      <div class="key">Ip Coords:</div>
      <div class="value">${escape($ipStore?.lat)}, ${escape($ipStore?.lon)}</div>

      <div class="value">-</div>
      <div class="key">-</div>
    
      <div class="value">Geolocation:</div>
      <div class="key">${escape($msg ?? "")}</div>

      <div class="value">Geo City</div>
      <div class="key">${escape($currentLocation?.city ?? "")}, ${escape($currentLocation?.region ?? "")}   ${escape($currentLocation?.country ?? "")}</div>

      <div class="value">Geo Coords</div>
      <div class="key">${escape($currentLocation?.lat ?? "")}, ${escape($currentLocation?.lon ?? "")}</div></div>

    <pre>${escape(JSON.stringify($ipStore, 0, 2))}</pre>
    <pre>${escape(JSON.stringify($currentLocation, 0, 2) ?? "loading...")}</pre></div>


    <div style="flex: 1">${validate_component(Notes, "Notes").$$render($$result, {}, {}, {})}</div>
  </div>`;
});
export {
  Page as default
};
