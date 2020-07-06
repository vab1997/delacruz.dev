import css from "styled-jsx/css";

function Button({ children, href, title, ...props }) {
  return (
    <>
      <a href={href} title={title} {...props}>
        {children}
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-swup-page="about"
        >
          <path
            d="M1.51351 0.000244141L0 1.32543L4.97297 5.6796L0 10.0338L1.51351 11.3589L8 5.6796L1.51351 0.000244141Z"
          ></path>
        </svg>
      </a>
      <style jsx>{styles}</style>
    </>
  );
}

const primary = "#ec008c";

const styles = css`
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 223.4%;
    display: block;
    padding: 5px 15px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    transition: all 0.3s ease-out;
    border: 1px solid #ec008c;
    position: relative;
    color: #ec008c;
  }

  a:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ec008c;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition: transform 0.4s ease-out;
  }

  a:hover:before {
    transform: scaleY(1);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a:hover {
    opacity: 1;
    color: #ffffff;
  }

  a svg {
    width: 0.5rem;
    margin-left: 0.9375rem;
    display: inline-block;
    vertical-align: middle;
    fill: #ec008c;
    animation: arrow 2.5s infinite;
  }

  a:hover svg {
    fill: #ffffff;
  }

  @keyframes arrow {
    0%,
    100% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(0px);
    }
  }
`;

export default Button;
