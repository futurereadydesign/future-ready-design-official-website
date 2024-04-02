<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
</script>

<header class="container">
    <!-- Toon het logo van het blok als dat beschikbaar is -->
    <picture>
        <a href="https://futureready.design/" target="_blank">
            <img class="logo" src={blok.logo?.filename} alt={blok.logo.name}>
        </a>
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
    /* PICTURE -------------------------------- */
    /* PICTURE -------------------------------- */
    picture {
        display: grid;
        place-items: center;
        margin-top: 4.15em;
        margin-bottom: 2.75em;
    }
    picture a {
        transition: 250ms;
        position: relative;
    }
    picture a:hover {
        opacity: 0.75;
    }
    picture a::after {
        content: '';
        position: absolute;
        left: -1em;
        top: -1em;
        height: calc(100% + 1.75em);
        width: calc(100% + 2em);
        border: var(--border-width) solid var(--color-white);
        border-radius: 1.15em;
        z-index: -1;
        opacity: 0;
        transition: 250ms opacity;
    }
    picture a:focus-visible::after {
        opacity: 1;
    }
    picture a img {
        height: 2.5em;
    }

    /* PARAGRAPHS AND HEADINGS */
    /* h1 {
        font-size: 4.15em;
        font-weight: 700;
        line-height: 125%;
        text-align: center;
        margin-bottom: 4.165rem;
        max-width: 70%;
        margin: 0 auto; 
    } */

    h2 {
        text-align: center;
    }

    p {
        font-family: var(--font-degular);
        color: var(--color-white-45);
        font-weight: 400;
        line-height: 145%;;
    }
    p:not(:first-of-type) {
        margin-top: 1.4em;
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
        margin-block-start: 2em;
        margin-block-end: 2em;
    }

    .description {
        color: rgba(255, 255, 255, 0.694);
        text-align: left;
        word-wrap: break-word;
        width: 30em;
    }
</style>