// import { geolocation } from '@vercel/edge';
 
// export const config = {
//   runtime: 'edge',
// };
 
// export async function load({event,request}) {
//   const { city } = geolocation(request);
//   // You can also get the city using dot notation on the function
//   // const city = geolocation(request).city;
//   return { city };
// }

import { geolocation, ipAddress  } from '@vercel/edge';
 
export const config = {
  runtime: 'edge',
};

export async function load({event,request}) {
  const ip = ipAddress(request) || 'unknown';
  const { city } = geolocation(request) || 'unknown';
  console.log(ip);

  return {
    // city: X-Vercel-IP-City
  }
}

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


