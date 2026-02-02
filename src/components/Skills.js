import { Container, Row, Col } from "react-bootstrap";

const skills = [
  {
    icon: "🧩",
    category: "Frontend Development",
    items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Bootstrap", "SASS", "Material-UI", "AngularJS"],
  },
  {
    icon: "🎨",
    category: "UI/UX & Design Tools",
    items: ["Figma", "Adobe XD", "Balsamiq", "Moqups", "Wireframing", "Responsive Design", "Accessibility", "Cross-Browser Testing"],
  },
  {
    icon: "🔗",
    category: "Backend & APIs",
    items: ["REST APIs", "Node.js (project experience)", "JSON", "Postman"],
  },
  {
    icon: "🛠️",
    category: "Web & CMS Tools",
    items: ["WordPress", "Git", "GitHub", "Version Control", "Agile/Scrum collaboration"],
  },
  {
    icon: "☁️",
    category: "Data & Cloud (academic/project exposure)",
    items: ["MySQL", "Oracle", "AWS (basic cloud deployment)", "ETL concepts"],
  },
  {
    icon: "⚡",
    category: "Other Technical Practices",
    items: ["Performance Optimization (lazy loading, minification)", "Asynchronous Rendering", "API Integration", "User-centric Design"],
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
