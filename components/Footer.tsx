import { Row, Col, Container } from "react-bootstrap";
import SocialMedia from "./footer/SocialMedia";

const Footer = () => {
  return (
    <div className="container-fluid bg-footer">
      <Container>
        <Row className="px-4">
          <Col lg="6" md="12" sm="12">
            <p className="fs-1 contactMe pb-3 text-light">Contactame</p>
            <p className="fs-5 text-light">
              Si te interesó mi perfil, podés enviarme un mail a:
            </p>
            <p className="fs-5 mail">damianlaterza@gmail.com</p>
          </Col>
          <Col lg="6" md="12" sm="12">
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
