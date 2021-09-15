import css from "styled-jsx/css";
import Button from "./button";
import Section from "./section";
import HireButton from "./hire-button";

function MentoringStyle() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <h1 className="title">Mi estilo de mentoría</h1>

          <h2 className="subtitle">
            Me siento muy identificado con el término japonés{" "}
            <strong className="has-text-primary">先輩 (Senpai)</strong>. Un Senpai es un compañero igual a ti, con más
            experiencia en un ámbito concreto. Como mentor, me comprometo a guiarte y aconsejarte lo mejor que pueda.
          </h2>

          <div className="grid">
            <div className="column">
              <div className="has-text-centered icon">💬</div>
              <h3>Honestidad</h3>
              <p>
                Nada de críticas edulcoradas. Trabajaremos con feedback constructivo y accionable desde el primer
                momento. Lo que no funcione, lo volveremos a construir juntos.
              </p>
            </div>

            <div className="column">
              <div className="has-text-centered icon">🙇🏻‍♂️</div>
              <h3>Humildad</h3>
              <p>
                No soy ningún gurú, ni tengo todas las respuestas. Tan solo comencé a recorrer mi camino hace ya unos
                cuantos años y me gustaría compartir contigo lo que he aprendido durante mi viaje.
              </p>
            </div>

            <div className="column">
              <div className="has-text-centered icon">🤝</div>
              <h3>Igualdad</h3>
              <p>
                Para mí, eres mucho más que una o un aprendiz. Somos colegas de la industria de desarrollo de software.
                Yo no soy el único que enseña ni tampoco el único que aprende.
              </p>
            </div>

            <div className="column">
              <div className="has-text-centered icon">🧘🏻</div>
              <h3>Paciencia</h3>
              <p>
                Nos tomaremos el tiempo que necesites para ayudarte a encontrar la dirección correcta. Tú marcas el
                ritmo.
              </p>
            </div>
          </div>
        </div>

        <div className="has-text-centered">
          <HireButton text="Cuenta conmigo" />
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  h3 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .icon {
    display: block;
    text-align: center;
    font-size: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default MentoringStyle;
