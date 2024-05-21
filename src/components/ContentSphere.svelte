<script>
    import { onMount } from 'svelte';
    // import { Application } from '@splinetool/runtime';

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
        {#each blok.sphere_list as sphereItems}
            <div class="sphere-container">
                <ul>
                    <li>{@html renderRichText(sphereItems.content)}</li>
                </ul>
                <canvas id="beliefs-sphere"></canvas>
            </div>
        {/each} 
    {/if}   

    <!-- <div class="sphere-container">
        <ul>
            <li><span>respects</span> human nature</li>
            <li><span>minimizes</span> harmful consequences</li>
            <li><span>centers</span> on values</li>
            <li><span>creates</span> shared understanding</li>
            <li><span>supports</span> fairness and justice</li>
            <li><span>helps</span> people thrive</li>
        </ul>
        <canvas id="beliefs-sphere"></canvas>
    </div> -->

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

                li {
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
            width: calc(100% - 1rem);

            h2 {
                padding-left: 1rem;
            }

            .sphere-container {

                ul {

                    li {
                        max-width: 10em;

                        &:nth-of-type(1) {
                            left: 0;
                            top: 0;
                            transform: translateX(5em) translateY(2.75em);
                        }
                        &:nth-of-type(2) {
                            right: unset;
                            left: 0;
                            top: 0;
                            transform: translateX(13.5em) translateY(7.5em);
                        }
                        &:nth-of-type(3) {
                            right: unset;
                            left: 0;
                            top: 50%;
                            transform: translateX(17em) translateY(-2.5em);
                        }
                        &:nth-of-type(4) {
                            right: unset;
                            left: 0;
                            bottom: unset;
                            top: 50%;
                            transform: translateX(14.5em) translateY(2.5em);
                        }
                        &:nth-of-type(5) {
                            left: 0;
                            bottom: 0;
                            transform: translateX(13.5em) translateY(-6.5em);
                            max-width: unset;
                        }
                        &:nth-of-type(6) {
                            left: 0;
                            top: unset;
                            bottom: 0;
        
                            transform: translateX(7.5em) translateY(-2em);
                        }
                    }
                }

                canvas {
                    width: calc(100% + 25em) !important;
                    transform: translateX(-25%);
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

                canvas {
                    transform: translateX(-20%);
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

                    li {
                        max-width: 10em;

                        &:nth-of-type(1) {
                            transform: translateX(6.5em) translateY(2.75em);
                        }
                        &:nth-of-type(2) {
                            transform: translateX(9em) translateY(6em);
                        }
                        &:nth-of-type(3) {
                            transform: translateX(12.5em) translateY(-2.5em);
                        }
                        &:nth-of-type(4) {
                            transform: translateX(10.5em) translateY(1em);
                        }
                        &:nth-of-type(5) {
                            transform: translateX(10.5em) translateY(-4.75em);
                            max-width: 8em;
                        }
                        &:nth-of-type(6) {
                            transform: translateX(7.5em) translateY(-1.5em);
                        }
                    }
                }
            }
        }
    }

</style>