<script>
	// Importeer de Card-component
	import Card from './Card.svelte';

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
</script>

<section class="all-blogs-section">
	{#each blog as blog}
		<article class="all-blogs-article">
			<!-- Render de Card-component voor elke blogpost -->
			<Card blog={blog.content} slug={blog.full_slug} />
		</article>	
	{/each}
</section>

<style>
	.all-blogs-section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		/* gap: -1em; */
		/* margin-bottom: 9em; */
		max-width: 36em;
		margin: 0 auto;
		margin-bottom: 4em;
		place-items: center;
		justify-content: center;
		gap: 1em 0;
	}

	.all-blogs-article {
		width: 109%; 
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		flex: 1 1 auto;
		/* margin-bottom: 0.8em; */
		height: 100%;
	}

	@media (min-width: 768px) {
		.all-blogs-section {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>