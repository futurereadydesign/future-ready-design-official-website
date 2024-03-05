// GLOBAL VARIABLES
const body = document.querySelector('body');

// RETRIEVE INPUT FROM USER
let scanForm = document.querySelector('main form.url-input');
let scanInputField = document.querySelector('main form.url-input input');
let scanButtonSubmitText = document.querySelector('.accessibility-landing main form.url-input button span');

// CHECK IF URL INPUT IS PRESENT ON PAGE 
if (scanInputField) {
    scanInputField.addEventListener('input', retrieveUserInputURL);

    // CHECK IF URL INPUT CONTAINS A (LEGIT) URL
    function isValidURL(string) {
        let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    };

    document.addEventListener('DOMContentLoaded', function() {

        // PREVENT ENTER KEY DOWN SUBMIT IF NOT A VALID URL
        scanForm.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                let userInputURL = scanInputField.value;
                let urlStatus = isValidURL(userInputURL);

                if (!urlStatus) {
                    event.preventDefault();
                    // Optionally, alert the user or visually indicate the invalid input
                }
            }
        });

        // scanInputField.addEventListener('input', retrieveUserInputURL);
    });

    // VISUALIZE IF URL IS VALID
    function retrieveUserInputURL() {
        let userInputURL = scanInputField.value;
        let urlStatus = isValidURL(userInputURL);

        // Check if URL is valid, then enable or disable submission as necessary
        if (urlStatus == true) {
            scanForm.classList.add('url-approved');
        } else {
            scanForm.classList.remove('url-approved');
        }

        console.log(isValidURL(userInputURL));
    }
}




// OPEN CHECKLIST OVERLAY --------------------
if (body.classList.contains('accessibility-checklist')) {
    let checklistOpenOverlayButton = document.querySelector('.wcag .section-block-inner > button');
    checklistOpenOverlayButton.addEventListener('click', overlayWCAG);

    function overlayWCAG() {
        let checklistOverlay = document.querySelector('.wcag-overlay');
        checklistOverlay.classList.add('overlay-active');
    }

    let closeOverlayButton = document.querySelector('.overlay .overlay-content > button');
    closeOverlayButton.addEventListener('click', closeWCAGOverlay);
    let overlayBackground = document.querySelector('.overlay .overlay-background');
    overlayBackground.addEventListener('click', closeWCAGOverlay);

    function closeWCAGOverlay() {
        let checklistOverlay = document.querySelector('.wcag-overlay');
        checklistOverlay.classList.remove('overlay-active');
    }
}



// FOOTER YEAR COPYRIGHT --------------------
let currentYear = new Date().getFullYear();
let footerCopyrightText = document.querySelector('footer > span');
footerCopyrightText.textContent = 'Copyright © ' + currentYear + ' Future Ready Design B.V.';



