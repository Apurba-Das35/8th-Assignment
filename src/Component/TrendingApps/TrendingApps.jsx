import React from 'react';
import { useState, useEffect } from "react";
import './TrendingApps.css'

const TrendingApps = () => {

    const [apps, setApps] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // JSON file থেকে data load করা
        fetch("/public/appData.json")
            .then((res) => res.json())
            .then((data) => setApps(data))
            .catch((err) => console.error("Error loading apps:", err));
    }, []);

    // Search এর সাথে matching apps
    const filteredApps = apps.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // প্রথমে ৮টা data দেখাবে , showAll true হলে সব দেখাবে
    const visibleApps = showAll ? filteredApps : filteredApps.slice(0, 8);

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

            <div className="apps-grid">
                {visibleApps.length > 0 ? (
                    visibleApps.map((app, index) => (
                        <div key={index} className="app-card">
                            <div
                                className="app-image"
                                style={{
                                    backgroundImage: `url(${app.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <p className="app-name">{app.name}</p>
                            <p className="app-details">{app.details}</p>
                            <div className="app-meta">
                                <span className="downloads"> 📥 {app.downloads}</span>
                                <span className="rating"> ⭐ {app.rating}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No apps found.</p>
                )}
            </div>

            {/* Show All Button */}
            {!showAll && filteredApps.length > 8 && (
                <button className="show-btn" onClick={() => setShowAll(true)}>
                    Show All
                </button>
            )}
        </section>

    );
};

export default TrendingApps;