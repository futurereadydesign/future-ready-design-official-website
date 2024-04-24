<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import '@splidejs/svelte-splide/css/core';

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
          width: 1100,
          gap: '1em',
          pagination: false,
          arrows: false,
          classes: {
            arrows: 'splide-arrows', 
            prev: 'custom-prev', 
            next: 'custom-next', 
          },
          breakpoints: {
            1139: {
              gap: '1em',
              perPage: 2,
              
            },
            730: {
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
      <div class="splide-arrows">
        <button class="custom-prev">
          <svg width="32" height="33" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
            <path d="M17.418 11.5L4.58464 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 17.9166L4.58333 11.5L11 5.08329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button class="custom-next">
          <svg width="32" height="33" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
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
      margin-top: 30em; 

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
        max-width: 1100px; 
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
          }
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 2em;
        }
      }
  }

        // .all-blogs-article {
        //     display: grid;
        //     grid-template-columns: repeat(auto-fit, minmax(20em, 1fr)); /* Verander auto-fill naar auto-fit */
        //     gap: 18.8em;
        //     margin-bottom: 5em;
        //     max-width: 36em;
        //     margin: 0 auto;
        //     margin-bottom: 4em;
        //     place-items: center;
        //     justify-content: center;
        // }

        // .all-blogs-div {
        //     padding-left: 1.5rem;
        //     padding-right: 1.5rem;
        //     flex: 1 1 auto;
        //     margin: 4em;
        // }

        // @media (min-width: 768px) {
        //     .all-blogs-article {
        //         grid-template-columns: repeat(6, minmax(0, 2fr));
        //     }
        // }
</style>