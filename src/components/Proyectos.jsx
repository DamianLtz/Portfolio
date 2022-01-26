import React from "react";

//Otros Componentes:

import Proyecto from "./common/Proyecto";
import CardMoreProyects from "./common/CardMoreProyects";
import proyectos from "./common/ListaProyectos"

//Imagenes:

import Frontend from "../img/icons/front.png";
import Qa from "../img/icons/QA.png";
import GitHub from "../img/icons/githubLogoCircle.svg";
import Android from "../img/icons/androidLogoCircle.svg";

const proyectosFront = proyectos.filter((proyecto) => proyecto.section === "FrontEnd");

const proyectosQA = proyectos.filter((proyecto) => proyecto.section === "QA");

const Proyectos = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="fs-1 pe-3 text-light">Proyectos de Front</p>
        <img src={Frontend} alt="" className="img-fluid icons-sections" />
      </div>
      {proyectosFront.map((proyecto) => {
        return (
          <Proyecto
            key={proyecto.id}
            image={proyecto.image}
            title={proyecto.title}
            year={proyecto.year}
            info={proyecto.info}
            design={proyecto.design}
            designLink={proyecto.designLink}
            id={proyecto.id}
            link={proyecto.link}
            section={proyecto.section}
          />
        );
      })}
      <CardMoreProyects
        className="card-proyect-front"
        text="¿Ver más proyectos de frontend?"
        textLink="Ir a GitHub"
        link="https://github.com/DamianLtz"
        img={GitHub}
      />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="fs-1 pe-3 text-light">Proyectos de QA</p>
        <img src={Qa} alt="" className="img-fluid icons-sections" />
      </div>
      {proyectosQA.map((proyecto) => {
        return (
          <Proyecto
            key={proyecto.id}
            image={proyecto.image}
            title={proyecto.title}
            year={proyecto.year}
            info={proyecto.info}
            id={proyecto.id}
            link={proyecto.link}
            section={proyecto.section}
          />
        );
      })}
      <CardMoreProyects
        className="card-proyect-qa"
        text="¿Ver más proyectos de Testing?"
        textLink="Ir a Drive"
        link="https://drive.google.com/drive/folders/1-PwIzqHEhSzYoB7TcMJbuo53AsedczUM?usp=sharing"
        img={Android}
      />
    </>
  );
};

export default Proyectos;
