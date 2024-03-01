<script>
import { storyblokEditable } from "@storyblok/svelte";
import { renderRichText } from "@storyblok/js";
$: articleHTML = renderRichText(blok.title);
 
export let blok;
</script>

<section class="container">
    <img class="logo" src={blok.logo?.filename} alt={blok.logo.name} width="110" height="40">
 
    <h1 class="title" use:storyblokEditable={blok}>
        {@html articleHTML}
    </h1>

    <h2 class="subtitle" use:storyblokEditable={blok}>
        { blok.subtitle }
    </h2>

    <div class="center">
        <p class="description" use:storyblokEditable={blok}>
            { blok.description }
        </p>
    </div>
</section>

<style> 
    .container {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem; 
        margin-bottom: 1.5rem; 
    }

    .logo {
        margin: 2em;
    }

    .title {
        font-size: 4.5em;
    }

    .subtitle {
        color: rgba(255, 255, 255, 0.694);
        font-size: 1.1em;
        font-weight: 400;
        margin: 1em 0 3em 0;
    }

    .center {
        display: flex;
        justify-content: center;
    }

    .description {
        color: rgba(255, 255, 255, 0.612);
        text-align: left;
        word-wrap: break-word;
        width: 30em;
    }
</style>