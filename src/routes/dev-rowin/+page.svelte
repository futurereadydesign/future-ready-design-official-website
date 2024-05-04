<script>    
    // Importeer de CSS
    import '/src/styles/global.css';
    import '/src/styles/main.css'

    // Importeer de juiste componenten. 
    import Hero from '/src/components/Hero.svelte';
    import HyperdriveCTA from '/src/components/HyperdriveCTA.svelte';
    import FeaturedV2 from '/src/components/FeaturedV2.svelte';
    import Footer from '/src/components/Footer.svelte';

</script>

<!-- Laat het juiste component zien op de pagina -->
<Hero/>


<!-- TEMP -->
<div style="height: 50vh;"></div>


<HyperdriveCTA/>
<FeaturedV2/>
<Footer/>