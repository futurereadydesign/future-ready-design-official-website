<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";
  export let blok;
</script>
 
{#key blok}
  <div use:storyblokEditable={blok} class="page">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}

<style>
  .page {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
  }
</style>