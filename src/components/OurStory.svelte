<div class="story-container">
    <img class="story-image" src="/assets/content/foto-van-robbin-en-yunus.png" alt="foto van Robbin en Yunus">
    <div class="content-container">
      <h2 class="story-title">Our story in brief...</h2>
      <p class="story-text">“we believe in technology that enriches real-life experiences, acting as an extension rather than a replacement.”</p>
      <button class="story-button">Learn our story</button>
    </div>
  </div>

  <style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  color: var(white);

  .story-image {
    max-width: 100%;
    width: 30em;
    height: auto;
  }

  .story-title {
    font-size: 20px;
    font-weight: 200;
    margin-top: 20px;
    opacity: 50%;
    margin-left: 1em;
  }

  .story-text {
    margin-top: 10px;
    font-size: 35px;
    max-width: 12em;
    margin-left: .5em;
  }

  .story-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 1em;

    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(0, 0, 0, 0.35);
    }
  }

  @media (min-width: 850px) {
    flex-direction: row;
    text-align: left;

    .story-image {
      margin-right: 20px;
    }

    .story-title,
    .story-text {
      text-align: left;
    }
  }
}
  </style>