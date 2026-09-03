const TotalProjectValue = ({
  totalValue,
  totalAll,
  projectLength,
  projectsCompleted,
}) => {
  return (
    <>
      <div className="overview-copy">
        <p>Total project value</p>
        <strong>€{totalAll.toLocaleString()}</strong>
        <span>
          <i /> Across {projectLength} active projects
        </span>
      </div>
      <div className="overview-stat">
        <div className="mini-ring">
          <span>
            {projectsCompleted}/{projectLength}
          </span>
        </div>
        <div>
          <b>Projects delivered</b>
          <p>{projectsCompleted} complete, 1 in progress</p>
        </div>
      </div>
    </>
  );
};

export default TotalProjectValue;
