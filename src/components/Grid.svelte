<script>
    // Importeer de storyblokEditable functie vanuit de Storyblok package
    import { storyblokEditable } from "@storyblok/svelte";

    // Definieer de blok
    export let blok;
    // console.log(blok.organisation[0].logo);

    
    import GridItem from "./GridItem.svelte";
    // let orgsImagePaths = [
    //   "/assets/organisations/10meer.png",
    //   "/assets/organisations/angelineau.png",
    //   "/assets/organisations/crelo.png",
    //   "/assets/organisations/duva.png",
    //   "/assets/organisations/endurans.png",
    //   "/assets/organisations/jongleren.png",
    //   "/assets/organisations/nfl.png",
    //   "/assets/organisations/thebin.png",
    //   "/assets/organisations/10meer.png",
    //   "/assets/organisations/angelineau.png",
    //   "/assets/organisations/crelo.png",
    //   "/assets/organisations/duva.png",
    //   "/assets/organisations/endurans.png",
    //   "/assets/organisations/jongleren.png",
    //   "/assets/organisations/nfl.png",
    //   "/assets/organisations/thebin.png",
    // ];

  </script>
  
  <section class="wrapper-large" use:storyblokEditable={blok}>
    <h2>{blok.title}</h2>
    <p>{blok.subtitle}</p>
    <div class="organisation-grid">
      {#each blok.organisation as imagePath}
        <GridItem imgPath={imagePath.logo.filename} imgAlt={imagePath.logo.alt}></GridItem>
      {/each}
    </div>
    <a href={blok.google_url.url} target="_blank" class="google-review button">
      <div class="top">
        <div class="google-logo">
          <img src="/assets/google-blur.svg" alt="" />
          <img src="/assets/google-logo.svg" alt="google logo" />
        </div>
        <img src="/assets/stars.svg" alt="review stars" />
      </div>
      <p>{blok.google_rating}</p>
    </a>
  </section>
  
  <style lang="scss">
    // @import "../../styles/main.css";
  
    section {
        text-align: center;

        h2 {
            font-size: 2.5em;
            max-width: 15em;
            margin: 0 auto 0.5rem auto;
        }
        p {
            color: var(--color-white-45);
            font-size: 1em;
        }
    }
    .organisation-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      // grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-bottom: 2.5em;
      margin-top: 3.75em;
      
    }
    .google-review {
      display: inline-block;
      width: fit-content;
      text-decoration: none;

      .top {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: center;
        .google-logo {
          position: relative;
          width: 40px;
          height: 40px;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      p {
        margin-top: 10px;;
      }
    }
  
    @media screen and (max-width: 1024px) {
      section {
        p {
          margin-bottom: 35px;
        }
      }
      .organisation-grid {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 40px;
      }
    }

    /* MEDIUM SCREEN */
    @media screen and (max-width: 900px) {
        section {
            h2 {
                font-size: 2.25em;
            }
        } 
    }

    @media screen and (max-width: 676px) {
      .organisation-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
  