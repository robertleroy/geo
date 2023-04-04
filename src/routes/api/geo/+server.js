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

  let location = {
    ip,
    city,
    region,
    country,
    lat,
    lon,
    
  }
	return json(location);
}
