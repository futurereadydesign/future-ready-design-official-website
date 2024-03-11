<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // RETRIEVE INPUT FROM USER
    let scanForm;
    let scanInputField;
    let scanButtonSubmitText;

    // CHECK IF URL INPUT CONTAINS A (LEGIT) URL
    function isValidURL(string) {
        let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    };


    // PREVENT ENTER KEY DOWN SUBMIT IF NOT A VALID URL
    function onKeyInput(event){
        console.log("Test");
        
        let userInputURL = scanInputField.value;
        let urlStatus = isValidURL(userInputURL);

        // Check if URL is valid, then enable or disable submission as necessary
        if (urlStatus == true) {
            scanForm.classList.add('url-approved');
            scanForm.classList.remove('url-invalid');
        } else {
            scanForm.classList.remove('url-approved');
        }

        console.log(isValidURL(userInputURL));
    }


    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            let userInputURL = scanInputField.value;
            let urlStatus = isValidURL(userInputURL);

            if (!urlStatus) {
                event.preventDefault();

                // SHOW ERROR ON ENTER / SUBMIT
                scanForm.classList.add('url-invalid');
            }
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            scanForm.addEventListener('keydown', handleEnterKey);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            scanForm.removeEventListener('keydown', handleEnterKey);
        }
    });
    

    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();



    // FOCUS STATE FOR URL INPUT > ONLY WHEN USING A KEYBOARD NAVIGATION
    let lastInteraction = 'mouse';

    function handleKeyDown(event) {
        if (event.key === 'Tab') {
            lastInteraction = 'keyboard';
        }
    }

    function handleMouseDown() {
        lastInteraction = 'mouse';
    }
    
    function inputURLFocus() {
        if (lastInteraction === 'keyboard') {
            scanInputField.classList.add('input-focus-visible');
        }
    }

    function inputURLBlur() {
        scanInputField.classList.remove('input-focus-visible');
    }



    // CHANGE CONTENT BASED ON VIEWPORT --------------------
    onMount(() => {
        function updateViewportState(smallViewportSize) {
            if (smallViewportSize.matches) {
                // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
                scanButtonSubmitText.textContent = 'Scan!';
            } else {
                // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
                scanButtonSubmitText.textContent = 'Doe de scan!';
            }
        }

        // DEFINE VIEWPORT MEDIAQUERY
        const smallViewportSize = window.matchMedia("(max-width: 768px)");

        // RUN FUNCTION ON PAGE LOAD
        updateViewportState(smallViewportSize);

        // Listen for changes
        smallViewportSize.addEventListener('change', updateViewportState);

        // Cleanup function to remove the event listener when the component is destroyed
        return () => {
        smallViewportSize.removeEventListener('change', updateViewportState);
        };
    });

