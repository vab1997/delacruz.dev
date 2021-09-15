import css from "styled-jsx/css";
import Box from "./box";
import Button from "./button";
import Section from "./section";

function MentoringPlans() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <h1 className="title">Planes de mentoría</h1>
          <h2 className="subtitle">
            Estos son algunas de las consultas más demandadas por las personas que me piden ayuda.
          </h2>
          <div className="grid">
            <Box>
              <span className="icon">👥</span>
              <h2 className="title">Acompañamiento técnico</h2>
              <p>
                ¿Necesitas es un compañero de vuelo que te ayude a mejorar técnicamente? ¿Quieres hacerme una{" "}
                <strong>consulta puntual</strong>?
              </p>
              <p>Así podemos invertir nuestro tiempo:</p>
              <ul>
                <li>
                  <strong>Pair programming</strong>. Programaremos un proyecto juntos.
                </li>
                <li>
                  <strong>Revisión de código</strong>. Enséñame tu proyecto y veamos qué se puede mejorar.
                </li>
                <li>
                  <strong>Code Katas</strong>. Practiquemos cómo resolver problemas.
                </li>
              </ul>
              <p>
                <small>
                  Este es el plan más flexible y el número de sesiones necesarias dependerá de la ayuda que necesites.
                  Podemos comenzar
                  <strong className="has-text-primary">a partir de una sesión</strong>.
                </small>
              </p>
              <p className="has-text-centered">
                <Button
                  title="Consigue ayuda en tu ascenso a senior"
                  href="/contact?subject=Necesito acompañamiento técnico"
                  data-tracking="level-up-cta"
                  size="small"
                >
                  Trabajemos juntos
                </Button>
              </p>
            </Box>

            <Box>
              <span className="icon">🚀</span>
              <h2 className="title">Impulsa tu carrera</h2>
              <p>
                Si ya tienes trabajo pero quieres saber qué te falta para ayudar mejor a tu equipo o conseguir un
                ascenso, déjame ayudarte.
              </p>
              <p>Algunas ideas para inspirarte:</p>
              <ul>
                <li>
                  Saber <strong>qué se espera de un programador senior</strong> y cómo prepararte para serlo.
                </li>
                <li>
                  Técnicas y herramientas de <strong>liderazgo</strong> para hacer crecer a tus compañeros.
                </li>
                <li>
                  Cómo <strong>presentar propuestas de mejora</strong> al resto del equipo y a tus managers.
                </li>
              </ul>
              <p>
                <small>
                  El número de sesiones necesarias para ayudarte adecuadamente depende de cada caso, pero suele ser de{" "}
                  <strong className="has-text-primary">dos a cinco sesiones</strong>.
                </small>
              </p>
              <p className="has-text-centered">
                <Button
                  title="Consigue ayuda en tu ascenso a senior"
                  href="/contact?subject=Quiero impulsar mi carrera"
                  data-tracking="level-up-cta"
                  size="small"
                >
                  Sube de nivel
                </Button>
              </p>
            </Box>

            <Box>
              <span className="icon">👩🏻‍💻</span>
              <h2 className="title">Consigue el trabajo</h2>
              <p>
                ¿Estás en uno o varios procesos de selección y necesitas ayuda para prepararlos? Déjame acompañarte.
              </p>
              <p>Qué haremos:</p>
              <ul>
                <li>
                  Practicar las preguntas típicas en <strong>entrevistas de Front-End</strong>
                </li>
                <li>
                  Programar y hablar de cómo encarar la <strong>prueba técnica</strong>
                </li>
                <li>
                  <strong>Optimización del CV</strong> y portfolio en webs de empleo y redes sociales
                </li>
              </ul>
              <p>
                <small>
                  Ten en cuenta que normalmente necesito al menos{" "}
                  <strong className="has-text-primary">tres sesiones</strong> para conocerte y darte un feedback
                  adecuado.
                </small>
              </p>
              <p className="has-text-centered">
                <Button
                  title="Contactar para ayudarte en tus entrevistas"
                  href="/contact?subject=Ayuda con entrevistas"
                  data-tracking="get-the-job-cta"
                  size="small"
                >
                  Escríbeme
                </Button>
              </p>
            </Box>
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  h2 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
  }

  h2.subtitle {
    font-weight: normal;
  }

  .icon {
    display: block;
    text-align: center;
    font-size: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default MentoringPlans;
