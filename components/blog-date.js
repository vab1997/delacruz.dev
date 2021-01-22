import css from "styled-jsx/css";
import { theme } from "../styles/theme";

const options = { year: 'numeric', month: 'long', day: 'numeric' };

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString('es-ES', options);
}

export default function BlogDate(props) {
  if (!props) return null;
  return (
    <>
      <time dateTime={new Date(props.date).toISOString()} className="date">
        {reformatDate(props.date)}
      </time>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .date {
    align-items: center;
    background-color: ${theme.colors.dateBg};
    border-radius: 4px;
    color: ${theme.colors.text};
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }
`;
