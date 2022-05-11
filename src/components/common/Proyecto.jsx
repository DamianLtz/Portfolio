import React from "react";

const Proyecto = ({
  image,
  title,
  year,
  info,
  design,
  designLink,
  id,
  link,
  section,
}) => {
  const Desing = () => {
    return (
      <p className="pb-3 text-light">
        Diseñado por{" "}
        <span>
          <a
            href={designLink}
            target="_blank"
            rel="noreferrer"
            className="text-design">
            {design}
          </a>
        </span>
      </p>
    );
  };

  return (
    <div className="container-proyects">
      <div className="row">
        <div className="col-xxl-7 col-lg-6 col-md-6">
          <img src={image} alt={title} className="img-proyects" id={id} />
        </div>
        <div className="col-xxl-4 col-lg-5 offset-lg-1 p-4 p-lg-3 col-md-6">
          <div className="d-flex justify-content-end mt-lg-0 mt-5">
            <div>
              <div className="d-flex align-items-center">
                <h1 className="title-proyect text-light">{title}</h1>
                <div className="btn btn-primary mx-3 py-1 px-2 tag">
                  {year}
                </div>
              </div>
              <p className="py-4 text-light">{info}</p>
              {design ? <Desing /> : null}
              <a
                href={link}
                role="button"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-pill px-5 py-2 shadow-none">
                Ir al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
