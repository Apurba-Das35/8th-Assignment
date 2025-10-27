import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./AppDetails.css";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("../../../public/AppDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedApp = data.find((item) => item.id === parseInt(id));
        setApp(selectedApp);
      });
  }, [id]);

  if (!app) {
    return <div className="loading">Loading app details...</div>;
  }

  return (
    <section className="app-details">
      <div className="details-header">
        <img src={app.image} alt={app.name} className="details-img" />
        <div>
          <h2>{app.name}</h2>
          <p className="developer">Developed by {app.developer || "Unknown"}</p>
          <div className="stats">
            <span> 📥 {app.downloads} Downloads</span>
            <span> ⭐ {app.rating} Rating</span>
            <span> 💬 {app.reviews || "N/A"} Reviews</span>
          </div>
          <button className="install-btn">Install Now ({app.size || "200MB"})</button>
        </div>
      </div>

      <div className="details-body">
        <h3>Description</h3>
        <p>{app.description}</p>
      </div>

      <Link to="/apps" className="back-link">← Back to All Apps</Link>
    </section>
  );
};

export default AppDetails;
