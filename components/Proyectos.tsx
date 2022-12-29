import React from "react";
import Image from "next/image";
//Otros Componentes:

import Proyecto from "./common/Proyecto";
import CardMoreProyects from "./common/CardGitHub";
import proyectos from "../pages/api/ListaProyectos";

//Imagenes:

import Frontend from "../img/icons/front.png";

const Proyectos = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="fs-1 pe-3 text-light">Proyectos</p>
        <Image src={Frontend} alt="" className="img-fluid icons-sections" />
      </div>
      {proyectos.map((proyecto) => {
        return (
          <Proyecto
            key={proyecto.id}
            image={proyecto.image}
            title={proyecto.title}
            year={proyecto.year}
            info={proyecto.info}
            design={proyecto.design}
            designLink={proyecto.designLink}
            link={proyecto.link}
          />
        );
      })}
    </>
  );
};

export default Proyectos;
