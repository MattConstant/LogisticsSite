
import { Outlet, Link } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <>
        <style>
        {`
          .navbar-brand {
            padding: 0.5rem 1rem;
            transition: background-color 0.3s ease-in-out;
            box-sizing: border-box;
          }

          .navbar-brand:hover, .navbar-brand:focus {
            background-color: #0056b3;
            color: #fff;
            border-radius: 0.25rem;
          }
        `}
      </style>
      {/* Add 'fixed-top' class to the nav element */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/about">About us</Link>
        <Link className="navbar-brand" to="/contact">Contact</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ paddingTop: '56px' }}>
      <Outlet />
      </div>

    </>
  );
};

export default Layout;
