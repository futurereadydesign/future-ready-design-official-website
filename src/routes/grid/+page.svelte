<script>
  import GridItem from "./GridItem.svelte";
  let orgsImagePaths = [
    "/assets/organisations/10meer.png",
    "/assets/organisations/angelineau.png",
    "/assets/organisations/crelo.png",
    "/assets/organisations/duva.png",
    "/assets/organisations/endurans.png",
    "/assets/organisations/jongleren.png",
    "/assets/organisations/nfl.png",
    "/assets/organisations/thebin.png",
    "/assets/organisations/10meer.png",
    "/assets/organisations/angelineau.png",
    "/assets/organisations/crelo.png",
    "/assets/organisations/duva.png",
    "/assets/organisations/endurans.png",
    "/assets/organisations/jongleren.png",
    "/assets/organisations/nfl.png",
    "/assets/organisations/thebin.png",
  ];
</script>

<section class="wrapper-max">
  <h2>we made digital impact with over 100+ organisations already</h2>
  <p>Are you next?</p>
  <div class="organisation-grid">
    {#each orgsImagePaths as imagePath}
      <GridItem imgPath={imagePath}></GridItem>
    {/each}
  </div>
  <div class="google-review">
    <div class="top">
      <div class="google-logo">
        <img src="/assets/google-blur.svg" alt="blurred google logo" />
        <img src="/assets/google-logo.svg" alt="google logo" />
      </div>
      <img src="/assets/stars.svg" alt="review stars" />
    </div>
    <p>5 stars on Google!</p>
  </div>
</section>

<style lang="scss">
  @import "../../styles/main.css";

  section {
    text-align: center;
    h2 {
      font-size: 50px;
      font-weight: 700;
    }
    p {
      opacity: 0.5;
      font-size: 20px;
      margin-bottom: 75px;
    }
  }
  .organisation-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-bottom: 55px;
  }
  .google-review {
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
  @media screen and (max-width: 676px) {
    .organisation-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
