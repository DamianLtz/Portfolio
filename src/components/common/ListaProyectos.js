import Personal from "../../img/main/proyectos/proyectoPersonal.png";
import Unidiversidad from "../../img/main/proyectos/proyectoUniWeb.png";
import ecommerceCoderHouse from "../../img/main/proyectos/proyectoEcommerce.png";
import Prana from "../../img/main/proyectos/proyectoPrana.png"

const proyectos = [
    {
        image: Prana,
        id: "Prana",
        title: "Prana",
        year: 2022,
        info: "Maquetado y Desarrollo de la Web: Prana estudio de diseño",
        design: "Agustin Ietta",
        designLink: "https://www.linkedin.com/in/agustin-ietta/",
        link: "https://prana-o3qlbx9fv-damianltz.vercel.app/",
        section: "FrontEnd",
    },
    {
        image: ecommerceCoderHouse,
        id: "ecommerceCoderHouse",
        title: "Ecommerce",
        year: 2022,
        info: "Tienda de puntos utilizando HTML, CSS, JS, React y Firebase",
        link: "https://ecommerce-react-two.vercel.app/",
        section: "FrontEnd",
    },
    {
        image: Unidiversidad,
        id: "Unidiversidad",
        title: "Unidiversidad",
        year: 2021,
        info: "Maquetado de la Web de Unidiversidad utilizando HTML, CSS & Bootstrap 5 junto con la implementación de React a la misma como primer practica con este Framework.",
        design: "GorillaSite Headless CMS",
        designLink: "https://www.linkedin.com/company/gorillasite/",
        link: "https://uni-diversidad-react.vercel.app/",
        section: "FrontEnd",
    },
    {
        image: Personal,
        id: "Personal",
        title: "Personal Argentina",
        year: 2022,
        info: "Diseño y ejecución de Casos de Prueba + Reporte de Pruebas y Defectos.",
        link: "https://docs.google.com/spreadsheets/d/1Jj8zcD825pvxDsyDzOJ2HqbIlEDlb6yh/edit?usp=sharing&ouid=109497738715851879054&rtpof=true&sd=true",
        section: "QA",
    },
];

export default proyectos