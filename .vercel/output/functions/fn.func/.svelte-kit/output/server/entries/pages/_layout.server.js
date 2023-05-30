let ipData;
async function load({ fetch, url, request, cookies }) {
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
    )
  };
  return {
    ipData
  };
}
export {
  load
};
