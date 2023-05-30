import { dev } from "$app/environment";

let ipData;
// console.log('dev'.dev);

export async function load({ fetch, url, request, cookies }) {
  if (dev) {
    // const res = await fetch('/api/ipapi');
    // ipData = await res.json();
    ipData = {
      name: "ipData",
      ip: "107.207.41.105",
      city: "Oklahoma City",
      region: "OK",
      country: "US",
      lat: 35.4662,
      lon: -97.5168,
    };
  } else {
    ipData = {
      name: "ipData",
      ip: decodeURIComponent(request.headers.get("x-real-ip") ?? "unknown"),
      city: decodeURIComponent(
        request.headers.get("x-vercel-ip-city") ?? "unknown"
      ),
      region: decodeURIComponent(
        request.headers.get("x-vercel-ip-country-region") ?? "unknown"
      ),
      country: decodeURIComponent(
        request.headers.get("x-vercel-ip-country") ?? "unknown"
      ),
      lat: decodeURIComponent(
        request.headers.get("x-vercel-ip-latitude") ?? "unknown"
      ),
      lon: decodeURIComponent(
        request.headers.get("x-vercel-ip-longitude") ?? "unknown"
      ),
    };
  }

  // cookies.set("lat", ipData.lat.toString(), { path: "/" });
  // cookies.set("lon", ipData.lon.toString(), { path: "/" });

  return {
    ipData,
  };
}

