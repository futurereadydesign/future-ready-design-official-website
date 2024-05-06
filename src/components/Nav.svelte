<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <img src="/assets/icons/menu.svg" alt="Future Ready Design logo"><p>menu</p>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="#">Our philosophy</a>
    <a href="#">Our work</a>
    <a href="#">Accessibility</a>
    <a href="#">Design blog</a>
    <a href="#" class="get-in-touch">Get in touch</a>
  </div>
</div>

<style lang="scss">

.nav {
  padding: 1em;
  margin-bottom: 2em;
  height: 4em;
  width: 100%;
  position: relative;
  z-index: 9999;

  & > .nav-header {
    display: inline;
  }

  & > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px;
  }

  & > .nav-btn {
    display: none;

    & > label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      padding: 13px;

      img {
        margin-right: 10px; // Adjust as needed
      }

      p {
        color: #fff;
        font-size: 18px;
      }
    }
  }

  & > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;

    & > a {
      display: inline-block;
      padding: 13px 10px;
      text-decoration: none;
      color: #efefef;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  & > #nav-check {
    display: none;
  }

  .get-in-touch {
    padding: 0.55em;
    position: relative;
    display: flex;
    justify-content: center;
    width: fit-content;
    background-color: var(--color-dark);
    background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
    border-radius: 1.1em;
  }

  .get-in-touch::before,
  .get-in-touch::after {
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
    border-radius: calc(1.1em + var(--border-width));
    animation: rotation-glow 6s linear infinite;
    animation-play-state: running;
    transition: --gradient-color-black-35 750ms, --gradient-color-lightblue 750ms, --gradient-color-white 750ms, --gradient-color-lightblue-2 750ms;
    z-index: -1;
    will-change: transform; /* IMPROVE PERFORMANCE */
  }

  main.scan-completed .get-in-touch::before,
  main.scan-completed .get-in-touch::after {
    animation-play-state: running;
  }

  .get-in-touch:hover::before,
  .get-in-touch:hover::after {
    --gradient-color-white: #FFFFFF;
    --gradient-color-black-35: #22FFF2;
    --gradient-color-lightblue: #FFFFFF;
    --gradient-color-lightblue-2: #22FFF2;
  }

  .get-in-touch::after {
    filter: blur(var(--filter-blur-less));
    opacity: 0.45;
  }

  @media (max-width: 800px) {
    .get-in-touch {
      max-width: 8em;
    }

    & > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      cursor: pointer;
      // top: 10px;

      & > label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: fit-content;
        padding: 13px;

        img {
          margin-right: 10px; // Adjust as needed
        }
      }
    }

    & > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 5em; // Adjust top spacing as needed
      left: 0px;
      z-index: 9999;

      & > a {
        display: block;
        width: 100%;
      }
    }

    & > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }

    & > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }

    #nav-check:checked ~ body {
      overflow: hidden;
    }
  }
}

</style>