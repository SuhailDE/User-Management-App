function Navbar({ totalUsers, favoriteCount, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">UserHub</h2>

        <div className="nav-links">
          <button
            className={activeTab === "users" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("users")}
          >
            Users ({totalUsers})
          </button>

          <button
            className={activeTab === "favorites" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("favorites")}
          >
            Favorites ({favoriteCount})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;