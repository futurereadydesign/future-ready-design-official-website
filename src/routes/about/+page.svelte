<!-- <script>    
    // Importeer de CSS
    import '/src/styles/global.css';
    import '/src/styles/main.css'

    // Importeer de juiste componenten. 
    import Footer from '/src/components/Footer.svelte';
    import HeroText from '../../components/HeroText.svelte';
    import ContentText from '../../components/ContentText.svelte';
    import ContentSphere from '../../components/ContentSphere.svelte';
    import Partners from '/src/components/Partners.svelte';
</script>

Laat het juiste component zien op de pagina -->
<!-- <ContentSphere/>
<Footer/> -->

<script>
	// Importeer het juiste css bestand
	import '/src/styles/main.css';

	// Importeer Storyblok binnen Sveltekit om de functies te kunnen gebruiken
	// en content te kunnen integreren 
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
 
	// Controleer of er data is, zo ja, maak gebruik van de useStoryblokBridge functie
	// om content vanuit Storyblok in te laden en te updaten wanneer er wijzigingen zijn.
	export let data;
	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>
 
<!-- Laat de content van de story 'About' -->
{#if data.story}
	<StoryblokComponent blok={data.story.content} />
{/if}
