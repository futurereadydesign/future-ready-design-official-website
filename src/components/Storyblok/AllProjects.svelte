<script>
	// Importeer de Card-component
	import CardProjects from './CardProjects.svelte';

	// Importeer de onMount-functie vanuit Svelte
	import { onMount } from 'svelte';
	
	// Importeer de useStoryblokApi-functie vanuit de Storyblok package
	import { useStoryblokApi } from '@storyblok/svelte';

	// Maak een lege array aan genaamd 'projects' om de projects op te slaan
	let projects = [];

	// Wanneer het component wordt geladen, voer deze functie uit
	onMount(async () => {
		// Gebruik de Storyblok API om data op te halen
		const storyblokApi = useStoryblokApi();
		// Maak een verzoek naar Storyblok om de Story's op te halen
		const { data } = await storyblokApi.get('cdn/stories', {
			version: 'draft', // Gebruik de draft versie van de Story's
			starts_with: 'projects', // Zoek alleen naar de Story's die met 'projects' beginnen
			is_startpage: false // Deze Story's zijn niet de startpagina
		});
		// Sla de opgehaalde verhalen op in de 'projects' array
		projects = data.stories;
	});
</script>

<section class="all-projects-section">
	{#each projects as projects}
		<article class="all-projects-article">
			<!-- Render de Card-component voor elke blogpost -->
			<CardProjects projects={projects.content} slug={projects.full_slug} />
		</article>	
	{/each}
</section>

<style>
	.all-projects-section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 1em;
		place-items: center; 
		margin-bottom: 5em;
		max-width: 40em;
		margin: 0 auto; 
		margin-bottom: 4em;
	}	

	.all-projects-article {
		padding-left: 1.5rem;
		padding-right: 1.5rem; 
		flex: 1 1 auto; 
	}

  @media (min-width: 768px) { 
    .all-projects-section {
      grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }
  }
</style>