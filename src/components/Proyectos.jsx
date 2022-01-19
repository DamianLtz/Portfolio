import React from "react";

import Proyecto from "./common/Proyecto";
import CardMoreProyects from "./common/CardMoreProyects";

import Frontend from "../img/icons/front.png";
import Qa from "../img/icons/QA.png";
import Personal from "../img/main/proyectos/proyectoPersonal.png";
import Unidiversidad from "../img/main/proyectos/proyectoUniWeb.png";
import ecommerceCoderHouse from "../img/main/proyectos/proyectoEcommerce.png";
import Prana from "../img/main/proyectos/proyectoPrana.png"
import GitHub from "../img/icons/githubLogoCircle.svg";
import Android from "../img/icons/androidLogoCircle.svg";

const proyectos = [
  {
    image: Prana,
    id: "Prana",
    title: "Prana",
    year: 2022,
    info: "Maquetado y Desarrollo de la Web: Prana estudio de diseño",
    design: "Agustin Ietta",
    link: "https://prana-o3qlbx9fv-damianltz.vercel.app/",
    section: "FrontEnd",
  },
  {
    image: ecommerceCoderHouse,
    id: "ecommerceCoderHouse",
    title: "Ecommerce",
    year: 2022,
    info: "Tienda de puntos utilizando HTML, CSS, JS & React.",
    link: "https://ecommerce-react-two.vercel.app/",
    section: "FrontEnd",
  },
  {
    image: Unidiversidad,
    id: "Unidiversidad",
    title: "Unidiversidad",
    year: 2021,
    info: "Maquetado de la Web de Unidiversidad utlizando HTML, CSS & Bootstrap 5.",
    design: "Unidiversidad",
    link: "https://damianltz.github.io/UniDiversidad-React",
    section: "FrontEnd",
  },
  {
    image: Personal,
    id: "Personal",
    title: "Personal Argentina",
    year: 2022,
    info: "Testing Exploratorio + Diseño y ejecución de Casos de Prueba",
    design: "Personal",
    link: "",
    section: "QA",
  },
];

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
        link="https://github.com/DamianLtz"
        img={Android}
      />
    </>
  );
};

export default Proyectos;
