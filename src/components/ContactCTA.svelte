<main>
    <section class="contact-cta awaiting-submission" bind:this={getInTouchForm}>
        <div class="contact-cta-inner contact-cta-inner-form wrapper-large" in:fade={{duration: 300}}>
            <div>
                <strong>{blok.strong}</strong>
                <h2>{blok.title} <span>{blok.title_span}</span></h2>
                <p>{blok.subheading}</p>
                <span>
                    <span> <!-- PULSATE --> </span>
                    {blok.span}
                </span>
            </div>

            <!-- <form on:submit={submitDataToHubspot} id="experts-form"> -->
            {#if blok.visible_form[0]}
                <form on:submit={submitContactForm}>
                    {#each blok.visible_form as visibleFormItems}
                        <fieldset>
                            <legend><span class="accessibility-hide">{visibleFormItems.personal}</span></legend>
                            <label for="contact-name">{visibleFormItems.name}</label>
                            <input type="text" id="contact-name" name="firstname" placeholder={visibleFormItems.placeholder_name} bind:this={contactInputName}  required>
                        </fieldset>
                        <fieldset>
                            <legend><span class="accessibility-hide">{visibleFormItems.mail_info}</span></legend>
                            <label for="contact-mailadres">{visibleFormItems.email}</label>
                            <input type="email" id="contact-mailadres" name="email" placeholder={visibleFormItems.placeholder_email} bind:this={contactInputEmail} required>
                        </fieldset>
                        <fieldset>
                            <legend><span class="accessibility-hide">{visibleFormItems.message_or_question}</span></legend>
                            <label for="contact-message">{visibleFormItems.message_question}</label>
                            <textarea id="contact-message" name="message___question" placeholder={visibleFormItems.placeholder_reach_out} bind:this={contactInputMessage} required></textarea>
                        </fieldset>

                        <fieldset>
                            <legend><span class="accessibility-hide">{visibleFormItems.form_buttons}</span></legend>
                            <button type="submit" class="button button-primary" bind:this={getInTouchCTA}>
                                <span>{visibleFormItems.get_in_touch}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <a href="/support" class="button button-quaternary">
                                <span>{visibleFormItems.submit_support}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </fieldset> 
                    {/each}  
                </form>
            {/if}
        </div>

        <!-- HIDDEN FORM ELEMENTS > VISIBLE AFTER SUBMIT -->
        {#if blok.hidden_form[0]}
            <div class="contact-cta-inner-hidden contact-cta-inner wrapper-large">
                {#each blok.hidden_form as hiddenFormItems}
                    <div>
                        <strong>Hello <span bind:this={contactPersonNameSpan}>there</span> 👋</strong>
                        <h2 bind:this={contactSubmittedTitle}>{hiddenFormItems.title}</h2>
                        <p bind:this={contactSubmittedText}>{hiddenFormItems.subheading}</p>
                        <span>
                            <span> <!-- PULSATE --> </span>
                            {hiddenFormItems.span}
                        </span>
                    </div>
                    <div class="info-after-submit">
                        <h3>{hiddenFormItems.h3_title}</h3>
                        <p>{hiddenFormItems.h3_subheading}</p>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/futurereadydesign" target="_blank" class="button button-tertiary">
                                    <img src={hiddenFormItems.insta.filename} alt={hiddenFormItems.insta.alt}>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/future-ready-design/" target="_blank" class="button button-tertiary">
                                    <img src={hiddenFormItems.linkedin.filename} alt={hiddenFormItems.linkedin.alt}>
                                </a>
                            </li>
                            <li>
                                <a href="/blog" class="button button-primary">
                                    <span>{hiddenFormItems.blogs_button_span}</span>
                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </a>
                            </li>
                        </ul>
                        <p>{hiddenFormItems.assisstence}</p>
                        <a href="/support" class="button button-quaternary">
                            <span>{hiddenFormItems.support_button_span}</span>
                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                {/each}
            </div>
        {/if}

        
        <!-- CONTACT INFO & LINKS -->
        <div class="wrapper-large">
            <!-- LINKS AND REFERENCES -->
            {#if blok.links_and_references[0]}
                <ul>
                    {#each blok.links_and_references as linksAndReferences}
                        <li>
                            <a href="/terms-and-conditions" class="button button-quaternary">
                                <span>{linksAndReferences.terms}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" class="button button-quaternary">
                                <span>{linksAndReferences.privacy}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/accessibility" class="button button-quaternary">
                                <span>{linksAndReferences.accessibility}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if} 

            <!-- COMPANY INFO -->
            {#if blok.company_info[0]}
                <ul>
                    {#each blok.company_info as companyInfoItems}
                        <li>
                            <a href="mailto:contact@futureready.design" class="link">{companyInfoItems.email}</a> &#183; <a href="tel:0202101259" class="link">{companyInfoItems.phone_number}</a>
                        </li>
                        <li>
                            {@html renderRichText(companyInfoItems.address)}
                        </li> 
                    {/each}
                </ul>
            {/if} 
        </div>

        <!-- HYPERDRIVE ANIMATION -->
        <canvas bind:this={canvas}></canvas>
    </section>

</main>

<style lang="scss">

    .contact-cta {
        position: relative;
        // min-height: 100dvh;
        padding-top: 10em;
        width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        // CONTACT FORM BLOCK
        > .contact-cta-inner {
            position: relative;
            display: flex;
            padding: 2.5em 2.75em;
            // max-width: 55em;
            // width: calc(var(--wrapper-small-width) + 2.75em);
            background-color: var(--color-black-20);
            // background-color: var(--color-dark-75);
            // background-image:  url('https://assets-global.website-files.com/6230868…/630babb…_noiselayer.png');
            backdrop-filter: blur(var(--filter-blur-less)) saturate(500%);
            -webkit-backdrop-filter: blur(var(--filter-blur-less)) saturate(500%);
            border-radius: 1.11em;
            border: var(--border-width) solid var(--color-black-35);
            // transform: scale(.9);
            // opacity: 0;
            transition: .45s transform, .45s opacity;
            transition-delay: .25s;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-image: url('https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png');
                z-index: -10;
                opacity: 0.05;
                border-radius: inherit;
            }
            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: var(--color-black-20);
                z-index: -9;
                border-radius: inherit;
            }

            div:first-of-type {
                position: relative;
                display: flex;
                flex-direction: column;
                max-width: 17.5em;
                padding-right: 5em;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: var(--border-width);
                    background-color: var(--color-white-10);
                    transform: translateX(calc(-2.5em - 50% ));
                    border-radius: var(--border-width);
                }
                strong {
                    display: block;
                    margin-bottom: 0.5em;
                    font-weight: 400;
                    font-family: var(--font-degular);
                }
                p {
                    margin-top: 1.25em;
                    padding-bottom: 1.5em;
                }
                > span {
                    display: none;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: auto;
                    font-weight: 500;

                    span {
                        position: relative;
                        display: inline-block;
                        background-color: var(--color-green);
                        background-image: radial-gradient(circle, rgba(138,255,185,1) 0%, rgba(0,255,102,1) 100%);
                        height: 0.65em;
                        width: 0.65em;
                        border-radius: 50%;
                        margin-right: 0.5em;
                        box-shadow: var(--color-green) 0 0 5em 0.5em,
                                    var(--color-green) 0 0 0.45em 0em;

                        &::before,
                        &::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            background-color: inherit;
                            z-index: -1;
                            border-radius: inherit;
                            filter: blur(var(--filter-blur-less));
                            opacity: 0.75;
                        }
                        &::after {
                            filter: blur(var(--filter-blur-moderate));
                            transform: scale(1.5);
                            opacity: 1;
                        }
                    }
                }
            }

            form {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.11em;
                width: 100%;
                
                fieldset {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    border: none;
                    
                    label {
                        margin-bottom: .55em;
                    }
                    input,
                    textarea {
                        padding: .95em 1.22em .95em 1.385em;
                        font-family: var(--font-outfit);
                        font-size: var(--font-size-global);
                        border: none;
                        border-radius: .7em;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        text-decoration: none;
                        width: 100%;
                        background-color: var(--color-white-075);
                        color: var(--color-white);
                        border: var(--border-width) solid var(--color-white-45);
                        caret-color: var(--color-lightblue);
                        transition: .25s background-color, .25s border;
                    }
                    textarea {
                        min-height: 7.5em;
                        resize: none; 
                    }
                    input:hover,
                    textarea:hover {
                        background-color: var(--color-white-10);
                    }
                    input:focus,
                    textarea:focus {
                        border: var(--border-width) solid var(--color-white);
                        background-color: var(--color-white-10);
                    }
                    
                    &:nth-of-type(3) {
                    grid-column: 1 / 3;
                    }
                    &:last-of-type {
                        display: flex;
                        flex-direction: row;
                        gap: 1.1em;
                        grid-column: 1 / 3;
                        align-items: center;
                        margin-top: 1.5em;
                    }
                }
            }
        }
        > div.contact-cta-inner-form {
            display: none;
        }
        > div:last-of-type {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 2.5em;
            padding: 0 2.75em;

            ul {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex: 1;
                gap: 1.1em;
                list-style: none;

                &:last-of-type {
                    text-align: right;
                    align-items: flex-end;
                    color: var(--color-lightblue);
                    font-family: var(--font-degular);

                    li:last-of-type {
                        color: var(--color-white-45);
                    }
                }
            }
        }

        // HIDDEN FORM ELEMENTS
        > div.contact-cta-inner-hidden {
            display: flex;

            > .info-after-submit {

                ul {
                    display: flex;
                    flex-direction: row;
                    gap: 0.5em;
                    list-style: none;
                    margin-top: 1.5em;

                    .button-tertiary {
                        padding: 0 1em;
                        height: 100%;
                        width: fit-content;
                        position: relative;
                    }
                }

                p:last-of-type{
                    margin-top: 2.75em;
                    margin-bottom: 0.5em;
                }
                a {
                    width: fit-content;
                }

            }
        }


        // HYPERDRIVE ANIMATION
        canvas {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            mix-blend-mode: screen;
            filter: saturate(1.5);
            z-index: -10;
            -webkit-mask-image: linear-gradient(to bottom, #000 80%, #0000);
            mask-image: linear-gradient(to bottom, #000 80%, #0000);
        }
    }

    // HIDDEN FORM ELEMENTS
    .awaiting-submission {

        div.contact-cta-inner {
            span {
                display: flex !important;

                span {
                    display: inline-block !important;
                }
            }
        }
        > div.contact-cta-inner-hidden {
            display: none !important;
        }

        > div.contact-cta-inner-form {
            display: flex !important;
            // background-color: red !important;

        }
    }



    /* MEDIUM / MODERATE SCREEN */
    @media screen and (max-width: 1100px) {
        .contact-cta {
            
            // CONTACT FORM BLOCK
            > .contact-cta-inner {
                flex-direction: column;

                div:first-of-type {
                    position: relative;
                    max-width: 100%;
                    padding-right: 10em;

                    &::after {
                        height: var(--border-width);
                        width: 100%;

                        top: unset;
                        right: unset;
                        left: 0;
                        bottom: 0;
                        transform: translateY(calc(2.5em - 50%));
                    }

                    h2 {

                        span {
                            display: block;
                        }
                    }

                    p {
                        margin-top: 0.5em;
                    }

                    > span {
                        position: absolute;
                        right: 0;
                    }
                }

                form {
                    margin-top: 5em;
                }
            }

            > div:last-of-type {
                justify-content: space-between;

                ul {
                    max-width: fit-content;
                }
            }
        }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        .contact-cta { 

            > .contact-cta-inner {
                padding: 1.5em 1.65em;
            }

            > div:last-of-type {
                padding: 0 1.65em;

                ul:last-of-type {
                    // max-width: fit-content;

                    li:first-of-type {
                        display: flex;
                        flex-direction: column;
                        font-size: 0;
                        gap: 0.1rem;

                        a {
                            font-size: var(--font-size-global);
                        }
                    }
                }
            }            
        }
    }

    /* EXTRA SMALL SCREEN */
    @media screen and (max-width: 500px) {
        .contact-cta {
            
            // CONTACT FORM BLOCK
            > .contact-cta-inner {

                div:first-of-type {
                    padding-right: 0;

                    &::after {
                        transform: translateY(calc(2em - 50%));
                    }

                    > span {
                        position: relative;
                        right: unset;
                        margin-top: 1em;
                    }
                }

                form {
                    margin-top: 4em;

                    display: flex;
                    flex-direction: column;
                    grid-template-columns: none;

                    fieldset {

                        textarea {
                            min-height: 10em;
                        }
                        
                        &:last-of-type {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 1.25em;
                        }
                    }
                }
            }

            > div:last-of-type {
                flex-direction: column;

                ul:last-of-type {
                    margin-top: 2.5em;
                    align-items: flex-start;
                    text-align: left;
                }
            }
        }
    }


</style>


<script>
    // GLOBAL SVELTE FUNCTIONS
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    // GLOBAL STORYBLOK FUNCTIONS
    import { renderRichText } from "@storyblok/js";

    // DEFINE VARIABLES
    let getInTouchForm;
    let getInTouchCTA;
    let canvas;

    let contactInputName;
    let contactInputEmail;
    let contactInputMessage;

    let contactPersonNameSpan;
    let contactSubmittedTitle;
    let contactSubmittedText;

    // DEFINE VARIABLES STORYBLOK
    export let blok;
    



// HUBSPOT INTEGRATION (EXPERT FORM OVERLAY) --------------------
// let getInTouchForm;

function submitContactForm(event) {
    event.preventDefault();

    getInTouchForm.classList.remove('awaiting-submission');
    contactPersonNameSpan.textContent = contactInputName.value;

    // Collect form data
    const formData = {
        firstname: contactInputName.value,
        email: contactInputEmail.value,
        message___question: contactInputMessage.value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        const data = await response.json();
        if (response.ok && data.success) {
            // Success: show thank you state (handled by UI already)
        } else {
            throw new Error(data.error || 'Unknown error');
        }
    })
    .catch((error) => {
        contactSubmittedTitle.textContent = 'Something went wrong..';
        contactSubmittedText.textContent = 'We encountered an issue while processing your request. Try again later. Sorry for this inconvenience.';
    });
}







    // function onKeyInputContactName(event){
        
    //     if (contactInputName.value != '') {
    //             console.log("niet leeg");
                
    //             // increaseHyperSpeed();
    //     } else {
    //         console.log("leeg");
    //     }
    // }




    // HYPERDRIVE ANIMATION / INTERACTION BUTTON --------------------
    // onMount(() => {
    //     if (typeof window !== 'undefined') {
    //         scanForm.addEventListener('keydown', contactInputMessageKeyInput);
    //     }
    // });

    // onDestroy(() => {
    //     if (typeof window !== 'undefined') {
    //         scanForm.removeEventListener('keydown', handleEnterKey);
    //     }
    // });

    let contactFilledInInputsAmount = 0;
    let nameInputIsEmpty = true;
    let emailInputIsEmpty = true;
    let messageInputIsEmpty = true;


    onMount(() => {

        // getInTouchCTA.addEventListener('mouseover', function() {
        //     getInTouchSection.classList.add('hovering');
        // });

        // getInTouchCTA.addEventListener('mouseout', function() {
        //     getInTouchSection.classList.remove('hovering');
        // });

        


        // CANVAS HYPERDRIVE ANIMATION
        // CREDITS: https://stackoverflow.com/questions/46436270/hyperdrive-effect-in-canvas-across-randomly-placed-circles
        const ctx = canvas.getContext("2d");

        // very simple mouse
        const mouse  = {x : 0, y : 0, button : false}	
        function mouseEvents(e){
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            mouse.button = e.type === "mousedown" ? true : e.type === "mouseup" ? false : mouse.button;
        }
        ["down","up","move"].forEach(name => document.addEventListener("mouse"+name,mouseEvents));

        // High performance array pool using buubleArray to separate pool objects and active object.
        // This is designed to eliminate GC hits involved with particle systems and 
        // objects that have short lifetimes but used often.
        // Warning this code is not well tested.
        const bubbleArray = () => {
            const items = [];
            var count = 0;
            return {
                clear(){  // warning this dereferences all locally held references and can incur Big GC hit. Use it wisely.
                    this.items.length = 0;
                    count = 0;
                },
                update() {
                    var head, tail;
                    head = tail = 0;
                    while(head < count){
                        if(items[head].update() === false) {head += 1 }
                        else{
                            if(tail < head){
                                const temp = items[head];
                                items[head] = items[tail];
                                items[tail] = temp;
                            }
                            head += 1;
                            tail += 1;
                        }
                    }
                    return count = tail;
                },
                createCallFunction(name, earlyExit = false){
                    name = name.split(" ")[0];
                    const keys = Object.keys(this);
                    if(Object.keys(this).indexOf(name) > -1){  throw new Error(`Can not create function name '${name}' as it already exists.`) }
                    if(!/\W/g.test(name)){
                        let func;
                        if(earlyExit){
                            func = `var items = this.items; var count = this.getCount(); var i = 0;\nwhile(i < count){ if (items[i++].${name}() === true) { break } }`;
                        }else{
                            func = `var items = this.items; var count = this.getCount(); var i = 0;\nwhile(i < count){ items[i++].${name}() }`;
                        }
                        !this.items && (this.items = items);
                        this[name] = new Function(func);
                    }else{  throw new Error(`Function name '${name}' contains illegal characters. Use alpha numeric characters.`) }
                    
                },
                callEach(name){var i = 0; while(i < count){ if (items[i++][name]() === true) { break } } },
                each(cb) { var i = 0; while(i < count){ if (cb(items[i], i++) === true) { break } } },
                next() { if (count < items.length) { return items[count ++] } },
                add(item) {
                    if(count === items.length){
                        items.push(item);
                        count ++;
                    }else{
                        items.push(items[count]);
                        items[count++] = item;
                    }
                    return item;
                },
                getCount() { return count },
            }
        }

        // Helpers rand float, randI random Int
        // doFor iterator
        // sCurve curve input -Infinity to Infinity out -1 to 1
        // randHSLA creates random colour
        // CImage, CImageCtx create image and image with context attached
        
        const randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
        const rand  = (min = 1, max = min + (min = 0)) => Math.random() * (max - min) + min;

        // Helper function to run a callback a certain number of times
        const doFor = (count, cb) => { var i = 0; while (i < count && cb(i++) !== true); };

        // Function for S-curve transformation, used for smooth transitions
        const sCurve = (v, p) => (2 / (1 + Math.pow(p, -v))) - 1;

        // Function to generate HSLA color close to #21DBD0
        const randHSLA = (h = 165, h1 = 179, s = 68, s1 = 78, l = 48, l1 = 58, a = 0.95, a1 = 1) => {return `hsla(${randI(h, h1) % 360}, ${randI(s, s1)}%, ${randI(l, l1)}%, ${rand(a, a1)})`;}
        const CImage = (w = 128, h = w) => (c = document.createElement("canvas"),c.width = w,c.height = h, c);
        const CImageCtx = (w = 128, h = w) => (c = CImage(w,h), c.ctx = c.getContext("2d"), c);

        // create image to hold text
        var textImage = CImageCtx(720, 720);
        var c = textImage.ctx;
        c.fillStyle = "#FF0";
        c.font = "64px arial black";
        c.textAlign = "center";
        c.textBaseline = "middle";
        const text = "".split(",");
        text.forEach((line,i) => { c.fillText(line,512,i * 68 + 68) });
        const maxLines = text.length * 68 + 68;
        function starWarIntro(image,x1,y1,x2,y2,pos){
        var iw = image.width;
        var ih = image.height;
        var hh = (x2 - x1) / (y2 - y1);      // Slope of left edge
        var w2 = iw / 2;                      // half width
        var z1 = w2 - x1;                    // Distance (z) to first line
        var z2 = (z1 / (w2 - x2)) * z1 - z1; // distance (z) between first and last line
        var sk,t3,t3a,z3a,lines, z3, dd = 0, a = 0, as = 2 / (y2 - y1);
        for (var y = y1; y < y2 && dd < maxLines; y++) {      // for each line

            t3 = ((y - y1) * hh) + x1;       // get scan line top left edge
            t3a = (((y+1) - y1) * hh) + x1;  // get scan line bottom left edge
            z3 = (z1 / (w2 - t3)) * z1;      // get Z distance to top of this line
            z3a = (z1 / (w2 - t3a)) * z1;      // get Z distance to bottom of this line
            dd = ((z3 - z1) / z2) * ih;       // get y bitmap coord
            a += as;

            ctx.globalAlpha = a < 1 ? a : 1;
            dd += pos;                         // kludge for this answer to make text move
                                                // does not move text correctly 
            lines = ((z3a - z1) / z2) * ih-dd;       // get number of lines to copy
            ctx.drawImage(image, 0, dd , iw, lines, t3, y, w - t3 * 2, 1.5);
        }
        }


        // canvas settings
        var w = canvas.width;
        var h = canvas.height;
        var cw = w / 2;  // center 
        var ch = h / 2;
        // diagonal distance used to set point alpha (see point update)
        var diag = Math.sqrt(w * w + h * h);
        // If window size is changed this is called to resize the canvas
        // It is not called via the resize event as that can fire to often and
        // debounce makes it feel sluggish so is called from main loop.
        function resizeCanvas(){
        // points.clear();
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        w = canvas.width;
        h = canvas.height;
        cw = w / 2;  // center 
        ch = h / 2;
        diag = Math.sqrt(w * w + h * h);
        
        }
        // create array of points
        const points = bubbleArray(); 
        // create optimised draw function itterator
        points.createCallFunction("draw",false);
        // spawns a new star
        function spawnPoint(pos){
            var p = points.next();
            p = points.add(new  Point())    
            if (p === undefined) { p = points.add(new  Point()) }
            p.reset(pos);  
        }
        // point object represents a single star
        function Point(pos){  // this function is duplicated as reset 
            if(pos){
                this.x = pos.x;   
                this.y = pos.y;   
                this.dead = false;
            }else{
                this.x = 0;
                this.y = 0;
                this.dead = true;
            }
            this.alpha = 0;
            var x = this.x - cw;
            var y = this.y - ch;
            this.dir = Math.atan2(y,x);
            this.distStart = Math.sqrt(x * x + y * y);
            this.speed = rand(0.01,1);
            // this.col = randHSLA(220,280,100,100,50,100);
            this.col = randHSLA(165, 179, 0, 73, 53, 100);
            
            this.dx = Math.cos(this.dir) * this.speed;
            this.dy = Math.sin(this.dir) * this.speed;
        }
        Point.prototype = {
            reset : Point,  // resets the point
            update(){       // moves point and returns false when outside 
                this.speed *= hyperSpeed;  // increase speed the more it has moved
                this.x += Math.cos(this.dir) * this.speed;
                this.y += Math.sin(this.dir) * this.speed;
                var x = this.x - cw;
                var y = this.y - ch;
                this.alpha = (Math.sqrt(x * x + y * y) - this.distStart) / (diag * 0.5 - this.distStart);
                if(this.alpha > 1 || this.x < 0 || this.y < 0 || this.x > w || this.h > h){
                this.dead = true;
                }
                return !this.dead;
            },
            draw(){  // draws the point 
                ctx.strokeStyle = this.col;
                ctx.globalAlpha = 0.35 + this.alpha *0.75;
                ctx.beginPath();
                ctx.lineTo(this.x - this.dx * this.speed, this.y - this.dy * this.speed);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();

            }
        }

        const maxStarCount = 400;
        const p = {x : 0, y : 0};
        var hyperSpeed = 1.001;
        const alphaZero = sCurve(1,2);
        var startTime;
        function loop(time){

            if(startTime === undefined){
                startTime = time;
            }
            if(w !== innerWidth || h !== innerHeight){
            resizeCanvas();
            }
  
            

            getInTouchCTA.addEventListener('mouseover', function() {
                if(hyperSpeed < 1.75){
                    hyperSpeed += 0.01;
                } 
            });

            getInTouchCTA.addEventListener('mouseout', function() {
                if (hyperSpeed > 1.01){
                    hyperSpeed -= 0.01;
                } else if(hyperSpeed > 1.001){
                    hyperSpeed -= 0.001;
                }
            });


            // CHANGE ANIMATION SPEED BASED ON FORM PROGRESS -----------------------
        
            // CONTACT INPUT NAME 
            contactInputName.addEventListener('keyup', function() {
                if (contactInputName.value != '') {   
                    nameInputIsEmpty = false;            
                } else {
                    nameInputIsEmpty = true;
                }
                // changeFIlledInInputsAmount();
            });

            // CONTACT INPUT EMAIL 
            contactInputEmail.addEventListener('keyup', function() {
                if (contactInputEmail.value != '') {   
                    emailInputIsEmpty = false;               
                } else {
                    emailInputIsEmpty = true;
                }
                // changeFIlledInInputsAmount();
            });

            // MESSAGE INPUT EMAIL 
            contactInputMessage.addEventListener('keyup', function() {
                if (contactInputMessage.value != '') {   
                    messageInputIsEmpty = false;               
                } else {
                    messageInputIsEmpty = true;
                }
                // changeFIlledInInputsAmount();
            });

            
        

  
            

            
            var hs = sCurve(hyperSpeed,2);
            ctx.globalAlpha = 1;
            ctx.setTransform(1,0,0,1,0,0); // reset transform


            //==============================================================
            // UPDATE the line below could be the problem. Remove it and try
            // what is under that        
            //==============================================================
            //ctx.fillStyle = `rgba(0,0,0,${1-(hs-alphaZero)*2})`;
            
            // next two lines are the replacement
            ctx.fillStyle = "Black";
            ctx.globalAlpha = 1-(hs-alphaZero) * 2;
            //==============================================================



            ctx.fillRect(0,0,w,h);
            // the amount to expand canvas feedback
            var sx = (hyperSpeed-1) * cw * 0.1;
            var sy = (hyperSpeed-1) * ch * 0.1;

            // increase alpha as speed increases
            ctx.globalAlpha = (hs-alphaZero)*2;
            ctx.globalCompositeOperation = "lighter";
            // draws feedback twice
            ctx.drawImage(canvas,-sx, -sy, w + sx*2 , h + sy*2)
            ctx.drawImage(canvas,-sx/2, -sy/2, w + sx , h + sy)
            ctx.globalCompositeOperation = "source-over";
            
            // add stars if count < maxStarCount 
            if(points.getCount() < maxStarCount){
                var cent = (hyperSpeed - 1) *0.5; // pulls stars to center as speed increases
                doFor(10,()=>{
                    p.x = rand(cw * cent ,w - cw * cent);  // random screen position
                    p.y = rand(ch * cent,h - ch * cent);
                    spawnPoint(p)
                    
                })
            }
            // as speed increases make lines thicker
            ctx.lineWidth = 2 + hs*2;
            ctx.lineCap = "round";
            points.update();  // update points
            points.draw();     // draw points
            ctx.globalAlpha = 1;
  
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);    



        // CHECK AMOUNT OF FILLED INPUTS
       function changeFIlledInInputsAmount() {
            if ((nameInputIsEmpty == false) && (emailInputIsEmpty == false) && (messageInputIsEmpty == false)) {
                contactFilledInInputsAmount = 3;
            } else if (((nameInputIsEmpty == false) && (emailInputIsEmpty == false)) || ((nameInputIsEmpty == false) && (messageInputIsEmpty == false)) || ((emailInputIsEmpty == false) && (messageInputIsEmpty == false))) {
                contactFilledInInputsAmount = 2;
            } else if (((nameInputIsEmpty == false)) || ((emailInputIsEmpty == false)) || ((messageInputIsEmpty == false))) {
                contactFilledInInputsAmount = 1;
            } else {
                contactFilledInInputsAmount = 0;
            }
            changeHyperSpeed();
        }

        // CHANGE HYPERSPEED BASED ON FILLED IN INPUTS
        function changeHyperSpeed() {
            if (contactFilledInInputsAmount >= 3) {
                contactFilledInInputsAmount = 3;
                hyperSpeed = 1.031;
            } else if (contactFilledInInputsAmount == 2) {
                hyperSpeed = 1.021;
            } else if (contactFilledInInputsAmount == 1) {
                hyperSpeed = 1.011;
            } else if (contactFilledInInputsAmount <= 0) {
                contactFilledInInputsAmount = 0;
                hyperSpeed = 1.001;
            }

            console.log(contactFilledInInputsAmount + ' inputs');
            console.log(hyperSpeed);
        }
        


    });


       

    

</script>