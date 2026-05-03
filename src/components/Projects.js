import { useState, useMemo } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import projHarvest from "../assets/img/fresh-harvest.png";
import projHealth from "../assets/img/healthtrack.png";
import projWeather from "../assets/img/weatherapp.png";
import projPortfolio from "../assets/img/portfolio.png";

const PROJECTS = [
  {
    title: "NutriSage",
    category: "AI",
    img: projHealth,
    desc:
      "RAG-based nutrition assistant built with LangChain and FAISS. Designed ingestion, chunking, embedding, and retrieval workflows across 7+ nutrition sources, improving response relevance through 5+ evaluation iterations. Shipped with a Streamlit interface for interactive, source-grounded dietary guidance.",
    tech: ["Python", "LangChain", "FAISS", "RAG Pipelines", "LLM APIs", "Streamlit"],
    links: {
      github: "https://github.com/Nupoor1998/NutriSage",
    },
  },
  {
    title: "Collaborative Document Editor",
    category: "Web",
    img: projWeather,
    desc:
      "Real-time multi-user document editor with WebSocket-based sync, Firebase Auth, and reusable component interfaces. Enabled controlled document sharing via unique access links with persistent storage and instant cross-client updates.",
    tech: ["React", "Next.js", "TypeScript", "Firebase", "WebSockets"],
    links: {
      github: "https://github.com/Nupoor1998/Collaborative-Document-Editor",
    },
  },
  {
    title: "Fresh Harvest",
    category: "Web",
    img: projHarvest,
    desc:
      "Full-stack e-commerce platform with role-based flows, OTP authentication, and PayPal checkout. Built with React, TypeScript, Node.js, Express, and MongoDB. Deployed on Heroku with server-side pagination, reducing page load times by 40%.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
    links: {
      github: "https://github.com/Nupoor1998/Fresh-Harvest",
    },
  },
  {
    title: "React Portfolio Website",
    category: "Web",
    img: projPortfolio,
    desc:
      "Personal portfolio built with React showcasing projects, skills, and experience with a11y-minded UI.",
    tech: ["React", "CSS"],
    links: {},
  },
];

const TABS = ["All", "AI", "Web"];

export const Projects = () => {
  const [tab, setTab] = useState("All");

  const visible = useMemo(() => {
    if (tab === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === tab);
  }, [tab]);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="proj-title">Projects</h2>

        <div className="proj-tabs-wrap">
          <ButtonGroup className="proj-tabs" aria-label="Project filters">
            {TABS.map(t => (
              <Button
                key={t}
                variant="outline-light"
                className={t === tab ? "active" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <Row className="g-4">
          {visible.map((p, i) => (
            <Col key={i} md={6} lg={4}>
              <article className="proj-card" role="article">
                <div className="proj-thumb">
                  <img src={p.img} alt={`${p.title} thumbnail`} />
                </div>

                <div className="proj-body">
                  <h3 className="proj-name">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>

                  <div className="proj-meta">
                    <div className="proj-chips">
                      {p.tech?.map((t, idx) => (
                        <span key={idx} className="proj-chip">{t}</span>
                      ))}
                    </div>

                    <div className="proj-links">
                      {p.links?.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="proj-link"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
