import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from "react";

const Layout = () => {
  return (
    <>
      <style>
        {`
          .navbar-brand, nav.Link {
            padding: 0.5rem 1rem;
            transition: background-color 0.3s ease-in-out;
            box-sizing: border-box;
            font-size: 1.5rem;
          }

          .navbar-brand:hover, .navbar-brand:focus {
            background-color: #0056b3;
            color: #fff;
            border-radius: 0.25rem;
          }

          .contact { 
            float: right;
            background-color: #0056b3;
          }
        `}
      </style>

      {/* Using react-bootstrap Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://png.pngtree.com/png-vector/20220903/ourmid/pngtree-delivery-truck-logo-png-image_6136930.png"
              alt="logo"
              width="70"
              height="70"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand as={Link} to="/" eventKey="1">Home</Navbar.Brand>
              <Navbar.Brand as={Link} to="/about" eventKey="2">About us</Navbar.Brand>
              <Navbar.Brand as={Link} to="/contact" eventKey="3">Contact</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: '56px' }}>
        <Outlet />
      </div>

    </>
  );
};

export default Layout;
