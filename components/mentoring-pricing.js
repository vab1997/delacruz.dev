import css from "styled-jsx/css";
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
            O si lo prefieres, escríbeme para hacer una{" "}
            <span className="has-text-primary">primera consultoría gratuita</span> para hacerme preguntas, discutir
            detalles y decidir si soy la persona que estás buscando.
          </h2>
          <p>
            El precio corresponde a una sesión de una hora de duración. El horario lo decidiremos según nuestra mutua
            disponibilidad. IVA y otros impuestos <strong>no</strong> incluidos. Si quieres saber cómo funciona una
            sesión de mentoría, puedes leer{" "}
            <a
              className="has-text-primary"
              href="/blog/como-es-una-sesion-de-mentoring-conmigo"
              title="Cómo es una sesión de mentoring con Dani de la Cruz"
            >
              este artículo
            </a>{" "}
            con algunas <strong>preguntas frecuentes</strong>.
          </p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/danidelacruz/mentoring" style={{ minWidth: '320px', height: '630px' }}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
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
