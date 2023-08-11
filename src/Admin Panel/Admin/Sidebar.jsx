import { Link } from "react-router-dom";
import "./style/sidebar.css";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar p-3" style={{ height: "100vh" }}>
      <h3>
        <Link to="/admin/slider" className="text-white " href="#">
          Slider
        </Link>
      </h3>
      <h3>
        <Link to="/admin/about" className="text-white " href="#">
          About
        </Link>
      </h3>
      <h3>
        <Link to="/admin/adminform" className="text-white " href="#">
          AdminForm
        </Link>
      </h3>
      <h3>
        <Link to="/admin/form" className="text-white " href="#">
          Form
        </Link>
      </h3>
      <h3>
        <Link to="/admin/gallery" className="text-white " href="#">
          Gallery
        </Link>
      </h3>
      <h3>
        <Link to="/admin/courses" className="text-white " href="#">
          Courses
        </Link>
      </h3>
      <h3>
        <Link to="/admin/information" className="text-white " href="#">
          Information
        </Link>
      </h3>
      <h3>
        <Link to="/admin/learn" className="text-white " href="#">
          Learn
        </Link>
      </h3>
      <h3>
        <Link to="/admin/partner" className="text-white " href="#">
          Partner
        </Link>
      </h3>
      <h3>
        <Link to="/admin/training" className="text-white " href="#">
          Training
        </Link>
      </h3>
      <h3>
        <Link to="/admin/placement" className="text-white " href="#">
          Placement
        </Link>
      </h3>
    </div>
  );
}

export default Sidebar;
