<script>    
    // Importeer de CSS
    import '/src/styles/global.css';

    // Importeer de juiste componenten
    import TeamCursor from '/src/components/TeamCursor.svelte'
    import BlogsCarousel from '/src/components/BlogsCarousel.svelte'
    import ForAnyDevice from '/src/components/ForAnyDevice.svelte'
</script>

<!-- Laat de juiste componenten zien op de pagina -->
<BlogsCarousel/>
<TeamCursor/>
<ForAnyDevice/>