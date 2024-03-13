<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // OVERLAY --------------------
    let overlay;

    function openOverlay() {
        overlay.classList.add('overlay-active');
        trapFocus(overlay);
    }  

    function closeOverlay() {    
        overlay.classList.remove('overlay-active');
    }


    // FOCUS ONLY ON OVERLAY ELEMENTS, WHEN OVERLAY IS ACTIVE
    // function trapFocus(element) {
    //     const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    //     const firstFocusableElement = focusableElements[0];
    //     const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    //     document.addEventListener('keydown', function(e) {
    //         let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
        
    //         if (!isTabPressed) {
    //             return;
    //         }
        
    //         if (e.shiftKey) /* shift + tab */ {
    //             if (document.activeElement === firstFocusableElement) {
    //             lastFocusableElement.focus();
    //             e.preventDefault();
    //             }
    //         } else /* tab */ {
    //             if (document.activeElement === lastFocusableElement) {
    //             firstFocusableElement.focus();
    //             e.preventDefault();
    //             }
    //         }
    //     });
    
    //     // Set initial focus to the first element
    //     firstFocusableElement.focus();
    // }


    // CLOSE OVERLAY ON ESCAPE KEY PRESS
    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
        closeOverlay();
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleEscapeKey);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('keydown', handleEscapeKey);
        }
    });


    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();



    // HUBSPOT INTEGRATION (CHECKLIST FORM OVERLAY) --------------------
    let wcagNotifySection;

    function submitDataToHubspot(event) {
        event.preventDefault();

        overlay.classList.add('form-submitted');

        var formData = new FormData(this);
        var formObject = {};
        formData.forEach(function(value, key){
            formObject[key] = value;
        });

        // Replace `YOUR_HUBSPOT_PORTAL_ID` and `YOUR_FORM_GUID` with your actual ID and Form GUID
        var endpoint = 'https://api.hsforms.com/submissions/v3/integration/submit/26479787/ca267574-010d-48f3-8d04-8ed2f62a94c1';

        // Adjust `formObject` structure if necessary to match your HubSpot form structure
        var data = {
            "fields": Object.keys(formObject).map(function(key) {
            return { "name": key, "value": formObject[key] };
            }),
            "context": {
            "pageUri": window.location.href,
            "pageName": document.title
            }
            // Include other necessary fields like `context` as per your requirement
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            wcagNotifySection.classList.add('success');
            
        })
        .catch((error) => {
            // console.error('Error:', error);
            wcagNotifySection.classList.add('error');
        });
    }
