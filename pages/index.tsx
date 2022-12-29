import Head from "next/head";
// Components:

import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Proyectos from "../components/Proyectos";
import CardGitHub from "../components/common/CardGitHub";
import Footer from "../components/Footer";
// Siguiente es useContext.
export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portfolio</title>
        <meta name="description" content="Portfolio - Damian Laterza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="container">
        <Presentation />
        <Proyectos />
        <CardGitHub />
      </main>
      <Footer />
    </>
  );
}
