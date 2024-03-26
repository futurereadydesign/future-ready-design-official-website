<script>
    /** @type {import('./$types').PageData} */

    // Laat het juiste jaartal zien voor de copyright
    let currentYear = new Date().getFullYear();

    // Exporteer de data
    export let data;

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
	<meta property="og:url" content="https://www.futureready.design/blogs/">
	<meta property="og:title" content=" | Future Ready Design">
	<meta property="og:description" content="#">
	<meta property="og:image" content="#">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blogs/">
	<meta name="twitter:title" content=" | Future Ready Design">
	<meta name="twitter:description" content="#">
	<meta name="twitter:image" content="#">
</svelte:head>

<main class="slug-container">
  <section class="slug-content">
      <!-- Alle data wordt ingeladen -->
      <article class="slug-article">
          <img class="centered-logo" src={data.post.logo} alt={data.post.imageAlt}>
          
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
          <p class="blog-copyright">Copyright © {currentYear} Future Ready Design</p>
      </article>
  </section>
</main>

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

    .centered-logo {
        width: 110px;
        height: 40px;
        display: block;
        margin: 0 auto; 
        margin-bottom: 3em;
    }

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

    .blog-copyright {
        color: rgba(255, 255, 255, 0.694);
        display: block;
        text-align: center;
        margin-top: 3em;   
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 10px;
        }

        .content {
            padding: 10px;
        }
    }
</style>
