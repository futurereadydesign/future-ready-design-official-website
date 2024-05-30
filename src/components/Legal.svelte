<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de richtext uit Storyblok
    import { renderRichText } from "@storyblok/js";

    // Definieer de blok
    export let blok;
</script>


<section class="legal-content" use:storyblokEditable={blok}>
    <h1 class="wrapper-max">{blok.title}</h1>
    <div class="wrapper-medium">{@html renderRichText(blok.content)}</div> 
</section>

<style lang="scss">

    :global(.legal-content a) {
        color: var(--color-lightblue);
        text-decoration: underline;

        &:hover,
        &:focus {
            color: var(--color-white);
        }
    }

    section {
        margin-top: 7.5em;

        h1 {
            margin-bottom: 1em;
        }
        div {
            margin-top: 1.5em;

        }
    }


</style>





