<script>
    // Definieer de blok
    export let blok;
</script>

<section class="partners">
    <h2>{blok.title}</h2>
    <p>{blok.content}</p>
    <ul>
        <li>
            <a href="https://accessibe.com/" target="_blank" class="clickable">
                <img src={blok.accessibe.filename} alt={blok.accessibe.alt}>
            </a>
        </li>
        <li>
            <a href="https://www.s-bb.nl/" target="_blank" class="clickable">
                <img src={blok.ssb.filename} alt={blok.ssb.alt}>
            </a>
        </li>
        <li>
            <a href="https://climate.stripe.com/76GUkX" target="_blank" class="clickable">
                <img src={blok.stripeclimate.filename} alt={blok.stripeclimate.alt}>
            </a>
        </li>
        <li>
            <a href="https://www.newfuturelab.nl/" target="_blank" class="clickable">
                <img src={blok.newfuturelab.filename} alt={blok.newfuturelab.alt}>
            </a>
        </li>
    </ul>
</section>


<style lang="scss">
    .partners {
        margin: 7.5em auto 0 auto;
        text-align: center;
        
        ul {
            position: relative;
            display: flex;
            flex-direction: row;
            gap: 3em;
            padding: 1.5em 2.5em;
            margin: 2.5em auto 0 auto;
            border-radius: 1.11em;
            background-color: var(--color-white-05);
            width: fit-content;
            list-style: none;

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
            

            li {
                position: relative;

                img {
                    height: 2.5em;
                    max-width: 10em;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 75%;
                    width: var(--border-width);
                    background-color: var(--color-white-10);
                    transform: translateX(calc(1.5em - 50%)) translateY(12.5%);
                    border-radius: var(--border-width);
                }

                &:last-of-type::after {
                    display: none;
                }

            }
        }
    }


    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .partners {

            ul {
                margin: 2em auto 0 auto;

                li {

                    img {
                        height: 2em;
                        max-width: 7.5em;
                    }
                }
            }
        }
    }

    /* SMALL SCREEN (BETWEEN) */
    @media screen and (max-width: 600px) {
        .partners {

            ul {
                padding: 1.25em 1.75em;
            }
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .partners {

            ul {
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {

                    &:nth-of-type(1) {order: 1;}
                    &:nth-of-type(2) {order: 2;}
                    &:nth-of-type(3) {order: 3;}
                    &:nth-of-type(4) {order: 4;}

                    &::after {
                    display: none;
                }
                }
            }
        }
    }
</style>