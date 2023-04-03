# SK / Vercel edge - geolocate

## Vercel adapter

``` sh
npm i @sveltejs/adapter-vercel
```

``` js
/* svelte.config.js */ 
/***** SERVERLESS *****/
import adapter from '@sveltejs/adapter-vercel';
 
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
};
 
export default config;
```

``` js
/* svelte.config.js */ 
/***** EDGE *****/
import adapter from '@sveltejs/adapter-vercel';
 
const config = {
  kit: {
    adapter: adapter({
      runtime: 'edge',
    }),
  },
};
 
export default config;
```

or per route
``` js
/* +page.server.ts */
export const config = {
  runtime: 'edge',
};
 
export const load = ({ cookies }) => {
  // Load function code here
};
```

Geolocate methids
``` js
let cold = true;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	const was_cold = cold;
	cold = false;

	const ip = event.getClientAddress();
	const real_ip = decodeURIComponent(event.request.headers.get('x-real-ip') ?? 'unknown');
	const forwarded = decodeURIComponent(event.request.headers.get('x-forwarded-for') ?? 'unknown');
	const v_forwarded = decodeURIComponent(event.request.headers.get('x-vercel-forwarded-for') ?? 'unknown');
	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
	const latitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-latitude') ?? 'unknown');
	const longitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-longitude') ?? 'unknown');
	const country = decodeURIComponent(event.request.headers.get('x-vercel-ip-country') ?? 'unknown');
	const country_region = decodeURIComponent(event.request.headers.get('x-vercel-ip-country-region') ?? 'unknown');
	const timezone = decodeURIComponent(event.request.headers.get('x-vercel-ip-timezone') ?? 'unknown');

	return {
		ip, real_ip,
		forwarded,
    v_forwarded,
		city,
    latitude,
    longitude,
    country,
    country_region,
    timezone,
		now: new Date().toISOString(),
		cold: was_cold
	};
}
```