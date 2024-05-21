<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from "@storyblok/svelte";

  // Definieer de blok
  export let blok;
</script>

<section class="story-container wrapper-large" use:storyblokEditable={blok}>
  <img src={blok.image.filename} alt={blok.image.alt}>
  <div>
    <h3>{blok.subtitle}</h3>
    <p>“{blok.quote}”</p>
    <a href={blok.button_link.cached_url} class="button button-tertiary">
      <span>{blok.button_text}</span> 
      <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</section>


<style lang="scss">
.story-container {
  margin: 2.5em auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  color: white;

  img {
    width: 100%;
    max-width: 30em;
    height: auto;
    border-radius: 1em;
  }

  p {
    color: white;
    margin-top: 10px;
    font-size: 1.5em;
    max-width: 100%;
  }

  h3 {
    font-size: 1em;
    font-weight: 200;
    margin-top: 20px;
    opacity: 0.5;
  }

  a {
    margin-top: 2em;
    width: fit-content;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 2em;
      max-width: 35em;
    }

    p {
      text-align: left;
      font-size: 1.65em;
    }
  }
}

  </style>