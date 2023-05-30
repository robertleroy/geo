<script>

  import { enhance } from '$app/forms';
  import { ipStore, currentLocation, msg } from "$lib/stores/store";
  import { onMount } from "svelte";
  import "./app.css";


  export let data;
  $ipStore = data?.ipData;
  
  // document.cookie = "lat=" + $currentLocation.lat.toString() + ";SameSite=lax;path=/";
  // document.cookie = "lon=" + $currentLocation.lon.toString() + ";SameSite=lax;path=/";
  

  let lat, lon;

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  async function success(position) {
    $msg = " - ";
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    // console.log('position',position);

    const res = await fetch(`api/reverseGeo`, {
      method: "POST",
      body: JSON.stringify({ lat, lon }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log('geoData',data?.location);
    // const geo = await data.location;
    $currentLocation = await {
      name: "geoData", 
      ...data.location
    };
    // setInitCoords();
    // document.cookie=`lat=${data?.location.lat.toString()}`;
    // document.cookie=`lon=${data?.location.lon.toString()}`;

    // getWeather
  }

  function error() {
    console.log("Browser Geolocation not available");
    // setInitCoords();
  }

  // function setInitCoords() {
  //   document.cookie = "coords=" + [$currentLocation.lat.toString(),$currentLocation.lon.toString()].toString() + ";SameSite=lax;path=/";
  // }

  function init() {

    $currentLocation = data?.ipData;

    if (navigator.geolocation) {
      $msg = "Loacating...";
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }

  onMount(() => {
    init();
  });
</script>

<div class="app">
  <header class="">
    <div class="flex">
      <div class="title">
        <a
          href="https://geo-nine-teal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">Vercel App</a
        >
      </div>

      <div class="btn" on:keypress on:click={init}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
        </svg>
      </div>

      <form method="POST" action="?/search" use:enhance>
        <input type="text" name="searchTerm" />
      </form>

      <!-- data-sveltekit-reload -->
      <div >
        <a href="/" data-sveltekit-reload button>reload</a>
      </div>

      <nav>
        {#each routes as route}
          <div class="route">
            <a href={route.path}>{route.name}</a>
          </div>
        {/each}
      </nav>
    </div>
  </header>

  <main>
    <div class="router"><slot /></div>
  </main>

  <footer>
    <!-- <div class="flex">{dateObj(Date.now(), 'h:mm:ss aa')}</div> -->
    <div class="flex">
      {new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
      }).format()}
    </div>
  </footer>
</div>

<style lang="postcss">
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }
  header {
    border-bottom: 1px solid #ccc;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0 1rem;
      padding: 1rem 2rem 0.5rem;
      max-width: var(--max-width);
      margin: 0 auto;
    }
    nav {
      display: flex;
      align-items: baseline;
      gap: 0 1rem;
    }
    .btn svg {
      height: 1.5rem;
    }
  } /* header */

  .router {
    padding: 0.5rem 2rem;
    max-width: var(--max-width);
    margin: 0 auto;
    height: 100%;
  }

  footer {
    border-top: 1px solid #ccc;
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 1rem;
      padding: 0.5rem 2rem;
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }
</style>
