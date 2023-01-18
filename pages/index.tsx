// Components:
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Proyectos from "../components/Proyectos";
import CardGitHub from "../components/common/CardGitHub";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container as="main">
        <Presentation />
        <Proyectos />
        <CardGitHub />
      </Container>
      <Footer />
    </>
  );
}
