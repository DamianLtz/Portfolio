import Image from "next/image";
import { scrollToProyects } from "../utils/ScrollTo";
import TextoPresentacion from "../img/icons/textoPresentacion.svg";
import Arrow from "../img/icons/arrow.svg";


const Presentation = () => {
  return (
    <>
      <div className="container-presentation mt-5">
        <div className="row">
          <div className="col-lg-12 position-relative">
            <div className="title-presentation">
              <p className="fs-4 name text-light">Damian Laterza</p>
              <div className="role-text">
                <h1 className="text-light frontend fw-light">
                  Frontend
                  <span className="d-inline-block text-light developer pt-4 fw-light">
                    Developer
                  </span>
                </h1>
                <div className="effect"></div>
              </div>
            </div>
            <Image
              src={TextoPresentacion}
              alt="Bienvenido/a a mi portfolio"
              className="img-fluid text-presentation d-none d-lg-block"
              priority={true}
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button className="btn-proyects" onClick={() => scrollToProyects()}>
            Mis Proyectos
            <span className="BorderTopBottom"></span>
            <span className="BorderLeftRight"></span>
          </button>
          <Image
            src={Arrow}
            alt="Ir a Mis Proyectos"
            className="img-fluid pb-4 pb-lg-0 mt-5 arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Presentation;
