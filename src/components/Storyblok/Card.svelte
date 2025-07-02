<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from '@storyblok/svelte';
  import { withLang } from '../../lib/url.js';

  // Definieer variabelen voor de blog en slug
  export let blog;
  export let slug;
  export let language = 'nl';

  function getUrlWithLang(slug) {
    return withLang(slug, language);
  }
</script>
  
<!-- <div class="card-outer"> -->
  <a href={getUrlWithLang(slug)} use:storyblokEditable={blog} class="card-outer">
  <!-- Gebruik de storyblokEditable functie om de inhoud van de blog bewerkbaar te maken -->
  <div class="card" use:storyblokEditable={blog}>
    <!-- Container voor de afbeelding -->
    <div class="card-image-container">
      <!-- Toon de afbeelding van de blogpost -->
      <picture>
        <source srcset={blog.image?.filename} type="image/png">
        <img class="card-image" src={blog.image?.filename} alt={blog.image.alt} loading="lazy">
      </picture>
    </div>

    <!-- Toon de titel van de blogpost -->
    <h2 class="card-title">{blog.title}</h2>

    <!-- Toon de datum van de blogpost -->
    <p class="card-date">{blog.date}</p>

    <!-- Voeg een link toe naar de blogpost door gebruik te maken van de slug -->
    <div class="card-link button button-quaternary">
      <span>Artikel bekijken</span>
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</a>

<style lang="scss">
  .card-outer {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    text-decoration: none;

    &:focus-visible .card .card-link::after {
      opacity: 1;
    }

  }

  .card {
    position: relative; 
    display: flex;
    flex-direction: column;
    /* display: flex; 
    flex-direction: column; */
    /* word-spacing: 0.1em; */
    background-color: var(--color-white-05);
    border-radius: 1em; 
    padding: 1em;
    border: var(--border-width) solid var(--color-light-gray-65);
    max-width: 21.875em; 
    /* height: 21em; */
    height: 100%;
    width: 100%; 
  }

  .card-image-container {
    display: flex;
    justify-content: center; 
    margin-bottom: 1em;
    aspect-ratio: 1.5 / 1;
    border-radius: 0.45em;
    overflow: hidden;
  }

  /* picture {
    width: 312px;
    height: 180px;
  } */

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-title {
    /* margin-top: 0.5em; */
    font-size: 1.1em;
    color: white;
  }

  .card-date {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 1em;
    color: rgba(255, 255, 255, 0.507);
  }

  .card-link {
    margin-top: auto;
    width: fit-content;
    /* font-weight: 500; */

    &::after {
      content: '';
      position: absolute;
      left: -0.5em;
      top: -0.5em;
      height: calc(100% + 1em);
      width: calc(100% + 1em);
      border: var(--border-width) solid var(--color-white);
      border-radius: 1.15em;
      z-index: -1;
      opacity: 0;
      transition: 250ms opacity;
    }
  }




  @media (max-width: 380px) {
    .card-outer {
    flex-direction: column; 
    align-items: center; 
  }
  
  .card {
    width: 100%; 
    max-width: none; 
    height: auto; 
    margin-bottom: 1.25em; 
  }

    picture {
      width: 100%; 
      height: auto; 
    }

    .card-image {
      border-radius: 0.625em; 
    }

    .card-title {
      font-size: 1em;
    }

    .card-date {
      font-size: 0.9em;
      margin-bottom: 3em; 
    }

  }
</style>