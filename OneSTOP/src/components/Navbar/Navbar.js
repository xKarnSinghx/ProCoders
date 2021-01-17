import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  return (
    <div className="navbar-container font-sm shadow" id="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark  px-4 ">
        <Link to="/" className="navbar-brand">
          OneSTOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/company' ? 'active' : ''}`} to="/company">
                Company
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/upcoming' ? 'active' : ''}`} to="/upcoming">
                Upcoming
              </Link>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
