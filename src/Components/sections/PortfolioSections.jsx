import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Trophy,
  ExternalLink,
  GraduationCap,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Constellation, Reveal, SectionHeading, Eyebrow } from "../ui/SharedUI";
import {
  EXPERIENCE,
  PUBLICATIONS,
  RESEARCH_INTERESTS,
  AWARDS,
  PROJECTS,
  EDUCATION,
  FEATURED,
  TOKENS,
} from "../../constants/data";
import img1 from "../../assets/PortfolioSections/Photo..jpg";
import img2 from "../../assets/PortfolioSections/photo.jpeg";
import pdf1 from "../../assets/mycv/EmranCV.pdf";
import pdf2 from "../../assets/mycv/Resume.pdf";



const AnimatedNumber = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000; 

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [end]);

  return <>{count}{suffix}</>;
};

export function Hero() {
  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <header
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 5vw",
        overflow: "hidden",
        backgroundColor: "#060A12",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          right: 0,
          bottom: 0,
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center 80px",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
          WebkitMaskImage:
            "-webkit-linear-gradient(left, transparent 0%, black 50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(6,10,18,1) 35%, rgba(6,10,18,0.4) 70%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "650px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <div className="badge" style={{ marginBottom: "26px" }}>
          <Sparkles size={13} /> Welcome to my portfolio
        </div>

        <h1
          style={{
            fontSize: "clamp(45px, 6vw, 75px)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 15px",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#EAF1FB",
          }}
        >
          Emran Khan <span style={{ color: "#2FE8AE" }}>Musa</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            margin: "0 0 30px",
            color: "#EAF1FB",
            letterSpacing: "0.5px",
          }}
        >
          Software Frontend Developer & Researcher ||{" "}
          <span style={{ color: "#2FE8AE" }}>CSE@ULAB</span>
        </p>

        <p
          style={{
            fontSize: "15.5px",
            color: "#8C9AB6",
            lineHeight: 1.7,
            marginBottom: "34px",
            maxWidth: "480px",
          }}
        >
          I build interfaces that hold up in production — clean, responsive
          frontend work and full websites, from first wireframe to live deploy.
        </p>

        <div className="hero-ctas">
          <button className="btn-solid" onClick={() => scrollTo("contact")}>
            Let's Connect <ArrowUpRight size={15} />
          </button>
          <a className="btn-outline" href={pdf1} download>
            <Download size={15} /> Download CV
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">
              <AnimatedNumber end={1} suffix="+" />
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-num">
              <AnimatedNumber end={7} suffix="+" />
            </div>
            <div className="stat-label">Awards</div>
          </div>
          <div>
            <div className="stat-num">
              <AnimatedNumber end={3} suffix="+" />
            </div>
            <div className="stat-label">Projects</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function About() {
  return (
    <section id="about">
      <style>{`
        @keyframes spin-border {
          100% { transform: rotate(360deg); }
        }
        .animated-img-wrapper {
          position: relative;
          width: 100%;
          padding: 3px; 
          border-radius: 22px; 
          overflow: hidden;
          display: flex;
          background: #060A12;
        }
        .animated-img-wrapper::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          /* Ekhane #FFF449 er aage hash ta miss hoye giyechilo */
          background: conic-gradient(from 0deg, transparent 0%, #FFF449 20%, transparent 50%, #E63946 70%, transparent 100%);
          animation: spin-border 3.5s linear infinite;
          z-index: 0;
        }
        .animated-img-wrapper img {
          position: relative;
          z-index: 1;
          border: none !important; 
          border-radius: 19px !important;
        }
      `}</style>

      <div className="about-grid">
        <Reveal>
          <div className="animated-img-wrapper">
            <img
              className="about-photo"
              alt="Emran Khan Musa working"
              src={img2}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>About Me</Eyebrow>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Turning ideas and designs into clean, user-friendly web experiences
          </h2>

          <div className="about-body" style={{ textAlign: "justify" }}>
            <p>
              I'm a <strong>Frontend Developer</strong> and{" "}
              <strong>Web Developer</strong> with a strong foundation in
              building modern, responsive, and user-friendly web interfaces.
            </p>
            <p>
              I have hands-on experience developing web applications and turning
              UI/UX designs into clean, pixel-accurate, and production-ready
              interfaces. I mainly work with React.js, JavaScript, Tailwind CSS,
              and modern web technologies, with a focus on writing clean,
              maintainable, and reusable code.
            </p>
            <p>
              I'm passionate about creating digital experiences that are not
              only visually appealing but also fast, accessible, and easy to
              use. I enjoy solving real-world problems through technology and
              continuously improving my skills to build better and more
              efficient web applications.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <a className="btn-outline" href={pdf2} download>
              <Download size={15} /> Download Resume
            </a>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceAndPublications() {
  return (
    <section
      id="experience-publications"
      style={{ paddingTop: "80px", paddingBottom: "40px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}
      >
        <div className="resume-column">
          <SectionHeading
            eyebrow="Working Experience"
            title="Where I've worked"
            sub="Frontend and web development roles, from freelance builds to production teams."
          />
          <Reveal>
            <div
              className="timeline"
              style={{
                position: "relative",
                paddingLeft: "15px",
                borderLeft: "2px solid rgba(47, 232, 174, 0.2)",
              }}
            >
              {EXPERIENCE.map((e, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  style={{
                    position: "relative",
                    marginBottom: "30px",
                    padding: "20px",
                    background: "rgba(6, 10, 18, 0.5)",
                    border: "1px solid rgba(47, 232, 174, 0.3)",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(47, 232, 174, 0.1)",
                    marginLeft: "20px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "-42px",
                      top: "24px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#060A12",
                      border: "2px solid #2FE8AE",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#EAF1FB",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {e.date}
                    </span>
                    <span
                      style={{
                        background: "rgba(47, 232, 174, 0.15)",
                        color: "#2FE8AE",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      {e.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#FFF",
                      marginBottom: "4px",
                    }}
                  >
                    {e.title}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#2FE8AE",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    {e.org}
                  </div>

                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      color: "#8C9AB6",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {e.points.map((pt, j) => (
                      <li
                        key={j}
                        style={{
                          marginBottom: "6px",
                          display: "flex",
                          alignItems: "start",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "#2FE8AE", marginTop: "2px" }}>
                          ▹
                        </span>{" "}
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {i === 1 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px",
                        marginTop: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      {[
                        { num: 1, url: "https://amanahgroup.vercel.app/" },
                        { num: 2, url: "https://khanayubbd.com/" },
                      ].map((item) => (
                        <a
                          key={item.num}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "#EAF1FB",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "all 0.3s ease",
                          }}
                          onMouseOver={(event) => {
                            event.target.style.background =
                              "rgba(47, 232, 174, 0.1)";
                            event.target.style.color = "#2FE8AE";
                            event.target.style.borderColor = "#2FE8AE";
                          }}
                          onMouseOut={(event) => {
                            event.target.style.background =
                              "rgba(255, 255, 255, 0.05)";
                            event.target.style.color = "#EAF1FB";
                            event.target.style.borderColor =
                              "rgba(255, 255, 255, 0.1)";
                          }}
                        >
                          Example of my design website {item.num} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="resume-column">
          <SectionHeading
            eyebrow="Publications"
            title="Published Research Papers"
            sub="Research on medical imaging and safety-critical detection systems."
          />
          <Reveal>
            <div
              className="timeline"
              style={{
                position: "relative",
                paddingLeft: "15px",
                borderLeft: "2px solid rgba(47, 232, 174, 0.2)",
              }}
            >
              {PUBLICATIONS.map((p, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  style={{
                    position: "relative",
                    marginBottom: "30px",
                    padding: "20px",
                    background: "rgba(6, 10, 18, 0.5)",
                    border: "1px solid rgba(47, 232, 174, 0.3)",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(47, 232, 174, 0.1)",
                    marginLeft: "20px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "-42px",
                      top: "24px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#060A12",
                      border: "2px solid #2FE8AE",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#EAF1FB",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {p.date}
                    </span>
                    <span
                      style={{
                        background: "rgba(245, 158, 11, 0.15)",
                        color: "#F59E0B",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#FFF",
                      marginBottom: "6px",
                      lineHeight: "1.3",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#2FE8AE",
                      fontWeight: "500",
                      marginBottom: "15px",
                      fontStyle: "italic",
                    }}
                  >
                    {p.venue}
                  </div>

                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      color: "#8C9AB6",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        style={{
                          marginBottom: "6px",
                          display: "flex",
                          alignItems: "start",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "#2FE8AE", marginTop: "2px" }}>
                          ▹
                        </span>{" "}
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "15px",
                    }}
                  >
                    <a
                      href={
                        i === 0
                          ? "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Reducing+False+Alarms+in+Fire+Detection+Systems+with+YOLOv11+and+Multi-Sensor+Validation&btnG="
                          : i === 1
                            ? "https://www.scribd.com/document/925785293/AI-Lab-Glaucoma-Classification-1"
                            : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#EAF1FB",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "rgba(47, 232, 174, 0.1)";
                        e.target.style.color = "#2FE8AE";
                        e.target.style.borderColor = "#2FE8AE";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.color = "#EAF1FB";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      Read Paper ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research">
      <SectionHeading
        eyebrow="Research Interests"
        title="What I keep coming back to"
      />
      <div className="research-grid">
        {RESEARCH_INTERESTS.map((r, i) => (
          <Reveal delay={i * 0.08} key={i}>
            <div className="research-card">
              <div className="research-icon">
                <r.icon size={22} />
              </div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
      <SectionHeading
        eyebrow="Honors & Awards"
        title="Recognition along the way"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {AWARDS.map((a, i) => (
          <Reveal key={i}>
            <div
              style={{
                background: "rgba(6, 10, 18, 0.5)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                borderRadius: "16px",
                padding: "25px",
                position: "relative",
                transition: "all 0.4s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(245, 158, 11, 0.15)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.2)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    color: "#F59E0B",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Trophy size={16} />
                </div>
                <span
                  style={{
                    color: "#EAF1FB",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {a.date}
                </span>
                <span
                  style={{
                    background: "rgba(245, 158, 11, 0.15)",
                    color: "#F59E0B",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    marginLeft: "auto",
                  }}
                >
                  {a.tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#FFF",
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {a.title}
              </h3>

              <p
                style={{
                  color: "#8C9AB6",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {a.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        sub="A mix of course tools and independent builds — from schedulers to spaced-repetition apps."
      />
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal delay={i * 0.08} key={i}>
            <div className="project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="stack-row">
                {p.stack.map((s, j) => (
                  <span className="stack-chip" key={j}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a className="project-link" href={p.github}>
                  <FaGithub size={14} /> GitHub
                </a>
                <a className="project-link" href={p.demo}>
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-[7vw] px-[5vw] z-10 w-full">
      <div className="flex flex-col items-center text-center w-full mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-[#2FE8AE]"></div>
          <span className="text-[#2FE8AE] uppercase tracking-[0.2em] text-[13px] font-semibold">
            Education
          </span>
          <div className="h-px w-8 bg-[#2FE8AE] hidden md:block"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#EAF1FB]">
          Academic background
        </h2>
      </div>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <Reveal delay={i * 0.08} key={i}>
            <div className="edu-card">
              <div className="edu-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3>{e.place}</h3>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-period mono">{e.period}</div>
                <div className="edu-detail">{e.detail}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Featured() {
  // Modal open rakhar jonno state
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="featured" className="relative py-[7vw] px-[5vw] z-10">
      <SectionHeading eyebrow="Featured" title="Certifications & programs" />

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED.map((f, i) => (
            <a
              href={f.link}
              key={i}
              className="group relative bg-[#0E1830] border border-[#1E2C48] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(47,232,174,0.15)] hover:border-[#2FE8AE]"
            >
              <div className="relative h-50 w-full overflow-hidden border-b border-[#1E2C48] group-hover:border-[#2FE8AE] transition-colors duration-300">
                <div className="absolute inset-0 bg-[#2FE8AE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />

                <button
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    setSelectedImage(f.image); 
                  }}
                  className="absolute top-4 right-4 bg-[#060A12]/80 backdrop-blur-sm p-2.5 rounded-full border border-[#1E2C48] group-hover:bg-[#2FE8AE] group-hover:border-[#2FE8AE] group-hover:text-[#060A12] text-[#EAF1FB] transition-all duration-300 z-20 shadow-lg cursor-pointer"
                >
                  <ArrowUpRight
                    size={18}
                    className="transform group-hover:rotate-45 transition-transform duration-300"
                  />
                </button>
              </div>

              <div className="p-6 flex flex-col flex-1 bg-linear-to-b from-[#0E1830] to-[#0A1120]">
                <h3 className="text-[18px] font-['Space_Grotesk'] font-semibold text-[#EAF1FB] mb-3 group-hover:text-[#2FE8AE] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-[#8C9AB6] text-[14px] leading-[1.7] line-clamp-3">
                  {f.body}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#2FE8AE] to-[#7C87FF] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            </a>
          ))}
        </div>
      </Reveal>

      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity"
          onClick={() => setSelectedImage(null)} 
        >
          <div
            className="relative max-w-4xl w-full flex justify-center items-center animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-[#EAF1FB] hover:text-[#2FE8AE] transition-colors duration-200"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#1E2C48]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal>
        <div className="contact-card">
          <div className="flex items-center justify-center gap-3 mb-4 w-full">
            <div className="h-px w-8 bg-[#2FE8AE]"></div>{" "}
            <span className="text-[#2FE8AE] uppercase tracking-[0.2em] text-[13px] font-semibold">
              Contact
            </span>
            <div className="h-px w-8 bg-[#2FE8AE]"></div>{" "}
          </div>

          <h2>Let's build something great together</h2>
          <p>
            Open to frontend & web development roles, freelance projects, and
            interesting problems. Say hello.
          </p>
          <div className="contact-actions">
            <a
              className="btn-solid"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=emrankhanmusa25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={15} /> Email Me
            </a>

            <a
              className="btn-outline"
              href="https://www.linkedin.com/in/emran-khan-musa-470549264/"
            >
              <FaLinkedin size={15} /> LinkedIn
            </a>
            <a
              className="btn-outline"
              href="https://www.facebook.com/emran.khan.musa.2024"
            >
              <FaFacebook size={15} /> Facebook
            </a>
            <a className="btn-outline" href="https://github.com/musa0789">
              <FaGithub size={15} /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
