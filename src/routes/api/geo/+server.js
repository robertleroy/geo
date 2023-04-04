// import { json } from "@sveltejs/kit";

// export function GET(event) {

//   try {
//     const location = {
//       ip: getClientAddress(),
//       city: decodeURIComponent(event.request.headers.get("x-vercel-ip-city") ?? "unknown"),
//       region: decodeURIComponent(event.request.headers.get("x-vercel-ip-country-region") ?? "unknown"),
//       country: decodeURIComponent(event.request.headers.get("x-vercel-ip-country") ?? "unknown"),
//       lat: decodeURIComponent(event.request.headers.get("x-vercel-ip-latitude") ?? "unknown"),
//       lon: decodeURIComponent(event.request.headers.get("x-vercel-ip-longitude") ?? "unknown")
//     };

//     return json(location);

//   } catch (error) {
//     console.log("load error:", error);
//   }
// }

import { json } from '@sveltejs/kit';
export async function GET(event) {
	const ip = event.getClientAddress();
	const real_ip = decodeURIComponent(event.request.headers.get('x-real-ip') ?? 'unknown');
	const forwarded = decodeURIComponent(event.request.headers.get('x-forwarded-for') ?? 'unknown');
	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
	const lat = decodeURIComponent(event.request.headers.get('x-vercel-ip-latitude') ?? 'unknown');
	const lon = decodeURIComponent(event.request.headers.get('x-vercel-ip-longitude') ?? 'unknown');
	const country = decodeURIComponent(event.request.headers.get('x-vercel-ip-country') ?? 'unknown');
	const region = decodeURIComponent(event.request.headers.get('x-vercel-ip-country-region') ?? 'unknown');
	const timezone = decodeURIComponent(event.request.headers.get('x-vercel-ip-timezone') ?? 'unknown');

  const location = {
    real_ip,
    forwarded,
    ip,
    city,
    region,
    country,
    lat,
    lon,
  }
	return json(location);
}
