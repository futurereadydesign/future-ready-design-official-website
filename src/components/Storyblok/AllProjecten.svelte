<script>
	// Importeer de Card-component
	import CardProjecten from './CardProjecten.svelte';

	// Importeer de onMount-functie vanuit Svelte
	import { onMount } from 'svelte';
	
	// Importeer de useStoryblokApi-functie vanuit de Storyblok package
	import { useStoryblokApi } from '@storyblok/svelte';

	// Maak een lege array aan genaamd 'blog' om de blogposts op te slaan
	let projecten = [];

	// Wanneer het component wordt geladen, voer deze functie uit
	onMount(async () => {
		// Gebruik de Storyblok API om data op te halen
		const storyblokApi = useStoryblokApi();
		// Maak een verzoek naar Storyblok om de Story's op te halen
		const { data } = await storyblokApi.get('cdn/stories', {
			version: 'draft', // Gebruik de draft versie van de Story's
			starts_with: 'projecten', // Zoek alleen naar de Story's die met 'projecten' beginnen
			is_startpage: false // Deze Story's zijn niet de startpagina
		});
		// Sla de opgehaalde verhalen op in de 'blog' array
		projecten = data.stories;
	});
</script>

<section class="container">
	{#each projecten as projecten}
		<article class="article">
			<!-- Render de Card-component voor elke blogpost -->
			<CardProjecten projecten={projecten.content} slug={projecten.full_slug} />
		</article>	
	{/each}
</section>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 1em;
		place-items: center; 
		margin-bottom: 5em;
		max-width: 40em;
		margin: 0 auto; 
		margin-bottom: 4em;
	}	

	.article {
		padding-left: 1.5rem;
		padding-right: 1.5rem; 
		flex: 1 1 auto; 
	}

  @media (min-width: 768px) { 
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }
  }
</style>