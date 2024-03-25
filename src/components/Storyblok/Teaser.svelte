<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
</script>

<header class="container">
    <!-- Toon het logo van het blok als dat beschikbaar is -->
    <picture>
        <source srcset={blok.logo?.filename} type="image/png">
        <img class="logo" src={blok.logo?.filename} alt={blok.logo.name}>
    </picture>

    <!-- Toon de title van het blok -->
    <h1 class="title" use:storyblokEditable={blok}>
        {blok.title} 
    </h1>

    <!-- Toon de subtitle van het blok -->
    <h2 class="subtitle" use:storyblokEditable={blok}>
        { blok.subtitle }
    </h2>

    <!-- Toon de description van het blok -->
    <div class="center">
        <p class="description" use:storyblokEditable={blok}>
            { blok.description }
        </p>
    </div>
</header>

<style> 
    .container {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem; 
        margin-bottom: 1rem; 
    }

    picture {
        width: 110px;
        height: 40px;
    }

    .logo {
        /* width: 100%;
        height: auto; */
        margin: 2em;
    }

    .title {
        font-size: 4.5em;
        max-width: 70%;
        margin: 0 auto; 
    }

    .subtitle {
        color: white;
        font-size: 1.1em;
        font-weight: 400;
        margin: 1em 0 3em 0;
    }

    .center {
        display: flex;
        justify-content: center;
    }

    .description {
        color: rgba(255, 255, 255, 0.694);
        text-align: left;
        word-wrap: break-word;
        width: 30em;
    }
</style>