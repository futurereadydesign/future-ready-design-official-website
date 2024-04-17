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
  }
</style>
