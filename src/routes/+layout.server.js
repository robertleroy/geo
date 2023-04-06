import { dev } from "$app/environment";

  let location, test = {city: 'Cisco', region: 'UT'};
  let ipurl;
  // console.log('dev'.dev);

export async function load({ fetch, url, request }) {
  
  // console.log("DEBUG: ",request);

  if (dev) {
    const res = await fetch('/api/ipapi');
    location = await res.json();
  } else {
    const res = await fetch('/api/geo');
    test = await res.json();

    // console.log('TEST', test);
    
    location = {
      ip: decodeURIComponent(request.headers.get('x-real-ip') ?? 'unknown'),
      city: decodeURIComponent(request.headers.get('x-vercel-ip-city') ?? 'unknown'),
      region: decodeURIComponent(request.headers.get('x-vercel-ip-country-region') ?? 'unknown'),
      country: decodeURIComponent(request.headers.get('x-vercel-ip-country') ?? 'unknown'),
      lat: decodeURIComponent(request.headers.get('x-vercel-ip-latitude') ?? 'unknown'),
      lon: decodeURIComponent(request.headers.get('x-vercel-ip-longitude') ?? 'unknown'),
    };

    // location = {
    //   ip: '999.999.99.999',
    //   city: 'Cisco',
    //   region: 'UT',
    //   country: 'US',
    //   lat: 99.999,
    //   lon: -99.999,
    // };
  }

  // 
  // const location = await res.json();

  return {
    // headers: event.request.headers,
    test,
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
