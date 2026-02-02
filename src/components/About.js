import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/IMG_7381_Original.jpg"; 

export const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="about-photo">
            <img src={me} alt="Nupoor Korde portrait" />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p>
            “Every system has a structure that defines how data flows, how logic interacts, and how users experience the final product. I design that structure with an engineering approach that brings architecture, performance, and usability into alignment. I build backend systems that stay resilient under real workloads and frontend experiences that feel effortless and intuitive. My work combines clear technical principles with an understanding of how people actually use technology. To me, great software isn’t defined by isolated features, but by how seamlessly every layer works together to create something reliable, scalable, and genuinely impactful.”
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
