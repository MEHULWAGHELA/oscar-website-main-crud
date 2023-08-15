import { Link } from "react-router-dom";
import "./style/sidebar.css";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar p-2" style={{ height: "100vh" }}>
      
      <h3>
        <Link to="/slidercrud" className="text-white " href="#">
          Slider
        </Link>
      </h3>
      <h3>
        <Link to="/aboutcrud" className="text-white " href="#">
          About
        </Link>
      </h3>
      <h3>
        <Link to="/adminformcrud" className="text-white " href="#">
          AdminForm
        </Link>
      </h3>
      <h3>
        <Link to="/formcrud" className="text-white " href="#">
          Form
        </Link>
      </h3>
      <h3>
        <Link to="/gallerycrud" className="text-white " href="#">
          Gallery
        </Link>
      </h3>
      <h3>
        <Link to="/coursescrud" className="text-white " href="#">
          Courses
        </Link>
      </h3>
      <h3>
        <Link to="/informationcrud" className="text-white " href="#">
          Information
        </Link>
      </h3>
      <h3>
        <Link to="/learncrud" className="text-white " href="#">
          Learn
        </Link>
      </h3>
      <h3>
        <Link to="/partnercrud" className="text-white " href="#">
          Partner
        </Link>
      </h3>
      <h3>
        <Link to="/trainingcrud" className="text-white " href="#">
          Training
        </Link>
      </h3>
      <h3>
        <Link to="/placementcrud" className="text-white " href="#">
          Placement
        </Link>
      </h3>
    </div>
  );
}

export default Sidebar;
