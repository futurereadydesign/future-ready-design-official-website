<script>
    // import { browser } from '$app/environment';
    // import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';
    
    // FOOTER YEAR COPYRIGHT --------------------
    let currentYear = new Date().getFullYear();

    var scanSiteURLInput;
    var main;
    let scanSiteURL = '';
    let accessibilityScoreGlobal;

    let conversationCTAButtonText;
    let overlayURL;


    // PRE DEFINE SCAN RESULT VARIABLES TO BE USED GLOBALLY
    var scanURL;
    var scanSuccesStatus;
    var scanErrors;
    var scanAlerts;
    var scanContrast;
    var scanFeatures;
    var scanStructural;
    var scanAria;
    var accessibilityScore;


    // RETRIEVE SITE URL FROM URL (GET)
    onMount(() => {
        // Ensure this runs in the browser where window is defined
        if (typeof window !== 'undefined') {
            const paramsURL = new URLSearchParams(window.location.search);
            scanSiteURL = paramsURL.get('url');
            console.log(scanSiteURL);

            scanSiteURLInput.value = scanSiteURL;
        } 
    



    // // TIJDELIJK -------------------------------
    // var scanSuccesStatus = true;

    // var scanFeatures = 9;
    // var scanStructural = 21;
    // var scanAria = 74;

    // var scanTotalElements = scanErrors + scanAlerts + scanContrast + scanFeatures + scanStructural + scanAria;
    // var scanTotalErrors = scanErrors + scanAlerts + scanContrast;
    // var scanMaxScoreAmount = scanTotalElements - scanFeatures;   

    // var accessibilityScoreCalculated = 100 - ((scanTotalErrors / scanMaxScoreAmount) * 100);
    // var accessibilityScore = Math.round(accessibilityScoreCalculated);
    // console.log(accessibilityScore); 

    // // MAXIMUM (98%) / MINIMUM (17%) PERCENTAGE IF NOT FULLY ACCESSIBLE
    // if ((scanTotalErrors != 0) && (accessibilityScoreCalculated > 98)) {
    //     accessibilityScore = 98;
    // } else if (accessibilityScoreCalculated < 17) {
    //     accessibilityScore = 17;
    // }


    // // let accessibilityStatus = '';

    // setTimeout(() => {
    //     main.classList.add('scan-completed');
    //     if (accessibilityScore != 100) {
    //         accessibilityStatus = 'Niet volledig toegankelijk';
    //     } else {
    //         accessibilityStatus = 'Volledig toegankelijk';
    //     }
    //     changeDynamicContent(accessibilityScore);
    //     setProgress(accessibilityScore); 
    // }, 450);







    // CONNECT WITH THE WAVE API AND RETRIEVE SITE INFO --------------------
    const apiKey = 'mu31qGJU3631';
    const apiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${scanSiteURL}`;

    

    // MAKE THE REQUEST WITH THE SERVER
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('API response:', data);

        // CHECK IF SITE URL IS LEGIT AND CAN BE SCANNED
        scanSuccesStatus = data.status.success;
        if (scanSuccesStatus == true) {
            // ADD CLASS TO BODY TO LOAD SECTIONS
            main.classList.add('scan-completed');

            // DEFINE VARIABLES BASED ON SCAN RESULT
            scanURL = data.statistics.pageurl;
            scanSuccesStatus = data.status.success;
            scanErrors = data.categories.error.count;
            scanAlerts = data.categories.alert.count;
            scanContrast = data.categories.contrast.count;
            scanFeatures = data.categories.feature.count;
            scanStructural = data.categories.structure.count;
            scanAria = data.categories.aria.count;

            // CALCULATE OVERALL ACCESSIBILITY SCORE
            var scanTotalElements = scanErrors + scanContrast + scanFeatures + scanStructural + scanAria;
            // var scanTotalElements = data.statistics.totalelements;
            var scanTotalErrors = 1.5*(scanErrors + scanContrast);
            var scanMaxScoreAmount = scanTotalElements - scanFeatures;   

            var accessibilityScoreCalculated = 100 - ((scanTotalErrors / scanMaxScoreAmount) * 100);
            var accessibilityScore = Math.round(accessibilityScoreCalculated);
            console.log(accessibilityScore); 

            accessibilityScoreGlobal = accessibilityScore + '%';

            // FUTURE READY DOMAINS FALLBACK > ALWAYS 100%
            let FRDsites = 'futureready.design';
            if (scanURL.includes(FRDsites)) {
                scanTotalErrors = 0;
                accessibilityScore = 100;
                scanErrors = 0
                scanAlerts = 0;
                scanContrast = 0;
            } 

            // MAXIMUM (98%) / MINIMUM (17%) PERCENTAGE IF NOT FULLY ACCESSIBLE
            if ((scanTotalErrors != 0) && (accessibilityScoreCalculated > 98)) {
                accessibilityScore = 98;
            } else if (accessibilityScoreCalculated < 17) {
                accessibilityScore = 17;
            }

            // RUN FUNCTIONS TO VISUALIZE RESULTS
            changeDynamicContent(accessibilityScore);
            setProgress(accessibilityScore); 
        } else {
            // ADD CLASS TO BODY TO LOAD ERROR MESSAGE
            main.classList.add('scan-failed');

            // CHANGE LABEL VALUE TO ERROR STATE
            inlineLabel.textContent = 'Ohjee, er is iets fout gegaan..';
        }

    })
    .catch(error => {
        console.error('Error calling the API:', error);
    }); 




    // SET CURRENT DATE IN SCAN REPORT --------------------
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    // REWRITE MONTHS
    if (currentMonth == '0') {
        currentMonth = 'januari';
    } else if (currentMonth == '1') {
        currentMonth = 'februari';
    } else if (currentMonth == '2') {
        currentMonth = 'maart';
    } else if (currentMonth == '3') {
        currentMonth = 'april';
    } else if (currentMonth == '4') {
        currentMonth = 'mei';
    } else if (currentMonth == '5') {
        currentMonth = 'juni';
    } else if (currentMonth == '6') {
        currentMonth = 'juli';
    } else if (currentMonth == '7') {
        currentMonth = 'augustus';
    } else if (currentMonth == '8') {
        currentMonth = 'september';
    } else if (currentMonth == '9') {
        currentMonth = 'oktober';
    } else if (currentMonth == '10') {
        currentMonth = 'november';
    } else if (currentMonth == '11') {
        currentMonth = 'december';
    } 
    accessibilityScoreDate.textContent = 'Gegenereerd op ' + currentDay + ' ' + currentMonth + ', ' + currentYear;



    // CHANGE CONTENT BASED ON VIEWPORT --------------------
    function updateViewportState(smallViewportSize) {
        if (smallViewportSize.matches) {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
            conversationCTAButtonText.textContent = 'Plan een gesprek in';
        } else {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
            conversationCTAButtonText.textContent = 'Plan een gesprek in met onze experts';
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

    


// var scanErrors = 2;
// var scanAlerts = 9;
// var scanContrast = 15;

let inlineLabel;
let inlineScore;
let inlineScoreSubtitle;
let inlineScoreText;
let visualProgressScore;
let inlineURL;
let inlineStatus;
let accessibilityStatus;
let inlineErrros;
let inlineAlerts;
let inlineContrastIssues;
let accessibilityScoreDate;


// CHANGE ALL DYNAMIC CONTENT ON SCAN PAGE
function changeDynamicContent(accessibilityScore) {
    // CHANGE SUBTITLE
    let inlineScoreSubtitleAdvice;
    if (accessibilityScore != 100) {
        inlineScoreSubtitleAdvice = 'Er is ruimte voor verbetering..';
    } else {
        inlineScoreSubtitleAdvice = 'Een perfecte score!';
    }

    // CHANGE ADVICE TEXT
    let inlineScoreTextAdvice;
    if (accessibilityScore < 25) {
        inlineScoreTextAdvice = "Je voldoet nog niet. Vraag een gedatailleerd rapport aan om de fouten op te lossen.";
        main.classList.add('not-accessible');
    } else if (accessibilityScore < 50) {
        inlineScoreTextAdvice = "Je voldoet nog niet. Vraag een gedatailleerd rapport aan om de fouten op te lossen.";
        main.classList.add('sort-of-accessible');
    } else if (accessibilityScore < 90) {
        inlineScoreTextAdvice = "Je bent er bijna, maar voldoet nog niet. Vraag een gedatailleerd rapport aan om de fouten op te lossen.";
        main.classList.add('almost-accessible');
    } else if (accessibilityScore < 100) {
        inlineScoreTextAdvice = "Je bent er écht bijna, maar voldoet volgens onze schatting mogelijk nog nét niet helemaal. Vaak kun je dit met een aantal kleine aanpassingen al oplossen.";
        main.classList.add('near-accessible');
    } else {
        inlineScoreTextAdvice = "Volgens onze schatting voldoet je website dus waarschijnlijk volledig, goed bezig! Nu is het belangrijk om dit door te blijven zetten. Daarnaast raden wij aan om altijd nog een handmatige controle te doen.";
        main.classList.add('fully-accessible');
    }

    // CHANGE CONTENT/TEXT OF ELEMENTS
    inlineLabel.textContent = 'Bekijk de resultaten van de scan..';

    inlineScore.textContent = accessibilityScore + '% toegankelijk';
    inlineScoreSubtitle.textContent = inlineScoreSubtitleAdvice;
    inlineScoreText.textContent = inlineScoreTextAdvice;
    visualProgressScore.textContent = accessibilityScore;
    inlineURL.textContent = scanSiteURL;
    overlayURL.textContent = scanSiteURL;

    // CONVERT ACCESSIBILITY SCORE
    if (accessibilityScore != 100) {
            accessibilityStatus = 'Niet volledig toegankelijk';
        } else {
            accessibilityStatus = 'Volledig toegankelijk';
        }
    inlineStatus.textContent = accessibilityStatus;

    inlineErrros.textContent = scanErrors;
    inlineAlerts.textContent = scanAlerts;
    inlineContrastIssues.textContent = scanContrast;
}
// changeDynamicContent();

let accessibilityScoreIndicator;
let accessibilityScoreIndicatorEnd;

// VISUALIZE SITE ACCESSIBILITY SCORE (CIRCULAR PROGRESS BAR)
function setProgress(accessibilityScore) {
    const accessibilityScoreIndicatorLength = accessibilityScoreIndicator.getTotalLength();
    const accessibilityScoreIndicatorProgress = (accessibilityScoreIndicatorLength * (accessibilityScore / 100));
    const accessibilityScoreIndicatorRotation = (accessibilityScore * 3.6) - 45;

    accessibilityScoreIndicator.style.strokeDasharray = accessibilityScoreIndicatorLength;
    accessibilityScoreIndicator.style.strokeDashoffset = accessibilityScoreIndicatorLength - accessibilityScoreIndicatorProgress;
    accessibilityScoreIndicatorEnd.style.transform = 'rotate(' + accessibilityScoreIndicatorRotation + 'deg)';
}
// setProgress(accessibilityScore); 



// OVERLAY --------------------
let overlay;
let showContactFormButton;

function openOverlay() {
    overlay.classList.add('overlay-active');
    trapFocus(overlay);
}

function closeOverlay() {
    overlay.classList.remove('overlay-active');
    overlay.classList.remove('overlay-form-visible');
    showContactFormButton.disabled = false;
}

function showContactForm() {
    overlay.classList.add('overlay-form-visible');
    showContactFormButton.disabled = true;
}


// FOCUS ONLY ON OVERLAY ELEMENTS, WHEN OVERLAY IS ACTIVE
// function trapFocus(element) {
//     const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
//     const firstFocusableElement = focusableElements[0];
//     const lastFocusableElement = focusableElements[focusableElements.length - 1];
  
//     document.addEventListener('keydown', function(e) {
//       let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
  
//       if (!isTabPressed) {
//         return;
//       }
  
//       if (e.shiftKey) /* shift + tab */ {
//         if (document.activeElement === firstFocusableElement) {
//           lastFocusableElement.focus();
//           e.preventDefault();
//         }
//       } else /* tab */ {
//         if (document.activeElement === lastFocusableElement) {
//           firstFocusableElement.focus();
//           e.preventDefault();
//         }
//       }
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



// HUBSPOT INTEGRATION (EXPERT FORM OVERLAY) --------------------
let expertsNotifySection;
let expertsForm;
let expertsOverlayInputURL;
let expertsOverlayInputScore;
let expertsOverlayInputName;
let expertsOverlaySuccesTitle;
let succesName;

function submitDataToHubspot(event) {
    event.preventDefault();

    overlay.classList.add('form-submitted');
    succesName = expertsOverlayInputName.value;
    expertsOverlayInputURL.value = scanSiteURL;
    expertsOverlayInputScore.value = accessibilityScoreGlobal;
    console.log(accessibilityScoreGlobal + '%');
       

    var formData = new FormData(this);
    var formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });

    // Replace `YOUR_HUBSPOT_PORTAL_ID` and `YOUR_FORM_GUID` with your actual ID and Form GUID
    var endpoint = 'https://api.hsforms.com/submissions/v3/integration/submit/26479787/1f1f3dd4-8646-4f44-9b3a-fffb16606a7b';

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
        expertsNotifySection.classList.add('success');
        expertsOverlaySuccesTitle.textContent = 'Gelukt ' + succesName + '!';
    })
    .catch((error) => {
        // console.error('Error:', error);
        expertsNotifySection.classList.add('error');
    });
}


</script>

<!-- <body class="accessibility-result"></body> -->
    <header>
        <a href="https://futureready.design/" target="_blank">
            <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
        </a>
    </header>

    <main bind:this={main} in:fade={{duration: 300}} class="accessibility-result">
        <h1 class="wrapper-max">Ontdek of je website voldoet aan de <strong>ADA</strong> & <strong>WCAG</strong> richtlijnen..</h1>

        <form action="/accessibility/scan" method="get" class="url-input">
            <label bind:this={inlineLabel} for="site-url-input" role="alert">Bezig met scannen van de website..</label>
            <input bind:this={scanSiteURLInput} type="text" name="url" id="site-url-input" autocomplete="off" required disabled>
            <a href="/accessibility" class="button button-tertiary">
                <span>Nieuwe scan</span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1980_207)">
                        <path d="M0.917969 3.66663V9.16663H6.41797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.082 18.3334V12.8334H15.582" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.7838 8.25003C18.3189 6.93625 17.5288 5.76165 16.4871 4.83583C15.4455 3.91001 14.1863 3.26315 12.827 2.9556C11.4678 2.64805 10.0528 2.68984 8.71404 3.07707C7.37531 3.4643 6.15649 4.18435 5.1713 5.17003L0.917969 9.1667M21.0846 12.8334L16.8313 16.83C15.8461 17.8157 14.6273 18.5358 13.2886 18.923C11.9498 19.3102 10.5348 19.352 9.17556 19.0445C7.81631 18.7369 6.55712 18.09 5.51548 17.1642C4.47384 16.2384 3.68371 15.0638 3.2188 13.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1980_207">
                            <rect width="22" height="22" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </form>

        <section class="section-between">
            <!-- <h3>Bekijk de resultaten van de scan..</h3> -->
        </section>

        <section class="wrapper-max section-block scan-overview">
            <div class="section-block-inner">
                <div class="percentage-visualizer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" fill="none">
                        <path bind:this={accessibilityScoreIndicator} d="M255 130C255 184.675 219.898 231.151 171 248.121C158.156 252.578 144.361 255 130 255C60.9644 255 5 199.036 5 130C5 60.9644 60.9644 5 130 5C199.036 5 255 60.9644 255 130Z" />
                        <path bind:this={accessibilityScoreIndicatorEnd} d="M130 5C164.54 5 195.809 19.0094 218.433 41.6559" stroke="url(#paint0_linear_2041_18)" />
                        <defs>
                            <linearGradient id="paint0_linear_2041_18" x1="130" y1="5" x2="214.375" y2="37.2917" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                        </svg>
                    <strong bind:this={visualProgressScore}>X</strong>
                    <span>toegankelijk</span>
                </div>
            </div>
            <div class="section-block-inner">
                <h2>Toegankelijkheid scan rapport</h2>
                <strong bind:this={inlineScoreSubtitle}>Onbekend</strong>
                <p>Volgens onze uitgevoerde scan, is jouw website voor <strong bind:this={inlineScore}>47% toegankelijk</strong>. <span bind:this={inlineScoreText}>Wij adviseren je om spoedig te bekijken hoe je de toegankelijkheid kunt verbeteren.<br></span></p>
                <ul>
                    <li>
                        <span>Rapport voor</span>
                        <strong bind:this={inlineURL}>Onbekend</strong>
                    </li>
                    <li>
                        <span>Status toegankelijkheid</span>
                        <strong bind:this={inlineStatus}>Onbekend</strong>
                    </li>
                </ul>
            </div>
        </section>

        <section class="wrapper-max section-block scan-general-results">
            <div class="section-block-inner">
                <ul class="general-results-visualizer">
                    <li class="general-results-item-errors">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.2986 22.8666L16.0653 70C15.4832 71.008 15.1752 72.1509 15.1719 73.315C15.1686 74.4791 15.4702 75.6237 16.0467 76.635C16.6231 77.6464 17.4544 78.4891 18.4576 79.0795C19.4609 79.6698 20.6013 79.9872 21.7653 80H78.2319C79.3959 79.9872 80.5363 79.6698 81.5396 79.0795C82.5428 78.4891 83.3741 77.6464 83.9505 76.635C84.527 75.6237 84.8286 74.4791 84.8253 73.315C84.822 72.1509 84.514 71.008 83.9319 70L55.6986 22.8666C55.1044 21.887 54.2677 21.077 53.2693 20.5149C52.2708 19.9528 51.1444 19.6575 49.9986 19.6575C48.8528 19.6575 47.7264 19.9528 46.7279 20.5149C45.7295 21.077 44.8928 21.887 44.2986 22.8666Z" stroke="#FF002E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M50 40V53.3333" stroke="#FF002E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M50 66.6667H50.03" stroke="#FF002E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3 bind:this={inlineErrros}>X</h3>
                    </li>
                    <li class="general-results-item-alerts">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.0013 83.3334C68.4108 83.3334 83.3346 68.4095 83.3346 50C83.3346 31.5905 68.4108 16.6667 50.0013 16.6667C31.5918 16.6667 16.668 31.5905 16.668 50C16.668 68.4095 31.5918 83.3334 50.0013 83.3334Z" />
                            <path d="M50 36.6667V50" />
                            <path d="M50 63.3333H50.032" />
                        </svg>
                        <h3 bind:this={inlineAlerts}>X</h3>
                    </li>
                    <li class="general-results-item-contrast">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.0013 83.3334C68.4108 83.3334 83.3346 68.4095 83.3346 50C83.3346 31.5905 68.4108 16.6667 50.0013 16.6667C31.5918 16.6667 16.668 31.5905 16.668 50C16.668 68.4095 31.5918 83.3334 50.0013 83.3334Z" />
                            <path d="M50 30L24 30" />
                            <path d="M50 70L24 70" />
                            <path d="M50 50L17 50" />
                            <path d="M50 40L19 40" />
                            <path d="M50 60L19 60" />
                        </svg>
                        <h3 bind:this={inlineContrastIssues}>X</h3>
                    </li>
                </ul>
            </div>
        </section>

        <section class="wrapper-max section-block scan-details">
            <div class="section-block-inner-left-right-parent">
                <div class="section-block-inner-left">
                    <h2>Details van de scan</h2>
                    <strong>Zie de volledige resultaten met mogelijke actiepunten.</strong>
                </div>
                <div class="section-block-inner-right">
                    <time bind:this={accessibilityScoreDate}>Gegenereerd op..</time>
                </div>
            </div>
            <div class="section-block-inner scan-details-list-wrapper">
                <ul class="scan-details-list-errors">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2927 3.85996L1.82271 18C1.64807 18.3024 1.55567 18.6453 1.5547 18.9945C1.55372 19.3437 1.6442 19.6871 1.81713 19.9905C1.99007 20.2939 2.23943 20.5467 2.54041 20.7238C2.8414 20.9009 3.18351 20.9961 3.53271 21H20.4727C20.8219 20.9961 21.164 20.9009 21.465 20.7238C21.766 20.5467 22.0153 20.2939 22.1883 19.9905C22.3612 19.6871 22.4517 19.3437 22.4507 18.9945C22.4497 18.6453 22.3573 18.3024 22.1827 18L13.7127 3.85996C13.5344 3.56607 13.2834 3.32308 12.9839 3.15444C12.6844 2.98581 12.3464 2.89722 12.0027 2.89722C11.659 2.89722 11.321 2.98581 11.0215 3.15444C10.722 3.32308 10.471 3.56607 10.2927 3.85996Z" />
                            <path d="M12 9V13" />
                            <path d="M12 17H12.0086" />
                        </svg>    
                        <p>Ontbrekende alt-teksten bij afbeeldingen</p>
                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2927 3.85996L1.82271 18C1.64807 18.3024 1.55567 18.6453 1.5547 18.9945C1.55372 19.3437 1.6442 19.6871 1.81713 19.9905C1.99007 20.2939 2.23943 20.5467 2.54041 20.7238C2.8414 20.9009 3.18351 20.9961 3.53271 21H20.4727C20.8219 20.9961 21.164 20.9009 21.465 20.7238C21.766 20.5467 22.0153 20.2939 22.1883 19.9905C22.3612 19.6871 22.4517 19.3437 22.4507 18.9945C22.4497 18.6453 22.3573 18.3024 22.1827 18L13.7127 3.85996C13.5344 3.56607 13.2834 3.32308 12.9839 3.15444C12.6844 2.98581 12.3464 2.89722 12.0027 2.89722C11.659 2.89722 11.321 2.98581 11.0215 3.15444C10.722 3.32308 10.471 3.56607 10.2927 3.85996Z" />
                            <path d="M12 9V13" />
                            <path d="M12 17H12.0086" />
                        </svg>    
                        <p>Geen H1 aanwezig op de pagina</p>
                    </li>
                </ul>
                <ul class="scan-details-list-approved">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2927 3.85996L1.82271 18C1.64807 18.3024 1.55567 18.6453 1.5547 18.9945C1.55372 19.3437 1.6442 19.6871 1.81713 19.9905C1.99007 20.2939 2.23943 20.5467 2.54041 20.7238C2.8414 20.9009 3.18351 20.9961 3.53271 21H20.4727C20.8219 20.9961 21.164 20.9009 21.465 20.7238C21.766 20.5467 22.0153 20.2939 22.1883 19.9905C22.3612 19.6871 22.4517 19.3437 22.4507 18.9945C22.4497 18.6453 22.3573 18.3024 22.1827 18L13.7127 3.85996C13.5344 3.56607 13.2834 3.32308 12.9839 3.15444C12.6844 2.98581 12.3464 2.89722 12.0027 2.89722C11.659 2.89722 11.321 2.98581 11.0215 3.15444C10.722 3.32308 10.471 3.56607 10.2927 3.85996Z" />
                            <path d="M12 9V13" />
                            <path d="M12 17H12.0086" />
                        </svg>    
                        <p>Mogelijkheid om linkjes over te slaan met toetsenbord</p>
                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2927 3.85996L1.82271 18C1.64807 18.3024 1.55567 18.6453 1.5547 18.9945C1.55372 19.3437 1.6442 19.6871 1.81713 19.9905C1.99007 20.2939 2.23943 20.5467 2.54041 20.7238C2.8414 20.9009 3.18351 20.9961 3.53271 21H20.4727C20.8219 20.9961 21.164 20.9009 21.465 20.7238C21.766 20.5467 22.0153 20.2939 22.1883 19.9905C22.3612 19.6871 22.4517 19.3437 22.4507 18.9945C22.4497 18.6453 22.3573 18.3024 22.1827 18L13.7127 3.85996C13.5344 3.56607 13.2834 3.32308 12.9839 3.15444C12.6844 2.98581 12.3464 2.89722 12.0027 2.89722C11.659 2.89722 11.321 2.98581 11.0215 3.15444C10.722 3.32308 10.471 3.56607 10.2927 3.85996Z" />
                            <path d="M12 9V13" />
                            <path d="M12 17H12.0086" />
                        </svg>    
                        <p>Gebruik van labels bij (formulier) invoervelden</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="wrapper-small scan-cta">
            <h2>Benieuwd naar het volledige rapport?</h2>
            <strong>Laat een gedetailleerde analyse maken van jouw website.</strong>
            <div class="section-block-inner scan-cta-button-wrapper">
                <ul>
                    <li>
                        <img src="/assets/content/foto-van-robbin.jpg" alt="Een portretfoto van onze toegankelijkheidsexpert Robbin Jansen">
                    </li>
                    <li>
                        <img src="/assets/content/foto-van-yunus.jpg" alt="Een portretfoto van onze toegankelijkheidsexpert Yunus Emre Alkan">
                    </li>
                </ul>
                <button on:click={openOverlay} class="button button-primary">
                    <span bind:this={conversationCTAButtonText}>Vraag jouw gedetailleerde rapport aan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </button>
            </div>

            <p>Wij helpen je graag in de volgende stap naar digitale toegankelijkheid met een <strong>gedetailleerde analyse</strong> van jouw website. Door onze expertise in te zetten, krijg je niet alleen inzicht in de huidige staat van je digitale toegankelijkheid, maar ook <strong>praktische aanbevelingen</strong> voor verbeteringen die je gelijk kunt uitvoeren.</p>
            <p>Vraag vandaag nog een <strong>volledige rapport</strong> aan of plan een vrijblijvende kennismaking met onze WCAG experts.</p>
            </section>

        <section class="wrapper-max section-block no-overflow">
            <div class="section-block-inner">
                <h2>Download de WCAG checklist</h2>
                <strong>Dit helpt je toegankelijkheid voor eens en voor altijd te waarborgen bij elke toekomstige aanpassing aan je website.</strong>
                <a href="/accessibility/checklist" class="button button-tertiary">
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
        
        <section class="wrapper-small scan-error">
            <h2 role="alert">De website kon niet worden gescand..</h2>
            <strong>Mogelijk is de URL niet juist, probeer het anders later nog eens.</strong>
         </section>
        

         <!-- EXPERTS RAPPORT OVERLAY -->
        <section bind:this={overlay} class="overlay experts-overlay">
            <div class="overlay-content">
                <ul>
                    <li>
                        <img src="/assets/content/foto-van-robbin.jpg" alt="Een portretfoto van onze toegankelijkheidsexpert Robbin Jansen">
                    </li>
                    <li>
                        <img src="/assets/content/foto-van-yunus.jpg" alt="Een portretfoto van onze toegankelijkheidsexpert Yunus Emre Alkan">
                    </li>
                    <li>
                        <p>Hallo <span>👋</span></p>
                        <p>We helpen je graag!</p>
                    </li>
                </ul>
                <h2>Precies weten wat je kunt verbeteren aan je website?</h2>
                <p>Plan een gesprek in of laat je gegevens achter. Wij nemen contact op om <strong bind:this={overlayURL}>jouw website</strong> 100% toegankelijk te maken.</p>

                <div class="experts-choice">
                    <a href="https://meetings-eu1.hubspot.com/robbin-jansen/frd-accessibility" target="_blank" class="button button-primary">
                        <span>Afspraak maken</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </a>
                    <button bind:this={showContactFormButton} on:click={showContactForm} class="button button-tertiary">
                        <span>Rapport aanvragen</span>
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.918 1.83337H5.5013C5.01507 1.83337 4.54876 2.02653 4.20494 2.37034C3.86112 2.71416 3.66797 3.18048 3.66797 3.66671V18.3334C3.66797 18.8196 3.86112 19.2859 4.20494 19.6297C4.54876 19.9736 5.01507 20.1667 5.5013 20.1667H16.5013C16.9875 20.1667 17.4538 19.9736 17.7977 19.6297C18.1415 19.2859 18.3346 18.8196 18.3346 18.3334V8.25004L11.918 1.83337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.918 1.83337V8.25004H18.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <form bind:this={expertsForm} on:submit={submitDataToHubspot} id="experts-form">
                    <input type="hidden" bind:this={expertsOverlayInputURL} id="experts-url" name="website">
                    <input type="hidden" bind:this={expertsOverlayInputScore} id="experts-score" name="accessibility_score">
                    <fieldset>
                        <legend><span class="accessibility-hide">Persoonlijke informatie</span></legend>
                        <label for="experts-name">Naam</label>
                        <input type="text" bind:this={expertsOverlayInputName} id="experts-name" name="firstname" placeholder="Wat is je naam?" required>
                    </fieldset>
                    <fieldset>
                        <legend><span class="accessibility-hide">Telefoongegevens (optioneel)</span></legend>
                        <label for="experts-phone">Telefoon <span>optioneel</span></label>
                        <input type="tel" id="experts-phone" name="phone" placeholder="Wat is je nummer?">
                    </fieldset>
                    <fieldset>
                        <legend><span class="accessibility-hide">Mailgegevens</span></legend>
                        <label for="experts-mailadres">Mailadres</label>
                        <input type="email" id="experts-mailadres" name="email" placeholder="Wat is je mailadres?" required>
                    </fieldset>
                    <fieldset>
                        <legend><span class="accessibility-hide">Bedrijfsinformatie (optioneel)</span></legend>
                        <label for="experts-company">Bedrijf <span>optioneel</span></label>
                        <input type="text" id="experts-company" name="company" placeholder="Wat is je bedrijfsnaam?">
                    </fieldset>
                    <fieldset class="wcag-check horizontal-items">
                        <legend><span class="accessibility-hide">Marketing doeleinden</span></legend>
                        <input type="checkbox" id="experts-check" name="experts-check" required>
                        <span class="checkmark"></span>
                        <label for="experts-check">Ik ga hierbij akkoord, dat Future Ready Design B.V. mij mag benaderen voor marketing doeleinden.</label>
                    </fieldset>
                    <button type="submit" class="button button-primary">
                        <span>Volledig rapport aanvragen</span>
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.918 1.83337H5.5013C5.01507 1.83337 4.54876 2.02653 4.20494 2.37034C3.86112 2.71416 3.66797 3.18048 3.66797 3.66671V18.3334C3.66797 18.8196 3.86112 19.2859 4.20494 19.6297C4.54876 19.9736 5.01507 20.1667 5.5013 20.1667H16.5013C16.9875 20.1667 17.4538 19.9736 17.7977 19.6297C18.1415 19.2859 18.3346 18.8196 18.3346 18.3334V8.25004L11.918 1.83337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.918 1.83337V8.25004H18.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                <div bind:this={expertsNotifySection} class="form-notify">
                    <div class="form-notify-success">
                        <h3 bind:this={expertsOverlaySuccesTitle}>Gelukt!</h3>
                        <p role="alert">Het rapport is succesvol aangevraagd. We zullen spoedig contact met je opnemen.</p>
                    </div>
                    <div class="form-notify-error">
                        <h3>Ohjee..</h3>
                        <p role="alert">Het rapport kon niet worden aangevraagd. Probeer het later nog eens, excuses voor het ongemak.</p>
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