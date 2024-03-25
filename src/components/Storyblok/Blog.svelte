<!-- <script>
    import { storyblokEditable, renderRichText } from "@storyblok/svelte";
    // import { renderRichText } from "@storyblok/js";
    $: blogHTML = renderRichText = renderRichText(blok.content);
     
    export let blok;
</script>

<section use:storyblokEditable={blok} class="container">
    <img class="blog-logo" src={blok.logo?.filename} alt={blok.logo.alt} width="110" height="40">
    <img class="blog-image" src={blok.image?.filename} alt={blok.image.alt} width="110" height="40">

    <a href={blok.link} class="blog-link">Terug naar het overzicht</a>

    <h2 class="blog-title">{blok.title}</h2>
    <p class="blog-date">{blok.date}</p>

    <p class="blog-content">{@html blogHTML}</p>

    <p class="blog-copyright">{blok.copyright}</p>
</section>
    
<style> 
  
</style> -->