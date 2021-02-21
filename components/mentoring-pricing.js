import css from "styled-jsx/css";
import HireButton from "./hire-button";
import Section from "./section";

function MentoringPricing() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <h1 className="title">
            Contrata tu mentoría por <span className="has-text-primary">49€</span>
          </h1>
          <h2 className="subtitle">
            O si lo prefieres,{" "}
            <a className="has-text-primary" href="/contact">
              escríbeme
            </a>{" "}
            para hacerme preguntas, discutir detalles y decidir si soy la persona que estás buscando.
          </h2>
          <p>
            El precio indicado corresponde a <strong>una sesión de una hora de duración</strong>. IVA y otros impuestos
            aplicables no incluidos. El horario lo decidiremos según nuestra mutua disponibilidad. Si quieres saber cómo
            funciona una sesión de mentoría, puedes leer{" "}
            <a
              className="has-text-primary"
              href="/blog/como-es-una-sesion-de-mentoring-conmigo"
              title="Cómo es una sesión de mentoring con Dani de la Cruz"
            >
              este artículo
            </a>{" "}
            con algunas <strong>preguntas frecuentes</strong>.
          </p>
          <div>
            <HireButton text="Contratar mentoría" />
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  p {
    font-size: 0.9rem;
  }
`;
export default MentoringPricing;
