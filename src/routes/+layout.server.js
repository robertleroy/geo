import { dev } from "$app/environment";

  let ipurl;
  // console.log('dev'.dev);
  if (dev) {
    ipurl = "/api/ipapi";
  } else {
    ipurl = "/api/geo";
  }

export async function load({ fetch, url, request }) {

  console.log("DEBUG: ",request);

  const res = await fetch(ipurl);
  const location = await res.json();

  return {
    // headers: event.request.headers,
    host: url.host,
    hostname: url.hostname,
    now: new Date().toISOString(),
    dev: ipurl,
    location,
  };
}

// export async function load({event,request}) {
//   const ip = request.headers.get('x-real-ip');
//   const city = request.headers.get('x-vercel-ip-city');

//   console.log(ip);

//   return {
//     city, ip
//   }
// }

// export async function load(event) {

// 	const ip = event.getClientAddress();
// 	const real_ip = decodeURIComponent(event.request.headers.get('x-real-ip') ?? 'unknown');
// 	const forwarded = decodeURIComponent(event.request.headers.get('x-forwarded-for') ?? 'unknown');
// 	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
// 	const latitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-latitude') ?? 'unknown');
// 	const longitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-longitude') ?? 'unknown');
// 	const country = decodeURIComponent(event.request.headers.get('x-vercel-ip-country') ?? 'unknown');
// 	const country_region = decodeURIComponent(event.request.headers.get('x-vercel-ip-country-region') ?? 'unknown');
// 	const timezone = decodeURIComponent(event.request.headers.get('x-vercel-ip-timezone') ?? 'unknown');

// 	return {
// 		ip,
//     real_ip,
// 		forwarded,
// 		city,
//     latitude,
//     longitude,
//     country,
//     country_region,
//     timezone,
// 		now: new Date().toISOString(),
// 	};
// }
