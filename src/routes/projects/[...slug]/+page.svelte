<script>
    /** @type {import('./$types').PageData} */

    // Laat het juiste jaartal zien voor de copyright
    let currentYear = new Date().getFullYear();

    // Exporteer de data
    export let data;

    // Exporteer de slug voor de meta data
    export let slug;

    /* Meta data */
    let pageTitle = data.post.title;
    let pageDescription = data.post.metaDescription;
    let thumbnailUrl = data.post.metaImage;

    // Facebook
    let fbPageDescription = data.post.fbMetaDescription;
    let fbThumbnailUrl = data.post.fbMetaImage;

    // Twitter
    let twitterPageDescription = data.post.twitterMetaDescription;
    let twitterThumbnailUrl = data.post.twitterMetaImage;
</script>

<!-- Laat de juiste titel zien en geef de meta data mee wanneer de pagina wordt gedeeld -->
<svelte:head>
    <meta name="title" content="{pageTitle} | Future Ready Design">
    <meta name="description" content="{pageDescription}">
    <meta property="og:image" content="{thumbnailUrl}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.futureready.design/blogs/{slug}">
	<meta property="og:title" content="{pageTitle} | Future Ready Design">
	<meta property="og:description" content="{fbPageDescription}">
	<meta property="og:image" content="{fbThumbnailUrl}">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blogs/{slug}">
	<meta name="twitter:title" content="{pageTitle} | Future Ready Design">
	<meta name="twitter:description" content="{twitterPageDescription}">
	<meta name="twitter:image" content="{twitterThumbnailUrl}">
</svelte:head>

<main class="slug-projects-main">
  <section class="slug-projects-section">
    <picture>
        <a href="https://futureready.design/" target="_blank">
            <img src={data.post.logo} alt={data.post.imageAlt}>
        </a>
    </picture>

      <!-- Alle data wordt ingeladen -->
      <article class="slug-projects-article">
          <img class="slug-projects-image" src={data.post.image} alt={data.post.imageAlt} width="800" height="600">
          <a href="/projects" class="slug-projects-link">
            <span class="slug-projects-link-content">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.418 11.5L4.58464 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 17.9166L4.58333 11.5L11 5.08329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Terug naar het overzicht
            </span>  
          </a>
          <h1 class="slug-projects-title">{data.post.title}</h1>
          <p class="slug-projects-date">{data.post.date}</p>
          <p class="slug-projects-content">{data.post.content}</p>
      </article>
  </section>
</main>

<footer>
    <div>
        <a href="https://www.futurereadydesign.nl/algemene-voorwaarden" target="_blank">Algemene Voorwaarden</a> · <a href="https://www.futurereadydesign.nl/privacy-policy" target="_blank">Privacy beleid</a>
    </div>
    <span>Copyright © {currentYear} Future Ready Design</span>
</footer>

<style>
    .slug-projects-main {
        display: flex;
        justify-content: center;
        padding: 0 20px;
    }

    .slug-projects-section {
        max-width: 800px;
        width: 100%;
        padding: 20px;
    }

    .slug-projects-article {
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;
    }

    /* PICTURE -------------------------------- */
    /* PICTURE -------------------------------- */
    picture {
        display: grid;
        place-items: center;
        margin-top: 3.15em;
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

    .slug-projects-image {
        display: block;
        margin: 0 auto; 
        margin-bottom: 2em;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    .slug-projects-link {
        display: block; 
        bottom: 1em; 
        left: 1em; 
        text-decoration: none;
        color: inherit;
        /* font-weight: 500; */
    }

    .slug-projects-link-content {
        display: inline-flex; 
        align-items: center;
    }

    .slug-projects-link-content:hover {
        text-decoration: underline;
    }

    svg {
        width: 1em;
        height: 1em;
        margin-bottom: -0.2em;
        margin-right: 0.2em;
    }

    .slug-projects-title {
        font-size: 2em;
        text-align: left;
    }

    .slug-projects-date {
        margin-top: -3.5rem;
        margin-bottom: 3em;
    }

    .slug-projects-date {
        color: rgba(255, 255, 255, 0.694);
    }

    .slug-projects-content {
        text-align: justify;
        color: rgba(255, 255, 255, 0.694);
    }

    /* FOOTER -------------------------------- */
    /* FOOTER -------------------------------- */
    footer {
        font-family: var(--font-degular);
        padding: 4.165em 0 1.95em 0;
        text-align: center;
    }
    footer > span {
        font-size: 0.9em;
        color: var(--color-white-45);
    }
    footer > div {
        margin-bottom: 0.5em;
    }
    footer > div a {
        color: var(--color-white);
        text-decoration: none;
    }
    footer > div a:hover {
        text-decoration: underline; 
    }
    footer > div a:focus-visible {
        color: var(--color-lightblue);
        text-decoration: underline;
    }

    /* MEDIA QUERIES -------------------------------- */
    /* MEDIA QUERIES -------------------------------- */
    @media (max-width: 768px) {
        .slug-projects-main {
            padding: 0 10px;
        }

        .slug-projects-section {
            padding: 10px;
        }
    }

</style>
