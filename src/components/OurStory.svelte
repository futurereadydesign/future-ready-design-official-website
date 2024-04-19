<div class="story-container">
  <img src="/assets/content/foto-van-robbin-en-yunus.png" alt="foto van Robbin en Yunus">
  <div>
    <h2>Our story in brief...</h2>
    <p>“we believe in technology that enriches real-life experiences, acting as an extension rather than a replacement.”</p>
    <button>Learn our story</button>
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

  h2 {
    font-size: 1em;
    font-weight: 200;
    margin-top: 20px;
    opacity: 0.5;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(0, 0, 0, 0.35);
    }
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