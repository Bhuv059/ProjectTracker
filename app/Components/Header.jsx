const Header = () => {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">
          <span />
        </div>
        <span className="brand-name">Folio</span>
      </div>
      <button className="profile" aria-label="Open account menu">
        BB
      </button>
    </header>
  );
};

export default Header;
