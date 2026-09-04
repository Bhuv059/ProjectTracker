"use client";
import IntroSection from "./IntroSection";
import { useState } from "react";

import {
  projects,
  getFilteredProjects,
  getTotalValue,
  totalAll,
  completed,
} from "../data/index.ts";
import Projects from "./Projects.jsx";

const Dashboard = () => {
  const filteredProjects = getFilteredProjects(projects, "All");
  const totalValue = getTotalValue(filteredProjects);
  return (
    <>
      <IntroSection
        totalValue={totalValue}
        totalAll={totalAll}
        projectLength={projects.length}
        projectsCompleted={completed}
      />
      <Projects />
    </>
  );
};

export default Dashboard;
