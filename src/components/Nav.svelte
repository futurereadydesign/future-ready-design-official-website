<script>
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';
  
  // Importeer het juiste css bestand
  import '/src/styles/main.css';

  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from "@storyblok/svelte";

  // Importeer de withLang functie vanuit de lib/url.js
  import { withLang } from '../lib/url.js';

  // Definieer de blok
  export let blok;
  export let nav;

  let header;
  let navOverlayButtonClosed;
  let navOverlayButtonOpened;

  let isActive = false;

  // Always derive currentLanguage from the URL query parameter
  $: currentLanguage = get(page).url.searchParams.get('_storyblok_lang') === 'en' ? 'en' : 'nl';

  function getUrlWithLang(path) {
    return withLang(path, currentLanguage);
  }

  function toggleOverlay() {
    isActive = !isActive;

    if (header.classList.contains('active')) {
      navOverlayButtonClosed.style.display = 'block';
      navOverlayButtonOpened.style.display = 'none';
      console.log("Open");
    } else {
      navOverlayButtonClosed.style.display = 'none';
      navOverlayButtonOpened.style.display = 'block';
      console.log("Gesloten");
    }
  }

  function switchLanguage(event) {
    event.preventDefault(); 
    const currentUrl = new URL(window.location);

    if (currentLanguage === 'nl') {
      currentUrl.searchParams.set('_storyblok_lang', 'en');
    } else {
      currentUrl.searchParams.set('_storyblok_lang', 'nl');
    }

    window.location.href = currentUrl.pathname + currentUrl.search;
  }

  $: linkAriaLabel = currentLanguage === 'nl' ? 'Switch language to English' : 'Verander de taal naar het Nederlands';
  $: languageSwitchLabel = currentLanguage === 'nl' ? 'English' : 'Nederlands';
</script>

