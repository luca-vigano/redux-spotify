import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  InputGroup,
  Col,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { getResultsAction } from "../redux/action";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(getResultsAction(query));
  };

  return (
    <Col className="col-2">
      <Navbar
        expand="md"
        className="fixed-left flex-column align-items-start"
        id="SearchBar"
      >
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="mt-3" onSubmit={handlesubmit}>
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  onChange={handleChange}
                />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn mt-3">
          <Button variant="primary" className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button variant="secondary" className="login-btn ml-2" type="button">
            Login
          </Button>
          <div className="mt-2">
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default SearchBar;
