<script>
    /** @type {import('./$types').PageData} */

    // Laat het juiste jaartal zien voor de copyright
    let currentYear = new Date().getFullYear();

    // Exporteer de data
    export let data;

    // Exporteer de slug voor de meta data
    export let slug;

    // Voor de meta data
    let pageTitle = data.post.title;
    let pageDescription = data.post.content;
    let thumbnailUrl = data.post.image;
</script>

<!-- Laat de juiste titel zien en geef de meta data mee wanneer de pagina wordt gedeeld -->
<svelte:head>
    <title>Future Ready Design | {pageTitle}</title>
    <meta name="title" content="{pageTitle} | Future Ready Design">
    <meta name="description" content="{pageDescription}">
    <meta property="og:image" content="{thumbnailUrl}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.futureready.design/blogs/{slug}">
	<meta property="og:title" content="{pageTitle} | Future Ready Design">
	<meta property="og:description" content="#">
	<meta property="og:image" content="#">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blogs/{slug}">
	<meta name="twitter:title" content="{pageTitle} | Future Ready Design">
	<meta name="twitter:description" content="#">
	<meta name="twitter:image" content="#">
</svelte:head>

<main class="slug-container">
  <section class="slug-content">
      <!-- Alle data wordt ingeladen -->
      <article class="slug-article">

        <picture>
            <a href="https://futureready.design/" target="_blank">
                <img src={data.post.logo} alt={data.post.imageAlt}>
            </a>
        </picture>
          
          <img class="centered-image" src={data.post.image} alt={data.post.imageAlt} width="800" height="600">
          <a href="/blogs" class="blog-link">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.418 11.5L4.58464 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 17.9166L4.58333 11.5L11 5.08329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Terug naar het overzicht
          </a>
          <h1 class="blog-title">{data.post.title}</h1>
          <p class="blog-date">{data.post.date}</p>
          <p class="blog-content">{data.post.content}</p>
          <!-- <p class="blog-copyright">Copyright © {currentYear} Future Ready Design</p> -->
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
    .slug-container {
        display: flex;
        justify-content: center;
        padding: 0 20px;
    }

    .slug-content {
        max-width: 800px;
        width: 100%;
        padding: 20px;
    }

    .slug-article {
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;
    }

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

    /* .centered-logo {
        width: 110px;
        height: 40px;
        display: block;
        margin: 0 auto; 
        margin-bottom: 3em;
    } */

    .centered-image {
        display: block;
        margin: 0 auto; 
        margin-bottom: 2em;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    .blog-link {
        color: white;
        text-decoration: none;
        display: block; 
        margin-top: 10px;
    }

    .blog-link:hover {
        text-decoration: underline;
    }

    svg {
        width: 1em;
        height: 1em;
        margin-bottom: -0.2em;
    }

    .blog-title {
        font-size: 2em;
    }

    .blog-date {
        margin-bottom: 3em;
    }

    .blog-date {
        color: rgba(255, 255, 255, 0.694);
    }

    .blog-content {
        text-align: justify;
        color: rgba(255, 255, 255, 0.694);
    }

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

    /* .blog-copyright {
        color: rgba(255, 255, 255, 0.694);
        display: block;
        text-align: center;
        margin-top: 3em;   
    } */

    @media (max-width: 768px) {
        .slug-container {
            padding: 0 10px;
        }

        .slug-content {
            padding: 10px;
        }
    }
</style>
