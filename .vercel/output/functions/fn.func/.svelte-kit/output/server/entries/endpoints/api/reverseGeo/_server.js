import { j as json } from "../../../../chunks/index.js";
const API_Key = "feVld2SMaP5XrzH9dVUvBZ3WXo5WOsG9";
async function POST({ request }) {
  const { lat, lon } = await request.json();
  const res = await fetch(`https://api.tomtom.com/search/2/reverseGeocode/${lat},${lon}.json?key=${API_Key}&radius=100`);
  const data = await res.json();
  const address = data.addresses[0].address;
  const pos = data.addresses[0].position.split(",");
  const location = {
    city: address?.municipality,
    region: address?.countrySubdivision,
    country: address?.countryCode,
    lat: pos[0],
    lon: pos[1]
  };
  return json({ location }, { status: 201 });
}
export {
  POST
};
