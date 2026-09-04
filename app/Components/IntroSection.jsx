import Statistics from "./Statistics";

const IntroSection = ({ totalAll, projectLength, projectsCompleted }) => {
  return (
    <>
      <div className="intro-row">
        <div>
          <p className="eyebrow">MY WORKSPACE</p>
          <h1>Freelance Projects</h1>
          <p className="subtitle">
            Keep track of every project, from first brief to final delivery.
          </p>
        </div>
        <button className="new-project">
          <span>+</span> New project
        </button>
      </div>
      <div>
        <section className="overview" aria-label="Project overview">
          <Statistics
            totalAll={totalAll}
            projectLength={projectLength}
            projectsCompleted={projectsCompleted}
          />
        </section>
      </div>
    </>
  );
};

export default IntroSection;
