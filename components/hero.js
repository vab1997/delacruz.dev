function Hero() {
  return (
    <section className="hero has-background-light is-fullheight-with-navbar">
      <div className="hero-image">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
        daniel-de-la-cruz_e68nib_c_scale_w_200.jpeg   200w,
        daniel-de-la-cruz_e68nib_c_scale_w_613.jpeg   613w,
        daniel-de-la-cruz_e68nib_c_scale_w_946.jpeg   946w,
        daniel-de-la-cruz_e68nib_c_scale_w_1213.jpeg 1213w,
        daniel-de-la-cruz_e68nib_c_scale_w_1400.jpeg 1400w
      "
          src="daniel-de-la-cruz_e68nib_c_scale_w_1400.jpeg"
          alt="Daniel de la Cruz"
        />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-size-3 is-size-4-mobile">¡Hola! 👋</p>
          <h1 className="title is-size-1 is-size-3-mobile">Soy Dani.</h1>
          <h2 className="subtitle is-size-3 is-size-4-mobile has-text-grey">
            He trabajado como <strong>ingeniero de software</strong> durante más
            de una década y quiero ser tu{" "}
            <strong className="has-text-primary">mentor</strong> para ayudarte a dar
            un <strong>salto en tu carrera</strong>.
          </h2>
          <div className="buttons">
            <a
              className="button is-large is-medium-mobile is-primary is-outlined"
              alt="Mentoring a medida para programadores de Front-End"
              href="/#skills"
              data-tracking="about-me-hero-cta"
            >
              Sobre mí
            </a>
            <a
              className="button is-large is-medium-mobile is-primary"
              alt="Mentoring a medida para programadores de Front-End"
              href="/mentoring"
              data-tracking="hero-cta"
            >
              Mentoring
            </a>
          </div>
        </div>
      </div>
      <a className="scroll-down-icon has-text-primary" href="/#skills">
        <i className="fas fa-2x fa-angle-double-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}

export default Hero;
