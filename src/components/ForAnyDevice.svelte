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
</script>

<section class="for-any-device" use:storyblokEditable={blok}>
    <h2>{blok.title}</h2>
    <p>{blok.subtitle}</p>

    <ul class="icons">
        <li>
            <svg width="36" height="47" viewBox="0 0 30 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="2" width="27" height="47" rx="6" stroke="white" stroke-width="3"/>
                <path d="M11 7.5H19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
        <li>
            <svg width="84" height="51" viewBox="0 0 88 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.5C10.5 4.18629 13.1863 1.5 16.5 1.5H71.5C74.8137 1.5 77.5 4.18629 77.5 7.5V48.5H10.5V7.5Z" stroke="white" stroke-width="3"/>
                <path d="M1.5 48.5H86.5V50C86.5 51.933 84.933 53.5 83 53.5H5C3.067 53.5 1.5 51.933 1.5 50V48.5Z" stroke="white" stroke-width="3"/>
                <path d="M40 3H48" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
        <li>
            <svg width="75" height="39" viewBox="0 0 79 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.4981 1.5C35.2163 1.50001 35.1623 1.50027 32.0091 1.50027C13.8789 1.50029 1.06606 6.69521 2.05346 23.4797C2.8763 37.4669 12.4504 41.9621 19.3976 41.4631C25.2432 41.0433 28.7265 37.3997 32.4044 35.069C35.5576 33.0709 36.3459 32.2716 39.4981 32.2716" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M39.5019 1.5C43.7837 1.50001 43.8377 1.50027 46.9909 1.50027C65.1211 1.50029 77.9339 6.69521 76.9465 23.4797C76.1237 37.4669 66.5496 41.9621 59.6024 41.4631C53.7568 41.0433 50.2735 37.3997 46.5956 35.069C43.4424 33.0709 42.6541 32.2716 39.5019 32.2716" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
        <li>
            <svg width="35" height="47" viewBox="0 0 39 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5 31.0417C37.5 36.7864 35.4622 41.2272 32.261 44.2378C29.046 47.2613 24.5548 48.9376 19.5 48.9376C14.4452 48.9376 9.95398 47.2613 6.73904 44.2378C3.53784 41.2272 1.5 36.7864 1.5 31.0417C1.5 25.1661 3.10262 19.2455 6.16613 14.8383C9.20249 10.47 13.6473 7.60425 19.5 7.60425C25.3527 7.60425 29.7975 10.47 32.8339 14.8383C35.8974 19.2455 37.5 25.1661 37.5 31.0417Z" stroke="white" stroke-width="3"/>
                <rect x="10.0625" y="19.6873" width="18.878" height="15.4722" rx="3.5" stroke="white" stroke-width="3"/>
                <path d="M22.2836 4.71875C22.2836 6.14441 21.0807 7.375 19.5031 7.375C17.9256 7.375 16.7227 6.14441 16.7227 4.71875C16.7227 3.29308 17.9256 2.0625 19.5031 2.0625C21.0807 2.0625 22.2836 3.29308 22.2836 4.71875Z" stroke="white" stroke-width="3"/>
                <ellipse cx="19.501" cy="41.5868" rx="1.42683" ry="1.38542" fill="white"/>
            </svg>
        </li>
    </ul>

    <ul class="animation">
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>  
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Phone</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Desktop</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>VR/AR</li>
        <li>
            <svg width="25" height="15" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3744 7.00355L12.8906 10.8565V13.9998L23.1094 8.73882L23.1094 5.26829L12.8906 0.00732422V3.15063L20.3744 7.00355Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06584 6.99623L0.582031 10.8492V13.9925L10.8008 8.73149L10.8008 5.26097L0.582031 0V3.14331L8.06584 6.99623Z" fill="white"/>
            </svg>
        </li>
        <li>Tamagotchi</li>      
    </ul>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        overflow: hidden;
        // width: calc(100vw - 1em);
        margin-top: 7.5em;

        h2 {
            font-size: 2.5em;
            margin-bottom: 0.5rem;

            span {
                position: relative;
            }
            span::after {
                content: '';
                position: absolute;
                bottom: -2px; 
                left: 0;
                width: 100%;
                height: 2px; 
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #21DBD0, white, #21DBD0, rgba(255, 255, 255, 0));
            }
        }
        p {
            margin-top: 0.5em;
        }

        .icons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3.5em;
            padding: 0;
            list-style: none;

            li {
                margin-right: 2.5em; 

                &:last-child {
                    margin-right: 0;
                }

                svg {
                    display: block; 
                    width: 100%; 
                    height: auto; 
                }
            }
        }

        .animation {
            display: flex; 
            justify-content: space-between;
            margin-top: 3em;
            font-size: 1.75em;
            font-family: var(--font-outfit);
            font-weight: 600;
            overflow: hidden;
            padding-inline: 0;

            animation: moveLeftAndBack 8s ease-in-out infinite;
            animation-play-state: paused;
            animation-delay: calc(var(--scroll) * -2s);

            animation-iteration-count: 1;
            animation-fill-mode: both;

            will-change: transform;

            li {
                list-style: none; 
                margin-right: 1em;
            }
        }
    }

    // ANIMATIONS
    @keyframes moveLeftAndBack {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(80em);
        }
        100% {
            transform: translateX(0); 
        }
    }

    // MEDIA QUERIES
    @media screen and (max-width: 1250px) {
        .animation {
            font-size: 1.54em; 
        } 
    }

    @media screen and (max-width: 900px) {        
        h2 {
            font-size: 2.25em;
        }
        .animation {
            font-size: 1.33em; 
        }
    }

    @media screen and (max-width: 768px) {
        section {
            .animation {
                animation-delay: calc(var(--scroll) * -8.5s);
            }
        }
        .animation {
            font-size: 1.11em; 
        }
    }

    @media screen and (max-width: 768px) {
    .icons {
        margin: 0 1em 0 1em;
    }
}
</style>