<script>
    // Definieer de richtext uit Storyblok
    import { renderRichText } from "@storyblok/js";

    // Definieer de blok
    export let blok;
</script>

<section class="wrapper-small">
    <p>{@html renderRichText(blok.content)}</p>
</section>


<style>

    p {
        white-space: pre-line;
    }
</style>
