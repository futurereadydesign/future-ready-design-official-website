<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();

</script>

<header>
    <a href="https://futureready.design/" target="_blank">
        <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
    </a>
</header>

<main in:fade={{duration: 300}} class="accessibility-confirmation">
    <h1 class="wrapper-small">Het rapport is <strong>succesvol</strong> aangevraagd. We zullen <strong>spoedig</strong> contact met je opnemen.</h1>
    <!-- <h2>Download het gratis PDF-bestand</h2> -->
    
    <section class="wrapper-small">
        <p>Bedankt voor het versturen van je formulier! <strong>Je kunt dit tabblad nu sluiten</strong>. Het bericht is <strong>succesvol verzonden</strong> en ons team zal zo snel mogelijk contact met je opnemen.</p>
        <p>Als je meer wilt weten over Future Ready Design, kun je onze homepage bekijken voor meer informatie en details over onze diensten en uitgelichte projecten.</p>
        <a href="https://futureready.design" class="button button-tertiary">
            <span>Naar onze home pagina</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>
    </section>



</main>

<footer>
    <div>
        <a href="https://www.futurereadydesign.nl/algemene-voorwaarden" target="_blank">Algemene Voorwaarden</a> · <a href="https://www.futurereadydesign.nl/privacy-policy" target="_blank">Privacy beleid</a>
    </div>
    <span>Copyright © {currentYear} Future Ready Design</span>
</footer>
    
<style>
    @import '/src/styles/main.css';
</style>