import { json } from "@sveltejs/kit";

export function GET(event) {

  try {
    const location = {
      ip: getClientAddress(),
      city: decodeURIComponent(event.request.headers.get("x-vercel-ip-city") ?? "unknown"),
      region: decodeURIComponent(event.request.headers.get("x-vercel-ip-country-region") ?? "unknown"),
      country: decodeURIComponent(event.request.headers.get("x-vercel-ip-country") ?? "unknown"),
      lat: decodeURIComponent(event.request.headers.get("x-vercel-ip-latitude") ?? "unknown"),
      lon: decodeURIComponent(event.request.headers.get("x-vercel-ip-longitude") ?? "unknown")
    };

    return json(location);

  } catch (error) {
    console.log("load error:", error);
  }
}

// import { json } from '@sveltejs/kit';
// export async function GET(event) {
// 	const ip = event.getClientAddress();
// 	const real_ip = decodeURIComponent(event.request.headers.get('x-real-ip') ?? 'unknown');
// 	const forwarded = decodeURIComponent(event.request.headers.get('x-forwarded-for') ?? 'unknown');
// 	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
// 	const latitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-latitude') ?? 'unknown');
// 	const longitude = decodeURIComponent(event.request.headers.get('x-vercel-ip-longitude') ?? 'unknown');
// 	const country = decodeURIComponent(event.request.headers.get('x-vercel-ip-country') ?? 'unknown');
// 	const country_region = decodeURIComponent(event.request.headers.get('x-vercel-ip-country-region') ?? 'unknown');
// 	const timezone = decodeURIComponent(event.request.headers.get('x-vercel-ip-timezone') ?? 'unknown');

// 	return json({
// 		ip,
//     real_ip,
// 		forwarded,
//     // v_forwarded,
// 		city,
//     latitude,
//     longitude,
//     country,
//     country_region,
//     timezone,
// 		now: new Date().toISOString(),
// 	});
// }
