import css from "styled-jsx/css";
import Adevinta from "./assets/logos/adevinta";
import King from "./assets/logos/king";
import Tempus from "./assets/logos/tempus";
import Typeform from "./assets/logos/typeform";
import Section from "./section";
import { theme } from "../styles/theme";
import Glovo from "./assets/logos/glovo";

const logoProps = { fill: theme.colors.text, style: { margin: "0 8px" }, width: "150px" };

function Companies() {
  return (
    <Section>
      <div className="container has-text-centered">
        <h1 className="title">He trabajado para</h1>
        <div className="logos">
          <Glovo {...logoProps} />
          <Tempus {...logoProps} />
          <Adevinta {...logoProps} />
          <King {...logoProps} width="100px" />
          <Typeform {...logoProps} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </Section>
  );
}

const styles = css`
  .logos {
    align-content: center;
    justify-content: space-around;
    display: flex;
    width: 70vw;
  }

  @media screen and (max-width: 414px) {
    .logos {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 500px;
    }
  }
`;

export default Companies;
