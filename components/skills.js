function Skills() {
  return (
    <section
      id="skills"
      className="section has-text-centered has-background-light is-medium"
    >
      <div className="container is-narrow">
        <div className="content">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <article className="tile is-child has-background-warning section">
                <p className="title has-text-grey-dark">Mis habilidades</p>
                <p className="subtitle has-text-grey-dark">
                  Las cosas que se me dan mejor
                </p>
              </article>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <nav className="panel">
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-code" aria-hidden="true"></i>
                    </span>
                    Front end development
                    <div className="tags">
                      <span className="tag">HTML</span>
                      <span className="tag">CSS</span>
                      <span className="tag">JS</span>
                      <span className="tag">Typescript</span>
                      <span className="tag">ReactJS</span>
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-server" aria-hidden="true"></i>
                    </span>
                    Back end development
                    <div className="tags">
                      <span className="tag">REST</span>
                      <span className="tag">NodeJS</span>
                      <span className="tag">SQL</span>
                      <span className="tag">MongoDB</span>
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-undo-alt" aria-hidden="true"></i>
                    </span>
                    Agile mindset
                    <div className="tags">
                      <span className="tag">XP</span>
                      <span className="tag">Scrum</span>
                      <span className="tag">Kanban</span>
                      <span className="tag">Lean</span>
                      <span className="tag">TDD</span>
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-magic" aria-hidden="true"></i>
                    </span>
                    Testing Automation
                    <div className="tags">
                      <span className="tag">Mocha</span>
                      <span className="tag">Jest</span>
                      <span className="tag">Puppeteer</span>
                      <span className="tag">CI</span>
                      <span className="tag">CD</span>
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-comments" aria-hidden="true"></i>
                    </span>
                    Behavioural skills
                    <div className="tags">
                      <span className="tag">Feedback</span>
                      <span className="tag">Emotional Intelligence</span>
                      <span className="tag">Public Speaking</span>
                      <span className="tag">Coaching</span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
