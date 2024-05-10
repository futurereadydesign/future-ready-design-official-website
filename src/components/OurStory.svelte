<div class="story-container">
  <img src="/assets/content/foto-van-robbin-en-yunus.png" alt="foto van Robbin en Yunus">
  <div>
    <h3>Our story in brief...</h3>
    <p>“we believe in technology that enriches real-life experiences, acting as an extension rather than a replacement.”</p>
    <button class="button button-tertiary">Learn our story<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-W6XJD25np45u"><path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-W6XJD25np45u"></path><path d="M6.41602 9.16669L10.9993 13.75L15.5827 9.16669" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-W6XJD25np45u"></path><path d="M11 13.75V2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="s-W6XJD25np45u"></path></svg></button>
  </div>
</div>


<style lang="scss">
.story-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  color: white;

  img {
    width: 100%;
    max-width: 30em;
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

  button {
    margin-top: 1em;
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