import { Container } from "react-bootstrap";

const items = [
  {
    title: "Software Engineer",
    place: "KGS Technology",
    time: "July 2025 – Present",
    body: "I work on improving the reporting ecosystem by implementing server side data handling, refining core UI components, and contributing to cloud deployments. My role involves enhancing performance across the application and collaborate with the team to deliver stable, scalable features."
  },
  {
    title: "Software Engineer",
    place: "Rebecca Everlene Trust Company, Chicago, US",
    time: "Sep 2024 – Jun 2025",
    body: "I built modular React features, improved real time data handling with modern state tools, and updated WordPress templates with caching enhancements to deliver a smoother and faster user experience."
  },
  {
    title: "Software Engineering Intern",
    place: "SDI Presence, Chicago, US",
    time: "Feb 2023 – Aug 2023",
    body: "As a software engineering intern, I helped build backend features, supported API development, and contributed to improving how the system performed across different parts of the platform."
  },
  {
    title: "Master of Science in Information Systems",
    place: "Northeastern University, Boston, MA, US",
    time: "Sep 2022 – Apr 2024",
    body: "Graduated with GPA: 3.8/4, with the strong foundation in Information Systems focusing on web technologies, data engineering, and system design."
  },
  {
    title: "Software Engineer",
    place: "Accenture Solutions Pvt. Ltd, Pune, India",
    time: "Feb 2021 – Aug 2022",
    body: "As my first professional role, I supported core engineering tasks across the application. This included working with SQL processes, assisting with backend logic, and helping improve how different parts of the system operated together in daily use."
  },
  {
    title: "Bachelor of Engineering in Electronics and Telecommunication",
    place: "Sinhgad Institute of Technology and Science, Pune, India",
    time: "Jul 2016 – Apr 2020",
    body: "Graduated with GPA: 8.9/10, majoring in Electronics and Telecommunication."
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
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
