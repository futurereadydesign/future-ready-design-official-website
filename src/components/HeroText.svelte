<script>
    // Definieer de blok
    export let blok;
</script>

<section class="hero-text wrapper-max">
    <h1>{blok.title}</h1>
</section>

<style lang="scss">
    .hero-text {
        padding-top: 10em;

        h1 {
            font-size: 3.25em;
            margin-bottom: 1em;
        }
    }


    /* MODERATE SCREEN */
    @media screen and (max-width: 1100px) {
        .hero-text {

            h1 {
                font-size: 2.75em;
            }
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .hero-text {

            h1 {
                font-size: 2.5em;
                text-align: left;
            }
        }
    }
</style>
