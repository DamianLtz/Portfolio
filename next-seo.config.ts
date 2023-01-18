import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Damian Laterza | Portfolio",
  description:
    "Mi Portfolio personal con proyectos que hice durante mi trayecto.",
  canonical: "https://portfolio-zeta-topaz-63.vercel.app/",
  openGraph: {
    url: "https://portfolio-zeta-topaz-63.vercel.app/",
    title: "Damian Laterza | Portfolio",
    description:
      "Mi Portfolio personal con proyectos que hice durante mi trayecto.",
    images: [
      {
        url: "<%= require('./portfolio-preview.png') %",
        width: 1280,
        height: 720,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "<%= require('./portfolio-preview.png') %",
        width: 1280,
        height: 720,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
    ],
    siteName: "Damian Laterza Portfolio",
  },
  twitter: {
    handle: "@handle",
    site: "https://portfolio-zeta-topaz-63.vercel.app/",
    cardType:
      "Mi Portfolio personal con proyectos que hice durante mi trayecto.",
  },
};

export default config;
