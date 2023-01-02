import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/logo.png";
import Jump from "react-reveal/Jump";
import { Link } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";

function NavbarLoginCompo({ loginState }) {
  const Is_Login = localStorage.getItem("email");
  return (
    <>
      <Navbar
        bg="dark"
        expand="sm"
        className="navbar  sticky-top"
        style={{
          padding: "0",
          margin: "0",
        }}
      >
        <Container fluid>
          <Navbar.Brand className="font-en text-light  mx-sm-2 mx-lg-5">
            <Link to="/">
              <Jump>
                <img
                  src={logo}
                  className="logo"
                  style={{ boxShadow: "0px 1px 5px white" }}
                  alt="logo"
                />{" "}
              </Jump>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            style={{ color: "white", backgroundColor: "white" }}
            ria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              color: "white",

              marginTop: "10px",
              width: "100%",
            }}
          >
            <Form.Control
              type="search"
              placeholder="إبحث...."
              style={{
                border: "0",
                boxShadow: "1px 1px 1px white",
              }}
              className="mx-sm-2 my-2 py-1 w-100 font-ar"
              aria-label="Search"
            />

            <Nav
              className=" mx-sm-2 mx-lg-5 p-0"
              style={{ maxHeight: "100px", color: "white" }}
              navbarScroll
            >
              <NavLink
                to="login"
                className="nav-text d-flex my-auto mx-1 justify-content-center p-0"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h5 className=" mt-2 ms-2">
                  <i class="fa-solid fa-user text-light "></i>
                </h5>
                <h6
                  style={{
                    fontSize: "12px",

                    opacity: "0.7",
                  }}
                  className="text-center text-light font-ar mx-2 my-auto "
                >
                  {loginState}
                </h6>
                <span
                  className="mx-2"
                  style={{
                    width: "3px",
                    height: "30px",
                    backgroundColor: "white",
                  }}
                ></span>
              </NavLink>

              <NavLink
                to="/"
                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h5 className=" mt-2 ms-2">
                  <i class="fa-solid fa-cart-arrow-down text-light"></i>
                </h5>
                <h6
                  style={{
                    fontSize: "12px",

                    opacity: "0.7",
                  }}
                  className="text-center text-light font-ar my-auto "
                >
                  <b>عربه التسوق</b>{" "}
                </h6>
              </NavLink>

              <Nav.Link
                href="/"
                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                style={{ color: "white", textDecoration: "none" }}
              >
                {Is_Login ? (
                  <>
                    <span
                      className="mx-2"
                      style={{
                        width: "3px",
                        height: "30px",
                        backgroundColor: "white",
                      }}
                    ></span>
                    <h5 className=" mt-2 ms-2">
                      <i class="fa-solid fa-arrow-down text-light"></i>
                    </h5>
                    <h6
                      style={{
                        fontSize: "12px",

                        opacity: "0.7",
                      }}
                      className="text-center text-light font-ar my-auto "
                      onClick={() => localStorage.clear()}
                    >
                      تسجيل الخروج
                    </h6>
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
