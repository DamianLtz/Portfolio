// Components:
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Presentation from "../components/Presentation";
import Proyects from "../components/Proyects";
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
        <Proyects />
        <CardGitHub />
      </Container>
      <Footer />
    </>
  );
}
