"use client";

import { useState } from "react";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Projects from "./Components/Projects";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const handleSidebarClick = (page) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <main>
      <section className="app-shell">
        <Header />

        {/* Hamburger button - tablet and mobile only */}
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile/Tablet overlay */}
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={handleSidebarClose}
            aria-hidden="true"
          />
        )}

        <div className="content">
          {/* Desktop Sidebar */}
          <aside className="sidebar" aria-label="Sidebar">
            <Sidebar onItemClick={handleSidebarClick} />
          </aside>

          {/* Mobile/Tablet Sidebar */}
          <aside
            className={`mobile-sidebar ${
              sidebarOpen ? "mobile-sidebar-open" : ""
            }`}
            aria-label="Mobile navigation"
            aria-hidden={!sidebarOpen}
          >
            <div className="mobile-sidebar-header">
              <span>Menu</span>

              <button
                type="button"
                className="mobile-sidebar-close"
                onClick={handleSidebarClose}
                aria-label="Close navigation menu"
              >
                ×
              </button>
            </div>

            <Sidebar onItemClick={handleSidebarClick} />
          </aside>

          <div className="main-content" aria-label="Main content">
            {currentPage === "Dashboard" && (
              <>
                <Dashboard />
              </>
            )}

            {currentPage === "Projects" && (
              <section>
                <h1>Projects</h1>
                <p>All projects will be displayed here.</p>
                <Projects initialFilter="All" currentPage="Projects" />
              </section>
            )}

            {currentPage === "Completed" && (
              <section>
                <h1>Completed Projects</h1>
                <p>Completed projects will be displayed here.</p>
                <Projects initialFilter="Completed" currentPage="Completed" />
              </section>
            )}

            {currentPage === "Settings" && (
              <section>
                <h1>Settings</h1>
                <p>Settings will be displayed here.</p>
              </section>
            )}
          </div>

          {/* <div className="main-content" aria-label="Main content">
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
          </div> */}
        </div>
      </section>
    </main>
  );
}
