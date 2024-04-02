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
  </section>

  <footer>
    <div>
        <a href="https://www.futurereadydesign.nl/algemene-voorwaarden" target="_blank">Algemene Voorwaarden</a> · <a href="https://www.futurereadydesign.nl/privacy-policy" target="_blank">Privacy beleid</a>
    </div>
    <span>Copyright © {currentYear} Future Ready Design</span>
</footer>
{/key}

<style>
  .page {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
  }

  footer {
    font-family: var(--font-degular);
    padding: 4.165em 0 1.95em 0;
    text-align: center;
  }
  footer > span {
      font-size: 0.9em;
      color: var(--color-white-45);
  }
  footer > div {
      margin-bottom: 0.5em;
  }
  footer > div a {
      color: var(--color-white);
      text-decoration: none;
  }
  footer > div a:hover {
      text-decoration: underline; 
  }
  footer > div a:focus-visible {
      color: var(--color-lightblue);
      text-decoration: underline;
  }
</style>