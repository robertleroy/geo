## Notes

``` js
function load() {
  ipLocate()
  dev ? ipapi : vercel-ip
}

function onMount() {
  geolocate() 
  success ? geoData : ipData
}

function getWeather() {
  apiFetch()
}
```