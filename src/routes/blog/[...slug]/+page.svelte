<script>
    /** @type {import('./$types').PageData} */

    // Importeer het juiste css bestand
    import '/src/styles/global.css';

    // GLOBAL STORYBLOK FUNCTIONS
    import { renderRichText } from "@storyblok/js";

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
</script>

<!-- Laat de juiste titel zien en geef de meta data mee wanneer de pagina wordt gedeeld -->
<svelte:head>
    <meta name="title" content="{pageTitle} | Future Ready Design">
    <meta name="description" content="{pageDescription}">
    <meta property="og:image" content="{thumbnailUrl}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.futureready.design/blog/{slug}">
	<meta property="og:title" content="{pageTitle} | Future Ready Design">
	<meta property="og:description" content="{pageDescription}">
	<meta property="og:image" content="{thumbnailUrl}">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blog/{slug}">
	<meta name="twitter:title" content="{pageTitle} | Future Ready Design">
	<meta name="twitter:description" content="{pageDescription}">
	<meta name="twitter:image" content="{thumbnailUrl}">
</svelte:head>

<main class="slug-blog-main">
  <section class="slug-blog-section">
    <!-- <picture>
        <a href="https://futureready.design/" target="_blank">
            <img src={data.post.logo} alt={data.post.imageAlt}>
        </a>
    </picture> -->

      <!-- Alle data wordt ingeladen -->
      <article class="slug-blog-article wrapper-large">
          <img class="slug-blog-image " src={data.post.image} alt={data.post.imageAlt} >
          <section class="wrapper-medium">
            <button onclick="javascript:history.back()" class="button button-quaternary button-flipped">
                <span class="s-nrtRPbawfH4D" data-svelte-h="svelte-18x73jy">Terug naar vorige pagina</span> 
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-nrtRPbawfH4D"><path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path><path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path>
                </svg>
            </button>
    
            <h1 class="slug-blog-title">{data.post.title}</h1>
            <p class="slug-blog-date">{data.post.date}</p>
            <p class="slug-blog-content">{@html renderRichText(data.post.content)}</p>
        </section>

          <section class="blog-footer wrapper-medium">
            <div>
                <strong>{data.post.footerSubtitle}</strong>
                <h2>{data.post.footerTitle}</h2>
                <a href="/contact" class="button button-quaternary">
                    <span>{data.post.footerLinkText}</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            <div>
                <figure>
                    <img src={data.post.authorImage} alt={data.post.authorImageAlt} >
                </figure>
                <ul>
                    <li>
                        <h3>{data.post.authorName}</h3>
                    </li>
                    <li>
                        <span>{data.post.authorRole}</span>
                        <span>{data.post.authorCompany}</span>
                    </li>
                </ul>
            </div>
          </section>
      </article>
  </section>
</main>


<style lang="scss">
    :global(.legal-content a) {
        color: var(--color-lightblue);
        text-decoration: underline;

        &:hover,
        &:focus {
            color: var(--color-white);
        }
    }

    /* @import '/src/styles/blog.css'; */
    .slug-blog-main {
        display: flex;
        justify-content: center;
    }

    .slug-blog-section {
        padding: 20px;
    }


    .slug-blog-image {
        width: 100%;
        border-radius: 1em;
        margin-bottom: 2.5em;
    }

    /* .slug-blog-image {
        display: block;
        margin: 0 auto; 
        margin-bottom: 2em;
    } */

    /* img {
        max-width: 100%;
        height: auto;
        display: block;
    } */

    

   

    .slug-blog-title {
        font-size: 2em;
        text-align: left;
        margin-top: 1rem;
        margin-bottom: 1em;
    }

    .slug-blog-date {
        color: rgba(255, 255, 255, 0.694);
        margin-top: -1.5em; 
        margin-bottom: 2.5em; 
    }

    .slug-blog-content {
        text-align: justify;
        color: rgba(255, 255, 255, 0.694);
    }





    .blog-footer {
        margin-top: 3.75em;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2.75em;
        padding: 2.5em 2.75em;
        border-radius: 1.11em;
        background-color: var(--color-white-05);

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border: var(--border-width) solid var(--color-light-gray-65);
            border-radius: inherit;
            z-index: -1;
        }

        div {

            &:nth-of-type(2) {
                display: flex;
                flex-direction: row;
                gap: 1.25em;
            }

            strong {
                font-family: var(--font-degular);
                font-weight: 400;
            }
            a {
                width: fit-content;
                margin-top: 1.5em;
            }

            figure {
                position: relative;
                height: 4em;
                aspect-ratio: 1;
                border-radius: 50%;
                

                img {
                    height: 100%;
                    width: 100%;
                    border-radius: inherit;
                    object-fit: cover;
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    border: var(--border-width) solid var(--color-black-35);
                    border-radius: inherit;
                }
            }

            ul {

                li {
                    display: flex;
                    flex-direction: column;

                    span {
                        color: var(--color-white-45);
                    }
                }
            }

        }
    }

    

    /* MEDIA QUERIES -------------------------------- */
    /* MEDIA QUERIES -------------------------------- */
    @media (max-width: 768px) {
        .blog-footer {
            padding: 1.5em;
        }
    }

    @media (max-width: 600px) {
        .blog-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 3.25em;

        
        }


    }


    @media (max-width: 500px) {
        .wrapper-medium {
            width: 100% !important;
        }
    }
</style>
