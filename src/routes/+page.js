// const browser = false;

// export async function load({ fetch }) {

//   if (browser) {

//     return {
//       ip: "107.207.41.105",
//       real_ip: "107.207.41.105",
//       forwarded: "107.207.41.105",
//       city: "Oklahoma City",
//       country_region: "OK",
//       timezone: "America/Chicago",
//       country: "US",
//       latitude: "35.4662",
//       longitude: "-97.5168",
//       now: "2023-04-03T17:21:10.252Z",
//       browser
//     }
//   } else {

//     const res = await fetch('/api/geo');
//     const data = await res.json();

//     return { ...data, browser }
//   }
// }