<header use:storyblokEditable={blok} bind:this={header} class={isActive ? 'active' : ''}>
  <div class="spacer"></div>
  <nav class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
      <div class="nav-title">
          <a href={getUrlWithLang('')} class="clickable">
            <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
          </a>
      </div>
    </div>

    {#if nav}
    <!-- Nav Links -->
    <section class="nav-links">

      {#each nav.filter(blok => blok.component === 'menu_link' && blok.text !== 'Toegankelijkheid') as blok}
        <a
          href={getUrlWithLang(blok.link.story.slug === 'home' ? '' : '/' + blok.link.story.slug)}
          class="link"
          on:click={toggleOverlay}
        >{blok.text}</a>
      {/each}

    </section>

    <!-- Available Section -->
    <section class="available">
      {#each nav.filter(blok => blok.component === 'menu_text') as blok}
        <a href="#" class="language-switch" on:click={switchLanguage} aria-label={linkAriaLabel}>{languageSwitchLabel}</a>
        <span> <!-- PULSATE --> </span>
        {blok.available}
      {/each}
    </section>

    <!-- Nav Button -->
    <button class="nav-btn button button-tertiary" on:click={toggleOverlay}>
      {#each nav.filter(blok => blok.component === 'menu_text') as blok}
        <img src="/assets/icons/menu.svg" alt="Menu icon">
        <span bind:this={navOverlayButtonClosed}>{blok.menu}</span>
        <span bind:this={navOverlayButtonOpened} style="display: none;">{blok.close}</span>
      {/each}
    </button>
  {/if}
  </nav>
</header>

<style lang="scss">

header {
  left: 0;
  top: 0;
  padding: 1em;
  margin-bottom: 2em;
  height: 4em;
  width: 100%;
  position: sticky;
  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: calc(100% + 5em);
    background-image: linear-gradient(0deg, rgba(37, 37, 37, 0) 0%, rgba(25, 25, 25, 0.85) 75%);
    z-index: -1;
    pointer-events: none;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.25em;
  }

  .nav-header {
    display: flex;
    align-items: center;
  }

  .nav-title {
    color: var(--color-white);
    // padding: 10px;
  }

  .available-mobile {
    display: none;
  }

  .nav-btn {
    display: none; 
    // background-color: transparent;
    // border: none;
    // color: var(--color-white);

    span::after {
      display: none;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    font-size: 1em;
    white-space: nowrap;
    gap: 1.5em;

    a {
      text-decoration: none;
      color: var(--color-white);

      &:focus-visible {
        color: var(--gradient-color-lightblue);
        text-decoration: underline;
      }
    }
  }
 
  .language-switch {
      display: flex;
      align-items: center;
      font-size: 1em;
      white-space: nowrap;
      gap: 1.5em;
      width: 4em;

      a {
        text-decoration: none;
        color: var(--color-white);

        &:focus-visible {
          color: var(--gradient-color-lightblue);
          text-decoration: underline;
        }
      }
  }

  .available {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;

    .language-switch {
        text-decoration: none;
        color: var(--color-white);

        &:focus-visible {
          color: var(--gradient-color-lightblue);
          text-decoration: underline;
        }
    }

    span {
        position: relative;
        display: inline-block;
        background-color: var(--color-green);
        background-image: radial-gradient(circle, rgba(138,255,185,1) 0%, rgba(0,255,102,1) 100%);
        height: 0.65em;
        width: 0.65em;
        border-radius: 50%;
        margin-right: 0.5em;
        margin-left: 4.5em;
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

  #nav-check {
    display: none;
  }

  nav {
    .nav-links {
      a:nth-of-type(5) {
        padding: 0.55em 0.75em;
        position: relative;
        display: flex;
        justify-content: center;
        width: fit-content;
        background-color: var(--color-dark);
        background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
        border-radius: 0.5em;

        &::before,
        &::after {
          content: '';
          position: absolute;
          inset: calc(var(--border-width) * -1);
          background-image: conic-gradient(
            from var(--border-gradient-angle),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-black-35),
            var(--gradient-color-lightblue-2),
            var(--gradient-color-lightblue-2),
            var(--gradient-color-lightblue-2),
            var(--gradient-color-lightblue-2),
            var(--gradient-color-lightblue),
            var(--gradient-color-white),
            var(--gradient-color-white)
          );
          background-size: 200% 100%;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          border-radius: calc(0.5em + var(--border-width));
          animation: rotation-glow 8s linear infinite; 
          animation-play-state: running; 
          transition: --gradient-color-black-35 750ms, --gradient-color-lightblue 750ms, --gradient-color-white 750ms, --gradient-color-lightblue-2 750ms;
          z-index: -1;
          will-change: transform; /* IMPROVE PERFORMANCE */
        }

        &:hover::before,
        &:hover::after {
          --gradient-color-white: #FFFFFF;
          --gradient-color-black-35: #22FFF2;
          --gradient-color-lightblue: #FFFFFF;
          --gradient-color-lightblue-2: #22FFF2;
        }

        &::after {
          filter: blur(var(--filter-blur-less));
          opacity: 0.45;
        }
      }
    }
  }
}



@media (max-width: 1200px) {
  header {
    margin-top: 0;
    
    .nav {
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.25em 0;
      gap: 2em;

      .nav-header {
        flex: 1;
      }

      .nav-links {
        // display: flex;
        flex-direction: column;
        align-items: flex-start;
        order: 1;
        margin-top: 3.25em;
        padding-left: 1.5em;
        transform: translateX(-100vw);
        transition: 0;
        transition-delay: 0;
        display: none;
        width: 100%;

        a {
          font-size: 2em;
          font-weight: 600;
        }
        a.get-in-touch {
          padding: 0.35em 0.5em;
          margin-left: -0.5em;
        }
      }

      .available {
        display: flex;
      //   order: 2;
      //   position: absolute;
      //   bottom: 2em;
      //   left: 50%;
      //   transform: translateX(-50%);
      //   opacity: 0;
      //   transition: 0;
      //   transition-delay: 0;
      }
    }    



    .nav-btn {
      display: flex;
      backdrop-filter: blur(var(--filter-blur-less));
    }

  }

  // IF OVERLAY IS ACTIVE
  header.active {
    height: 100dvh;
    position: fixed;
    background-color: var(--color-dark);
    background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
    
    &::before {
      display: none;
    }

    .nav {

      .nav-links {
        display: flex;
        transform: translateX(0);
        transition: 450ms;
      }
      // .available {
      //   display: flex;
      //   transition: 1s;
      //   transition-delay: 500ms;
      //   opacity: 1;
      // }

    }
    
  }
}

@media (max-width: 600px) {
  header {
    .nav {
      gap: 0;

      .nav-header {
        flex: unset;
      }

      .available {
        display: none;
        order: 2;
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: 0;
        transition-delay: 0;
      }
    }
  }

  header.active {
    .nav {
      .available {
        display: flex;
        transition: 1s;
        transition-delay: 500ms;
        opacity: 1;
      }
    }
  }
}


























//   @media (max-width: 900px) {
    
//     .get-in-touch {
//       max-width: 8em;
//     }

//     .nav-title {
//       // margin-top: 1em;
//     }

//     .available {
//       display: none;
//     }

//     & > .nav-links {
//       background-color: black;
//       margin-left: 0em;
//     }

//     & > .nav-btn {
//       display: inline-block;
//       position: absolute;
//       right: 0px;
//       cursor: pointer;
//       // top: 10px;

//       & > label {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         width: fit-content;
//         height: fit-content;
//         padding: 13px;

//         img {
//           margin-right: 10px;
//         }
//       }
//     }

//     .nav-links {
//       position: fixed;
//       display: block;
//       width: 100%;
//       background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
//       height: 0px;
//       transition: all 0.3s ease-in;
//       overflow-y: hidden;
//       top: 2.5em;
//       left: 0px;
//       z-index: 9999;
//       font-size: 2em;
//       font-weight: 600;

//       & > a {
//         display: block;
//         margin-left: 1em;
//         margin-top: .05em;
//         width: 100%;
//       }

//       .available-mobile {
//         position: absolute;
//         bottom: 0;
//         left: 15%;
//         width: 70%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: 10px;
//       }
//     }

//     // & > #nav-check:not(:checked) ~ .nav-links {
//     //   height: 0px;
//     // }

//     // & > #nav-check:checked ~ .nav-links {
//     //   height: calc(100vh - 50px);
//     //   overflow-y: auto;

//     //   .nav {
//     //     background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
//     //   }
//     // }
//   }
// }

</style>