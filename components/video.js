import css from "styled-jsx/css";
import spacing from "../components/spacing";

function Video({ url }) {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <style jsx>{styles}</style>
    </div>
  );
}

export default Video;

const styles = css`
  .video {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: ${10 * spacing.unit}px;
    position: relative;
  }

  .video iframe,
  .video object,
  .video embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media (max-width: 1024px) {
    .video {
      margin-bottom: ${7 * spacing.unit}px;
    }
  }
`;
