import { Row, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import mainlogo from "../images/pngwing.com.png";
import { useState } from "react";

function NavBar({ filterBySearch }) {
  const [searchVal, setsearchVal] = useState("");

  const onSearch = () => {
    filterBySearch(searchVal);
    setsearchVal("");
  };

  return (
    <Row>
      <Navbar expand="lg" className=" navBar">
        <Container>
          {/* //fluid to take full width */}
          <Navbar.Brand href="#">
            <img src={mainlogo} className="logo-pic" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex search-box">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                //take the value of serach button and save it to useState
                onChange={(e) => setsearchVal(e.target.value)}
                value={searchVal}
              />
              <Button onClick={() => onSearch()} variant="outline-dark">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
