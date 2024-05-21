<script>
    // Importeer de onMount-functie uit de 'svelte' bibliotheek
    // Dit wordt gebruikt om code uit te voeren wanneer de component is ingeladen in de DOM
    import { onMount } from 'svelte';
    // Importeer het juiste css bestand
    import '/src/styles/global.css';
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;

    console.log(blok);

    // Variabele om het ID van het animatieverzoek bij te houden
    let requestId; 
    // Functie om de positie van de muis te verkrijgen
    function getCursor(event) { 
        if (requestId) {
            cancelAnimationFrame(requestId); // Als er al een animatieverzoek is, annuleer het dan
        }
        requestId = requestAnimationFrame(() => { // Maak een nieuw animatieverzoek
            let x = event.screenX; // X-coördinaat van de muispositie op het scherm
            let y = event.clientY; // Y-coördinaat van de muispositie binnen het viewport

            const infoCard = document.getElementById('you'); // Haal het element op met de id 'you'
            infoCard.style.top = (y + 0) + "px"; // Stel de 'top' CSS-stijl in op de Y-coördinaat van de muis
            infoCard.style.left = (x + 0) + "px"; // Stel de 'left' CSS-stijl in op de X-coördinaat van de muis
        });
    }

    // Deze functie wordt uitgevoerd wanneer de component is ingeladen
    onMount(() => {
        // Hier word er een eventlistener toegevoegd aan het window object voor het "scroll" event
        // Telkens wanneer er wordt gescrold, zal de functie worden uitgevoerd
        window.addEventListener(
            "scroll",
            () => {
                // Hier word een CSS variabele genaamd "--scroll" op het body element van de pagina gezet,
                // deze variabele zal worden gebruikt om de scrollpositie bij te houden
                document.body.style.setProperty(
                    "--scroll",
                    //  Dit berekent de scrollpositie als een percentage van hoe ver de pagina is gescrold 
                    // in verhouding tot de totale hoogte van de pagina
                    window.scrollY / (document.body.offsetHeight - window.innerHeight) 
                );
            },
            false
        );

        // Hier word de eventlistener verwijderd
        return () => {
            window.removeEventListener("scroll", window);
        };
    });

    // Definieer de variabele buiten de onMount
    let cursorEffectSection;

    // Voer de code uit wanneer de component is ingeladen
    onMount(() => {
        // Selecteer het element met de id 'cursor-effect' nadat de component is ingeladen
        cursorEffectSection = document.getElementById('cursor-effect');

        // Voeg een event listener toe voor wanneer de muis de sectie binnenkomt
        cursorEffectSection.addEventListener('mouseenter', () => {
            // Selecteer het element met de id 'you'
            const youElement = document.getElementById('you');
            // Verander de opacity van het 'you'-element naar 1 wanneer de muis de sectie binnenkomt
            youElement.style.opacity = 1;
        });

        // Voeg een event listener toe voor wanneer de muis de sectie verlaat
        cursorEffectSection.addEventListener('mouseleave', () => {
            // Selecteer het element met de id 'you'
            const youElement = document.getElementById('you');
            // Verander de opacity van het 'you'-element naar 0 wanneer de muis de sectie verlaat
            youElement.style.opacity = 0;
        });
    }); 
</script>

