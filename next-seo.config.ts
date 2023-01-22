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
        url: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/portfolio-preview.png?alt=media&token=34debf6e-fa43-4e82-a5f1-78d1c7501c61",
        width: 1280,
        height: 720,
        alt: "Og Image Alt",
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
