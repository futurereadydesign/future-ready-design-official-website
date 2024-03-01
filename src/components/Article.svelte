 <script>
    import { storyblokEditable, renderRichText } from '@storyblok/svelte';
    export let blok;
    $: resolvedRichText = renderRichText(blok.content);
</script>

<section class="container" use:storyblokEditable={blok}>
    <img class="logo" src={blok.logo.filename} alt={blok.image.alt}/>

    <article class="article">
        <img class="main-image" src={blok.logo.filename} alt={blok.image.alt}/>
        <h1 class="title">{blok.title}</h1>
        <p class="content">{@html resolvedRichText}</p>
    </article>
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

    .main-image {
        object-fit: cover; 
        width: 100%; 
        height: 360px;
    }
</style>