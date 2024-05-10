<script>
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
  import '@splidejs/svelte-splide/css';
  
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
          starts_with: 'blogs', // Zoek alleen naar de Story's die met 'blogs' beginnen
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
    <h2>free candy</h2>
    <p>
        Just kidding, but here are some free tips and tricks we offer you if you want anything digital.
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
            arrows: 'splide-arrows', 
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
            <SplideTrack>
              <Card blog={blog.content} slug={blog.full_slug}/>
            </SplideTrack>
          </SplideSlide>
        {/each}
      </Splide>

      <!-- Custom arrow buttons -->
      <div class="splide-arrows">
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
        <a href="/blogs" class="button button-tertiary">
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

      .splide-arrows {
        display: flex;
        justify-content: flex-end;
        padding: 0 20px;
        margin-top: 1em;

        .custom-prev, .custom-next {
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 3em;
          color: var(--color-white);

          &::after {
            content: '';
            position: absolute;
            height: calc(4% + 0.5em);
            width: calc(4% + 0.5em);
            border: var(--border-width) solid var(--color-white);
            border-radius: 1.15em;
            z-index: -1;
            opacity: 0;
            transition: 250ms opacity;
          }

          &:focus-visible::after {
            opacity: 1;
          }
        }

        .custom-prev::after {
          left: 94.3em;
          top: 110.9em;
        }

        .custom-next::after {
          left: 99.4em;
          top: 110.9em;
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

    .splide-arrows {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 650px) {
      .splide-arrows {
        padding-right: 5em;
      }
  }
</style>