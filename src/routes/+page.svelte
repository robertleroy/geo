
<script>
  export let data;
  console.log('ip', data);
</script>

  <div class="my_page">
	<!-- <Details city={data.city} ip={data.ip} /> -->

  <div class="location">

    <!-- <p>Browser: {data?.browser }</p> -->

    <div class="location_name">
      <div class="city">{data?.city}</div>
      <!-- <div class="region">{data?.country_region}</div>
      <div class="country">{data?.country}</div>
      <div class="timezone">{data?.timezone}</div>
      <div class="lat">{data?.latitude},</div>
      <div class="lon">{data?.longitude}</div>
      <div>ip:</div>
      <div class="ip">{data?.ip}</div>
      <div>real_ip:</div>
      <div class="real_ip">{data?.real_ip}</div>
      <div>forwarded:</div>
      <div class="forwarded">{data?.forwarded}</div> -->
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

  .location_name {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: 0 1rem;
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