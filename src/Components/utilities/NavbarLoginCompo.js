import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/logo.png";
import Jump from "react-reveal/Jump";

import { Outlet, NavLink } from "react-router-dom";

function NavbarLoginCompo({ loginState }) {
  const Is_Login = localStorage.getItem("username");
  return (
    <>
      <Navbar
        bg="dark"
        expand="sm"
        className="navbar  sticky-top"
        style={{ height: "60px", padding: "0", margin: "0" }}
      >
        <Container fluid>
          <NavLink to="/" className="font-en text-light  mx-sm-2 mx-lg-5">
            {" "}
            <Jump>
              <img src={logo} className="logo" alt="logo" />{" "}
            </Jump>
          </NavLink>

          <Navbar.Toggle
            style={{ color: "white", backgroundColor: "white" }}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse
            id="navbarScroll"
            style={{
              color: "white",
              backgroundColor: "black",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <Form.Control
              type="search"
              placeholder="إبحث...."
              className="mx-sm-2 my-2 py-1 w-100 font-ar"
              aria-label="Search"
            />

            <Nav
              className="mx-sm-2 mx-lg-5 p-0"
              style={{ maxHeight: "100px", color: "white" }}
              navbarScroll
            >
              <NavLink
                to="login"
                className="nav-text d-flex my-auto mx-1 justify-content-center p-0"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h5 className=" mt-2 ms-2">
                  <i class="fa-solid fa-user text-secondary"></i>
                </h5>
                <h6
                  style={{
                    color: "whie",
                    fontSize: "10px",
                    maxWidth: "150px",
                    minWidth: "100px",
                    opacity: "0.8",
                  }}
                  className="text-center font-ar mx-2 my-auto "
                >
                  {" "}
                  {loginState}{" "}
                </h6>
              </NavLink>

              <NavLink
                to="/"
                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h5 className=" mt-2 me-2">
                  <i class="fa-solid fa-cart-arrow-down text-info"></i>
                </h5>
                <p
                  style={{
                    color: "whie",
                    fontSize: "5px",
                    width: "80px",
                    opacity: "0.8",
                  }}
                  className="text-center font-ar my-auto text-info"
                >
                  <b>عربه التسوق</b>{" "}
                </p>
              </NavLink>

              <Nav.Link
                href="/"
                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                style={{ color: "white" }}
              >
                {Is_Login ? (
                  <>
                    <h5 className=" mt-2 me-2">
                      <i class="fa-solid fa-arrow-down text-secondary"></i>
                    </h5>
                    <p
                      style={{
                        color: "whie",
                        fontSize: "5px",
                        width: "80px",
                        opacity: "0.8",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      className="text-center text-secondary font-ar my-auto "
                      onClick={() => localStorage.clear()}
                    >
                      {" "}
                      <b>Logout</b>{" "}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarLoginCompo;
