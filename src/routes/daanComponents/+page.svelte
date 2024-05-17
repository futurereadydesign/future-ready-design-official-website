<script>    
    // Importeer de CSS
    import '/src/styles/global.css';
    import '/src/styles/main.css';

    // Importeer het juiste component.
    import Nav from '/src/components/Nav.svelte'
    import OurStory from '/src/components/OurStory.svelte'
    import Projects from '/src/components/Projects.svelte'

</script>

<!-- Laat het juiste component zien op de pagina -->
<Nav/>
<OurStory/>
<Projects/>