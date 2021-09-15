import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import ProfilePicture from "./profile-picture";
import Section from "./section";

function MentoringHero() {
  return (
    <Section>
      <div id="having-a-break" className="notification">
        <div className="notify__icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M16 14.6667C15.6464 14.6667 15.3072 14.8072 15.0572 15.0573C14.8071 15.3073 14.6667 15.6465 14.6667 16.0001V21.3334C14.6667 21.687 14.8071 22.0262 15.0572 22.2762C15.3072 22.5263 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.5263 16.9428 22.2762C17.1929 22.0262 17.3333 21.687 17.3333 21.3334V16.0001C17.3333 15.6465 17.1929 15.3073 16.9428 15.0573C16.6928 14.8072 16.3536 14.6667 16 14.6667ZM16.5067 9.44008C16.182 9.30672 15.8179 9.30672 15.4933 9.44008C15.3297 9.50354 15.1801 9.59869 15.0533 9.72008C14.9356 9.84968 14.8409 9.9985 14.7733 10.1601C14.6987 10.3183 14.6622 10.4918 14.6667 10.6667C14.6656 10.8422 14.6993 11.0162 14.7656 11.1786C14.832 11.3411 14.9298 11.4888 15.0533 11.6134C15.1829 11.7312 15.3317 11.8259 15.4933 11.8934C15.6953 11.9764 15.9146 12.0085 16.1319 11.9869C16.3492 11.9653 16.5579 11.8906 16.7396 11.7695C16.9213 11.6484 17.0705 11.4845 17.174 11.2922C17.2775 11.0999 17.3322 10.8851 17.3333 10.6667C17.3284 10.3137 17.1903 9.97559 16.9467 9.72008C16.8199 9.59869 16.6703 9.50354 16.5067 9.44008ZM16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.8903 26.6667 11.828 26.0412 10.0739 24.8691C8.31979 23.697 6.95262 22.0311 6.14528 20.082C5.33795 18.133 5.12671 15.9882 5.53829 13.9191C5.94986 11.85 6.96576 9.94937 8.45752 8.45761C9.94928 6.96585 11.8499 5.94995 13.919 5.53837C15.9882 5.1268 18.1329 5.33803 20.082 6.14537C22.031 6.9527 23.6969 8.31987 24.869 10.074C26.0411 11.8281 26.6667 13.8904 26.6667 16.0001C26.6667 18.8291 25.5429 21.5422 23.5425 23.5426C21.5421 25.5429 18.829 26.6667 16 26.6667Z"
            ></path>
          </svg>
        </div>
        <div className="notify-content">
          <div className="notify__title">No disponible temporalmente</div>
          <div className="notify__text">
            Estoy tomándome un descanso y he dejado de hacer mentorías durante un tiempo indefinido. Tienes más
            información{" "}
            <a className="has-text-primary" href="/blog/me-tomo-un-descanso">
              aquí
            </a>
            .
          </div>
        </div>
      </div>
      <div className="container has-text-centered">
        <ProfilePicture width="200" height="200" />
        <h1 className="title">Mentoring profesional</h1>
        <h2 className="subtitle">
          Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
        </h2>
      </div>
      <style jsx>{styles}</style>
    </Section>
  );
}

const styles = css`
  .notification {
    box-shadow: 0 2px 26px rgb(242 201 76 / 10%);
    color: ${theme.colors.warning};
    display: flex;
    background-color: #fff;
    border: 1px solid ${theme.colors.warning};
    padding: 0.75rem;
    margin-bottom: 2rem;
  }

  .notify__icon svg {
    fill: ${theme.colors.warning};
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  .notify-content {
    color: ${theme.colors.text};
  }

  .notify__title {
    font-weight: 600;
    font-size: 1rem;
  }
`;
export default MentoringHero;