</script>

    <header>
        <a href="https://futureready.design/" target="_blank">
            <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
        </a>
    </header>

    <main in:fade={{duration: 300}} class="accessibility-checklist">
        <h1 class="wrapper-max">Je website <strong>toegankelijk</strong> maken? Gebruik onze <strong>WCAG</strong> checklist</h1>
        <h2>Download het gratis PDF-bestand</h2>
        
        <section class="wrapper-small">
            <p>De Web Content Accessibility Guidelines <strong>(WCAG)</strong> zijn internationale richtlijnen die digitale content toegankelijk maken voor mensen met <strong>beperkingen</strong>. Ze bevatten <strong>criteria</strong> voor onder andere tekstalternatieven voor afbeeldingen, navigeerbaarheid en kleurcontrast, waardoor websites en apps voor <strong>iedereen</strong> bruikbaar worden.</p>
        </section>

        <section class="wrapper-small checklist-list">
            <ul>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Verbeter de gebruikerservaring:</strong> Verbeter de bruikbaarheid voor alle gebruikers, inclusief mensen met een beperking, door je website toegankelijk en inclusief te maken.</p>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Vergroot je zichtbaarheid:</strong> Verbeter de prestaties van je website in zoekmachines en trek een breder publiek aan door te voldoen aan de normen voor digitale toegankelijkheid.</p>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Bouw naar een inclusief merk voor iedereen:</strong> Toon je toewijding aan inclusiviteit en maatschappelijke verantwoordelijkheid als organisatie.</p>
                </li>
            </ul>
        </section>
        
        <section class="wrapper-max section-block wcag no-overflow">
            <div class="section-block-inner">
                <h2>Download de WCAG checklist</h2>
                <strong>Zo blijf je ook in de toekomst toegankelijk!</strong>
                <button on:click={openOverlay} class="button button-secondary">
                    <span>Checklist downloaden</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p>Deze handige checklist biedt <strong>richtlijnen</strong> en <strong>actiepunten</strong> om je website in overeenstemming te brengen met de Web Content Accessibility Guidelines <strong>(WCAG)</strong>.</p>
            </div>
            <div class="section-block-inner wcag-visual">
                <img src="/assets/content/Accessibility-Checklist-visual.png" alt="Visualisatie 1 van de Future Ready Design WCAG checklist PDF-document.">
                <img src="/assets/content/Accessibility-Checklist-visual-2.png" alt="Visualisatie 2 van de Future Ready Design WCAG checklist PDF-document.">
            </div>
        </section>

        <!-- <section class="wrapper-small checklist-list">
            <ul>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Verhoog de gebruikerservaring:</strong> Verbeter de bruikbaarheid voor alle gebruikers, inclusief mensen met een beperking, door je website toegankelijk en inclusief te maken.</p>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Vergroot de zichtbaarheid:</strong> Verbeter de prestaties van je website in zoekmachines en trek een breder publiek aan door te voldoen aan de normen voor digitale toegankelijkheid.</p>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Bouw vertrouwen en geloofwaardigheid op:</strong> Toon je toewijding aan inclusiviteit en maatschappelijke verantwoordelijkheid, en bouw vertrouwen op bij bezoekers en potentiële klanten.</p>
                </li>
            </ul>
        </section> -->


        <!-- WCAG CHECKLIST OVERLAY -->
        <section bind:this={overlay} class="overlay wcag-overlay">
            <div class="overlay-content">
                <h2>Zo maak jij jouw website beter (toegankelijk) voor iedereen!</h2>
                <p>Laat je gegevens achter en <strong>download</strong> de WCAG-checklist direct.</p>

                <form on:submit={submitDataToHubspot}>
                    <fieldset>
                        <legend><span class="accessibility-hide">Persoonlijke informatie</span></legend>
                        <label for="wcag-mailadres">Mailadres</label>
                        <input type="email" id="wcag-mailadres" name="email" placeholder="Wat is je mailadres?" required>
                    </fieldset>
                    <fieldset>
                        <legend><span class="accessibility-hide">Bedrijfsinformatie (optioneel)</span></legend>
                        <label for="wcag-company">Bedrijf <span>optioneel</span></label>
                        <input type="text" id="wcag-company" name="company" placeholder="Wat is je bedrijfsnaam?">
                    </fieldset>
                    <fieldset class="wcag-check horizontal-items">
                        <legend><span class="accessibility-hide">Marketing doeleinden</span></legend>
                        <input type="checkbox" id="wcag-check" name="wcag-check" required>
                        <span class="checkmark"></span>
                        <label for="wcag-check">Ik ga hierbij akkoord, dat Future Ready Design B.V. mij mag benaderen voor marketing doeleinden.</label>
                    </fieldset>
                    <button type="submit" class="button button-primary">
                        <span>Checklist downloaden</span>
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
                <button on:click={closeOverlay} class="button button-icon-only">
                    <span>Pop-up sluiten</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div bind:this={wcagNotifySection} class="form-notify">
                    <div class="form-notify-success">
                        <h3>Downloaden de checklist.</h3>
                        <p role="alert">Kies de gewenste taal van de WCAG-checklist om te downloaden. Ga er mee aan de slag en maak jouw site toegankelijk!</p>
                        <div class="button-wrapper">
                            <a href="/assets/content/Accessibility-Checklist_Future-Ready-Design.pdf" download="Accessibility-Checklist_Future-Ready-Design.pdf" class="button button-primary downloadbuttonform">
                                <span>Engelse versie</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <a href="/assets/content/Toegankelijksheid-Checklist_Future-Ready-Design.pdf" download="Toegankelijksheid-Checklist_Future-Ready-Design.pdf" class="button button-primary downloadbuttonform">
                                <span>Nederlandse versie</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="form-notify-error">
                        <h3>Ohjee..</h3>
                        <p role="alert">De WCAG-checklist kon niet worden gedownload. Probeer het later nog eens, excuses voor het ongemak.</p>
                    </div>
                </div>
            </div>
            <div on:click={closeOverlay} class="overlay-background"></div>
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