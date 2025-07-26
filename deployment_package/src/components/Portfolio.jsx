import React, { useState, useEffect } from "react";
import { mockData } from "../mock";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Cloud, 
  Server, 
  Monitor, 
  GitBranch,
  Terminal,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Settings,
  Zap,
  Cpu
} from "lucide-react";

const DevOpsPreloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="devops-logo">
          <div className="logo-circle">
            <Settings className="gear-1" />
            <Zap className="lightning" />
            <Settings className="gear-2" />
          </div>
        </div>
        <div className="loading-text">
          <span className="loading-letter">D</span>
          <span className="loading-letter">e</span>
          <span className="loading-letter">v</span>
          <span className="loading-letter">O</span>
          <span className="loading-letter">p</span>
          <span className="loading-letter">s</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-subtitle">Loading Portfolio...</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Mock download - in real app this would download actual PDF
    alert("Resume download would start here!");
  };

  if (loading) {
    return <DevOpsPreloader />;
  }

  return (
    <div className="portfolio-container">
      {/* Grid Background */}
      <div className="grid-background"></div>
      
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">PRASHANT</div>
            <nav className="nav">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#certifications" className="nav-link">Certifications</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Laptop Background */}
      <section className="hero">
        <div className="laptop-background">
          <div className="laptop-screen">
            <div className="code-lines">
              <div className="code-line">$ kubectl get pods</div>
              <div className="code-line">$ docker build -t myapp .</div>
              <div className="code-line">$ terraform apply</div>
              <div className="code-line">$ ansible-playbook deploy.yml</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{mockData.hero.name}</h1>
            <p className="text-big">{mockData.hero.role}</p>
            <p className="text-body hero-intro">{mockData.hero.intro}</p>
            
            <div className="hero-actions">
              <Button 
                className="btn-accent"
                onClick={handleDownloadResume}
              >
                <Download className="icon" />
                <span>Download Resume</span>
              </Button>
              <div className="hero-links">
                <a href={`mailto:${mockData.hero.email}`} className="btn-ghost">
                  <Mail className="icon" />
                  <span>Email</span>
                </a>
                <a href={mockData.hero.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Github className="icon" />
                  <span>GitHub</span>
                </a>
                <a href={mockData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Linkedin className="icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Who I Am</p>
            <h2 className="title-big">About Me</h2>
          </div>
          <div className="about-content">
            <p className="text-body">{mockData.about.description}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">What I Do</p>
            <h2 className="title-big">Skills</h2>
          </div>
          <div className="skills-grid">
            {mockData.skills.categories.map((category, index) => (
              <Card key={index} className="skill-card">
                <div className="skill-icon">
                  {category.title === "Programming" && <Code className="icon" />}
                  {category.title === "Cloud Platforms" && <Cloud className="icon" />}
                  {category.title === "Infrastructure as Code" && <Server className="icon" />}
                  {category.title === "Containerization" && <Server className="icon" />}
                  {category.title === "Automation & Monitoring" && <Monitor className="icon" />}
                  {category.title === "CI/CD Tools" && <GitBranch className="icon" />}
                  {category.title === "Version Control" && <Github className="icon" />}
                  {category.title === "OS & Tools" && <Terminal className="icon" />}
                </div>
                <h3 className="card-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="skill-badge">
                      <span>{skill}</span>
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">My Journey</p>
            <h2 className="title-big">Experience</h2>
          </div>
          <Card className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="text-regular">{mockData.experience.position}</h3>
                <p className="text-body company">{mockData.experience.company}</p>
              </div>
              <div className="experience-duration">
                <Calendar className="icon" />
                <span className="label-small">{mockData.experience.duration}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="achievements">
              {mockData.experience.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-dot"></div>
                  <p className="text-body">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Selected Work</p>
            <h2 className="title-big">Projects</h2>
          </div>
          <div className="projects-grid">
            {mockData.projects.map((project) => (
              <Card key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="card-title">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <ExternalLink className="icon" />
                    <span>View Code</span>
                  </a>
                </div>
                <p className="text-body project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="tech-badge">
                      <span>{tech}</span>
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Achievements</p>
            <h2 className="title-big">Certifications</h2>
          </div>
          
          {/* Course Completion Certificates */}
          <div className="cert-subsection">
            <h3 className="text-regular subsection-title">Course Completion</h3>
            <div className="certifications-grid">
              {mockData.certifications.courses.map((cert, index) => (
                <Card key={index} className="cert-card">
                  <div className="cert-icon">
                    <Award className="icon" />
                  </div>
                  <div className="cert-content">
                    <h4 className="card-title">{cert.name}</h4>
                    <p className="text-body cert-provider">{cert.provider}</p>
                    <p className="label-small cert-date">{cert.date}</p>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink className="icon" />
                    <span>View Certificate</span>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Achievement Certificates */}
          <div className="cert-subsection">
            <h3 className="text-regular subsection-title">Achievements</h3>
            <div className="certifications-grid">
              {mockData.certifications.achievements.map((cert, index) => (
                <Card key={index} className="cert-card achievement-card">
                  <div className="cert-icon">
                    <Award className="icon award-icon" />
                  </div>
                  <div className="cert-content">
                    <h4 className="card-title">{cert.name}</h4>
                    <p className="text-body cert-provider">{cert.provider}</p>
                    <p className="label-small cert-date">{cert.date}</p>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink className="icon" />
                    <span>View Achievement</span>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Academic Background</p>
            <h2 className="title-big">Education</h2>
          </div>
          <Card className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap className="icon" />
              </div>
              <div className="education-content">
                <h3 className="text-regular">{mockData.education.degree}</h3>
                <p className="text-body">{mockData.education.institution}</p>
                <p className="label-small">{mockData.education.duration}</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="education-additional">
              {mockData.education.additional.map((item, index) => (
                <p key={index} className="text-body">{item}</p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Get In Touch</p>
            <h2 className="title-big">Contact</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="icon" />
                <a href={`mailto:${mockData.hero.email}`} className="text-body">
                  {mockData.hero.email}
                </a>
              </div>
              <div className="contact-item">
                <Github className="icon" />
                <a href={mockData.hero.github} target="_blank" rel="noopener noreferrer" className="text-body">
                  GitHub Profile
                </a>
              </div>
              <div className="contact-item">
                <Linkedin className="icon" />
                <a href={mockData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-body">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="contact-cta">
              <Button className="btn-accent" onClick={handleDownloadResume}>
                <Download className="icon" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">PRASHANT</div>
            <p className="text-body">© 2025 Prashant Choudhary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;