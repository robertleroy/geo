
<script>
  export let data;
  // console.log('page', data);
  const { location } = data;
  console.log("DEBUG: ",data.headers);

  // console.log('event',data.headers);

</script>

  <div class="my_page">
	<!-- <Details city={data.city} ip={data.ip} /> -->

  <!-- <div class="host">{data.host}</div> -->

  <div class="location">

    <!-- <p>Browser: {data?.browser }</p> -->
    
    <div class="host">
      <div class="label">Host: </div>
      {data?.host}</div>
    
    <div class="hostname">
      <div class="label">Hostname: </div>
      {data?.hostname}</div>
    
    <div class="ip">
      <div class="label">Ip: </div>
      {location?.ip}</div>

      <br>

    <div class="row">
      <div class="location">
        <div class="label">Location: </div>
        {location?.city}, {location?.region}</div>
      <div class="country">{location?.country}</div>
    </div>
    
    <div class="gps">
      <div class="label">GPS: </div>
      {location?.lat}, {location?.lon}</div>
      
      
  </div> <!-- location -->
 

  <br>
<!-- <div>{data.cold ? 'cold' : 'hot'}</div> -->
</div>

<style>
  .my_page {
    width: 25em;
    margin: 5vh auto;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1rem;
  }
  
  .gps {
    /* text-align: right; */
  }
  .label {
    display: inline-block;
    width: 6rem;
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