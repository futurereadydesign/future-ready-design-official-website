<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    onMount(() => {
        if (typeof window !== 'undefined') {
            if (!(new URLSearchParams(window.location.search).has('succes'))) {

                // REDIRECT TO ACCESSIBILITY PAGE
                var thankYouPage = window.location.origin + '/accessibility';
                window.location.replace(thankYouPage);
            } else {
                // // AUTOMATIC REDIRECT TO HUBSPOT FORM
                // var hubspotFormPage = 'https://meetings-eu1.hubspot.com/robbin-jansen/frd-accessibility';
                // window.open(hubspotFormPage, '_blank');
            }
        }
    });

    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();

</script>


<main in:fade={{duration: 300}} class="accessibility-confirmation header-margin">

    <section class="wrapper-large section-block no-borders">
        <div class="section-block-inner">
            <h1 class="wrapper-large">je gesprek is succesvol ingepland!</h1>
            <h2>we spreken elkaar snel online</h2>
            <p>Bedankt voor het inplannen van eeen kennismakings-gesprek! <strong>Je kunt dit tabblad nu sluiten</strong>. Bekijk je mail voor de uitnodiging voor het videogesprek (Google Meet).</p>
            <div class="button-wrapper">
                <a href="https://futureready.design/accessibility" class="button button-primary">
                    <span>Nieuwe scan</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1980_207)">
                            <path d="M0.917969 3.66663V9.16663H6.41797" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21.082 18.3334V12.8334H15.582" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.7838 8.25003C18.3189 6.93625 17.5288 5.76165 16.4871 4.83583C15.4455 3.91001 14.1863 3.26315 12.827 2.9556C11.4678 2.64805 10.0528 2.68984 8.71404 3.07707C7.37531 3.4643 6.15649 4.18435 5.1713 5.17003L0.917969 9.1667M21.0846 12.8334L16.8313 16.83C15.8461 17.8157 14.6273 18.5358 13.2886 18.923C11.9498 19.3102 10.5348 19.352 9.17556 19.0445C7.81631 18.7369 6.55712 18.09 5.51548 17.1642C4.47384 16.2384 3.68371 15.0638 3.2188 13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g><defs><clipPath id="clip0_1980_207"><rect width="22" height="22" fill="black"></rect></clipPath></defs>
                    </svg>
                </a>
                <a href="https://futureready.design/accessibility/checklist" class="button button-tertiary">
                    <span>Checklist downloaden</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            
        </div>
        <div class="section-block-inner wcag-visual">
            <img src="/assets/content/Accessibility-Scan-visual.png" alt="Visualisatie 1 van de Future Ready Design WCAG checklist PDF-document.">
            <img src="/assets/content/Accessibility-Scan-visual-2.png" alt="Visualisatie 2 van de Future Ready Design WCAG checklist PDF-document.">
        </div>
    </section>



</main>


<style>
    @import '/src/styles/main.css';
</style>