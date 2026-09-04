export const projects = [
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
export const projectFilter = ["All", "In Progress", "Completed"];

export const completed = projects.filter(
  (project) => project.status === "Completed"
).length;

export const getFilteredProjects = (projects, filter) => {
  return filter === "All"
    ? projects
    : projects.filter((project) => project.status === filter);
};
export const getTotalValue = (filteredProjects) => {
  return filteredProjects.reduce((total, project) => total + project.price, 0);
};

export const totalAll = projects.reduce(
  (total, project) => total + project.price,
  0
);
