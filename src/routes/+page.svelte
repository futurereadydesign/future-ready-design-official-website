<<<<<<< Updated upstream
 <!-- <script>
    // Tijdelijk, oude FRD website
    import Home from "../components/Home.svelte";
</script>
 
Oude FRD website wordt laten zien
<Home /> -->



<script>    
    // Importeer de CSS
    import '/src/styles/global.css';
    import '/src/styles/main.css'

    // Importeer de juiste componenten. 
    import Hero from '/src/components/Hero.svelte';
    import TeamCursor from '/src/components/TeamCursor.svelte';
    import ForAnyDevice from '/src/components/ForAnyDevice.svelte';
    import HyperdriveCTA from '/src/components/HyperdriveCTA.svelte';
    import FeaturedV1 from '/src/components/FeaturedV1.svelte';
    import FeaturedV2 from '/src/components/FeaturedV2.svelte';
    import BlogsCarousel from '../components/BlogsCarousel.svelte';
    import Footer from '/src/components/Footer.svelte';
    import Grid from '/src/components/Grid.svelte';
    import OurStory from '../components/OurStory.svelte';
    import Nav from '../components/Nav.svelte';
    import Projects from '../components/Projects.svelte';

</script>

<!-- Laat het juiste component zien op de pagina -->
<Nav/>
<Hero/>
<OurStory/>
<TeamCursor/>
<Projects/>

<FeaturedV1/>
<ForAnyDevice/>
<HyperdriveCTA/>
<Grid/>
<BlogsCarousel/>
<FeaturedV2/>
<Footer/>



=======
<script>
	// Importeer het juiste css bestand
	import '/src/styles/global.css';

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
 
<!-- Oude FRD website wordt laten zien -->
{#if data.story}
	<StoryblokComponent blok={data.story.content} />
{/if}
>>>>>>> Stashed changes
