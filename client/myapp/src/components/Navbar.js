import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import actions
import { Logout } from "../redux/reducer/user";
const Navigation = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 0;

      setNavbarClass(isScrolled ? "scrolled" : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const logout = () => {
    navigate("/");
    dispatch(Logout());
  };
  return (
    <div className="nav">
      <nav className={`navbar ${navbarClass}`}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand className="text-white">
              Debugging Masters
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link className="text-white nav_item" as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-white nav_item"
                  as={Link}
                  to="/problems"
                >
                  Problems
                </Nav.Link>
                <Nav.Link
                  className="text-white nav_item"
                  as={Link}
                  to="/profile"
                >
                  Profile
                </Nav.Link>
                <Nav.Link className="text-white nav_item" onClick={logout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <div className="nav_text">
        <div className="text">
          <h1>Debugging Master </h1> <br></br>
          <h5>Crafting Solutions In The World Of Bugs</h5>
          <h6 className="m-3">Strategies And Insights For Bug-Free Code</h6>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
