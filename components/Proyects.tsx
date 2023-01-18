import Image from "next/image";
//Otros Componentes:
import Proyect from "./common/Proyect";
import proyects from "../pages/api/listProyects";

//Imagenes:
import Frontend from "../img/icons/front.png";

const Proyects = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="fs-1 pe-3 text-light">Proyectos</p>
        <Image
          src={Frontend}
          alt="Icono proyectos front end"
          className="img-fluid icons-sections"
        />
      </div>
      {proyects.map((proyect) => {
        return (
          <Proyect
            key={proyect.id}
            image={proyect.image}
            title={proyect.title}
            year={proyect.year}
            info={proyect.info}
            design={proyect.design}
            designLink={proyect.designLink}
            link={proyect.link}
          />
        );
      })}
    </>
  );
};

export default Proyects;
