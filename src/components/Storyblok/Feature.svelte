<script>
  import { storyblokEditable } from '@storyblok/svelte';
  export let blok;
</script>
 
<div use:storyblokEditable={blok}>
  <h2>{blok.name}</h2>
</div>

<style>
  div {
    padding: 3rem; 
    width: 100%; 
    text-align: center; 
    background: #f7f6fd;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem; 
    font-weight: 700; 
    color: #1d243d;
  }
</style>