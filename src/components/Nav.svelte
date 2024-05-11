<div class="spacer"></div>
<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
    </div>
  </div>
  <section class="nav-links">
    <a href="#">Our philosophy</a>
    <a href="#">Our work</a>
    <a href="#">Accessibility</a>
    <a href="#">Design blog</a>
    <a href="#" class="get-in-touch">Get in touch</a>
    <img class="available-mobile" src="/assets/icons/available-mobile.svg" alt="Available for work">
  </section>

  <section class="available">
    <img src="/assets/icons/available.svg" alt="Available for work">
  </section>

  <div class="nav-btn">
    <label for="nav-check">
      <img src="/assets/icons/menu.svg" alt=""><p>menu</p>
    </label>
  </div>
</div>

<style lang="scss">

.spacer {
  height: 3.8em;
}

.nav {
  padding: 1em;
  margin-bottom: 2em;
  height: 4em;
  width: 100%;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-header {
    display: flex;
    align-items: center;
  }

  .nav-title {
    color: #fff;
    padding: 10px;
  }

  .available-mobile {
    display: none;
  }

  .nav-btn {
    display: none; 

    @media (max-width: 900px) {
      display: flex; 
      align-items: center;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 13px;

        img {
          margin-right: 10px;
        }

        p {
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 3.5em;
    white-space: nowrap;

    a {
      padding: 13px 10px;
      text-decoration: none;
      color: #efefef;
    }

  }

  .available {
    margin-top: 1.6em;
  }

  #nav-check {
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
    animation: rotation-glow 8s linear infinite;
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

  @media (max-width: 900px) {
    
    .get-in-touch {
      max-width: 8em;
    }

    .nav-title {
      margin-top: 1em;
    }

    .available {
      display: none;
    }

    & > .nav-links {
      background-color: black;
      margin-left: 0em;
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
          margin-right: 10px;
        }
      }
    }

    & > .nav-links {
      position: fixed;
      display: block;
      width: 100%;
      background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 2.5em;
      left: 0px;
      z-index: 9999;
      font-size: 2em;
      font-weight: 600;

      & > a {
        display: block;
        margin-left: 1em;
        margin-top: .05em;
        width: 100%;
      }

      .available-mobile {
        position: absolute;
        bottom: 0;
        left: 15%;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
    }

    & > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }

    & > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;

      .nav {
        background-image: linear-gradient(rgba(25, 25, 25, .95), rgba(25, 25, 25, .95)), url("https://assets-global.website-files.com/6230868ca5c2a57d0949cff8/630babb964f09a56fcf4e82a_noiselayer.png");
      }
    }
  }
}

</style>