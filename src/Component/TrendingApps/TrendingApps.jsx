import React, { useState, useEffect } from 'react';
import './TrendingApps.css';
import { useNavigate, useLocation } from "react-router-dom";
import appNoFine from '../../pic/App-Error.png';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Show all apps on /apps route
  useEffect(() => {
    if (location.pathname === "/apps") {
      setShowAll(true);
    }
  }, [location.pathname]);

  // Load data from JSON
  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error loading apps:", err));
  }, []);

  // Search filter
  const filteredApps = apps.filter((app) => {
    const terms = searchTerm.toLowerCase().split(" ").filter(Boolean);
    const name = app.name || "";
    const details = app.details || "";
    return terms.every(term =>
      name.toLowerCase().includes(term) ||
      details.toLowerCase().includes(term)
    );
  });

  const visibleApps = showAll ? filteredApps : filteredApps.slice(0, 8);

  const handleShowAll = () => {
    setShowAll(true);
    navigate("/apps");
  };

  return (
    <section className="apps-section">
      <h2 className="apps-title">
        {showAll ? "Our All Applications" : "Trending Apps"}
      </h2>
      <p className="apps-subtitle">
        {showAll
          ? "Explore All Apps on the Market developed by us. We code for Millions"
          : "Explore All Trending Apps on the Market developed by us"}
      </p>

      {/* Search Bar */}
      {showAll && (
        <div className="search-bar">
          <span className="app-count">({filteredApps.length}) Apps Found</span>
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Apps Grid */}
      <div className="apps-grid">
        {visibleApps.length > 0 ? (
          visibleApps.map((app, index) => (
            <div
              key={index}
              className="app-card"
              onClick={() => navigate(`/app/${app.id}`)} // 🆕 click to go details
            >
              <div
                className="app-image"
                style={{
                  backgroundImage: `url(${app.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="app-name">{app.name || "Undefined App"}</p>
              <div className="app-rating-download">
                <span className="downloads"> 📥 {app.downloads || 0}</span>
                <span className="rating"> ⭐ {app.rating || 0}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-apps">
            <img className='no-apps-img' src={appNoFine} alt="No apps found" />
          </div>
        )}
      </div>

      {/* Show All Button */}
      {!showAll && filteredApps.length > 8 && (
        <button className="show-btn" onClick={handleShowAll}>
          Show All
        </button>
      )}
    </section>
  );
};

export default TrendingApps;
