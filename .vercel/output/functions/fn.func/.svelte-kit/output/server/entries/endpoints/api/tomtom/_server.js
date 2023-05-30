import { j as json } from "../../../../chunks/index.js";
const API_Key = "feVld2SMaP5XrzH9dVUvBZ3WXo5WOsG9";
async function POST({ request, cookies }) {
  const searchTerm = await request.json();
  const lat = await cookies.get("lat") ?? "40.0426";
  const lon = await cookies.get("lon") ?? "-106.3980";
  console.log("coords", lat, lon);
  const res = await fetch(`https://api.tomtom.com/search/2/search/${searchTerm}.json?key=${API_Key}&limit=1&lat=${lat}&lon=${lon}&idxSet=Geo`);
  const data = await res.json();
  const location = formatTomtom(data?.results[0]);
  return json(location, { status: 201 });
}
function formatTomtom(data) {
  let obj = {};
  obj.type = "searchData";
  obj.id = Date.now().toString(16).slice(-8);
  obj.city = data.address.municipalitySubdivision ? data.address.municipalitySubdivision : data.address.municipality ? data.address.municipality : "";
  obj.region = data.address.countrySubdivision ? data.address.countrySubdivision : "";
  obj.countryCode = data.address.countryCode;
  obj.lat = data.position.lat;
  obj.lon = data.position.lon;
  return obj;
}
export {
  POST
};
