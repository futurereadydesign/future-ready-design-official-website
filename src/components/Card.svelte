<script>
  import { storyblokEditable } from '@storyblok/svelte';
  export let blok;
</script>
  
  <article class="center">
    <div class="card" use:storyblokEditable={blok}>
      <img src={blok.image?.filename} alt={blok.image.alt} width="312" height="180">

      <h3 class="title-card">{blok.title}</h3>

      <p class="date-card">{blok.date}</p>

      <a href={blok.link} class="link">
        <span class="link-content">
          Kom meer te weten 
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </a>

    </div>
  </article>
  
<style> 
  .center {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .card {
    display: flex; 
    flex-direction: column;
    word-spacing: 0.1em;
    background-color: #ffffff17;
    border-radius: 10px; 
    padding: 1em;
    border: 1.5px solid #ffffff3a; 
    max-width: 350px; 
    height: 20em;
    width: 100%; 
  }

  .title-card {
    margin-top: 0.5em;
    font-size: 1.1em;
    color: white;
  }

  .date-card {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 0.8em;
    color: rgba(255, 255, 255, 0.507);
  }

  .link {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }

  .link-content {
    display: inline-flex; 
    align-items: center;
  }

  .link-content:hover {
    border-bottom: 1.5px solid white;
  }

  svg {
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    margin-left: 0.5em;
  }
  
</style>