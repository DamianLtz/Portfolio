import { StaticImageData } from "next/image";

export interface IProyecto {
  image: StaticImageData;
  title: string;
  year: number;
  info: string;
  design: string | undefined;
  designLink?: string | undefined;
  id?: string;
  link: string;
  section?: string;
}

export type TYear = {
  year: number;
};

export type TButton = {
  link?: string;
  content: string;
};
