<script>
    import '/src/styles/main.css';
    import Footer from '/src/components/Footer.svelte';

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
	<meta property="og:description" content="{pageDescription}">
	<meta property="og:image" content="{thumbnailUrl}">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://www.futureready.design/blogs/{slug}">
	<meta name="twitter:title" content="{pageTitle} | Future Ready Design">
	<meta name="twitter:description" content="{pageDescription}">
	<meta name="twitter:image" content="{thumbnailUrl}">
</svelte:head>

<main class="slug-projects-main">
 

    <!-- Alle data wordt ingeladen -->
    <article>
        <section class="projects-header wrapper-max">
            <div>
                <a href="/projects" class="button button-quaternary button-flipped">
                    <span class="s-nrtRPbawfH4D" data-svelte-h="svelte-18x73jy">Back to previous page</span> 
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-nrtRPbawfH4D"><path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path><path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-nrtRPbawfH4D"></path>
                    </svg>
                </a>
                <h1 class="slug-projects-title">{data.post.title}</h1>
                <p>{data.post.intro}</p>
            </div>
            <div>
                <ul>
                    <li>
                        <strong>Client / partner</strong>
                        <h2>{data.post.clientOrPartner}</h2>
                    </li>
                    <li>
                        <strong>Project type</strong>
                        <h2>{data.post.projectType}</h2>
                    </li>
                    <li>
                        <strong>Project overview</strong>
                        <h2>{data.post.projectOverview}</h2>
                    </li>
                </ul>
            </div>
        </section>
        <section class="projects-main wrapper-large">
            <img src={data.post.image} alt={data.post.imageAlt}>
            <h2 class="wrapper-medium">{data.post.subtitle}</h2>
            <p class="wrapper-medium">{data.post.content}</p>
        </section>
        <section class="projects-extra">
            <ul>
                <li>
                    <img src={data.post.image} alt="">
                    <h3>Digital Design (UX/UI)</h3>
                    <p>We design user interfaces, websites and applications to high quality standards. User tested and validated before we even write a single line of code.</p>
                </li>
                <li>
                    <img src={data.post.image} alt="">
                    <h3>Accessibility improvement</h3>
                    <p>We help you in making your existing digital services more accessible for everyone. Making you comply to the WCAG guidelines.</p>
                </li>
                <li>
                    <img src={data.post.image} alt="">
                    <h3>Product development</h3>
                    <p>Launching a new digital product can be challenging. We guide you in finding the best possible strategy that will get you from zero to a successful launch achieving product-market fit.</p>
                </li>
                <li>
                    <img src={data.post.image} alt="">
                    <h3>Web and App development</h3>
                    <p>We help you by developing your new website or app for you.  We find the framework that fits best for you solution and always keep scalability and accessibility in mind.</p>
                </li>
            </ul>
        </section>

        
           
    

        
        
        
    </article>


</main>

<Footer/>

<style lang="scss">

    article {
        margin-top: 10em;

        .projects-header {
            display: flex;
            gap: 5em;

            div:nth-of-type(1) {
                flex: 1;

                a {
                    width: fit-content;
                }

                h1 {
                    font-size: 4em;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    text-align: left;
                }
                p {
                    font-size: 1.25em;
                    color: var(--color-white-45);
                }
            }

            div:nth-of-type(2) {
                max-width: 25em;
                width: 100%;
                height: fit-content;
                position: relative;
                padding: 2.25em 2.5em;
                margin-top: 3.25em;
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
                ul {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2.5em 2.25em;
                    
                    li {
                        
                        strong {
                            color: var(--color-white-45);
                        }
                        h2 {
                            margin-top: 0.25rem;
                            font-size: 1.75em;
                        }
                    }
                }
            }
        }

        .projects-main {
            margin-top: 6.25em;

            img {
                width: 100%;
                height: auto;
                border-radius: 1em;
            }
            h2 {
                font-size: 2em;
                margin-top: 3.75rem;
            }
            p {
                margin-top: .75em;
                white-space: pre-line;
            }
        }

        .projects-extra {
            overflow: hidden;
            margin-top: 6.25em;

            ul {
                display: flex;
                flex-wrap: nowrap;
                gap: 1.5em;
                overflow: auto;
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-snap-type: x mandatory;
                list-style: none;

                li {
                    flex: 0 0 25em;
                    scroll-snap-align: start;
                    scroll-margin: calc((100vw - 1200px) / 2);

                    &:first-of-type {
                        margin-left: calc((100vw - 1200px) / 2);
                    }
                    &:last-of-type {
                        margin-right: calc((100vw - 1200px) / 2);
                    }
                    img {
                        width: 100%;
                        border-radius: 0.65em;
                        margin-bottom: 1.25em;
                    }
                    h3 {
                        font-size: 1.25em;
                        margin-bottom: 0.25em;
                    }
                    p {
                        color: var(--color-white-45);
                    }
                }

                &::-webkit-scrollbar { 
                    display: none; 
                }
            }
        }





    }


</style>


<!-- <style>
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

</style> -->
