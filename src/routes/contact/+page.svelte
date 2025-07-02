<script>
	// Importeer het juiste css bestand
	import '/src/styles/global.css';
    import '/src/styles/main.css'

	// Importeer Storyblok binnen Sveltekit om de functies te kunnen gebruiken
	// en content te kunnen integreren 
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
 
	// Controleer of er data is, zo ja, maak gebruik van de useStoryblokBridge functie
	// om content vanuit Storyblok in te laden en te updaten wanneer er wijzigingen zijn.
	export let data;
	let language = data.language || 'nl';
	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>
 
<!-- Laat de content van de story 'About' -->
{#if data.story}
	<StoryblokComponent blok={data.story.content} language={language} />
{/if}