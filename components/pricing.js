function Pricing() {
  return (
    <>
      <section className="section has-text-centered pricing">
        <div className="container">
          <div className="pricing-grid">
            <div className="columns is-centered">
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced">
                    <i className="fas fa-3x fa-user-friends"></i>
                  </span>
                  <h1 className="title is-size-4 is-spaced">
                    Acompañamiento técnico
                  </h1>
                  <p className="is-spaced">
                    Elige este plan si lo que necesitas es un compañero de vuelo
                    que te ayude a mejorar técnicamente.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal is-spaced">
                    Aquí tienes algunas actividades en las que podemos emplear
                    nuestro tiempo:
                  </p>
                  <ul className="is-spaced">
                    <li>Pair programming</li>
                    <li>Code Walkthrough</li>
                    <li>Code Katas</li>
                    <li>Diseñar un plan de aprendizaje a medida</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced">
                    <i className="fas fa-3x fa-rocket"></i>
                  </span>
                  <h1 className="title is-size-4 is-spaced">Impulsa tu carrera</h1>
                  <p className="is-spaced">
                    Si ya tienes trabajo pero quieres saber qué te falta para
                    ayudar mejor a tu equipo o conseguir un ascenso, este es el
                    plan que estás buscando.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal is-spaced">
                    Algunas ideas para inspirarte:
                  </p>
                  <ul className="is-spaced">
                    <li>Preparar un ascenso a senior</li>
                    <li>Técnicas de liderazgo</li>
                    <li>
                      Cómo presentar propuestas de mejora a tus compañeras y
                      compañeros
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced">
                    <i className="fas fa-3x fa-chalkboard-teacher"></i>
                  </span>
                  <h1 className="title is-size-4 is-spaced">Consigue el trabajo</h1>
                  <p className="is-spaced">
                    ¿Estás en uno o varios procesos de selección y necesitas
                    ayuda para prepararlos? Déjame acompañarte durante el
                    proceso.
                  </p>
                  <p className="list-title has-text-primary has-text-weight-normal is-spaced">
                    Cómo puedo ayudarte:
                  </p>
                  <ul className="is-spaced">
                    <li>
                      Practicar las preguntas típicas en entrevistas de
                      Front-End
                    </li>
                    <li>Feedback sobre pruebas técnicas</li>
                    <li>Optimización del CV y portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-text-centered is-spaced">
        <div className="container is-narrow">
          <h1 className="title is-spaced">
            Contrata 10 sesiones* por&nbsp;
            <span className="has-text-primary">300€</span>
          </h1>
          <h3 className="subtitle is-size-5-desktop">
            O si lo prefieres, escríbeme para hacer una&nbsp;
            <u>
              <strong>primera consultoría gratuita</strong>
            </u>&nbsp;
            para hacerme preguntas, discutir detalles y decidir si soy la
            persona que estás buscando.
          </h3>
          <p className="is-spaced">
            <em>
              *Sesiones de 1 hora, a distribuir según nuestra mútua
              disponibilidad.
            </em>
          </p>
          <div className="buttons is-centered">
            <a
              title="Solicita una sesión gratuita"
              data-tracking="free-session-cta"
              className="button is-primary is-large is-medium-mobile is-outlined"
              href="/contactar"
            >
              Prueba gratuita
            </a>
            <a
              title="Contratar"
              data-tracking="hire-cta"
              className="button is-primary is-large is-medium-mobile"
              href="/contactar"
            >
              Contratar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Pricing;
