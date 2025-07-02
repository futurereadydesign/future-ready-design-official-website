<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
</script>

<section class="featured-v2 wrapper-max" use:storyblokEditable={blok}>
    <!-- <h2>to the highest <span>quality standard</span></h2> -->
    <h2>{blok.title}</h2>
    <p>{blok.subtitle}</p>

    <ul>
        {#each blok.items as listItem}
            <li>
                <img src={listItem.illustration.filename} alt={listItem.illustration.alt}>
                <h3>{listItem.title}</h3>
                <p>{listItem.text}</p>
            </li>
        {/each}
    </ul>
</section>



<style lang="scss">
    .featured-v2 {
        text-align: center;
        margin-top: 7.5em;

        h2 {
            font-size: 2.5em;
            margin-bottom: 0.5rem;

            span {
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: block;
                    height: var(--border-width);
                    width: 100%;
                    background-image: linear-gradient(90deg, rgba(33,219,208,0) 0%, rgba(125,219,208,1) 50%, rgba(33,219,208,0) 100%);
                    filter: blur(var(--filter-blur-least)) saturate(175%);
                    transform: translateY(-100%);
                    z-index: -1;
                }
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: block;
                    height: var(--border-width);
                    width: 100%;
                    background-image: linear-gradient(90deg, rgba(33,219,208,0) 0%, rgba(125,219,208,1) 50%, rgba(33,219,208,0) 100%);
                    filter: blur(1px);
                    transform: translateY(-100%);
                    z-index: -1;
                }
            }
        }
        > p {
            color: var(--color-white-45);
        }
        
        ul {
            list-style: none;
            // display: flex;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 1.5em;
            text-align: left;
            margin-top: 3.75em;

            li {

                img {
                    height: 3.25em;
                    margin-bottom: 0.5em;
                }

                h3 {
                    font-size: 1.25em;
                    margin-bottom: 0.25em;
                }

                p {
                    color: var(--color-white-45);
                }
            }
        }
    }



    /* MODERATE SCREEN */
    @media screen and (max-width: 1100px) {
        .featured-v2 {

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 2.75em 2em;

                li {
                    flex: 0 0 calc(50% - 1em);
                }
            }
        }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .featured-v2 {
            text-align: center;

            h2 {
                font-size: 2.25em;

                span {
                    display: inline-block;
                }
            }
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .featured-v2 {

            ul {
                flex-direction: column;
                flex-wrap: nowrap;
                gap: 2.75em 2em;

                li {
                    flex: unset;
                }
            }
        }
    }
</style>