<section id="cursor-effect" on:mousemove={getCursor} use:storyblokEditable={blok}>

    <!-- <div id="you-card"><p>You?</p></div> -->
    
    <h2>{blok.title}</h2>
    <div class="underline"></div>

    <!-- YOU? -->
    <div id="you">
        <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.90529 31.2229L0 3.52652L23.651 20.0799L11.5249 22.2079L11.2091 22.4418L4.90529 31.2229Z" fill="white"/>
            <path d="M2.46484 7.37705L5.89854 26.7645L10.2064 20.8325L10.3489 20.629L19.1837 19.0785L2.46484 7.37705Z" fill="#21DBD0"/>
        </svg>
        <span>You?</span>
    </div>

    {#if blok.cursors[0]}
    {#each blok.cursors as svgItems}
        <div class="cursor-item">
            <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.90529 31.2229L0 3.52652L23.651 20.0799L11.5249 22.2079L11.2091 22.4418L4.90529 31.2229Z" fill="white"/>
                <path d="M2.46484 7.37704L5.89854 26.7645L10.2064 20.8325L10.3489 20.629L19.1837 19.0785L2.46484 7.37704Z" fill="{svgItems.color.color}"/>
            </svg>
            <span style="
                background-image: linear-gradient(to right, {svgItems.color.color}, {svgItems.color.color}, {svgItems.gradient_color.color});
                box-shadow: 0 0 40px 30px {svgItems.box_shadow.color};">
                {svgItems.name}
            </span>
        </div>
    {/each} 
    {/if}       
</section>

<style lang="scss">
    #cursor-effect {
        position: relative;
        margin-top: 12.5em;
        margin-bottom: 12.5em;
        cursor: none;

        h2 {
            text-align: center;
            max-width: 21em; 
            padding: 1em;
            display: block; 
            margin: 0 auto;

            font-size: 2.5em;
            margin-bottom: 0.5rem;
        }

        .underline {
            position: relative;
            width: 17em;
            height: 0.125em;
            overflow: hidden;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #21DBD0, white);
            margin: 0 auto;
            border-radius: 1em;
            z-index: -1;
        }

        svg {
            border-radius: 100%;
        }

        #you {
            display: flex; 
            align-items: center;
            position: fixed;
            user-select: none;

            opacity: 1; 
            transition: 150ms opacity;

            z-index: 1;

            margin-top: -2em;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block; 
                background: linear-gradient(to right, #21DBD0, #21DBD0, #A3FFFA); 
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: -0.4em; 
                margin-top: 3.6em; 
                box-shadow: 0 0 40px 30px rgba(33, 219, 208, 0.203);
            }
        }
        .cursor-item:nth-of-type(3) {
            position: absolute;
            left: 40%; //22%
            top: 24%; // 25%
            animation: DouweAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block; 
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
        }
        .cursor-item:nth-of-type(4) {
            position: absolute;
            right: 34%; //10%
            top: 42%; //50%
            animation: MarkAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block; 
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
        }
        .cursor-item:nth-of-type(5) {
            position: absolute;
            left: 45%; //15%
            bottom: 23%; //25%
            animation: RobbinAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block; 
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
        }
        .cursor-item:nth-of-type(6) {
            position: absolute;
            right: 43%; //18%
            top: 15%; //10%
            animation: RowinAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block; 
                background: linear-gradient(to right, #FBA108, #FBA108, #FBD593); 
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
        }
        .cursor-item:nth-of-type(7) {
            position: absolute;
            left: 35%; //35%
            bottom: 38%; //10%
            animation: TycoAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block;  
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
        }
        .cursor-item:nth-of-type(8) {
            position: absolute;
            right: 36%; //22%
            bottom: 20%; //15%
            animation: YunusAnimation 1s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;
        }

        svg {
                display: block; 
            }

            span {
                color: var(--color-black);
                font-weight: 500;
                display: inline-block;  
                border-radius: 0.4em; 
                padding: 0.3em 0.7em; 
                box-sizing: border-box; 
                white-space: nowrap; 
                margin-left: 0.8em; 
            }
    }

    // Animaties
    @keyframes DouweAnimation {
        0% {
            transform: translateY(-50%);
        }
        50% {
            left: 15%;
            top: 12%;
        }
        100% {
            left: 17%; 
            top: 25%; 
        }
    }

    @keyframes MarkAnimation {
        0% {
            transform: translateY(-42%);
        }
        50% {
            right: 17%; 
        }
        100% {
            right: 21%;  
        }
    }

    @keyframes RobbinAnimation {
        0% {
            transform: translateY(-38%);
        }
        50% {
            left: 31%; 
            bottom: -20%;
        }
        100% {
            left: 31%; 
            bottom: -20%;
        }
    }

    @keyframes RowinAnimation {
        0% {
            transform: translateY(-38%);
        }
        50% {
            right: 30%; 
            top: -10%; 
        }
        100% {
            right: 30%; 
            top: -10%;  
        }
    }

    @keyframes TycoAnimation {
        0% {
        transform: translateY(100%);
        }
        50% {
            left: 26%; 
        }
        100% {
            left: 20%; 
        }
    }

    @keyframes YunusAnimation {
        0% {
            transform: translateY(20%);
        }
        50%{
            right: 28%; 
            bottom: 6%; 
        }
        100% {
            right: 28%; 
            bottom: 6%; 
        }
    }

    // Media-queries
    // @media screen and (max-width: 1250px) {
    
    // }

    // @media screen and (max-width: 900px) {

    // }

    @media screen and (max-width: 900px) {
        #cursor-effect {
            h2 {
                font-size: 2.25em;
            }
        }
    }

    @media screen and (max-width: 768px) {
        @keyframes DouweAnimation {
            0% {
                transform: translateY(-50%);
            }
            100% {
                left: -250vw; 
                top: 74%; 
            }
        }
    }
</style>