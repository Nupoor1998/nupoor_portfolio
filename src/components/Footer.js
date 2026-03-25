import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col xs={12} sm={6}>
            
            <div className="footer-brand">NUPOOR KORDE</div>
            {}
            
          </Col>

          <Col xs={12} sm={6} className="text-center text-sm-end">
            
            <p>© {new Date().getFullYear()} Nupoor Korde. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
