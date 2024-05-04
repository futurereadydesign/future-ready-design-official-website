<script>    
    // Importeer de CSS
    import '/src/styles/global.css';
    import '/src/styles/main.css'

    // Importeer de juiste componenten. 
    import Footer from '/src/components/Footer.svelte';
    import HeroText from '../../components/HeroText.svelte';
    import ContentText from '../../components/ContentText.svelte';
</script>

<!-- Laat het juiste component zien op de pagina -->
<HeroText/>
<ContentText/>
<Footer/>