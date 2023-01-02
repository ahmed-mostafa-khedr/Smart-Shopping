import React from "react";
import cartFooter from "../../Images/cartFooter.png";
import logo from "../../Images/logo.png";
import visa from "../../Images/visa.png";
import masterCard from "../../Images/mastercard.png";
import animatedCart from "../../Images/shopping.gif";
import { Container } from "react-bootstrap";
function FooterCompo() {
  return (
    <footer
      className="   mt-5 py-3 footer"
      style={{ backgroundColor: "#cccc" }}
    >
      <Container fluid>
        <div className="footer d-flex justify-content-between align-items-center">
          <div className=" d-flex prv">
            <a
              href="/"
              className=" my-auto fw-bold text-dark font-ar"
              style={{ fontSize: "14px", textDecoration: "none" }}
            >
              الشروط والاحكام
            </a>
            <a
              href="/"
              className="my-auto fw-bold  text-dark font-ar mx-sm-1 mx-lg-3"
              style={{ fontSize: "14px", textDecoration: "none" }}
            >
              سياسة الخصوصية
            </a>
            <a
              href="tel:0-109-072-3497 "
              style={{ fontSize: "14px", textDecoration: "none" }}
              className=" my-auto "
            >
              <span
                href="/"
                className=" my-auto  fw-bold text-dark font-ar mx-1"
              >
                اتصل بنا
              </span>
              <i class="fa-solid fa-phone text-dark"></i>
            </a>
          </div>
          <div className="">
            <img
              src={animatedCart}
              alt="logo"
              className="logo "
              style={{ boxShadow: "0px 1px 3px white" }}
            />
            <img
              src={cartFooter}
              alt="cart img"
              className="logo me-1"
              style={{
                boxShadow: "0px 1px 3px white",
                backgroundColor: "white",
              }}
            />
            <img src={visa} alt="logo my-auto" className="logo me-4" />
            <img src={masterCard} alt="logo" className="logo mx-1" />
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div
            className="d-flex font-en py-1"
            style={{ boxShadow: "2px 2px 5px white" }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100020411474170"
              className="my-auto"
            >
              <i
                class="fa-brands fa-facebook mx-1 "
                style={{
                  color: "#1877f2",
                  backgroundColor: "white",
                  borderRadius: "25%",
                  border: "2px solid white",
                  fontSize: "30px",
                }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mostafa-777b64218/"
              className="my-auto mx-2"
            >
              <i
                class="fa-brands fa-linkedin-in mx-1"
                style={{
                  color: "white",
                  backgroundColor: "#0077b5",
                  border: "3px solid #0077b5",
                  borderRadius: "5px",
                  fontSize: "25px",
                }}
              ></i>{" "}
            </a>
            <a
              href="https://github.com/ahmed-mostafa-khedr"
              className="my-auto"
            >
              <i
                class="fa-brands fa-github mx-1"
                style={{
                  color: "#333",
                  backgroundColor: "#fafafa",
                  borderRadius: "25%",
                  border: "2px solid #fafafa",
                  fontSize: "30px",
                }}
              ></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterCompo;
