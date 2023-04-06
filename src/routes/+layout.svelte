<script>
  import dateObj from '$lib/js/dateObj';
  import './app.css';

  export let data;
  
  const routes = [
    { name: 'Home', path: '/' },
    // { name: 'About', path: '/about' },
  ];
</script>

<div class="app">
  <header class=''>
    <div class='flex'>

      <div class='title'>
        <a href="https://geo-nine-teal.vercel.app/" target='_blank' rel='noopener noreferrer'>Vercel App</a>
      </div>

      <nav>
        {#each routes as route}
        <div class='route'>
          <a href={route.path}>{route.name}</a>
        </div>
        {/each}
      </nav>
      
    </div>
  </header>

  <main>
    <div class='router'><slot /></div>
  </main>

  <footer>
    <div class="flex">{dateObj(data.now, 'h:mm:ss aa')}</div>
  </footer>
</div>

<style lang='postcss'>
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* align-items: center; */
    /* gap: 0 1rem; */
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
    /* a {  color: inherit;
       &:not(:hover:not(:active)) {
        text-decoration: none;
      }
    } */
    nav {
      display: flex;
      align-items: baseline;
      gap: 0 1rem;
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