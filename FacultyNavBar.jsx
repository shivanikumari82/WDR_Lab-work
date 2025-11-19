// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function FacultyNavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Faculty Management</h2>

      <ul className="nav-links">
        <li><Link to="/">Register</Link></li>
        <li><Link to="/list">Faculty List</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/update">Update</Link></li>
      </ul>
    </nav>
  );
}