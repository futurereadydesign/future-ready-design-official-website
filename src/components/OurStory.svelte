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
  align-items: center;
  text-align: center;
  color: #FFFFFF;

  .story-image {
    max-width: 100%;
    width: 30em;
    height: auto;
  }

  .story-title {
    font-size: 20px;
    margin-top: 20px;
    opacity: 50%;
  }

  .story-text {
    margin-top: 10px;
    font-size: 35px;
  }

  .story-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
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