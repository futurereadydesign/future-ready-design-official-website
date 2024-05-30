<script>
  // Importeer de storyblokEditable functie vanuit de Storyblok package
  import { storyblokEditable } from '@storyblok/svelte';

  // Definieer variabelen voor de projects en slug
  export let projects;
  export let slug;
</script>
    

  <!-- Gebruik de storyblokEditable functie om de inhoud van de blog bewerkbaar te maken -->
  <article class="card-projects-card" use:storyblokEditable={projects}>

    <!-- Toon de afbeelding van de projects -->
    <picture>
      <source srcset={projects.image?.filename} type="image/png">
      <img class="card-projects-image" src={projects.image?.filename} alt={projects.image.alt} loading="lazy">
    </picture>
    
    <div class="card-projects-card-content">
      <div>
        <!-- Toon de titel van de projects -->
        <h2 class="card-projects-title">{projects.title}</h2>

        <!-- Voeg een link toe naar de projects door gebruik te maken van de slug -->
        <a href="/{slug}" class="button button-quaternary">
          <span>Kom meer te weten</span>
          <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.58203 11H17.4154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 4.5835L17.4167 11.0002L11 17.4168" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </a>
      </div>
      <div>
        <ul>
          <li>
            <span>Client / partner</span>
            <strong>Future Ready</strong>
          </li>
          <li>
            <span>Project type</span>
            <strong>Application</strong>
          </li>
        </ul>
      </div>
    </div>
  </article>

 
<style lang="scss">

article {
  margin-top: 5em;

  picture {
    border-radius: 1em;
    width: 100%;
    overflow: hidden;

    * {
      width: 100%;
      border-radius: inherit;
    }
  }

  .card-projects-card-content {
    margin: 1em auto 0 auto;
    width: calc(100% - 10em);
    display: flex;
    justify-content: space-between;
    gap: 2.5em;

    div:nth-of-type(1) {
      flex: 1;

      h2 {
        font-size: 2.5em;
        margin-bottom: 1rem;
      }
      a {
        width: fit-content;
      }
    }

    div:nth-of-type(2) {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 1.25em;
        margin-top: 0.25em;

        span {
          display: block;
          font-family: var(--font-degular);
          color: var(--color-white-45);
        }
        strong {
          // font-size: 1.5em;
          font-weight: 500;
          color: var(--color-white);
        }
      }
    }
    

  }
}

@media screen and (max-width: 1100px) {
  article {
    .card-projects-card-content {
      width: calc(100% - 5em);
    }
  }
}

@media screen and (max-width: 1000px) {
  article {
    .card-projects-card-content {
      width: calc(100% - 2.5em);
    }
  }
}

@media screen and (max-width: 900px) {  
  article {
    .card-projects-card-content {

      div:nth-of-type(1) {

        h2 {
          font-size: 2.25em;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  article {
    margin-top: 2.75em;

    picture {
      border-radius: 0.65em;
    }

    .card-projects-card-content {

      div:nth-of-type(2) {

        ul {
          flex-direction: column;
          gap: 0.75em;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  article {
    .card-projects-card-content {
      width: 100%;

      div:nth-of-type(1) {

        h2 {
          font-size: 1.8em;
        }
      }
    }
  }
}



</style>
