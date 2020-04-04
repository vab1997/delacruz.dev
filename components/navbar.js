function NavBar() {
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
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navBar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/blog" data-tracking="navbar-blog">
            blog
          </a>
          <a
            className="navbar-item"
            href="/#skills"
            data-tracking="navbar-skills"
          >
            mis habilidades
          </a>
          <a
            className="navbar-item"
            href="/#experience"
            data-tracking="navbar-experience"
          >
            mi experiencia
          </a>
          <a
            className="navbar-item"
            href="/#testimonials"
            data-tracking="navbar-testimonials"
          >
            referencias
          </a>
          <a
            className="navbar-item"
            href="/mentoring"
            data-tracking="navbar-mentoring"
          >
            mentoring
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
                <strong>contactar</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
