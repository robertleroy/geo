<script>
  import { onMount } from "svelte";

  let title = 'About';
  
  onMount(() => {
    console.log('ABOUT');
  });
</script>

<div class=''>
  {title}
</div>

<style lang='postcss'>

</style>