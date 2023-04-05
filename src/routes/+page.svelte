
<script>
  export let data;
  // console.log('page', data);
  const { location } = data;

</script>

  <div class="my_page">
	<!-- <Details city={data.city} ip={data.ip} /> -->

  <div class="host">{data.host}</div>

  <div class="location">

    <!-- <p>Browser: {data?.browser }</p> -->

    <div class="grid">
      <div class="location">{location?.city}, {location?.region} {@html '&emsp;'} {location?.country}</div>
      <div class="gps">{location?.lat}, {location?.lon}</div>
      <div class="ip">{location?.ip}</div>
    </div>
  </div>

  <br>
<!-- <div>{data.cold ? 'cold' : 'hot'}</div> -->
</div>

<style>
  .my_page {
    width: fit-content;
    margin:5vh auto;
  }

  .grid {
    /* display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: 0 1rem; */
  }

</style>

<!-- 
  35.46756, -97.516434

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