import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "nupoor0603@gmail.com"; 
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject || "Portfolio contact from " + email)}&body=${encodeURIComponent(message + (email ? `\n\nReply to: ${email}` : ""))}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact-cta">
      <Container>
        <Row className="align-items-start g-4">
          {/* Left column */}
          <Col md={5}>
            <h2 className="contact-title">Let’s Connect</h2>
            <p className="contact-text">
              I’m currently looking for new opportunities — my inbox is always open.
              Fill out this form or drop me an{" "}
              <a href="mailto:nupoor0603@gmail.com" className="contact-link">email</a>.
              Whether you have a question or just want to say hi, I’ll get back to you!
            </p>

            <div className="contact-socials">
              <a
                className="social-btn"
                aria-label="Email"
                href="mailto:nupoor0603@gmail.com"
              >
                <Envelope size={18} />
              </a>
              <a
                className="social-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nupoor-korde/"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="social-btn"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Nupoor1998"
              >
                <Github size={18} />
              </a>
            </div>
          </Col>

          {/* Right column — form */}
          <Col md={7}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Just saying hi"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Let’s talk about…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="btn-send">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
