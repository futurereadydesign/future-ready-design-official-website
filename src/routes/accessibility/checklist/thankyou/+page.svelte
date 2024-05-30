<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    onMount(() => {
        if (typeof window !== 'undefined') {
            if (!(new URLSearchParams(window.location.search).has('succes'))) {

                // REDIRECT TO ACCESSIBILITY PAGE
                var thankYouPage = window.location.origin + '/accessibility';
                window.location.replace(thankYouPage);
            } 
        }
    });

    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();

</script>


<main in:fade={{duration: 300}} class="accessibility-confirmation header-margin">

    <section class="wrapper-large section-block no-borders">
        <div class="section-block-inner">
            <h1 class="wrapper-large">download de checklist!</h1>
            <h2>word digitaal toegankelijk</h2>
            <p>Kies de gewenste taal van de <strong>WCAG-checklist</strong> om te downloaden. Ga er mee aan de slag en maak jouw site volledig toegankelijk!</p>
            <div class="button-wrapper">
                <a href="/assets/content/Accessibility-Checklist_Future-Ready-Design.pdf" download="Accessibility-Checklist_Future-Ready-Design.pdf" class="button button-primary">
                    <span>Engelse versie</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="/assets/content/Toegankelijksheid-Checklist_Future-Ready-Design.pdf" download="Toegankelijksheid-Checklist_Future-Ready-Design.pdf" class="button button-primary">
                    <span>Nederlandse versie</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
        </div>
        <div class="section-block-inner wcag-visual">
            <img src="/assets/content/Accessibility-Checklist-visual.png" alt="Visualisatie 1 van de Future Ready Design WCAG checklist PDF-document.">
            <img src="/assets/content/Accessibility-Checklist-visual-2.png" alt="Visualisatie 2 van de Future Ready Design WCAG checklist PDF-document.">
        </div>
    </section>



</main>

    
<style>
    @import '/src/styles/main.css';
</style>