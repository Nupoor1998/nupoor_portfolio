import { useState, useMemo } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";


import projHarvest from "../assets/img/fresh-harvest.png";
import projHealth from "../assets/img/healthtrack.png";
import projWeather from "../assets/img/weatherapp.png";
import projPortfolio from "../assets/img/portfolio.png";

const PROJECTS = [
  {
    title: "HealthTrack",
    category: "UX",
    img: projHealth,
    desc:
      "User-centered health tracking prototype with Figma flows and interactive components. Delivered a full design spec for developers.",
    tech: ["Figma", "UX Flows"],
    links: {
      github: "https://github.com/Nupoor1998/HealthTrack",
    },
  },
  {
    title: "Fresh Harvest – Online Grocery",
    category: "Web",
    img: projHarvest,
    desc:
      "Responsive e-commerce UI with React + Bootstrap, customer/admin flows, secure auth, and smooth navigation.",
    tech: ["React", "Bootstrap"],
    links: {
      github: "https://github.com/Nupoor1998/Fresh-Harvest",
    },
  },
  {
    title: "WeatherApp",
    category: "Web",
    img: projWeather,
    desc:
      "Real-time weather using OpenWeather API with clean search UI, error handling, and dynamic visuals.",
    tech: ["JavaScript", "OpenWeather API"],
    links: {
      github: "https://github.com/Nupoor1998/NodeReact-FullstackWeatherApp",
    },
  },
  {
    title: "React Portfolio Website",
    category: "Web",
    img: projPortfolio,
    desc:
      "Personal portfolio built with React and a11y-minded UI; sections for About, Skills, Projects, and Contact.",
    tech: ["React", "CSS"],
    links: {},
  },
];

const TABS = ["All", "Web", "UX"];

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

        {/* Filter Tabs */}
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

        {/* Grid */}
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
