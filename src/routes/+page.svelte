<script>
  import { ipStore, currentLocation, msg } from "$lib/stores/store";
  import Notes from "./Notes.md";

  export let form;

  
  // $currentLocation = data.ipData;
  
  // $: console.log('PAGE', form);
  $: $currentLocation = form?.newLocation;
  // let lat, lon;
  // $: console.log('currentLocation',$currentLocation);

</script>

<div class="page">
  <div>
    <div class="locationData">
      <div class="key">Ip:</div>
      <div class="value">{$ipStore?.ip}</div>

      <div class="key">Ip City:</div>
      <div class="value">
        {$ipStore?.city}, {$ipStore?.region} &nbsp; {$ipStore?.country}
      </div>

      <div class="key">Ip Coords:</div>
      <div class="value">{$ipStore?.lat}, {$ipStore?.lon}</div>

      <div class="value">-</div>
      <div class="key">-</div>
    
      <div class="value">Geolocation:</div>
      <div class="key">{$msg ?? ''}</div>

      <div class="value">Geo City</div>
      <div class="key">{$currentLocation?.city ?? ''}, {$currentLocation?.region ?? ''} &nbsp; {$currentLocation?.country ?? ''}</div>

      <div class="value">Geo Coords</div>
      <div class="key">{$currentLocation?.lat ?? ''}, {$currentLocation?.lon ?? ''}</div>
    </div>

    <pre>{JSON.stringify($ipStore, 0, 2)}</pre>
    <pre>{JSON.stringify($currentLocation, 0, 2) ?? 'loading...'}</pre>
  </div>


    <div style="flex: 1"><Notes /></div>
  </div>


<style>
  .page {
    display: flex;
    gap: 0 3rem;
  }
  .locationData {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: start;  
    align-content: start;  
    gap: 0 1rem;  
  }
</style>
