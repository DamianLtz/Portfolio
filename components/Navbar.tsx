import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import {
  scrollToTop,
  scrollToContact,
  scrollToProyects,
} from "../utils/ScrollTo";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg py-2 px-2 px-lg-4 fixed-top ${
        navbar ? "bg-navbar-scroll" : ""
      }`}>
      <Container fluid>
        <Link
          className="navbar-brand fs-2 fw-bold btn-logo"
          href="/"
          onClick={(e) => scrollToTop(e)}>
          DL
        </Link>
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-2 pe-lg-3">
            <button className="btn-nav-link" onClick={scrollToProyects}>
              Proyectos
            </button>
          </li>
          <li className="nav-item ps-3 pe-2">
            <button className="btn-nav-link" onClick={scrollToContact}>
              Contacto
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
