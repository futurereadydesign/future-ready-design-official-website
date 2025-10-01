<script>
    import { page } from "$app/stores";
    import { withLang } from "../lib/url.js";
    import { SUPPORTED_LANGUAGES } from "$lib/language.js";

    $: fallbackLanguage = $page.data?.language ?? "nl";
    $: urlLanguage = $page.url.searchParams.get("_storyblok_lang");
    $: currentLanguage = SUPPORTED_LANGUAGES.includes(urlLanguage) ? urlLanguage : fallbackLanguage;

    function getUrlWithLang(path) {
        return withLang(path, currentLanguage);
    }

    $: t = {
        philosophy: currentLanguage === "nl" ? "Onze filosofie" : "Our philosophy",
        blog: "Blog",
        terms: currentLanguage === "nl" ? "Algemene voorwaarden" : "Terms and conditions",
        privacy: currentLanguage === "nl" ? "Privacy verklaring" : "Privacy policy",
        support: currentLanguage === "nl" ? "Hulp nodig?" : "Need help?",
        contactCta: currentLanguage === "nl" ? "Kom in contact" : "Get in touch"
    };
</script>

<footer class="wrapper-max">
    <section class="footer-content-left">
        <ul>
            <li>
                <a href={getUrlWithLang('')} class="clickable">
                    <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
                </a>
            </li>
            <li>
                <ul>
                    <li>
                        <a href={getUrlWithLang('/about')} class="link">{t.philosophy}</a>
                    </li>
                    <!-- <li>
                        <a href="/projects" class="link">Ons werk</a>
                    </li> -->
                    <li>
                        <a href={getUrlWithLang('/blog')} class="link">{t.blog}</a>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>
                        <a href={getUrlWithLang('/terms-and-conditions')} class="link">{t.terms}</a>
                    </li>
                    <li>
                        <a href={getUrlWithLang('/privacy-policy')} class="link">{t.privacy}</a>
                    </li>
                    <li>
                        <a href={getUrlWithLang('/support')} class="link">{t.support}</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div>
            <span>Copyright © {new Date().getFullYear()} Future Ready Design B.V.</span>
            <span>KvK: 92339867</span>
        </div>
    </section>
    
    <section>
        <section class="footer-content-right">
            <ul>
                <li>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/futurereadydesign" target="_blank" class="button button-tertiary">
                                <img src="/assets/icons/instagram.svg" alt="Instagram logo">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/future-ready-design/" target="_blank" class="button button-tertiary">
                                <img src="/assets/icons/linkedin.svg" alt="Instagram logo">
                            </a>
                        </li>
                        <li>
                            <a href={getUrlWithLang('/contact')} class="button button-primary">
                                <span>{t.contactCta}</span>
                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="mailto:contact@futureready.design" class="link">contact@futureready.design</a> &#183; <a href="tel:0202101259" class="link">020 21 01 259</a>
                </li>
                <li>
                    Future Ready Design B.V.<br>
                    Raadhuisstraat 22,<br>
                    1016DE Amsterdam
                </li> 
            </ul>
        </section> 
        <div class="hidden">
            <span>Copyright © 2024 Future Ready Design B.V.</span>
            <span>KvK: 92339867</span>
        </div> 
    </section>
</footer>

<!-- Spinning Europe Icon and Made in Europe text -->
<div class="europe-footer">
  <span class="europe-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="2.013 2 233.492 231.957"><path fill="white" d="M118.76 2l-3.77 11.598h-12.22l9.88 7.17-3.77 11.636 9.879-7.171 9.878 7.17-3.768-11.634 9.84-7.171h-12.182L118.76 2zM68.38 15.5l-3.768 11.635h-12.22l9.878 7.17-3.768 11.599 9.84-7.171 9.88 7.17-3.77-11.597 9.879-7.171H72.15L68.38 15.5zm100.759 0l-3.77 11.635h-12.22l9.88 7.17-3.77 11.599 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22L169.139 15.5zM31.465 52.416l-3.768 11.598H15.513l9.842 7.17-3.77 11.599 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22l-3.767-11.598zm174.553 0l-3.77 11.598h-12.182l9.842 7.134-3.77 11.634 9.879-7.171 9.879 7.17-3.77-11.597 9.879-7.171h-12.22l-3.767-11.597zM17.965 102.795l-3.77 11.598H2.014l9.842 7.17-3.77 11.599 9.916-7.172 9.842 7.172-3.77-11.598 9.879-7.171h-12.22l-3.767-11.598zm201.553 0l-3.768 11.598h-12.184l9.842 7.17-3.77 11.599 9.879-7.172 9.879 7.172-3.77-11.562 9.879-7.208h-12.22l-3.767-11.597zM31.465 153.173l-3.768 11.598H15.513l9.842 7.172-3.77 11.635 9.879-7.172 9.879 7.172-3.77-11.635 9.879-7.172h-12.22l-3.767-11.598zm174.553 0l-3.77 11.598h-12.182l9.842 7.172-3.77 11.635 9.879-7.172 9.879 7.172-3.77-11.635 9.879-7.172h-12.22l-3.767-11.598zM68.38 190.052l-3.77 11.635h-12.22l9.879 7.17-3.768 11.599 9.878-7.171 9.842 7.17-3.77-11.597 9.879-7.171H72.15l-3.77-11.635zm100.758 0l-3.77 11.635h-12.22l9.88 7.135-3.77 11.634 9.879-7.171 9.879 7.17-3.77-11.633 9.879-7.135h-12.22l-3.767-11.635zm-50.38 13.5l-3.768 11.635h-12.22l9.879 7.135-3.77 11.635 9.879-7.172 9.878 7.172-3.768-11.635 9.84-7.135h-12.182l-3.767-11.635z"/></svg>
  </span>
  <span class="europe-text">Made in Europe</span>
