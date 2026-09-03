function ProjectIcon({ type }) {
  switch (type) {
    case "fork":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 3v8" />
          <path d="M4 3v5a2 2 0 0 0 4 0V3" />
          <path d="M6 11v10" />
          <path d="M16 3v18" />
          <path d="M16 3c3 1 4 4 4 7h-4" />
        </svg>
      );

    case "chart":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 2 5-6" />
        </svg>
      );

    case "portfolio":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4V2h8v2" />
          <path d="M3 10h18" />
          <path d="M10 10v3h4v-3" />
        </svg>
      );

    default:
      return null;
  }
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`icon-tile ${project.color}`}>
        <ProjectIcon type={project.icon} />
      </div>

      <div className="card-title-row">
        <div>
          <h3>{project.name}</h3>
          <p>{project.client}</p>
        </div>

        <button className="more" aria-label={`Options for ${project.name}`}>
          •••
        </button>
      </div>

      <div className="card-divider" />

      <div className="card-details">
        <div>
          <span>PROJECT VALUE</span>
          <strong>€{project.price}</strong>
        </div>

        <div>
          <span>STATUS</span>

          <b
            className={`status ${
              project.status === "Completed" ? "completed" : "progress"
            }`}
          >
            <i />
            {project.status}
          </b>
        </div>
      </div>

      {project.progress ? (
        <div className="progress-area">
          <div>
            <span>Project progress</span>
            <strong>{project.progress}%</strong>
          </div>

          <div className="progress-track">
            <span style={{ width: `${project.progress}%` }} />
          </div>

          <p>Due {project.deadline}</p>
        </div>
      ) : (
        <p className="completed-date">
          <span>✓</span>
          Delivered {project.completed}
        </p>
      )}
    </article>
  );
}
