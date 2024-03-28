<script>
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
 
<!-- Pas de titel aan op basis van de naam van de Story en geef de meta data mee wanneer de website word gedeeld -->
<svelte:head>
	<title>Future Ready Design | {data.story.name}</title>
	<meta name="title" content="{data.story.name} | Future Ready Design">
	<meta name="description" content="">
	<meta property="og:image" content="">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.futureready.design/projecten">
	<meta property="og:title" content="{data.story.name} | Future Ready Design">
	<meta property="og:description" content="#">
	<meta property="og:image" content="#">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/projecten">
	<meta name="twitter:title" content="{data.story.name} | Future Ready Design">
	<meta name="twitter:description" content="#">
	<meta name="twitter:image" content="#">
</svelte:head>

<!-- 
	Er wordt gecheckt of de Story er is, als dat zo is
	 dan wordt de content van de Story weergegeven door StoryblokComponent 
-->
<main>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</main>

<style>
	
</style>