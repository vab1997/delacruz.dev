import Image from "next/image";
import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import Box from "./box";
import Section from "./section";
import spacing from "../styles/spacing";
import Glovo from "./assets/logos/glovo";
import Tempus from "./assets/logos/tempus";
import Typeform from "./assets/logos/typeform";
import King from "./assets/logos/king";
import Adevinta from "./assets/logos/adevinta";

const logoProps = { fill: theme.colors.text, style: { margin: "0 8px" }, width: "150px" };

function Experience() {
  return (
    <Section centered={false}>
      <h1 className="is-medium">Mi experiencia</h1>
      <div className="timeline-wrapper">
        <div className="timeline">
          <article className="timeline-item">
            <Box
              media={
                <a title="Glovo" target="_blank" rel="nofollow noopener" href="https://glovoapp.com">
                  <Glovo {...logoProps} />
                </a>
              }
            >
              <p className="heading">Desde diciembre 2020</p>
              <h3>Senior Frontend Engineer en Glovo</h3>
              <ul>
                <li>
                  Desarrollo de plataforma de gestión de clientes y contenidos con{" "}
                  <a href="https://vuejs.org/" title="Vue.js" rel="noopener nofollow">
                    Vue.js
                  </a>
                </li>
              </ul>
            </Box>
          </article>

          <article className="timeline-item">
            <Box
              media={
                <a title="Tempus Labs" target="_blank" rel="nofollow noopener" href="https://tempus.com">
                  <Tempus {...logoProps} />
                </a>
              }
            >
              <p className="heading">De octubre 2019 a noviembre 2020</p>
              <h3>Senior Full Stack Engineer en Tempus</h3>
              <ul>
                <li>
                  Participación en el equipo de desarrollo desde el prototipo hasta el lanzamiento de{" "}
                  <a href="https://www.tempus.com/tempus-one/" target="_blank" rel="nofollow noopener">
                    Tempus One
                  </a>
                  , un dispositivo portátil habilitado por voz e inteligencia artificial.
                </li>
                <li>
                  Desarrollo de aplicaciones web con{" "}
                  <a
                    title="React"
                    rel="nofollow noopener"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    React
                  </a>{" "}
                  y aplicaciones móviles con{" "}
                  <a
                    title="React Native"
                    rel="nofollow noopener"
                    href="https://reactnative.dev/"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    React Native
                  </a>
                  .
                </li>
                <li>
                  Desarrollo de servicios y microservicios con{" "}
                  <a
                    title="NestJS"
                    rel="nofollow noopener"
                    href="https://nestjs.com/"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    NestJS
                  </a>{" "}
                  y{" "}
                  <a
                    title="PostgreSQL"
                    rel="nofollow noopener"
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    PostgreSQL
                  </a>
                  .
                </li>
                <li>
                  Despliegue de infraestructura en{" "}
                  <a
                    title="Google Cloud Platform"
                    rel="nofollow noopener"
                    href="https://cloud.google.com/"
                    target="_blank"
                  >
                    Google Cloud Platform
                  </a>{" "}
                  con{" "}
                  <a title="Terraform" rel="nofollow noopener" href="https://www.terraform.io/" target="_blank">
                    Terraform
                  </a>
                  .
                </li>
              </ul>
            </Box>
          </article>

          <article className="timeline-item">
            <Box
              media={
                <a title="King" target="_blank" rel="nofollow noopener" href="https://king.com">
                  <King {...logoProps} />
                </a>
              }
            >
              <p className="heading">De marzo 2018 a julio 2019</p>
              <h3>Senior Software Engineer at King</h3>
              <ul>
                <li>
                  <strong>Mentoría</strong> a compañeros y compañeras del departamento que deseaban mejorar en su
                  especialidad o crecer asumiendo otras competencias.
                </li>
                <li>
                  Diseño e implementación de plataforma para orquestación de campañas en videojuegos de la compañía.
                </li>
              </ul>
            </Box>
          </article>

          <article className="timeline-item">
            <Box
              media={
                <a href="https://typeform.com" title="Typeform" target="_blank" rel="nofollow noopener">
                  <Typeform {...logoProps} />
                </a>
              }
            >
              <p className="heading">De abril 2017 a octubre 2018</p>
              <h3>Tech Lead en Typeform</h3>
              <ul>
                <li>
                  <strong>Mentoría</strong> a compañeros de equipo en desarrollo de software guiado por tests (
                  <a
                    href="https://www.jamesshore.com/Agile-Book/test_driven_development.html"
                    title="Test-Driven development"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    TDD
                  </a>
                  ) y arquitectura de software.
                </li>
                <li>Liderazgo de equipos de desarrollo.</li>
                <li>
                  Facilitación y construcción de una comunidad de Front-End basada en el aprendizaje y en compartir el
                  conocimiento.
                </li>
                <li>
                  Desarrollo de la nueva versión del producto desde el punto de vista tecnológico, pero también de
                  diseño y marca.
                </li>
              </ul>
            </Box>
          </article>

          <article className="timeline-item">
            <Box
              media={
                <a href="https://www.adevinta.com/es/spain/" title="Adevinta" target="_blank" rel="nofollow noopener">
                  <Adevinta {...logoProps} />
                </a>
              }
            >
              <p className="heading">De 2010 a 2016</p>
              <h3>Tech Lead en Adevinta Spain</h3>
              <ul>
                <li>
                  Liderazgo y ejecución de la transformación del Front-End de la compañía, de una plataforma monolítica
                  en .NET hacia una Single-Page Application (SPA) desacoplada del Back-End implementada con React.js y
                  basada en{" "}
                  <a
                    href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                    title="Arquitectura Hexagonal"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Arquitectura Hexagonal
                  </a>
                  .
                </li>
                <li>
                  Liderazgo de uno de los equipos de producto del portal inmobiliario{" "}
                  <a href="https://fotocasa.es" target="_blank" rel="nofollow noopener">
                    Fotocasa
                  </a>
                  .
                </li>
                <li>
                  Diseño e implementación de motor de búsquedas Near Real Time (NRT) con{" "}
                  <a href="https://lucene.apache.org/core/" title="Lucene" target="_blank" rel="nofollow noopener">
                    Lucene
                  </a>{" "}
                  para{" "}
                  <a href="https://www.inmofactory.com/" title="Inmofactory" target="_blank" rel="nofollow noopener">
                    Inmofactory
                  </a>
                  , el CRM inmobiliario del grupo en España.
                </li>
              </ul>
            </Box>
          </article>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Section>
  );
}

const styles = css`
  .heading {
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .timeline-wrapper {
    position: relative;
  }

  .timeline:before {
    content: "";
    position: absolute;
    width: ${spacing.unit}px;
    background-color: ${theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 0;
  }

  .timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
  }

  .timeline-item::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid ${theme.colors.boxBg};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${theme.colors.boxBg} transparent transparent;
  }

  .timeline-item::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: -9px;
    background-color: ${theme.colors.background};
    border: 4px solid ${theme.colors.primary};
    top: 20px;
    border-radius: 50%;
    z-index: 1;
  }

  li,
  p {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    .wrapper {
      padding: 0;
    }

    .timeline-item {
      padding-right: 0;
    }
  }
`;

export default Experience;
