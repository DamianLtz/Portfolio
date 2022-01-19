import React, { useState, useEffect } from "react";
import Dropdown from "./common/Dropdown";
import { scrollToTop, scrollToContact } from "./common/ScrollTo";

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
      className={`navbar navbar-expand-lg py-0 px-2 px-lg-4 fixed-top ${
        navbar ? "bg-navbar-scroll" : ""
      }`}>
      <div className="container-fluid">
        <p className="navbar-brand fs-2 fw-bold btn-logo" onClick={scrollToTop}>
          DL
        </p>
        <ul className="d-flex align-items-center">
          <li className="position-relative">
            <Dropdown />
          </li>
          <li className="nav-item ps-3 pe-2">
            <button className="btn-nav-link" onClick={() => scrollToContact()}>
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
