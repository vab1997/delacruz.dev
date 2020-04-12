function MentoringIntro() {
  return (
    <section className="section has-text-centered is-medium mentoring-intro">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <span className="icon is-large has-text-primary is-spaced">
              <i className="fas fa-3x fa-chalkboard-teacher"></i>
            </span>
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile has-text-white">
              ¿Quieres dar un salto en tu carrera desarrollando software?
            </h1>
          </div>
        </div>
      </div>
      <a
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          backgroundColor: "none",
          color: "white",
          textDecoration: "none",
          padding: "4px 6px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
          fontSize: "12px",
          fontWeight: "bold",
          lineHeight: 1.2,
          display: "inline-block",
          borderRadius: "3px",
        }}
        href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Samuel Zeller"
      >
        <span style={{ display:'inline-block', padding:'2px 3px'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "12px",
              width: "auto",
              position: "relative",
              verticalAlign: "middle",
              top: "-2px",
              fill: "white",
            }}
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </span>
        <span style={{ display: "inline-block", padding: "2px 3px" }}>
          Samuel Zeller
        </span>
      </a>
    </section>
  );
}

export default MentoringIntro;
