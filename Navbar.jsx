import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>LMS Module</h2>
      <div className="nav-links">

        <Link to="/register">Registration</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
        <Link to="/list">List</Link>
        <Link to="/details">Details</Link>
        <Link to="/modules">Modules</Link>
        <Link to="/faculty">Faculty</Link>

      </div>
    </nav>
  );
};

export default Navbar;