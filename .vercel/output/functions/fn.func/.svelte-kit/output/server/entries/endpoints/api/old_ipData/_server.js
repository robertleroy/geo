import { j as json } from "../../../../chunks/index.js";
async function GET({ request }) {
  const ip = request.getClientAddress();
  decodeURIComponent(request.headers.get("x-real-ip") ?? "unknown");
  decodeURIComponent(request.headers.get("x-forwarded-for") ?? "unknown");
  const city = decodeURIComponent(request.headers.get("x-vercel-ip-city") ?? "unknown");
  const lat = decodeURIComponent(request.headers.get("x-vercel-ip-latitude") ?? "unknown");
  const lon = decodeURIComponent(request.headers.get("x-vercel-ip-longitude") ?? "unknown");
  const country = decodeURIComponent(request.headers.get("x-vercel-ip-country") ?? "unknown");
  const region = decodeURIComponent(request.headers.get("x-vercel-ip-country-region") ?? "unknown");
  decodeURIComponent(request.headers.get("x-vercel-ip-timezone") ?? "unknown");
  let location = {
    ip,
    city,
    region,
    country,
    lat,
    lon
  };
  return json(...location);
}
export {
  GET
};
