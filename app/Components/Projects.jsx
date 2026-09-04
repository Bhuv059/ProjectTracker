"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  projects,
  getFilteredProjects,
  getTotalValue,
  projectFilter,
} from "../data/index.ts";

const Projects = ({ initialFilter = "All", currentPage }) => {
  const [filter, setFilter] = useState(initialFilter);
  const [activeCard, setActiveCard] = useState(null);
  const filteredProjects = getFilteredProjects(projects, filter);
  const totalValue = getTotalValue(filteredProjects);
  return (
    <>
      <div className="projects-heading">
        <div>
          <h2>Projects</h2>

          <span>
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {currentPage === "Completed" ? (
          <></>
        ) : (
          <>
            <div
              className="filters"
              role="tablist"
              aria-label="Filter projects by status"
            >
              {projectFilter.map((status) => (
                <button
                  key={status}
                  type="button"
                  className={filter === status ? "active" : ""}
                  onClick={() => setFilter(status)}
                  role="tab"
                  aria-selected={filter === status}
                >
                  {status}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <section className="cards" aria-live="polite">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            className={`project-card ${
              activeCard === project.id ? "card-active" : ""
            }`}
            onClick={() => setActiveCard(project.id)}
          />
        ))}
      </section>

      {filter !== "All" && (
        <div className="filtered-total">
          Showing <strong>€{totalValue.toLocaleString()}</strong> in{" "}
          {filter.toLowerCase()} work.
        </div>
      )}
    </>
  );
};

export default Projects;
