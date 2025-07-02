<script>
    import { onMount } from 'svelte';
    import { Application } from '@splinetool/runtime';

    // Definieer de richtext uit Storyblok
    import { renderRichText } from "@storyblok/js";

    // Definieer de blok
    export let blok;

    let app;
    
    onMount(() => {
        const canvas = document.getElementById('beliefs-sphere');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/p8lPvc36weIFPjiR/scene.splinecode');

    });
</script>

<section class="content-sphere wrapper-max">
    <h2>{blok.title}</h2>
    {#if blok.sphere_list[0]}
        <div class="sphere-container">
            <ul>
                {#each blok.sphere_list as sphereItems}
                    <li class="sphere-items">{@html renderRichText(sphereItems.content)}</li>
                {/each}
            </ul>
        <canvas id="beliefs-sphere"></canvas>
        </div> 
    {/if}   

    <a href="https://www.humanetech.com/" target="_blank" class="button">
        <img src={blok.humanetech.filename} alt={blok.humanetech.alt}>
    </a>
</section>



<style lang="scss">
    .content-sphere {
        margin-top: 10em;
        text-align: center;

        h2 {
            font-size: 2.5em;
            margin-bottom: 0.5rem;
        }

        .sphere-container {
            overflow: hidden;
            display: grid;
            place-items: center;
            position: relative;

            ul {
                list-style: none;
                font-family: var(--font-degular);

                .sphere-items {
                    display: inline-block;
                    position: absolute;
                    font-size: 1.5em;
                    color: var(--color-white-45);

                    &:nth-of-type(1) {
                        left: 0;
                        top: 0;
                        transform: translateX(5em) translateY(2.75em);
                    }
                    &:nth-of-type(2) {
                        right: 0;
                        top: 0;
                        transform: translateX(0em) translateY(4.5em);
                    }
                    &:nth-of-type(3) {
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    &:nth-of-type(4) {
                        right: 0;
                        bottom: 0;
                        transform: translateX(-1em) translateY(-1em);
                    }
                    &:nth-of-type(5) {
                        left: 0;
                        bottom: 0;
                        transform: translateX(2.5em) translateY(-2em);
                    }
                    &:nth-of-type(6) {
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    span {
                        font-weight: 500;
                        color: var(--color-white);
                    }
                }
            }

            canvas {
                width: calc(100% + 10em) !important;
            }
        }

        a {
            display: inline-block;
            padding: 0;
            margin-top: 5em;

            img {
                height: 7.5em;
            }
        }
        
    }


    /* LARGE SCREEN */
    @media screen and (max-width: 1250px) {
        .content-sphere {
            
            .sphere-container {

                ul {

                    li {
                        font-size: 1.25em;
                    }
                }
            }
        }
    }

    /* MODERATE SCREEN */
    @media screen and (max-width: 1100px) {
        .content-sphere {
            
            .sphere-container {

                ul {

                    li {
                        font-size: 1.15em;

                        &:nth-of-type(2) {
                            max-width: 10em;
                        }
                        &:nth-of-type(3) {
                            transform: translateY(calc(-50% + 1.25em)) !important;
                        }
                        &:nth-of-type(4) {
                            max-width: 7.5em;
                        }
                        &:nth-of-type(5) {
                            max-width: 7.5em;   
                        }
                        &:nth-of-type(6) {
                            max-width: 7.5em;
                        }
                    }
                }
            }
        }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .content-sphere {
            
            h2 {
                font-size: 2.25em;
            }

            .sphere-container {

                ul {

                    li {
                        max-width: 8em;
                    }
                }
            }
        }
    }

    /* SMALL SCREEN (BETWEEN) */
    @media screen and (max-width: 600px) {
        .content-sphere {
            margin-left: 0;
            width: 100% !important;
            max-width: 100%;

            h2 {
                padding-left: 0;
            }

            .sphere-container {

                ul {

                    .sphere-items {
                        max-width: 10em;

                        &:nth-of-type(1) {
                            left: 0;
                            top: 0;
                            transform: translateX(2em) translateY(3.5em) !important;
                        }
                        &:nth-of-type(2) {
                            right: unset;
                            left: 0;
                            top: 0;
                            transform: translateX(7.5em) translateY(7.75em) !important;
                        }
                        &:nth-of-type(3) {
                            right: unset;
                            left: 0;
                            top: 50%;
                            transform: translateX(12.5em) translateY(-5.5em) !important;
                            max-width: 6.5em;
                        }
                        &:nth-of-type(4) {
                            right: unset;
                            left: 0;
                            bottom: unset;
                            top: 50%;
                            transform: translateX(12em) translateY(.5em) !important;
                        }
                        &:nth-of-type(5) {
                            left: 0;
                            bottom: 0;
                            transform: translateX(11.5em) translateY(-8.5em) !important;
                            max-width: 7.5em;
                        }
                        &:nth-of-type(6) {
                            left: 0;
                            top: unset;
                            bottom: 0;
                            transform: translateX(4.5em) translateY(-4.5em) !important;
                            max-width: unset;
                        }
                    }
                }

                canvas {
                    width: calc(100% + 25em) !important;
                    transform: translateX(-27.5%) !important;
                }
            }

            a {
                margin-top: 2.5em;
            }
        }
    }

    /* SMALL SCREEN (BETWEEN EXTRA) */
    @media screen and (max-width: 550px) {
        .content-sphere {

            .sphere-container {

                ul {

                    .sphere-items {
                        max-width: 10em;

                        &:nth-of-type(1) {
                            left: 0;
                            top: 0;
                            transform: translateX(2em) translateY(3.5em) !important;
                        }
                        &:nth-of-type(2) {
                            right: unset;
                            left: 0;
                            top: 0;
                            transform: translateX(7.5em) translateY(7.25em) !important;
                        }
                        &:nth-of-type(3) {
                            right: unset;
                            left: 0;
                            top: 50%;
                            transform: translateX(12.5em) translateY(-4.5em) !important;
                            max-width: 6.5em;
                        }
                        &:nth-of-type(4) {
                            right: unset;
                            left: 0;
                            bottom: unset;
                            top: 50%;
                            transform: translateX(12em) translateY(0.75em) !important;
                        }
                        &:nth-of-type(5) {
                            left: 0;
                            bottom: 0;
                            transform: translateX(11.5em) translateY(-8em) !important;
                            max-width: 7.5em;
                        }
                        &:nth-of-type(6) {
                            left: 0;
                            top: unset;
                            bottom: 0;
                            transform: translateX(4.5em) translateY(-4em) !important;
                        }
                    }
                }

                canvas {
                    width: calc(100% + 25em) !important;
                    transform: translateX(-27.5%) !important;
                }
            }
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .content-sphere {

            h2 {
                width: 75%;
                margin: 0 auto;
            }

            .sphere-container {

                ul {

                    .sphere-items {
                        max-width: 10em;

                        &:nth-of-type(1) {
                            left: 0;
                            top: 0;
                            transform: translateX(2em) translateY(3.5em) !important;
                        }
                        &:nth-of-type(2) {
                            right: unset;
                            left: 0;
                            top: 0;
                            transform: translateX(5.5em) translateY(7.75em) !important;
                        }
                        &:nth-of-type(3) {
                            right: unset;
                            left: 0;
                            top: 50%;
                            transform: translateX(9em) translateY(-3.5em) !important;
                            max-width: 6.5em;
                        }
                        &:nth-of-type(4) {
                            right: unset;
                            left: 0;
                            bottom: unset;
                            top: 50%;
                            transform: translateX(7.5em) translateY(2.5em) !important;
                        }
                        &:nth-of-type(5) {
                            left: 0;
                            bottom: 0;
                            transform: translateX(6.5em) translateY(-6.5em) !important;
                            max-width: 7.5em;
                        }
                        &:nth-of-type(6) {
                            left: 0;
                            top: unset;
                            bottom: 0;
                            transform: translateX(2.5em) translateY(-2.5em) !important;
                        }
                    }
                }

                canvas {
                    width: calc(100% + 25em) !important;
                    transform: translateX(-30%) !important;
                }
            }
        }
    }

</style>