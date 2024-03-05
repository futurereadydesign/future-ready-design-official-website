<script>
    let checklistOpenOverlayButton;
    let checklistOverlay;
    let closeOverlayButton;
    let overlayBackground;

    function overlayWCAG() {
        checklistOverlay.classList.add('overlay-active');
    }  

    function closeWCAGOverlay() {    
        checklistOverlay.classList.remove('overlay-active');
    }
</script>

    <header>
        <a href="https://futureready.design/" target="_blank">
            <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
        </a>
    </header>

    <main>
        <h1 class="wrapper-max">Je website <strong>toegankelijk</strong> maken? Gebruik onze <strong>WCAG</strong> checklist!</h1>
        <h2>Download het gratis PDF-bestand!</h2>
        
        <section class="wrapper-small">
            <p>De Web Content Accessibility Guidelines (<strong>WCAG</strong>) zijn internationale richtlijnen die digitale content toegankelijk maken voor mensen met <strong>beperkingen</strong>. Ze bevatten <strong>criteria</strong> voor onder andere tekstalternatieven voor afbeeldingen, navigeerbaarheid en kleurcontrast, waardoor websites en apps voor <strong>iedereen</strong> bruikbaar worden.</p>
        </section>
        
        <section class="wrapper-max section-block wcag no-overflow">
            <div class="section-block-inner">
                <h2>Download de WCAG checklist</h2>
                <strong>Zo blijf je ook in de toekomst toegankelijk!</strong>
                <button on:click={overlayWCAG} class="button button-secondary">
                    <span>Checklist downloaden</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget <strong>tempus</strong> mauris. Sed nulla risus, <strong>efficitur</strong>.</p>
            </div>
            <div class="section-block-inner wcag-visual">
                <img src="/assets/content/test-pdf.png" alt="Visualisatie van het Future Ready Design WCAG checklist PDF-document.">
                <img src="/assets/content/test-pdf.png" alt="Visualisatie van het Future Ready Design WCAG checklist PDF-document.">
            </div>
        </section>

        <section class="wrapper-small checklist-list">
            <ul>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Verhoog de gebruikerservaring:</strong> Verbeter de bruikbaarheid voor alle gebruikers, inclusief mensen met een beperking, door je website toegankelijk en inclusief te maken.</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Vergroot de zichtbaarheid:</strong> Verbeter de prestaties van je website in zoekmachines en trek een breder publiek aan door te voldoen aan de normen voor digitale toegankelijkheid.</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#00FF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" />
                    </svg>                        
                    <p><strong>Bouw vertrouwen en geloofwaardigheid op:</strong> Toon je toewijding aan inclusiviteit en maatschappelijke verantwoordelijkheid, en bouw vertrouwen op bij bezoekers en potentiële klanten.</p>
                </li>
            </ul>
        </section>

        <!-- <section class="wrapper-small scan-cta">
            <h2>Benieuwd naar het volledige rapport?</h2>
            <strong>Laat een gedetailleerde analyse maken van jouw website!</strong>
        </section>
        <form action="scan.html" method="get" class="url-input">
            <label for="site-url-input">Vul hieronder jouw site-URL in!</label>
            <input type="text" name="url" placeholder="Plaats hier de link van je site.." autocomplete="off" id="site-url-input" required>
            <button type="submit" class="button button-secondary">
                <span>Doe de scan!</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 11C14.122 11 13 9.878 13 8.5C13 7.122 14.122 6 15.5 6C16.878 6 18 7.122 18 8.5C18 9.878 16.878 11 15.5 11ZM15.5 7C14.673 7 14 7.673 14 8.5C14 9.327 14.673 10 15.5 10C16.327 10 17 9.327 17 8.5C17 7.673 16.327 7 15.5 7Z" fill="black" stroke="black" stroke-width="0.5"/>
                    <path d="M2.50039 22C2.37039 22 2.24239 21.949 2.14639 21.854C2.00939 21.717 1.96339 21.512 2.03039 21.33C3.56939 17.099 5.18739 14.953 6.83839 14.953C7.38339 14.953 7.89239 15.187 8.35339 15.647C9.08139 16.375 9.10739 17.1 9.00139 17.58C8.66739 19.088 6.53739 20.565 2.67139 21.971C2.61539 21.991 2.55739 22 2.50039 22ZM6.83939 15.952C6.34439 15.952 5.76139 16.386 5.15439 17.207C4.55739 18.014 3.95739 19.164 3.36639 20.634C4.70139 20.097 5.77439 19.552 6.56539 19.009C7.63239 18.276 7.94839 17.709 8.02539 17.363C8.10239 17.017 7.97839 16.686 7.64639 16.354C7.37639 16.084 7.11239 15.953 6.83839 15.953L6.83939 15.952Z" fill="black" stroke="black" stroke-width="0.5"/>
                    <path d="M21.4995 2.00002C18.9045 2.00002 16.5925 2.44002 14.6255 3.30802C13.0045 4.02402 11.6165 5.02802 10.4995 6.29402C10.2915 6.53002 10.0985 6.76902 9.91955 7.00902C9.05755 7.06602 8.17555 7.40902 7.29555 8.02902C6.55055 8.55302 5.80255 9.27902 5.07055 10.186C3.84055 11.71 3.08455 13.213 3.05255 13.276C2.94355 13.495 3.00855 13.761 3.20655 13.904C3.29455 13.968 3.39755 13.999 3.49955 13.999C3.62755 13.999 3.75555 13.95 3.85255 13.854C3.85755 13.849 4.33555 13.379 5.15055 12.918C5.82255 12.538 6.85855 12.091 8.11155 12.012C8.42855 12.823 9.33555 13.793 9.77055 14.228C10.2055 14.663 11.1755 15.57 11.9865 15.887C11.9075 17.14 11.4605 18.176 11.0805 18.848C10.6185 19.664 10.1495 20.141 10.1455 20.145C9.97255 20.318 9.95055 20.592 10.0935 20.791C10.1905 20.925 10.3425 20.999 10.4995 20.999C10.5755 20.999 10.6515 20.982 10.7225 20.946C10.7855 20.914 12.2885 20.158 13.8125 18.928C14.7195 18.196 15.4455 17.448 15.9695 16.703C16.5895 15.822 16.9315 14.941 16.9895 14.079C17.2285 13.901 17.4675 13.708 17.7045 13.499C18.9705 12.382 19.9745 10.994 20.6905 9.37302C21.5585 7.40702 21.9985 5.09402 21.9985 2.49902V1.99902L21.4995 2.00002ZM5.10655 11.808C6.05955 10.425 7.51655 8.71002 9.15855 8.17102C8.50955 9.30802 8.17355 10.352 8.05255 11.014C6.89355 11.085 5.89455 11.422 5.10655 11.808ZM12.1925 18.89C12.5785 18.102 12.9155 17.104 12.9855 15.946C13.6465 15.825 14.6915 15.489 15.8275 14.841C15.2875 16.48 13.5745 17.937 12.1925 18.89ZM17.0435 12.75C14.9635 14.585 12.8095 15 12.4995 15C12.4975 15 12.2925 14.996 11.7405 14.607C11.3555 14.336 10.9065 13.95 10.4785 13.522C10.0505 13.094 9.66455 12.645 9.39355 12.26C9.00455 11.708 9.00055 11.503 9.00055 11.501C9.00055 11.191 9.41555 9.03702 11.2505 6.95702C13.4465 4.46902 16.8075 3.10802 20.9945 3.00702C20.8935 7.19402 19.5335 10.555 17.0445 12.751L17.0435 12.75Z" fill="black" stroke="black" stroke-width="0.5"/>
                </svg>
            </button>
        </form>

        <section class="wrapper-small">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tempus mauris. Sed nulla risus, <strong>efficitur</strong> vel purus rhoncus, euismod suscipit nibh. Suspendisse sit amet dui sit amet metus <strong>vestibulum lobortis</strong> eu ac ante. Praesent varius felis quis nunc feugiat tincidunt.</p>
            <p>Fusce ut <strong>orci lorem</strong>. Aliquam ultricies dolor quis auctor interdum. Proin lobortis nec nunc vitae mattis. Integer in vestibulum nibh.</p>
        </section> -->



        <!-- WCAG CHECKLIST OVERLAY -->
        <section on:click={closeWCAGOverlay} bind:this={checklistOverlay} class="overlay wcag-overlay">
            <div class="overlay-content">
                <h2>Zo maak jij jouw website beter (toegankelijk) voor iedereen!</h2>
                <p>Laat je gegevens achter en download de WCAG-checklist direct.</p>

                <form action="#">
                    <fieldset>
                        <legend><span class="accessibility-hide">Persoonlijke informatie</span></legend>
                        <label for="wcag-mailadres">Mailadres</label>
                        <input type="email" id="wcag-mailadres" name="wcag-mailadres" placeholder="Wat is je mailadres?" required>
                    </fieldset>
                    <fieldset>
                        <legend><span class="accessibility-hide">Bedrijfsinformatie (optioneel)</span></legend>
                        <label for="wcag-company">Bedrijf <span>optioneel</span></label>
                        <input type="text" id="wcag-company" name="wcag-company" placeholder="Wat is je bedrijfsnaam?">
                    </fieldset>
                    <fieldset class="wcag-check horizontal-items">
                        <legend><span class="accessibility-hide">Marketing doeleinden</span></legend>
                        <input type="checkbox" id="wcag-check" name="wcag-check" required>
                        <span class="checkmark"></span>
                        <label for="wcag-check">Ik ga hierbij akkoord, dat Future Ready Design B.V. mij mag benaderen voor marketing doeleinden.</label>
                    </fieldset>
                    <button type="submit" class="button button-primary">
                        <span>Checklist downloaden!</span>
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
                <button on:click={closeWCAGOverlay} class="button button-icon-only">
                    <span>Pop-up sluiten</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div on:click={overlayBackground} class="overlay-background"></div>
        </section>

    </main>

    <footer>
        <span>Copyright © Future Ready Design</span>
    </footer>

<style>
    @import '/src/styles/main.css';
</style>