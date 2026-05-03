import { Container, Row, Col } from "react-bootstrap";

const skills = [
  {
    icon: "💻",
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    icon: "🖥️",
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "GraphQL", "WebSockets"],
  },
  {
    icon: "⚙️",
    category: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    icon: "🗄️",
    category: "Databases & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "FAISS"],
  },
  {
    icon: "☁️",
    category: "Cloud & DevOps",
    items: ["AWS (CloudFormation, EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "Firebase", "Heroku", "Git"],
  },
  {
    icon: "🤖",
    category: "AI & Tools",
    items: ["LangChain", "RAG Pipelines", "LLM APIs", "Cursor", "GitHub Copilot", "Streamlit", "Agile/Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skill section-skills">
      <Container>
        <h2 className="skill-title">Skills</h2>
        <Row>
          {skills.map((group, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                  <h3 className="skill-heading">{group.category}</h3>
                </div>
                <div className="skill-badges">
                  {group.items.map((item, i) => (
                    <span className="skill-badge" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