// SCAN RESULT PAGE SPECIFIC CODE -------------------------------------------
// SCAN RESULT PAGE SPECIFIC CODE -------------------------------------------
if (body.classList.contains('accessibility-result')) {

    // RETRIEVE SITE URL FROM URL (GET)
    const paramsURL = new URLSearchParams(window.location.search);
    const scanSiteURL = paramsURL.get('url');
    console.log(scanSiteURL);
    
    document.addEventListener('DOMContentLoaded', function() {
        var scanSiteURLInput =  document.querySelector('#site-url-input');
        scanSiteURLInput.value = scanSiteURL;
    });
    


    // ON LOAD OF ALL ELEMENTS (DOM)
    document.addEventListener('DOMContentLoaded', (event) => {

    // TIJDELIJK -------------------------------
    var scanSuccesStatus = true;
    var scanErrors = 0;
    var scanAlerts = 0;
    var scanContrast = 0;
    var scanContrast = 15;
    // var scanContrast = 35;
    // var scanContrast = 115;
    // var scanContrast = 300;

    var scanFeatures = 9;
    var scanStructural = 21;
    var scanAria = 74;

    var scanTotalElements = scanErrors + scanAlerts + scanContrast + scanFeatures + scanStructural + scanAria;
    var scanTotalErrors = scanErrors + scanAlerts + scanContrast;
    var scanMaxScoreAmount = scanTotalElements - scanFeatures;   

    var accessibilityScoreCalculated = 100 - ((scanTotalErrors / scanMaxScoreAmount) * 100);
    var accessibilityScore = Math.round(accessibilityScoreCalculated);
    console.log(accessibilityScore); 

    // MAXIMUM (98%) / MINIMUM (17%) PERCENTAGE IF NOT FULLY ACCESSIBLE
    if ((scanTotalErrors != 0) && (accessibilityScoreCalculated > 98)) {
        accessibilityScore = 98;
    } else if (accessibilityScoreCalculated < 17) {
        accessibilityScore = 17;
    }

    
    // var accessibilityStatus = 'Niet volledig toegankelijk';

    setTimeout(() => {
        body.classList.add('scan-completed');
        if (accessibilityScore != 100) {
            accessibilityStatus = 'Niet volledig toegankelijk';
        } else {
            accessibilityStatus = 'Volledig toegankelijk';
        }
        changeDynamicContent(accessibilityScore);
        setProgress(accessibilityScore); 
    }, 450);

    


    // CONNECT WITH THE WAVE API AND RETRIEVE SITE INFO --------------------
    // const apiKey = 'mu31qGJU3631';
    // const apiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${scanSiteURL}`;

    // // PRE DEFINE VARIABLES TO BE USED GLOBALLY
    // var scanSuccesStatus;
    // var scanErrors;
    // var scanAlerts;
    // var scanContrast;
    // var scanFeatures;
    // var scanStructural;
    // var scanAria;
    // var accessibilityScore;
    // var accessibilityStatus;

    // // MAKE THE REQUEST WITH THE SERVER
    // fetch(apiUrl)
    // .then(response => {
    //     if (!response.ok) {
    //     throw new Error(`API call failed: ${response.status}`);
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log('API response:', data);

    //     // CHECK IF SITE URL IS LEGIT AND CAN BE SCANNED
    //     scanSuccesStatus = data.status.success;
    //     if (scanSuccesStatus == true) {
    //         // ADD CLASS TO BODY TO LOAD SECTIONS
    //         body.classList.add('scan-completed');

    //         // DEFINE VARIABLES BASED ON SCAN RESULT
    //         scanSuccesStatus = data.status.success;
    //         scanErrors = data.categories.error.count;
    //         scanAlerts = data.categories.alert.count;
    //         scanContrast = data.categories.contrast.count;
    //         scanFeatures = data.categories.feature.count;
    //         scanStructural = data.categories.structure.count;
    //         scanAria = data.categories.aria.count;

    //         // CALCULATE OVERALL ACCESSIBILITY SCORE
    //         var scanTotalElements = scanErrors + scanAlerts + scanContrast + scanFeatures + scanStructural + scanAria;
    //         // var scanTotalElements = data.statistics.totalelements;
    //         var scanTotalErrors = scanErrors + scanAlerts + scanContrast;
    //         var scanMaxScoreAmount = scanTotalElements - scanFeatures;   

    //         var accessibilityScoreCalculated = 100 - ((scanTotalErrors / scanMaxScoreAmount) * 100);
    //         var accessibilityScore = Math.round(accessibilityScoreCalculated);
    //         console.log(accessibilityScore); 

    //         // MAXIMUM (98%) / MINIMUM (17%) PERCENTAGE IF NOT FULLY ACCESSIBLE
    //         if ((scanTotalErrors != 0) && (accessibilityScoreCalculated > 98)) {
    //             accessibilityScore = 98;
    //         } else if (accessibilityScoreCalculated < 17) {
    //             accessibilityScore = 17;
    //         }

    //         // CONVERT ACCESSIBILITY SCORE
    //         if (accessibilityScore != 100) {
    //             accessibilityStatus = 'Niet volledig toegankelijk';
    //         } else {
    //             accessibilityStatus = 'Volledig toegankelijk';
    //         }

    //         // RUN FUNCTIONS TO VISUALIZE RESULTS
    //         changeDynamicContent(accessibilityScore);
    //         setProgress(accessibilityScore); 
    //     } else {
    //         alert('De website kon niet worden gescand..');
    //     }

    // })
    // .catch(error => {
    //     console.error('Error calling the API:', error);
    // }); 




    // CHANGE ALL DYNAMIC CONTENT ON SCAN PAGE
    function changeDynamicContent(accessibilityScore) {
        // DEFINE ELEMENTS
        const inlineLabel = document.querySelector('main form.url-input > label');

        const inlineScore = document.querySelector('.scan-overview .section-block-inner > p > strong');
        const inlineScoreSubtitle = document.querySelector('.scan-overview .section-block-inner > strong');
        const inlineScoreText = document.querySelector('.scan-overview .section-block-inner > p > span');
        const visualProgressScore = document.querySelector('.percentage-visualizer strong');
        const inlineURL = document.querySelector('.scan-overview .section-block-inner ul li:nth-of-type(1) strong');
        const inlineStatus = document.querySelector('.scan-overview .section-block-inner ul li:nth-of-type(2) strong');

        const inlineErrros = document.querySelector('.general-results-visualizer li.general-results-item-errors h3');
        const inlineAlerts = document.querySelector('.general-results-visualizer li.general-results-item-alerts h3');
        const inlineContrastIssues = document.querySelector('.general-results-visualizer li.general-results-item-contrast h3');

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
            inlineScoreTextAdvice = "Je voldoet nog niet, er is nog een lange weg te gaan. Doe het juiste, wordt toegankelijk en verklein de juridische risico's.";
            body.classList.add('not-accessible');
        } else if (accessibilityScore < 50) {
            inlineScoreTextAdvice = "Je voldoet nog niet. Doe het juiste, wordt toegankelijk en verklein de juridische risico's.";
            body.classList.add('sort-of-accessible');
        } else if (accessibilityScore < 75) {
            inlineScoreTextAdvice = "Je bent er bijna, maar voldoet nog niet. Doe het juiste, wordt toegankelijk en verklein de juridische risico's.";
            body.classList.add('almost-accessible');
        } else if (accessibilityScore < 100) {
            inlineScoreTextAdvice = "Je bent er écht bijna, maar voldoet nog nét niet helemaal. Doe het juiste, wordt toegankelijk en verklein de juridische risico's.";
            body.classList.add('near-accessible');
        } else {
            inlineScoreTextAdvice = "Je voldoet volledig, goed bezig! Nu is het belangrijk om dit door te blijven zetten.";
            body.classList.add('fully-accessible');
        }

        // CHANGE CONTENT/TEXT OF ELEMENTS
        inlineLabel.textContent = 'Bekijk de resultaten van de scan..';

        inlineScore.textContent = accessibilityScore + '% toegankelijk';
        inlineScoreSubtitle.textContent = inlineScoreSubtitleAdvice;
        inlineScoreText.textContent = inlineScoreTextAdvice;
        visualProgressScore.textContent = accessibilityScore;
        inlineURL.textContent = scanSiteURL;
        inlineStatus.textContent = accessibilityStatus;

        inlineErrros.textContent = scanErrors;
        inlineAlerts.textContent = scanAlerts;
        inlineContrastIssues.textContent = scanContrast;
    }
    // changeDynamicContent();


    // VISUALIZE SITE ACCESSIBILITY SCORE (CIRCULAR PROGRESS BAR)
    function setProgress(accessibilityScore) {
        const accessibilityScoreIndicator = document.querySelector('.percentage-visualizer svg path:first-of-type');
        const accessibilityScoreIndicatorEnd = document.querySelector('.percentage-visualizer svg path:last-of-type');
        const accessibilityScoreIndicatorLength = accessibilityScoreIndicator.getTotalLength();
        const accessibilityScoreIndicatorProgress = (accessibilityScoreIndicatorLength * (accessibilityScore / 100));
        const accessibilityScoreIndicatorRotation = (accessibilityScore * 3.6) - 45;

        accessibilityScoreIndicator.style.strokeDasharray = accessibilityScoreIndicatorLength;
        accessibilityScoreIndicator.style.strokeDashoffset = accessibilityScoreIndicatorLength - accessibilityScoreIndicatorProgress;
        accessibilityScoreIndicatorEnd.style.transform = 'rotate(' + accessibilityScoreIndicatorRotation + 'deg)';
    }
    // setProgress(accessibilityScore); 

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

    const accessibilityScoreDate = document.querySelector('.scan-details .section-block-inner-right time');
    accessibilityScoreDate.textContent = 'Gegenereerd op ' + currentDay + ' ' + currentMonth + ', ' + currentYear;



    // CHANGE CONTENT BASED ON VIEWPORT --------------------
    let conversationCTAButtonText = document.querySelector('.scan-cta-button-wrapper button span');

    function viewportSmall(smallViewportSize) {
        if (smallViewportSize.matches) {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
            conversationCTAButtonText.textContent = 'Plan een gesprek in';
        } else {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
            conversationCTAButtonText.textContent = 'Plan een gesprek in met onze experts';
        }
    }

    // DEFINE VIEWPORT MEDIAQUERIE
    var smallViewportSize = window.matchMedia("(max-width: 768px)")

    // RUN FUNCTION ON PAGE LOAD
    viewportSmall(smallViewportSize);

    // RUN FUNCTION ON VIEWPORT CHANGE
    smallViewportSize.addEventListener('change', function() {
        viewportSmall(smallViewportSize);
    });



});

}



// SCAN LANDING PAGE SPECIFIC CODE -------------------------------------------
// SCAN LANDING PAGE SPECIFIC CODE -------------------------------------------
if (body.classList.contains('accessibility-landing')) {

    // CHANGE CONTENT BASED ON VIEWPORT --------------------
    function viewportSmall(smallViewportSize) {
        if (smallViewportSize.matches) {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES   
            scanButtonSubmitText.textContent = 'Scan!';    
        } else {
            // CHANGE BUTTON TO SMALLER TEXT FOR SPACING ISSUES
            scanButtonSubmitText.textContent = 'Doe de scan!';
        }
    }

    // DEFINE VIEWPORT MEDIAQUERIE
    var smallViewportSize = window.matchMedia("(max-width: 768px)")

    // RUN FUNCTION ON PAGE LOAD
    viewportSmall(smallViewportSize);

    // RUN FUNCTION ON VIEWPORT CHANGE
    smallViewportSize.addEventListener('change', function() {
        viewportSmall(smallViewportSize);
    });
}