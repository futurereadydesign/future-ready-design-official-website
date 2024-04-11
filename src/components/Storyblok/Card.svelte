<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from '@storyblok/svelte';

  // Definieer variabelen voor de blog en slug
  export let blog;
  export let slug;
</script>
  
<div class="card-outer">
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
    <a href="/{slug}" use:storyblokEditable={blog} class="card-link">
      <span class="card-link-content">
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
  .card-outer {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .card {
    position: relative; 
    display: flex; 
    flex-direction: column;
    word-spacing: 0.1em;
    background-color: #ffffff13;
    border-radius: 10px; 
    padding: 1em;
    border: 1.5px solid #ffffff3a; 
    max-width: 21.875em; 
    height: 21em;
    width: 100%; 
  }

  .card-image-container {
    display: flex;
    justify-content: center; 
  }

  picture {
    width: 312px;
    height: 180px;
  }

  .card-image {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }

  .card-title {
    margin-top: 0.5em;
    font-size: 1.1em;
    color: white;
  }

  .card-date {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 0.8em;
    color: rgba(255, 255, 255, 0.507);
  }

  .card-link {
    position: absolute; 
    bottom: 1em; 
    left: 1em; 
    text-decoration: none;
    color: inherit;
    /* font-weight: 500; */
  }

  .card-link-content {
    display: inline-flex; 
    align-items: center;
  }

  .card-link-content:hover {
    text-decoration: underline;
  }

  svg {
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    margin-left: 0.5em;
  }

  @media (max-width: 380px) {
    .card-outer {
    flex-direction: column; 
    align-items: center; 
  }
  
  .card {
    width: 90%; 
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

    .card-link {
      bottom: 1em; 
      left: 1em; 
    }
  }
</style>