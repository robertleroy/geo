import { j as json } from "../../../../chunks/index.js";
async function GET() {
  try {
    const getIp = await fetch("http://ip-api.com/json?fields=57855");
    const ipData = await getIp.json();
    const location = await {
      ip: ipData?.query,
      city: ipData?.city,
      region: ipData?.region,
      country: ipData?.countryCode,
      lat: ipData?.lat,
      lon: ipData?.lon
    };
    return json(location);
  } catch (error) {
    console.log("load error:", error);
  }
}
export {
  GET
};