</div>

<style lang="scss">
    .hidden {
        display: none;
    }

    footer {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-top: 7.5em;
        padding: 3.75em 0 2.5em;
        text-align: left;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            width: calc(100vw - 2.5em);
            height: var(--border-width);
            background-color: var(--color-white-10);
            border-radius: var(--border-width);
            transform: translateX(-50%);
        }

        .footer-content-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            > ul {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 2.75em;
                
                > li:first-of-type {
                    margin-right: 2em;
                }

                img {
                    height: 3.25em;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 0.45em;
                }
                
            }

            div {
                font-size: 0.95em;
                display: flex;
                gap: 1.25em;
                color: var(--color-white-45);
            }
        }

        .footer-content-right {
            
            > ul {
                text-align: right;

                ul {
                    display: flex;
                    flex-direction: row;
                    gap: 0.5em;
                }
                
                > li:nth-of-type(2) {
                    margin-top: 2em;
                    color: var(--color-lightblue);
                }
                > li:last-of-type {
                    margin-top: 1.1em;
                    color: var(--color-white-45);
                }
            }

            .button {
                width: fit-content;
            }

            .button-tertiary {
                padding: 0 1em;
                height: 100%;
                width: fit-content;
                position: relative;
            }
        }

        ul {
            list-style: none;
        }
    }

    .europe-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
      margin-top: 2em;
      margin-bottom: 1.5em;
    }
    .europe-icon svg {
      display: block;
      height: 2em;
      width: 2em;
      fill: white;
      animation: spin-europe 48s linear infinite;
    }
    .europe-text {
      color: white;
      font-family: var(--font-degular, sans-serif);
      font-size: 0.95em;
      letter-spacing: 0.1em;
      text-transform: none;
    }
    @keyframes spin-europe {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }


/* LARGE SCREEN */
@media screen and (max-width: 1250px) {
    footer {
        padding: 3.25em 0 2.25em;

        .footer-content-left {

            > ul {

                > li:first-of-type {
                    margin-right: 0em;
                }
                img {
                    height: 2.75em;
                }
            }
        }
    }
}

/* MODERATE SCREEN */
@media screen and (max-width: 1100px) {
    footer {

        .footer-content-left {
            flex: 1;

            > ul {
                flex-wrap: wrap;
                gap: 2.25em 2.75em;

                > li:first-of-type {
                    flex: 0 0 100%;
                }
            }
            
            div {
                margin-top: 2.5em;
            }
        }
    }
}

/* MEDIUM / MODERATE SCREEN */
@media screen and (max-width: 1000px) {
    footer {

        .footer-content-left {

            div {
                flex-direction: column;
                gap: 0.5em;
            }
        }
    }
}

/* MEDIUM SCREEN */
@media screen and (max-width: 900px) {
    footer {
        flex-direction: column;
        margin-top: 5em;

        .footer-content-left {
            flex: unset;

            > ul {
                flex-wrap: wrap;

                > li:first-of-type {
                    flex: unset;
                    margin-right: 2em;
                }
            }
            
            div {
                display: none;
            }
        }

        .footer-content-right {
            margin-top: 4.5em;
            
            > ul {
                
                text-align: left;

                ul {
                    flex-direction: row-reverse;
                    justify-content: flex-end;
                }    
            }
        }
    }

    .hidden {
        font-size: 0.95em;
        margin-top: 2.5em;
        display: flex;
        gap: 1.25em;
        color: var(--color-white-45);
    }
}

/* SMALL SCREEN */
@media screen and (max-width: 768px) { 
    footer {
        margin-top: 5em;
        padding: 2.75em 0 1.5em;

        &::before {
            width: calc(100vw - 2em);
            transform: translateX(-50%);
        }

        .footer-content-right {
            
            > ul {
                
                > li:nth-of-type(1) > ul > li img {
                    height: 1em;
                    // margin-top: 2em;
                    // color: var(--color-lightblue);
                }
        
            }
        }
    }
}

/* SMALL SCREEN (BETWEEN) */
@media screen and (max-width: 600px) {
    footer {

        .footer-content-left {
            flex: 1;

            > ul {
                flex-wrap: wrap;

                > li:first-of-type {
                    flex: 0 0 100%;
                }
            }
        }

        .footer-content-right {
            margin-top: 2.5em;
        }
    }
}

/* EXTRA SMALL SCREEN */
@media screen and (max-width: 500px) {
    footer {
        padding: 2.5em 0 1.5em;

        .footer-content-right {
            
            > ul {
    
                > li:nth-of-type(2) {
                    display: flex;
                    flex-direction: column;
                    font-size: 0;
                    gap: 0.25rem;
                    margin-top: 2.5rem;

                    a {
                        font-size: 1rem;
                    }
                }
            }
        }

        .hidden {
            margin-top: 1em;
            flex-direction: column-reverse;
            gap: 2.5em
        }
    }
}


</style>
