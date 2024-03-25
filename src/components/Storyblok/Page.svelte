<script>
  // Importeer de storyblokEditable en StoryblokComponent functies vanuit de Storyblok package
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";
  // Definieer de blok
  export let blok;

  // Laat het huidige jaartal zien voor het copyright
  let currentYear = new Date().getFullYear();
</script>
 
{#key blok}
  <!-- Gebruik de storyblokEditable functie om de inhoud van het blok bewerkbaar te maken -->
  <section use:storyblokEditable={blok} class="page">
    {#each blok.body as blok}
      <!-- Render Storyblok componenten op basis van de inhoud van het blok -->
      <StoryblokComponent {blok} />
    {/each}

    <p class="copyright">Copyright © {currentYear} Future Ready Design</p>
  </section>
{/key}

<style>
  .page {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
  }

  .copyright {
    color: rgba(255, 255, 255, 0.694);
    text-align: center;
    margin-bottom: 2em;
  }
</style>