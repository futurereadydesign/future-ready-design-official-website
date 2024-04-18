<header>
    <div class="logo">
        <img src="/assets/branding/future-ready-design_logo.svg" alt="Future Ready Design logo">
    </div>
    <nav>
      <ul>
        <li><a href="#" class="hover-line">Our philosophy</a></li>
        <li><a href="#" class="hover-line">Our work</a></li>
        <li><a href="#" class="hover-line">Accessibility</a></li>
        <li><a href="#" class="hover-line">Design blog</a></li>
        <li><a href="#">Get in touch</a></li>
      </ul>
    </nav>
    <div class="text">
      <p>Available for work</p>
    </div>
  </header>

  <style lang="scss">

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .logo img {
    max-height: 40px;
    margin: .8em;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: white;
        text-decoration: none;
        transition: color 0.5s ease;
      }
    }
  }

  .text {
    text-align: right;
  }

  .hover-line {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-image: linear-gradient(to left, transparent, #21DBD0, transparent),
                      linear-gradient(to right, transparent, #21DBD0, transparent);
    background-position: left bottom, right bottom;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    transition: width 0.3s ease, transform 0.3s ease, background-size 0.3s ease;
    border-radius: 50%;
    bottom: -5px;
  }

  &:hover {
    color: white;
  }

  &:hover::before {
    width: 100%;
    transform: translateX(-50%);
    background-size: 100% 100%, 100% 100%;
  }
}
}

  </style>