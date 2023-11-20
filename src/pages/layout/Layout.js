import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from "react";

const Layout = () => {
  return (
    <>
      <style>
        {`  

          .navbar {
            box-shadow: 2px 2px 5px;
          }
          .navbar-brand, nav.Link {
            padding-right: 1rem;
            padding-left: 1rem;
            transition: background-color 0.3s ease-in-out;
            box-sizing: border-box;
            font-size: 1.5rem;
            margin-left: 0;
          }

          .navbar-brand:hover, .navbar-brand:focus {
            background-color: #0056b3;
            color: #fff;
            border-radius: 0.25rem;
          }

          .new-link {
            float: right;
            margin-left: 10px;
          }

          .navbar-text {
            position: relative;
            text-align: left;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            padding-top: 1rem;
          }

          @media (max-width: 767px) {
            .navbar-text {
              position: static;
              text-align: center;
            }
          }

        `}
      </style>

      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://png.pngtree.com/png-vector/20220903/ourmid/pngtree-delivery-truck-logo-png-image_6136930.png"
              alt="logo"
              width="60"
              height="60"
            />
                 <Navbar.Text className="navbar-text">
            Focus Logistics
          </Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand as={Link} to="/" eventKey="1">Home</Navbar.Brand>
              <Navbar.Brand as={Link} to="/about" eventKey="2">About us</Navbar.Brand>
            </Nav>
            <Nav>
              <Navbar.Brand className="new-link" as={Link} to="/contact" eventKey="3">Contact</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: '80px' }}>
        <Outlet />
      </div>

    </>
  );
};

export default Layout;
