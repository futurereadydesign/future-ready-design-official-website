<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
  export let blok;
</script>
 
<section use:storyblokEditable={blok} class="container">
  {#each blok.columns as blok}
    <article class="article">
      <StoryblokComponent {blok} />
    </article>
  {/each}
  </section>

<style>
  .container {
    display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 1em;
    place-items: center; 
    margin-bottom: 5em;
    max-width: 40em;
    margin: 0 auto; 
    margin-bottom: 3em;
  }

  .article {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    flex: 1 1 auto; 
  }

  @media (min-width: 768px) { 
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }
  }
</style>