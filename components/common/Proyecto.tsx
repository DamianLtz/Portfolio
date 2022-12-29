import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProyecto } from "../../utils/types";

import { motion, Variants } from "framer-motion";
import Tag from "./Tag";
import ButtonProyect from "./ButtonProyect";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const Proyecto = ({
  image,
  title,
  year,
  info,
  design,
  designLink,
  link,
}: IProyecto) => {
  return (
    <div className="container-proyects">
      <div className="row">
        <div className="col-xxl-7 col-lg-6 col-md-6">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <motion.div variants={cardVariants}>
              <Image src={image} alt={title} className="img-proyects" />
            </motion.div>
          </motion.div>
        </div>
        <div className="col-xxl-4 col-lg-5 offset-lg-1 p-4 p-lg-3 col-md-6">
          <div className="d-flex justify-content-end mt-lg-0 mt-5">
            <div>
              <div className="d-flex align-items-center">
                <h1 className="title-proyect text-light">{title}</h1>
                <Tag year={year} />
              </div>
              <p className="py-4 text-light">{info}</p>
              {designLink && (
                <p className="pb-3 text-light">
                  Diseñado por{" "}
                  <span>
                    <Link href={designLink} className="text-design">
                      {design}
                    </Link>
                  </span>
                </p>
              )}
              <ButtonProyect content="Ir al sitio" link={link}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
