
<script>
  export let data;
  console.log('ip', data);
</script>

  <div class="my_page">
	<!-- <Details city={data.city} ip={data.ip} /> -->

  <div class="location">
    <div class="ip">
      <span class="label">ip: </span>{data.ip}</div>
      <div class="real_ip">
        <span class="label">real_ip: </span>{data.real_ip}</div>
    <div class="forwarded">
      <span class="label">forwarded: </span>{data.forwarded}</div>
    <div class="v_forwarded">
      <span class="label">v_forwarded: </span>{data.v_forwarded}</div>
    <div class="region">
      <span class="label">region: </span>{data.country_region}</div>
    <div class="country">
      <span class="label">country: </span>{data.country}</div>
    <div class="timezone">
      <span class="label">timezone: </span>{data.timezone}</div>
    <div class="gps">
      <div class="lat">
      <span class="label">latitude: </span>{data.latitude}</div>
      <div class="lon">
      <span class="label">longitude: </span>{data.longitude}</div>
    </div>
  </div>

  <br>
<div>{data.cold ? 'COLD' : 'HOT'}</div>
</div>

<style>
  .my_page {
    width: fit-content;
    margin: 10vh auto;
  }
  .label {
    display: inline-block;
    width: 13ch;
  }

</style>

<!-- 
  		ip, real_ip,
		forwarded,
    v_forwarded,
		city,
    latitude,
    longitude,
    country,
    country_region,
    timezone,
		now: new Date().toISOString(),
		cold: was_cold

 -->