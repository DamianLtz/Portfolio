import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { scrollToFrontProyects } from "./ScrollTo";
import CaretDown from "../../img/icons/CaretDown.svg";

const Dropdown = () => {
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("transparent");
  const [rotate, setRotate] = useState("");

  const toggle = () => {
    setHeight(height === 0 ? "auto" : 0);
    setColor(color === "transparent" ? "#151517" : "transparent");
    setRotate(rotate === "" ? "icon-proyects-rotate" : "");
  };
  return (
    <>
      <button
        aria-expanded={height !== 0}
        aria-controls="example-panel"
        onClick={toggle}
        className="dropdown-proyects text-light"
        style={{ backgroundColor: color , transitionDelay: color === "transparent" ? "0.3s" : "0s" }}>
        Proyectos
        <img
          src={CaretDown}
          alt=""
          className={`ms-2 icon-proyects ${rotate}`}/>
      </button>
      <AnimateHeight
        id="example-panel"
        duration={300}
        height={height}
        className="position-absolute dropdown-category w-100">
        <p className="px-3 py-2" onClick={() => scrollToFrontProyects()}>
          Front
        </p>
        {/* <p className="px-3 py-2" onClick={() => scrollToTestingProyects()}>QA</p> */}
      </AnimateHeight>
    </>
  );
};

export default Dropdown;
