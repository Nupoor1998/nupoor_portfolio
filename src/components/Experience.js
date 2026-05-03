import { Container } from "react-bootstrap";

const items = [
  {
    title: "Senior Software Engineer",
    place: "KGS Technology, WA",
    time: "Jul 2025 – Present",
    bullets: [
      "Built Java/Spring Boot backend workflows with server-side pagination, cutting report load times by 35%",
      "Engineered GraphQL APIs to persist user report preferences and refactored React state management, reducing re-renders by 45%",
      "Refactored 16+ React UI modules into reusable components using GitHub Copilot, reducing average module delivery time by 40%",
      "Leveraged Datadog APM to trace distributed requests, identifying bottlenecks and reducing production MTTD by 30%",
    ],
  },
  {
    title: "Software Engineer",
    place: "Rebecca Everlene Trust Company, Chicago, IL",
    time: "Sep 2024 – Jul 2025",
    bullets: [
      "Built Java/Spring Boot microservices for electronic prescription workflows, implementing role-based access, audit logging, and secure PHI handling in a HIPAA-regulated environment",
      "Developed React-based pharmacy dashboards with Redux Toolkit, boosting task efficiency by 30%",
      "Led migration to Kafka-based event-driven architecture, improving refill notification reliability by 25%",
      "Deployed Dockerized services on AWS with Kubernetes and Jenkins CI/CD, sustaining 99.9% uptime",
    ],
  },
  {
    title: "Software Engineering Intern",
    place: "SDI Presence, Chicago, IL",
    time: "Feb 2023 – Aug 2023",
    bullets: [
      "Engineered reusable React components with Redux Toolkit and React Query, accelerating feature delivery by 30%",
      "Boosted API responsiveness by 25% through async workflows, Redis caching, and eliminating redundant network calls",
    ],
  },
  {
    title: "Software Engineer",
    place: "Accenture Solutions Pvt. Ltd., Pune, India",
    time: "Feb 2021 – Aug 2022",
    bullets: [
      "Designed an SLA-driven incident triage system with automated priority scoring, cutting average resolution time by 18%",
      "Optimized SQL/T-SQL reporting pipelines with pre-aggregation strategies, improving data throughput by 15%",
    ],
  },
  {
    title: "Master of Science in Information Systems",
    place: "Northeastern University, Boston, MA",
    time: "May 2024",
    bullets: [],
  },
  {
    title: "Bachelor of Engineering",
    place: "Pune University, Pune, India",
    time: "Apr 2020",
    bullets: [],
  },
];

export const Experience = () => (
  <section id="experience" className="experience">
    <Container>
      <h2 className="exp-title">Experience & Education</h2>
      <div className="timeline">
        {items.map((it, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{it.title}</h3>
                <span className="time">{it.time}</span>
              </div>
              <div className="place">{it.place}</div>
              {it.bullets.length > 0 && (
                <ul className="timeline-bullets">
                  {it.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
