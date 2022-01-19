import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import ScrollReveal from "scrollreveal";
import Presentation from "./components/Presentation";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    ScrollReveal().reveal("#Prana", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
    ScrollReveal().reveal("#Personal", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
    ScrollReveal().reveal("#Unidiversidad", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
    ScrollReveal().reveal("#ecommerceCoderHouse", {
      delay: 250,
      distance: "50px",
      duration: 850,
    });
    ScrollReveal().reveal(".title-presentation .name", {
      delay: 250,
      distance: "50px",
      duration: 1500,
    });
    ScrollReveal().reveal(".title-presentation .frontend", {
      delay: 650,
      distance: "50px",
      duration: 1500,
    });
    ScrollReveal().reveal(".title-presentation .testerQa", {
      delay: 950,
      distance: "50px",
      duration: 1500,
    });
  });

  return (
    <>
      <Navbar />
      <main className="container">
        <Presentation />
        <Proyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;
