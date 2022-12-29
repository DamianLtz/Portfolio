import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  scrollToTop,
  scrollToContact,
  scrollToFrontProyects,
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

    // return () => {
    //   window.removeEventListener("scroll", changeBackground);
    // };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg py-2 px-2 px-lg-4 fixed-top ${
        navbar ? "bg-navbar-scroll" : ""
      }`}>
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-2 fw-bold btn-logo"
          href="/"
          onClick={(e) => scrollToTop(e)}>
          DL
        </Link>
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-2 pe-lg-3">
            <button className="btn-nav-link" onClick={scrollToFrontProyects}>
              Proyectos
            </button>
          </li>
          <li className="nav-item ps-3 pe-2">
            <button className="btn-nav-link" onClick={scrollToContact}>
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
