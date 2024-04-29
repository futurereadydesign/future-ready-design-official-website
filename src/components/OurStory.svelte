<div class="story-container">
  <img src="/assets/content/foto-van-robbin-en-yunus.png" alt="foto van Robbin en Yunus">
  <div>
    <h3>Our story in brief...</h3>
    <p>“we believe in technology that enriches real-life experiences, acting as an extension rather than a replacement.”</p>
    <button class="button button-tertiary">Learn our story</button>
  </div>
</div>


<style lang="scss">
.story-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  color: white;

  img {
    width: 100%;
    height: auto;
  }

  p {
    color: white;
    margin-top: 10px;
    font-size: 1.5em;
    max-width: 100%;
  }

  h3 {
    font-size: 1em;
    font-weight: 200;
    margin-top: 20px;
    opacity: 0.5;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 2em;
      max-width: 35em;
    }

    p {
      text-align: left;
      font-size: 1.8em;
    }
  }
}

  </style>