const Sidebar = ({ onItemClick }) => {
  const handleClick = (page) => {
    if (onItemClick) {
      onItemClick(page);
    }
  };

  return (
    <nav className="sidebar-nav" aria-label="Main navigation">
      <button
        type="button"
        className="sidebar-item active"
        onClick={() => handleClick("Dashboard")}
      >
        <span>▣</span>
        Dashboard
      </button>

      <button
        type="button"
        className="sidebar-item"
        onClick={() => handleClick("Projects")}
      >
        <span>▣</span>
        Projects
      </button>

      <button
        type="button"
        className="sidebar-item"
        onClick={() => handleClick("Completed")}
      >
        <span>✓</span>
        Completed
      </button>

      <button
        type="button"
        className="sidebar-item"
        onClick={() => handleClick("Settings")}
      >
        <span>⚙</span>
        Settings
      </button>
    </nav>
  );
};

export default Sidebar;