</script>

    <svelte:window on:mousedown={handleMouseDown} on:keydown={handleKeyDown} />

    <header>
        <a href="https://futureready.design/" target="_blank">
            <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
        </a>
    </header>

    <main in:fade={{duration: 300}} class="accessibility-landing">
        <h1 class="wrapper-max">Ontdek of je website voldoet aan de <strong>ADA</strong> & <strong>WCAG</strong> richtlijnen..</h1>

        <form action="/accessibility/scan" method="get" class="url-input" bind:this={scanForm} on:keyup={onKeyInput}>
            <label for="site-url-input">Vul hieronder jouw site-URL in!</label>
            <input type="text" name="url" placeholder="Plaats hier de link van je site.." autocomplete="off" id="site-url-input" required bind:this={scanInputField} on:focus={inputURLFocus} on:blur={inputURLBlur}>
            <span class="input-message" role="alert"></span>
            <button type="submit" class="button button-secondary">
                <span bind:this={scanButtonSubmitText}>Doe de scan!</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 11C14.122 11 13 9.878 13 8.5C13 7.122 14.122 6 15.5 6C16.878 6 18 7.122 18 8.5C18 9.878 16.878 11 15.5 11ZM15.5 7C14.673 7 14 7.673 14 8.5C14 9.327 14.673 10 15.5 10C16.327 10 17 9.327 17 8.5C17 7.673 16.327 7 15.5 7Z" fill="black" stroke="black" stroke-width="0.5"/>
                    <path d="M2.50039 22C2.37039 22 2.24239 21.949 2.14639 21.854C2.00939 21.717 1.96339 21.512 2.03039 21.33C3.56939 17.099 5.18739 14.953 6.83839 14.953C7.38339 14.953 7.89239 15.187 8.35339 15.647C9.08139 16.375 9.10739 17.1 9.00139 17.58C8.66739 19.088 6.53739 20.565 2.67139 21.971C2.61539 21.991 2.55739 22 2.50039 22ZM6.83939 15.952C6.34439 15.952 5.76139 16.386 5.15439 17.207C4.55739 18.014 3.95739 19.164 3.36639 20.634C4.70139 20.097 5.77439 19.552 6.56539 19.009C7.63239 18.276 7.94839 17.709 8.02539 17.363C8.10239 17.017 7.97839 16.686 7.64639 16.354C7.37639 16.084 7.11239 15.953 6.83839 15.953L6.83939 15.952Z" fill="black" stroke="black" stroke-width="0.5"/>
                    <path d="M21.4995 2.00002C18.9045 2.00002 16.5925 2.44002 14.6255 3.30802C13.0045 4.02402 11.6165 5.02802 10.4995 6.29402C10.2915 6.53002 10.0985 6.76902 9.91955 7.00902C9.05755 7.06602 8.17555 7.40902 7.29555 8.02902C6.55055 8.55302 5.80255 9.27902 5.07055 10.186C3.84055 11.71 3.08455 13.213 3.05255 13.276C2.94355 13.495 3.00855 13.761 3.20655 13.904C3.29455 13.968 3.39755 13.999 3.49955 13.999C3.62755 13.999 3.75555 13.95 3.85255 13.854C3.85755 13.849 4.33555 13.379 5.15055 12.918C5.82255 12.538 6.85855 12.091 8.11155 12.012C8.42855 12.823 9.33555 13.793 9.77055 14.228C10.2055 14.663 11.1755 15.57 11.9865 15.887C11.9075 17.14 11.4605 18.176 11.0805 18.848C10.6185 19.664 10.1495 20.141 10.1455 20.145C9.97255 20.318 9.95055 20.592 10.0935 20.791C10.1905 20.925 10.3425 20.999 10.4995 20.999C10.5755 20.999 10.6515 20.982 10.7225 20.946C10.7855 20.914 12.2885 20.158 13.8125 18.928C14.7195 18.196 15.4455 17.448 15.9695 16.703C16.5895 15.822 16.9315 14.941 16.9895 14.079C17.2285 13.901 17.4675 13.708 17.7045 13.499C18.9705 12.382 19.9745 10.994 20.6905 9.37302C21.5585 7.40702 21.9985 5.09402 21.9985 2.49902V1.99902L21.4995 2.00002ZM5.10655 11.808C6.05955 10.425 7.51655 8.71002 9.15855 8.17102C8.50955 9.30802 8.17355 10.352 8.05255 11.014C6.89355 11.085 5.89455 11.422 5.10655 11.808ZM12.1925 18.89C12.5785 18.102 12.9155 17.104 12.9855 15.946C13.6465 15.825 14.6915 15.489 15.8275 14.841C15.2875 16.48 13.5745 17.937 12.1925 18.89ZM17.0435 12.75C14.9635 14.585 12.8095 15 12.4995 15C12.4975 15 12.2925 14.996 11.7405 14.607C11.3555 14.336 10.9065 13.95 10.4785 13.522C10.0505 13.094 9.66455 12.645 9.39355 12.26C9.00455 11.708 9.00055 11.503 9.00055 11.501C9.00055 11.191 9.41555 9.03702 11.2505 6.95702C13.4465 4.46902 16.8075 3.10802 20.9945 3.00702C20.8935 7.19402 19.5335 10.555 17.0445 12.751L17.0435 12.75Z" fill="black" stroke="black" stroke-width="0.5"/>
                </svg>
            </button>
            <span class="input-focus-element"> <!-- FOCUS STATE FOR INPUT --> </span>
        </form>

        <section class="wrapper-small">
            <p>Om de toegankelijkheid van je website te <strong>analyseren</strong>, kun je eenvoudig je eigen URL invoeren in het bovenstaande veld. Dit helpt je te identificeren hoe goed je site voldoet aan de digitale <strong>toegankelijkheidsnormen</strong> en waar verbeteringen mogelijk zijn. Typ simpelweg de URL van je website in als <strong>"jouw-website.nl"</strong> in het invoerveld en start de scan.</p>
            <p>Door deze stap te volgen, zet je een <strong>belangrijke stap</strong> naar het verbeteren van de toegankelijkheid en gebruiksvriendelijkheid van je website voor alle gebruikers, <strong>inclusief mensen met beperkingen</strong>.</p>
        </section>

        <section class="wrapper-max section-block wcag no-overflow">
            <div class="section-block-inner">
                <h2>Download de WCAG checklist</h2>
                <strong>Zo blijf je ook in de toekomst toegankelijk!</strong>
                <a href="/accessibility/checklist" class="button button-secondary">
                    <span>Checklist downloaden</span>
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </a>
                <p>Deze handige checklist biedt <strong>richtlijnen</strong> en <strong>actiepunten</strong> om je website in overeenstemming te brengen met de Web Content Accessibility Guidelines <strong>(WCAG)</strong>.</p>
            </div>
            <div class="section-block-inner wcag-visual">
                <img src="/assets/content/Accessibility-Checklist-visual.png" alt="Visualisatie 1 van de Future Ready Design WCAG checklist PDF-document.">
                <img src="/assets/content/Accessibility-Checklist-visual-2.png" alt="Visualisatie 2 van de Future Ready Design WCAG checklist PDF-document.">
            </div>
        </section>
    </main>

    <footer>
        <div>
            <a href="https://www.futureready.design/algemene-voorwaarden" target="_blank">Algemene Voorwaarden</a> · <a href="https://www.futureready.design/privacy-policy" target="_blank">Privacy beleid</a>
        </div>
        <span>Copyright © {currentYear} Future Ready Design</span>
    </footer>
    
<style>
    @import '/src/styles/main.css';
</style>