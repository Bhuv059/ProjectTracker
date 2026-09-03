"use client";

import { useMemo, useState } from "react";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard";
import TotalProjectValue from "./Components/TotalProjectValue";
import IntroSection from "./Components/IntroSection";
const projects = [
  {
    name: "Admin Dashboard",
    client: "Papertrail Studio",
    price: 800,
    status: "In Progress",
    icon: "chart",
    color: "blue",
    progress: 65,
    deadline: "Sep 18, 2024",
  },
  {
    name: "Portfolio",
    client: "Maya Chen",
    price: 300,
    status: "Completed",
    icon: "portfolio",
    color: "purple",
    completed: "Aug 16, 2024",
  },
  {
    name: "Restaurant",
    client: "The Olive Table",
    price: 500,
    status: "Completed",
    icon: "fork",
    color: "orange",
    completed: "Aug 28, 2024",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.status === filter),
    [filter]
  );
  const totalValue = filteredProjects.reduce(
    (total, project) => total + project.price,
    0
  );
  const totalAll = projects.reduce(
    (total, project) => total + project.price,
    0
  );
  const completed = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  return (
    <main>
      <section className="app-shell">
        <Header />

        <div className="content">
          <IntroSection />

          <section className="overview" aria-label="Project overview">
            <TotalProjectValue
              totalValue={totalValue}
              totalAll={totalAll}
              projectLength={projects.length}
              projectsCompleted={completed}
            />
          </section>

          <div className="projects-heading">
            <div>
              <h2>Projects</h2>
              <span>
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div
              className="filters"
              role="tablist"
              aria-label="Filter projects by status"
            >
              {["All", "In Progress", "Completed"].map((status) => (
                <button
                  key={status}
                  className={filter === status ? "active" : ""}
                  onClick={() => setFilter(status)}
                  role="tab"
                  aria-selected={filter === status}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <section className="cards" aria-live="polite">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </section>

          {filter !== "All" && (
            <div className="filtered-total">
              Showing <strong>€{totalValue.toLocaleString()}</strong> in{" "}
              {filter.toLowerCase()} work.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
