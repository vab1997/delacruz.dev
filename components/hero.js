import Image from 'next/image';
import css from "styled-jsx/css";
import Button from "./button";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <svg height="0" width="0">
              <defs>
                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                  <path d="M0.75815095,0.0579477769 C0.879893708,0.187288937 0.902165272,0.677587654 0.799370955,0.785996249 C0.627963035,0.966765889 0.26163708,0.91434951 0.111342491,0.755791573 C-0.0332137967,0.603287436 -0.035795248,0.382887577 0.0965066612,0.173955315 C0.200239457,0.0101396315 0.648923894,-0.0580965318 0.75815095,0.0579477769 Z"></path>
                </clipPath>
              </defs>
            </svg>
            <Image
              src="/images/profile/me.jpg"
              className='profile-picture'
              alt="Dani de la Cruz"
              width='500'
              height='500'
              loading='eager'
            />
          </div>
          <div className="hero-body">
            <div className="hero-content">
              <p className="greet">
                ¡Hola! <span className="wave">👋</span>
              </p>
              <h1 className="title">Soy Dani.</h1>
              <h2 className="subtitle">
                He trabajado como <strong>ingeniero de software</strong> durante más de una década y quiero ser tu{" "}
                <strong className="has-text-primary">mentor</strong> para ayudarte a dar un{" "}
                <strong>salto en tu carrera</strong>.
              </h2>
              <div className="buttons">
                <Button href="/me" className="button" outlined>
                  Sobre mí
                </Button>
                <Button href="/mentoring" className="button">
                  Mentoring
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .hero-container {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    height: auto;
    justify-content: center;
    min-height: 70vh;
  }

  .hero-body {
    width: 50vw;
    padding: 1rem 100px 1rem 0;
    display: block;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }

  .hero-image {
    width: 30vw;
  }

  .buttons {
    margin: 20px 0;
  }

  .greet {
    margin-bottom: 0;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .wave {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;
    font-size: 1.3em;
    margin-left: 5px;
  }

  @media (max-width: 767px) {
    .hero-container {
      flex-direction: column;
      height: auto;
    }

    .hero-body,
    .hero-image {
      width: 100%;
    }

    .hero-body {
      padding: 20px;
    }

    .hero-image {
      max-height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title,
    .subtitle {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 414px) {
    .hero-image img {
      object-fit: cover;
    }

    .title {
      font-size: 1.9em;
    }

    .subtitle,
    .greet {
      font-size: 1.2em;
    }
  }

  @media (max-width: 360px) {
    .subtitle,
    .greet {
      font-size: 1.1em;
    }
  }

  @media (max-width: 320px) {
    .title {
      font-size: 1.5em;
    }

    .subtitle,
    .greet {
      font-size: 1em;
    }
  }
`;

export default Hero;
