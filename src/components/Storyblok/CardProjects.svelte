<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from '@storyblok/svelte';

  // Definieer variabelen voor de projects en slug
  export let projects;
  export let slug;
</script>
    
<div class="card-projects-center">
  <!-- Gebruik de storyblokEditable functie om de inhoud van de blog bewerkbaar te maken -->
  <div class="card-projects-card" use:storyblokEditable={projects}>
    <!-- Toon de afbeelding van de projects -->
    <picture>
      <source srcset={projects.image?.filename} type="image/png">
      <img class="card-projects-image" src={projects.image?.filename} alt={projects.image.alt} loading="lazy">
    </picture>

    <!-- Toon de titel van de projects -->
    <h2 class="card-projects-title">{projects.title}</h2>

    <!-- Toon de datum van de projects -->
    <p class="card-projects-date">{projects.date}</p>

    <!-- Voeg een link toe naar de projects door gebruik te maken van de slug -->
    <a href="/{slug}" use:storyblokEditable={projects} class="card-projects-link">
      <span class="card-projects-link-content">
        Kom meer te weten 
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </a>
  </div>
</div>
 
<style>

img {
  width: 100%;
}
</style>