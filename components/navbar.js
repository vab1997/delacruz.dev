function NavBar() {
  function handleClick(evt) {
    const navBar = document.getElementById(evt.target.dataset.target);
    evt.target.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
  }

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item logo" href="/" title="Dani de la Cruz">
          <img
            src="/danidev.svg"
            alt="Dani de la Cruz"
            width="30"
            height="30"
          />
          <b>dani de la cruz</b>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navBar"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navBar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/blog" data-tracking="navbar-blog">
            Blog
          </a>
          <a
            className="navbar-item"
            href="/#skills"
            data-tracking="navbar-skills"
          >
            Mis habilidades
          </a>
          <a
            className="navbar-item"
            href="/#experience"
            data-tracking="navbar-experience"
          >
            Mi experiencia
          </a>
          <a
            className="navbar-item"
            href="/#testimonials"
            data-tracking="navbar-testimonials"
          >
            Referencias
          </a>
          <a
            className="navbar-item"
            href="/mentoring"
            data-tracking="navbar-mentoring"
          >
            Mentoring
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-primary"
                title="Mentoring a medida para programadores de Front-End"
                href="/contactar"
                data-tracking="navbar-cta"
              >
                <span className="icon">
                  <i className="far fa-envelope"></i>
                </span>
                <strong>Contactar</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
