import css from "styled-jsx/css";
import { unit } from "../styles/spacing";
import ProudGuy from "./assets/proud-guy";
import Box from "./box";
import HireButton from "./hire-button";
import Section from "./section";

function MentoringBenefits() {
  return (
    <>
      <Section diagonal gradient="blue" id="mentoring-benefits">
        <div className="container">
          <div className="stackable">
            <div className="row">
              <div className="column">
                <Box>
                  <h1 className="box-title">¿Cómo puede ayudarte tener un mentor?</h1>
                  <p>
                    He aprendido un par de cosas durante mi carrera como programador, y me comprometo a ayudarte a hacer
                    el mejor uso de ese conocimiento compartiéndolo contigo.
                  </p>
                  <p>
                    Si me dejas ser tu mentor, puedo ayudarte a <strong>mejorar tus habilidades técnicas</strong>,{" "}
                    <strong>acompañarte en tu búsqueda de empleo</strong> o{" "}
                    <strong>decidir cuál debería ser el próximo paso en tu carrera.</strong>
                  </p>
                  <div className="has-text-centered">
                    <HireButton text="Contrátame" />
                  </div>
                </Box>
              </div>
              <div className="column">
                <div className="picture">
                  <ProudGuy width="90%" height="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .box-title {
    font-size: 1.5rem;
  }

  .stackable {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 0;
    margin: -1rem;
  }

  .row {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: inherit;
    align-items: stretch;
    width: 100% !important;
    padding: 1rem 0;
  }

  .column {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    vertical-align: top;
    width: 50%;
  }

  @media only screen and (max-width: 767px) {
    .row {
      flex-direction: column;
    }

    .column {
      width: 100%;
    }

    .column:last-child {
      margin-top: ${10 * unit}px;
    }
  }
`;

export default MentoringBenefits;
