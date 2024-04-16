<script>
    

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
</script>

<section>
    <h2>free candy</h2>
    <p>
        Just kidding, but here are some free tips and tricks we offer you if you want anything digital.
    </p>
    
    <article class="all-blogs-article"> 
        {#each blog as blog}
            <div class="all-blogs-div">
                <Card blog={blog.content} slug={blog.full_slug}/>
            </div>	
        {/each}
    </article>

</section>

<style lang="scss">

    section {
        margin-top: 30em; 
        
        h2 {
            text-align: center;
            max-width: 21em; 
            padding: 1em;
            margin: 0 auto;
            display: block; 
        }
        p {
            text-align: center;
            max-width: 21em; 
            margin: 0 auto;
            display: block; 
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

        .all-blogs-div {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            flex: 1 1 auto;
            margin: 4em;
        }

        // @media (min-width: 768px) {
        //     .all-blogs-article {
        //         grid-template-columns: repeat(6, minmax(0, 2fr));
        //     }
        // }
    }

</style>