import css from "styled-jsx/css";
import Experience from "../components/experience";
import Layout from "../components/layout";
import ProfilePicture from "../components/profile-picture";
import Section from "../components/section";
import Skills from "../components/skills";
import spacing from "../styles/spacing";
import Video from "../components/video";
import { theme } from "../styles/theme";

function Home() {
  return (
    <Layout title="Sobre mi">
      <div className="hero container">
        <div className="hero-picture">
          <ProfilePicture width={200} height={200} />
        </div>
      </div>

      <Section>
        <div className="container">
          <h1 className="title">Soy Dani de la Cruz</h1>
          <h2>Ingeniero de software y mentor profesional</h2>
          <p>
            Llevo desarrollando productos con tecnologías web desde el 2006. Cuando finalicé mis estudios de ingeniería
            de telecomunicaciones descubrí que lo que más me gustó de la carrera fueron las asignaturas de programación.
            Así que busqué mi primera oportunidad profesional en el mundo de la consultoría. Años más tarde, tuve el
            privilegio de poder trabajar en grandes empresas como{" "}
            <a href="https://www.adevinta.com/es/spain/" title="Adevinta Spain" target="_blank" rel="nofollow noopener">
              Adevinta
            </a>
            ,{" "}
            <a href="https://www.typeform.com/" title="Typeform" target="_blank" rel="nofollow noopener">
              Typeform
            </a>
            ,{" "}
            <a href="https://king.com/es" title="King" target="_blank" rel="nofollow noopener">
              King
            </a>{" "}
            o{" "}
            <a href="https://www.tempus.com/" title="Tempus" target="_blank" rel="nofollow noopener">
              Tempus
            </a>
            , desempeñando diferentes roles en cada una de ellas. Actualmente trabajo para{" "}
            <a href="https://glovoapp.com" title="Glovo" target="_blank" rel="nofollow noopener">
              Glovo
            </a>
            .
          </p>

          <p>
            Me encanta codificar y entregar software con la calidad adecuada y creo que es importante equilibrar las
            necesidades empresariales con los requisitos de ingeniería.
          </p>

          <p>
            Estoy acostumbrado a transmitir mis conocimientos y ayudar a mis compañeros de trabajo a desarrollar sus
            propias competencias. Me encanta aprender y rodearme de gente más inteligente o con más experiencia que yo,
            que me haga mejorar constantemente a nivel personal y profesional.
          </p>

          <p>
            Creo firmemente en la mejora continua. Por eso siempre busco oportunidades para aprender y aceptar nuevos
            desafíos. Disfruto trabajando en productos innovadores que se ajusten a las necesidades de los usuarios.
          </p>
        </div>
      </Section>

      <div className="container">
        <div className="row">
          <div className="column">
            <Experience />
          </div>
          <div className="column">
            <Skills />
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="is-medium">Charlas</h1>
        <div className="talks">
          <Video
            url="https://www.youtube.com/embed/u7UzYB3PBD4?start=840"
            title="La leyenda de l@s fullstack developers"
            description="Open Source Weekends, 13 de febrero de 2021"
          />
          <Video
            url="https://www.youtube.com/embed/DPlUm5kL_8g"
            title="Round table: Development in IT"
            description="Docplanner tech, 16 de octubre de 2020"
          />
          <Video
            url="https://www.youtube.com/embed/QHzu4hxAhrc"
            title="React Hooks: 1 year later"
            description="StayAtHomeConf, 29 de marzo de 2020"
          />
          <Video
            url="https://www.youtube.com/embed/67D0eJ9oqfo"
            title="Construye tu propio Virtual DOM"
            description="Software Crafters BCN, 6 de octubre de 2019"
          />
          <Video
            url="https://www.youtube.com/embed/kRI4IjWHxxw"
            title="Promueve una comunidad de práctica en tu empresa"
            description="Conferencia Agile Spain (CAS), 10 de noviembre de 2017"
          />
        </div>
      </div>
      <style jsx>{styles}</style>
    </Layout>
  );
}

const styles = css`
  a {
    color: ${theme.colors.textPrimary};
  }

  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-picture {
    max-width: 80vw;
    max-height: 50vh;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .talks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${5 * spacing.unit}px;
  }

  @media (max-width: 1024px) {
    .row {
      flex-direction: column;
    }

    .column:last-child {
      margin-top: ${10 * spacing.unit}px;
    }

    .talks {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Home;
