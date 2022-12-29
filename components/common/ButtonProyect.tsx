import React from "react";
import Link from "next/link";
import { TButton } from "../../utils/types";

const ButtonProyect = ({ link, content }: TButton) => {
  return (
    <Link
      href={`${link}`}
      role="button"
      className="button-proyect text-light rounded-pill px-5 py-2">
      {content}
    </Link>
  );
};

export default ButtonProyect;
