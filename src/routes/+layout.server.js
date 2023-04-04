import { dev } from "$app/environment";

  let url;
  // console.log('dev'.dev);
  if (dev) {
    url = "/api/ipapi";
  } else {
    url = "/api/geo";
  }

export async function load({ fetch }) {


  const res = await fetch(url);
  const location = await res.json();

  return {
    num: 1,
    dev: url,
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
