import { useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile.jpg";

const PROFILE = {
  name: "Tanmay Singh",
  role: "B.Tech CSE Student",
  email: "7376tanmaysingh@gmail.com",
  phone: "+91 7376016287",
  location: "Varanasi, Uttar Pradesh",
  github: "https://github.com/7376tanmaysingh-debug",
  linkedin: "www.linkedin.com/in/tanmay-singh-583b70372",
  leetcode: "https://leetcode.com/u/singhtanmay07/",
  gfg:"https://www.geeksforgeeks.org/profile/7376tanmlc8j",
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["certifications", "Certifications"],
    ["contact", "Contact"],
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span>TS</span> {PROFILE.name}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {sections.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="theme-button" aria-label="Theme">☾</button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      <aside className="sidebar">
        <div className="profile-photo">
  <img src={profilePhoto} alt="Tanmay Singh" />
</div>

        <h2>{PROFILE.name}</h2>
        <h4>{PROFILE.role}</h4>
        <p className="side-description">
          Passionate about programming, problem solving and building useful
          applications.
        </p>

        <div className="social-icons">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">GH</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">in</a>
          <a href={`mailto:${PROFILE.email}`}>✉</a>
          <a href={PROFILE.leetcode} target="_blank" rel="noreferrer">LC</a>
        </div>

        <button className="download-button" onClick={() => window.print()}>
          ↓ &nbsp; Download Resume
        </button>

        <div className="availability">
          <span></span>
          <div>
            <b>Open to</b>
            <small>Internships & Opportunities</small>
          </div>
        </div>
      </aside>

      <main className="main">
        <section id="home" className="hero">
          <div>
            <span className="hello">Hello, I'm</span>

            <h1>
              Tanmay <strong>Singh</strong>
            </h1>

            <h2>
              B.Tech CSE Student <i>|</i> Learner <i>|</i> Problem Solver
            </h2>

            <p>
              I am a Computer Science and Engineering student currently in my
              second year. I love exploring new technologies, solving
              real-world problems and continuously improving my skills in
              programming, data handling and software development.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href={`mailto:${PROFILE.email}`}>
                ✉ &nbsp; Contact Me
              </a>
              <a
                className="outline-button"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
              >
                ◉ &nbsp; View My Work
              </a>
            </div>
          </div>

          <div className="hero-quote">
            “Consistency
            <br />
            builds results.”
          </div>

          <div className="stats">
            <div><strong>2+</strong><span>Years of Learning</span></div>
            <div><strong>5+</strong><span>Projects</span></div>
            <div><strong>3+</strong><span>Certifications</span></div>
            <div><strong>Always</strong><span>Learning</span></div>
          </div>
        </section>

        <section id="about" className="content-section">
          <SectionTitle icon="●" title="About Me" />
          <div className="panel about-panel">
            <p>
              I am a B.Tech Computer Science and Engineering student at United
              Institute of Technology, Varanasi (AKTU). I am passionate about
              programming, data handling and problem solving.
            </p>
            <p>
              I enjoy working on projects, exploring new technologies and
              improving my skills through practical learning, online courses
              and real-world experiences. I am a fast learner, self-motivated
              and always ready to take new challenges.
            </p>
          </div>
        </section>

        <section id="education" className="content-section">
          <SectionTitle icon="🎓" title="Education" right="View Academic Details →" />

          <div className="education-grid">
            <EducationCard
              title="B.Tech – CSE"
              year="2025 – Present"
              school="United Institute of Technology (AKTU), Varanasi"
              result="1st Semester SGPA: 7.2"
            />
            <EducationCard
              title="Class XII – CBSE"
              year="2025"
              school="S.G.S. Inter College"
              result="Percentage: 59.2%"
            />
            <EducationCard
              title="Class X – CBSE"
              year="2022"
              school="SS Public School"
              result="Percentage: 78.8%"
            />
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionTitle icon="⚙" title="Technical Skills" />

          <div className="skill-list">
            {[
              ["C", "C"],
              ["🐍", "Python"],
              ["HTML", "HTML5"],
              ["CSS", "CSS3"],
              ["JS", "JavaScript"],
              ["⚛", "React"],
              ["▣", "Data Handling"],
              ["◇", "DSA"],
              ["GH", "Git & GitHub"],
              ["⌁", "Problem Solving"],
              ["VS", "VS Code"],
              ["●", "Communication"],
            ].map(([icon, name]) => (
              <span key={name}>
                <b>{icon}</b>{name}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionTitle icon="■" title="Projects" right="View All Projects →" />

          <div className="project-grid">
            <Project
              icon="🐍"
              title="Python Programming Projects"
              description="Solved various problems using Python (numbers, strings, lists, loops, functions etc.) to strengthen problem solving skills."
              tags={["Python", "Problem Solving"]}
              link="https://github.com/7376tanmaysingh-debug/myproject1"
            />
            <Project
              icon="🌐"
              title="Personal Portfolio Website"
              description="A responsive portfolio website built using React and Vite to showcase my skills, projects and achievements."
              tags={["React", "Vite", "CSS"]}
              link="https://github.com/7376tanmaysingh-debug/skill-based-react-"
            />
            <Project
              icon="🗄"
              title="Data Handling Practice"
              description="Practiced data organization, file handling and basic data processing using Python with real-world style datasets."
              tags={["Python", "Data Handling"]}
            />
          </div>
        </section>

        <section id="certifications" className="content-section">
          <SectionTitle icon="▣" title="Certifications & Learning" right="View All →" />

          <div className="cert-grid">
            <Certification
              icon="▣"
              title="Python & Data Science"
              subtitle="Online Course"
              text="Certificate of Completion"
            />
            <Certification
              icon="Jio"
              title="Jio Classroom AI Course"
              subtitle="Online Course"
              text="Certificate of Completion"
            />
            <Certification
              icon="</>"
              title="Programming & Problem Solving"
              subtitle="Ongoing Learning"
              text="Improving DSA and coding skills"
            />
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <SectionTitle icon="🏆" title="Achievements" />
            <ul className="achievement-list">
              <li>Cricketer of the Year (School)</li>
              <li>Led school cricket team and secured 2nd position</li>
              <li>1st position in Maxtop Olympiad</li>
              <li>Consistently learning and improving technical skills</li>
            </ul>
          </div>

          <div>
            <SectionTitle icon="♥" title="Interests & Hobbies" />
            <div className="interest-list">
              {["Cricket", "Volleyball", "Badminton", "eSports (BGMI)", "Web Series", "Programming", "Exploring New Tech", "Music"].map(
                (item) => <span key={item}>{item}</span>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-panel">
            <SectionTitle icon="➤" title="Let's Connect" />
            <p>I'm open to internships, freelance projects and collaborations.</p>

            <div className="contact-row">
              <a href={`mailto:${PROFILE.email}`}>✉ &nbsp; {PROFILE.email}</a>
              <a href={`tel:${PROFILE.phone}`}>☎ &nbsp; {PROFILE.phone}</a>
              <span>📍 &nbsp; {PROFILE.location}</span>

              <div className="contact-socials">
                <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={PROFILE.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>© 2026 Tanmay Singh. All rights reserved.</span>
          <span>Built with <b>♥</b> using React + Vite</span>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ icon, title, right }) {
  return (
    <div className="section-title">
      <h2><span>{icon}</span>{title}</h2>
      {right && <a href="#projects">{right}</a>}
    </div>
  );
}

function EducationCard({ title, year, school, result }) {
  return (
    <article className="education-card">
      <div className="edu-icon">🏛</div>
      <div>
        <span className="year">{year}</span>
        <h3>{title}</h3>
        <p>{school}</p>
        <strong>{result}</strong>
      </div>
    </article>
  );
}

function Project({ icon, title, description, tags ,link}) {
  return (
    <article className="project-card">
      <div className="project-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        ◉ &nbsp; View Code →
      </a>
    </article>
  );
}

function Certification({ icon, title, subtitle, text }) {
  return (
    <article className="cert-card">
      <div className="cert-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <span>{text}</span>
      </div>
    </article>
  );
}

export default App;