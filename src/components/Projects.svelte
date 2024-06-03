<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
</script>

<section class="heading-container wrapper-large" use:storyblokEditable={blok}>
    <h2>{blok.title}</h2>
</section>

<section class="content-container wrapper-large">
    {#each blok.projects as listItem}
        <article class="left-container">
            <a href={listItem.button_link.cached_url} class="clickable">
                <section class="image-container">
                    <img src={listItem.image.filename} alt={listItem.image.alt}>
                </section>
                <section class="text-container">
                    <h4>{listItem.subtitle}</h4>
                    <h3>{listItem.title}</h3>
                    <p>{listItem.text}</p>
                    <span class="button button-quaternary">
                        <span>{listItem.button_text}</span>
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </section>
            </a>
        </article>

        <!-- <article class="left-container">
            <section class="image-container">
                <img src={listItem.image.filename} alt={listItem.image.alt}>
            </section>
            <section class="text-container">
                <h4>{listItem.subtitle}</h4>
                <h3>{listItem.title}</h3>
                <p>{listItem.text}</p>
                <a href={listItem.button_link.cached_url} class="button button-quaternary">
                    <span>{listItem.button_text}</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </section>
        </article> -->
    {/each}

    {#if blok.button_text}
        <section class="button-container">
            <a href={blok.button_link.cached_url} class="button button-primary">
                <span>{blok.button_text}</span>
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </section>
    {/if}
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


.heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7.5em;

    h2 {
        font-size: 2.5em;
        margin-bottom: 0.5rem;
    }
}

.content-container {
    // max-width: 1200px;
    margin: 3em auto 3em; 
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: var(--color-white);
    gap: 6.25em;

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -2.5em;
    }
}

article a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    color: var(--color-white);

    h4 {
        margin-bottom: .25em;
        font-weight: 300;
        font-size: 1em;
        font-family: var(--font-degular);
        color: var(--color-white-45);
    }

    h3 {
        font-size: 1.8em;
        margin-bottom: .6em;
    }

    p {
        margin-bottom: 1em;
        font-size: 1em;
        color: var(--color-white-45);
    }

}

// .left-container {
article a {
    display: flex;
    flex-direction: row;

    .image-container {
        display: flex;
        align-items: center;
        justify-content: flex-start; 

        img {
            border-radius: 1em;
            max-width: 22.5em;
        }
    }

    .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
        padding: 0 0.5em;
    }
}

// .right-container {
article:nth-of-type(even) a {
    display: flex;
    flex-direction: row-reverse; 
    // margin-top: 5em; 

    h4 {
        align-self: flex-start;
    }

    button {
        align-self: flex-start;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: flex-end; 
    }

    .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
        padding: 0 0.5em;
    }
}

article:nth-of-type(odd) a {
    flex-direction: row; 
}

article:nth-of-type(even) {
    flex-direction: row-reverse; 
    
    .image-container {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
}

.image-container, .text-container {
    flex: .75;
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    max-width: 30em;
}

.text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1em;
}

@media (max-width: 900px) {
    .content-container {
        align-items: center;
        text-align: left;

        .button-container {
            margin-top: 2em;
        }
    }

    article a {
        flex-direction: column;
        // max-width: 600px;
    }

    .image-container img, .text-container {
        width: 100%;
    }


    .heading-container {

        h2 {
            font-size: 2.25em;
        }
    }

    .content-container {
        margin: 0;
    }

    h4 {
        margin-top: 1em;
    }
}



/* SMALL SCREEN */
@media screen and (max-width: 600px) {
    .heading-container {
        margin-top: 0;
    }
    .content-container {
        gap: 5em;

        article a {
            flex-direction: column;
            align-items: flex-start;

            img {
                max-width: 20em;
                border-radius: 0.75em;
            }

            .text-container,
            .image-container {
                padding: 0;
            }
        }

        .button-container {
            margin-top: -1.5em;
        }
    }
}

/* SMALL SCREEN */
@media screen and (max-width: 500px) {
    .content-container {

        article a {

            img {
                max-width: 100%;
            }
        }
    }
}
</style>
