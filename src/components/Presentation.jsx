import React, { useState } from "react";

import { scrollToProyects } from "./common/ScrollTo";
import TextoPresentacion from "../img/icons/textoPresentacion.svg";

import Arrow from "../img/icons/arrow.svg";

const Presentation = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="container-presentation">
        <div className="row">
          <div className="col-lg-12 position-relative">
            <div className="title-presentation">
              <p className="fs-4 name text-light">Damian Laterza</p>
              <p className="text-center text-light frontend fw-light pb-4">
                Frontend Developer
              </p>
              <p
                className="text-center text-light testerQa fw-light"
                onMouseEnter={() => setColor("effect-hover")}
                onMouseLeave={() => setColor("")}>
                Tester QA
              </p>
              <div className={`effect ${color}`}></div>
            </div>
            <img
              src={TextoPresentacion}
              alt="Bienvenido/a a mi portfolio"
              className="img-fluid text-presentation d-none d-lg-block"
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button
            className={`border-0 px-5 py-3 btn btn-proyects ${color} shadow-none`}
            onClick={() => scrollToProyects(true)}>
            Mis Proyectos
          </button>
          <img
            src={Arrow}
            alt="Ir a Mis Proyectos"
            className="img-fluid pb-4 pb-lg-0 my-5 arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Presentation;
