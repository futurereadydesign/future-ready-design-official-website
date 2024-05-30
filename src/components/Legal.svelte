<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de richtext uit Storyblok
    import { renderRichText } from "@storyblok/js";

    // Definieer de blok
    export let blok;
</script>


<section use:storyblokEditable={blok}>
    <h1 class="wrapper-max">{blok.title}</h1>
    <div class="wrapper-medium">{@html renderRichText(blok.content)}</div> 
</section>

<style lang="scss">
    section {
        margin-top: 7.5em;

        h1 {
            margin-bottom: 1em;
        }
        div {
            margin-top: 1.5em;
        }
        a {
            color: var(--color-white);
            text-decoration: underline;
        }
    }


</style>





