<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
</script>

<header class="header-container header-margin">
    <!-- Toon het logo van het blok als dat beschikbaar is -->
    <!-- <picture>
        <a href="https://futureready.design/" target="_blank">
            <img src={blok.logo?.filename} alt={blok.logo.name}>
        </a>
    </picture> -->

    <!-- Toon de title van het blok -->
    <h1 class="wrapper-max" use:storyblokEditable={blok}>
        {blok.title} 
    </h1>

    <!-- Toon de subtitle van het blok -->
    <h2 class="header-subtitle" use:storyblokEditable={blok}>
        { blok.subtitle }
    </h2>

    <!-- Toon de description van het blok -->
    <div class="header-description-container">
        <p class="header-description" use:storyblokEditable={blok}>
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

    /* HEADINGS & PARAGRAPHS -------------------------------- */
    /* HEADINGS & PARAGRAPHS -------------------------------- */
    /* .header-title {
        font-size: 4.5em;
        max-width: 70%;
        margin: 0 auto; 
    } */

    .wrapper-max {
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
    }

    .header-subtitle {
        text-align: center;
        color: var(--color-white-45);
        font-size: 1.1em;
        font-weight: 400;
        margin: 1em 0 2em 0;
    }   

    .header-description-container {
        display: flex;
        justify-content: center;
        margin-block-start: 2em;
        margin-block-end: 2em;
    }

    .header-description {
        color: var(--color-white-45);
        text-align: left;
        word-wrap: break-word;
        width: 30em;
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

    @media screen and (max-width: 1250px) {
        h1 {
            font-size: 3em;
            margin-bottom: 1em;
        }
        h2 {
            font-size: 1.65em;
        }
        .wrapper-max {
            width: calc(100% - 5em);
        }
    }

    @media screen and (max-width: 900px) {
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 1.35em;
        }
        .wrapper-max {
            width: calc(100% - 4.5em);
        }
    }

    @media screen and (max-width: 768px) {
        :root {
            --font-size-global: 16px;
            --filter-blur: 50px;
        }

        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.45em;
        }
        .wrapper-max {
            width: calc(100% - 2em);
        }
    }
</style>