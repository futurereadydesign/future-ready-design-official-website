<section class="featured-v1 wrapper-max">
    <h2>work we do to make a <span>change</span></h2>
    <p>Some call it magic, we call it passion pixelated</p>

    <ul>
        <li>
            <img src="/assets/content/featured-web-and-app-development.png" alt="Picture 'User tested'">
            <h3>Digital Design (UX/UI)</h3>
            <p>We design user interfaces, websites and applications to high quality standards. User tested and validated before we even write a single line of code.</p>
        </li>
        <li>
            <img src="/assets/content/featured-web-and-app-development.png" alt="Illustration of a rocket, suiting 'User tested'">
            <h3>Accessibility improvement</h3>
            <p>We help you in making your existing digital services more accessible for everyone. Making you comply to the WCAG guidelines.</p>
        </li>
        <li>
            <img src="/assets/content/featured-web-and-app-development.png" alt="Illustration of a rocket, suiting 'User tested'">
            <h3>Product development</h3>
            <p>Launching a new digital product can be challenging. We guide you in finding the best possible strategy that will get you from zero to a successful launch achieving product-market fit.</p>
        </li>
        <li>
            <img src="/assets/content/featured-web-and-app-development.png" alt="Illustration of a rocket, suiting 'User tested'">
            <h3>Web and App development</h3>
            <p>We help you by developing your new website or app for you.  We find the framework that fits best for you solution and always keep scalability and accessibility in mind.</p>
        </li>
    </ul>
</section>


<style lang="scss">
    .featured-v1 {
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
                    width: 100%;
                    aspect-ratio: 1.15 / 1;
                    border-radius: 0.65em;
                    margin-bottom: 1.25em;
                    object-fit: cover;
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
        .featured-v1 {

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 3.25em 2em;

                li {
                    flex: 0 0 calc(50% - 1em);

                    img {
                        width: 65%;
                        aspect-ratio: 1.45 / 1;
                    }
                }
            }
        }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .featured-v1 {
            text-align: center;
            
            h2 {
                font-size: 2.25em;
            }
      

            // ul {
            //     flex-wrap: nowrap;
            //     overflow: auto;
            //     padding: 0 1rem;
            //     -ms-overflow-style: none;
            //     scrollbar-width: none;
            //     scroll-snap-type: x mandatory;
                

            //     li {
            //         flex: 0 0 calc(60% - 1em);
            //         scroll-snap-align: start;
            //         scroll-margin: 1rem;

            //         img {
            //             width: 100%;
            //             aspect-ratio: 1.45 / 1;
            //         }
            //     }

            //     &::-webkit-scrollbar { 
            //         display: none; 
            //     }
            // }

            // h2 {
            //     font-size: 2.25em;

            //     span {
            //         display: inline-block;
            //     }
            // }
        }
    }

    /* SMALL SCREEN */
    @media screen and (max-width: 768px) {
        .featured-v1 {
            overflow: hidden;
            width: 100%;

            ul {
                flex-wrap: nowrap;
                overflow: auto;
                padding: 0 1rem;
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-snap-type: x mandatory;
                

                li {
                    flex: 0 0 calc(55% - 1em);
                    scroll-snap-align: start;
                    scroll-margin: 1rem;

                    img {
                        width: 100%;
                        aspect-ratio: 1.25 / 1;
                    }
                }

                &::-webkit-scrollbar { 
                    display: none; 
                }
            }

            h2 {

                span {
                    display: inline-block;
                }
            }
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .featured-v1 {

            ul {
                
                li {
                    flex: 0 0 calc(75% - 1em);

                    img {
                        aspect-ratio: 1.15 / 1;
                    }
                }
            }

            h2 {
                max-width: 8.5em;
                margin: 0 auto 0.5rem auto;
            }
        }
    }
</style>