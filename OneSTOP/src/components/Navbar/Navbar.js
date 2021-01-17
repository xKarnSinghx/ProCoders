import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  return (
    <div className="navbar-container font-sm shadow" id="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark  px-4 ">
        <Link to="/admin/upcoming-contests" className="navbar-brand">
          OneSTOP
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={`nav-link ${pathname === 'admin/upcoming-contests/company' ? 'active' : ''}`} to="/admin/upcoming-contests/company">
              Company
            </Link>
          </li>

          <li className="nav-item">
            <Link className={`nav-link ${pathname === 'admin/upcoming-contests/upcoming' ? 'active' : ''}`} to="/admin/upcoming-contests/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
