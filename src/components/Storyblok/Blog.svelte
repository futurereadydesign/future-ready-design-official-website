<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";
  export let blok;
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="blog">
    {#each blok.blog as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}
    
<style> 

</style>