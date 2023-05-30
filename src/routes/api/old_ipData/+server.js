import { json } from '@sveltejs/kit';

export async function GET({request}) {
	const ip = request.getClientAddress();
	const real_ip = decodeURIComponent(request.headers.get('x-real-ip') ?? 'unknown');
	const forwarded = decodeURIComponent(request.headers.get('x-forwarded-for') ?? 'unknown');
	const city = decodeURIComponent(request.headers.get('x-vercel-ip-city') ?? 'unknown');
	const lat = decodeURIComponent(request.headers.get('x-vercel-ip-latitude') ?? 'unknown');
	const lon = decodeURIComponent(request.headers.get('x-vercel-ip-longitude') ?? 'unknown');
	const country = decodeURIComponent(request.headers.get('x-vercel-ip-country') ?? 'unknown');
	const region = decodeURIComponent(request.headers.get('x-vercel-ip-country-region') ?? 'unknown');
	const timezone = decodeURIComponent(request.headers.get('x-vercel-ip-timezone') ?? 'unknown');

  let location = {
    ip,
    city,
    region,
    country,
    lat,
    lon
  }

	return json(...location);
}
