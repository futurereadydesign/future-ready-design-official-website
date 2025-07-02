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
			is_startpage: false, // Deze Story's zijn niet de startpagina
			language
		});
		// Sla de opgehaalde verhalen op in de 'projects' array
		projects = data.stories;
	});

	export let language = 'nl';
</script>

<section class="all-projects-section wrapper-large">
	{#each projects as projects}
		<article class="all-projects-article">
			<!-- Render de Card-component voor elke blogpost -->
			<CardProjects projects={projects.content} slug={projects.full_slug} language={language} />
		</article>	
	{/each}
</section>
