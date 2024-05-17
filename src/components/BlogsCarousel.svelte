<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from "@storyblok/svelte";

  // Definieer de blok
  export let blok;

  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
  // import '@splidejs/svelte-splide/css';
  
  // Importeer het juiste css bestand
  import '/src/styles/global.css';

  // Importeer de Card-component
	import Card from './Storyblok/Card.svelte';

  // Importeer de onMount-functie vanuit Svelte
  import { onMount } from 'svelte';

  // Importeer de useStoryblokApi-functie vanuit de Storyblok package
  import { useStoryblokApi } from '@storyblok/svelte';

  // Maak een lege array aan genaamd 'blog' om de blogposts op te slaan
  let blog = [];

  // Wanneer het component wordt geladen, voer deze functie uit
  onMount(async () => {
      // Gebruik de Storyblok API om data op te halen
      const storyblokApi = useStoryblokApi();
      // Maak een verzoek naar Storyblok om de Story's op te halen
      const { data } = await storyblokApi.get('cdn/stories', {
          version: 'draft', // Gebruik de draft versie van de Story's
          starts_with: 'blog', // Zoek alleen naar de Story's die met 'blogs' beginnen
          is_startpage: false // Deze Story's zijn niet de startpagina
      });
      // Sla de opgehaalde verhalen op in de 'blog' array
      blog = data.stories;
  });
  

  let splide;
  
  onMount(() => {
    // Verbind de aangepaste knoppen met de Splide-component
    document.querySelector('.custom-prev').addEventListener('click', () => {
      splide.go('<');
    });

    document.querySelector('.custom-next').addEventListener('click', () => {
      splide.go('>');
    });
  });
  
</script>

<section>
    <h2 use:storyblokEditable={blok}>{blok.title}</h2>
    <p>
      {blok.subtitle}
    </p>

    <article class="splide-container">
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          gap: '1em',
          pagination: false,
          arrows: false,
          classes: {
            arrows: 'splide__arrows', 
            prev: 'custom-prev', 
            next: 'custom-next', 
          },
          breakpoints: {
            1000: {
              gap: '1em',
              perPage: 2,
            },
            650: {
              perPage: 1,
            },
          },
        }}
        aria-label="A carousel of the blogs of Future Ready Design"
        bind:this={splide}
      >

        {#each blog as blog}
          <SplideSlide>
              <Card blog={blog.content} slug={blog.full_slug}/>
          </SplideSlide>
        {/each}
      </Splide>

      <!-- Custom arrow buttons -->
      <div class="splide__arrows">
        <button class="custom-prev">
          <svg width="27" height="28" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
            <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button class="custom-next">
          <svg width="27" height="28" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="button-container">
        <a href="/blog" class="button button-tertiary">
          <span>Read more interesting tips on our blog</span> 
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
            <path d="M4.58203 11.5H17.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 5.08331L17.4167 11.5L11 17.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

    </article>
</section>

<style lang="scss">
  section {
    margin-top: 4em;
    max-width: calc(100vw - 1em);

    h2 {
      text-align: center;
      margin: 0 auto 0.5em;
      display: block;
    }

    p {
      text-align: center;
      max-width: 21em;
      margin: 0 auto;
      display: block;
    }

    .splide-container {
      width: 90%;
      max-width: 55em;
      margin: 3em auto 0;

      .splide__arrows {
        display: flex;
        justify-content: flex-end;

        .custom-prev, .custom-next {
          background: none;
          border: none;
          cursor: pointer;
          margin: 1em 3em 1em 0;
        }
      }
      
      .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1em;
        margin-bottom: 2em;
      }
    }
  }

  @media (max-width: 650px) {
      .splide__arrows {
        padding: 0 3.2em;
      }
  }
</style>