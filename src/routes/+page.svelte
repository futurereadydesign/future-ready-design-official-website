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
    import Footer from '/src/components/Footer.svelte';
    import Grid from '/src/components/Grid.svelte';

</script>

<!-- Laat het juiste component zien op de pagina -->
<Hero/>


<!-- TEMP -->
<!-- <div style="height: 50vh;"></div> -->

<TeamCursor/>
<FeaturedV1/>
<ForAnyDevice/>
<HyperdriveCTA/>
<Grid/>
<FeaturedV2/>
<Footer/>



