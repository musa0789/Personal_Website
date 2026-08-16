import React from "react";
import { TOKENS } from "./constants/data";
import { ScrollProgress } from "./Components/ui/SharedUI";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import { Hero, About, ExperienceAndPublications, Research, Awards, Projects, Education, Featured, Contact } from "./Components/sections/PortfolioSections";

export default function Portfolio() {
  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
          --bg:${TOKENS.bg}; --bgAlt:${TOKENS.bgAlt}; --surface:${TOKENS.surface};
          --surface2:${TOKENS.surface2}; --border:${TOKENS.border}; --borderSoft:${TOKENS.borderSoft};
          --text:${TOKENS.text}; --muted:${TOKENS.textMuted}; --faint:${TOKENS.textFaint};
          --emerald:${TOKENS.emerald}; --emeraldDim:${TOKENS.emeraldDim};
          --violet:${TOKENS.violet}; --gold:${TOKENS.gold};
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .pf-root * { box-sizing: border-box; }
        .pf-root h1, .pf-root h2, .pf-root h3, .pf-root .display {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.01em;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }

        /* ---------- scroll progress ---------- */
        .scroll-progress {
          position: fixed; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--emerald), var(--violet));
          transform-origin: left; z-index: 100;
        }

        /* ---------- nav ---------- */
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 5vw;
          background: rgba(6,10,18,0.72);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--borderSoft);
        }
        .nav-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.02em; }
        .nav-logo span { color: var(--emerald); }
        .nav-links { display: flex; gap: 30px; }
        .nav-link {
          background: none; border: none; color: var(--muted); font-size: 14.5px;
          font-family: 'Inter', sans-serif; cursor: pointer; padding: 4px 0; position: relative;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -4px; height: 1.5px; width: 0%;
          background: var(--emerald); transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-right { display: flex; align-items: center; gap: 14px; }
        .social-btn {
          width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center; color: var(--muted);
          transition: all 0.2s ease; text-decoration: none;
        }
        .social-btn:hover { border-color: var(--emerald); color: var(--emerald); transform: translateY(-2px); }
        .btn-outline {
          border: 1px solid var(--emerald); color: var(--emerald); background: transparent;
          padding: 9px 20px; border-radius: 999px; font-size: 14px; font-weight: 500;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s ease; text-decoration: none; white-space: nowrap;
        }
        .btn-outline:hover { background: var(--emerald); color: var(--bg); }
        .btn-solid {
          background: var(--emerald); color: var(--bg); border: none;
          padding: 10px 22px; border-radius: 999px; font-size: 14px; font-weight: 600;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-solid:hover { background: #4ff5c5; transform: translateY(-2px); }
        .menu-toggle { display: none; background: none; border: none; color: var(--text); }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .menu-toggle { display: flex; }
          .nav-right .btn-solid span.long { display: none; }
        }
        .mobile-menu {
          position: fixed; inset: 0 0 auto 0; top: 68px; z-index: 49;
          background: rgba(6,10,18,0.98); backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          display: flex; flex-direction: column; padding: 10px 5vw 24px;
        }
        .mobile-menu button {
          text-align: left; padding: 14px 0; background: none; border: none;
          border-bottom: 1px solid var(--borderSoft); color: var(--text); font-size: 16px;
        }

        /* ---------- hero ---------- */
        .hero {
          position: relative; padding: 9vw 5vw 8vw;
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;
          min-height: 82vh;
          background: radial-gradient(circle at 80% 15%, rgba(124,135,255,0.10), transparent 45%),
                      radial-gradient(circle at 15% 85%, rgba(47,232,174,0.08), transparent 40%);
        }
        .constellation { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; opacity: 0.9; }
        .node { animation: pulse 3.4s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 0.35; r: 0.5; } 50% { opacity: 1; r: 1; } }

        .hero-content { position: relative; z-index: 2; }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--border); background: rgba(255,255,255,0.02);
          padding: 7px 16px; border-radius: 999px; font-size: 12.5px; color: var(--emerald);
          margin-bottom: 26px; text-transform: uppercase; letter-spacing: 0.08em;
        }
        .hero h1 { font-size: clamp(38px, 5vw, 66px); line-height: 1.06; font-weight: 700; margin: 0 0 18px; }
        .hero h1 .accent { color: var(--emerald); }
        .hero-role { font-size: 17px; color: var(--muted); margin-bottom: 22px; }
        .hero-role .dot { color: var(--gold); margin: 0 10px; }
        .hero-desc { font-size: 15.5px; color: var(--muted); max-width: 480px; line-height: 1.7; margin-bottom: 34px; }
        .hero-ctas { display: flex; gap: 14px; margin-bottom: 46px; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 40px; }
        .stat-num { font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 700; color: var(--text); }
        .stat-label { font-size: 12.5px; color: var(--faint); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 2px; }

        .hero-photo-wrap {
          position: relative; z-index: 2; justify-self: center;
          width: min(360px, 80vw); aspect-ratio: 1/1.05;
        }
        .hero-photo-ring {
          position: absolute; inset: -14px; border-radius: 28px;
          border: 1px solid var(--border); opacity: 0.6;
        }
        .hero-photo {
          width: 100%; height: 100%; object-fit: cover; border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: 0 30px 80px -20px rgba(47,232,174,0.18);
        }
        .hero-photo-tag {
          position: absolute; bottom: -18px; left: -18px;
          background: var(--surface); border: 1px solid var(--border); border-radius: 14px;
          padding: 12px 16px; display: flex; gap: 10px; align-items: center;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }
        .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--emerald); box-shadow: 0 0 0 rgba(47,232,174,0.6); animation: dotpulse 2s infinite; }
        @keyframes dotpulse {
          0% { box-shadow: 0 0 0 0 rgba(47,232,174,0.5); }
          70% { box-shadow: 0 0 0 10px rgba(47,232,174,0); }
          100% { box-shadow: 0 0 0 0 rgba(47,232,174,0); }
        }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; text-align: left; padding-top: 110px; }
          .hero-photo-wrap { order: -1; margin-bottom: 20px; width: min(280px, 70vw); }
        }

        /* ---------- sections ---------- */
        section { position: relative; padding: 7vw 5vw; z-index: 1; }
        .section-head { max-width: 640px; margin-bottom: 50px; }
        .eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--emerald);
          text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .eyebrow::before { content: ''; width: 22px; height: 1px; background: var(--emerald); display: inline-block; }
        .section-title { font-size: clamp(28px, 3.4vw, 42px); font-weight: 700; margin: 0 0 12px; }
        .section-sub { color: var(--muted); font-size: 15px; line-height: 1.7; }

        .about-grid { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 60px; align-items: center; }
        .about-photo { width: 100%; border-radius: 20px; border: 1px solid var(--border); aspect-ratio: 4/5; object-fit: cover; }
        .about-body { color: var(--muted); font-size: 15.5px; line-height: 1.85; }
        .about-body p { margin: 0 0 16px; }
        .about-body strong { color: var(--text); }
        @media (max-width: 800px) { .about-grid { grid-template-columns: 1fr; } }

        /* ---------- timeline (publications + awards) ---------- */
        .timeline { position: relative; padding-left: 34px; }
        .timeline::before {
          content: ''; position: absolute; left: 6px; top: 6px; bottom: 6px; width: 1px;
          background: linear-gradient(var(--border), transparent);
        }
        .timeline-item { position: relative; padding-bottom: 40px; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-dot {
          position: absolute; left: -34px; top: 4px; width: 13px; height: 13px; border-radius: 50%;
          background: var(--bg); border: 2px solid var(--emerald);
        }
        .tl-date { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--gold); margin-bottom: 6px; display: flex; gap: 10px; align-items: center; }
        .tl-tag { color: var(--faint); font-size: 11.5px; border: 1px solid var(--border); padding: 2px 9px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.05em; }
        .tl-title { font-size: 19px; font-weight: 600; margin: 4px 0 8px; font-family: 'Space Grotesk', sans-serif; }
        .tl-venue { color: var(--emerald); font-size: 13.5px; margin-bottom: 10px; }
        .tl-body { color: var(--muted); font-size: 14.5px; line-height: 1.75; }
        .tl-points { margin: 8px 0 0; padding-left: 18px; color: var(--muted); font-size: 14.5px; line-height: 1.8; }

        /* ---------- research interest cards ---------- */
        .research-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .research-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 18px;
          padding: 32px 26px; transition: all 0.25s ease;
        }
        .research-card:hover { border-color: var(--emerald); transform: translateY(-4px); }
        .research-icon {
          width: 46px; height: 46px; border-radius: 12px; background: rgba(47,232,174,0.1);
          display: flex; align-items: center; justify-content: center; color: var(--emerald); margin-bottom: 18px;
        }
        .research-card h3 { font-size: 18px; margin: 0 0 10px; }
        .research-card p { color: var(--muted); font-size: 14px; line-height: 1.7; margin: 0; }
        @media (max-width: 800px) { .research-grid { grid-template-columns: 1fr; } }

        /* ---------- projects ---------- */
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .project-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 18px;
          padding: 28px; display: flex; flex-direction: column; transition: all 0.25s ease;
        }
        .project-card:hover { border-color: var(--violet); transform: translateY(-4px); }
        .project-card h3 { font-size: 19px; margin: 0 0 10px; }
        .project-card p { color: var(--muted); font-size: 14px; line-height: 1.7; flex: 1; margin: 0 0 18px; }
        .stack-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .stack-chip {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted);
          border: 1px solid var(--borderSoft); padding: 4px 10px; border-radius: 999px;
        }
        .project-links { display: flex; gap: 10px; }
        .project-link {
          flex: 1; text-align: center; padding: 9px; border-radius: 10px; font-size: 13px;
          border: 1px solid var(--border); color: var(--muted); text-decoration: none;
          display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;
        }
        .project-link:hover { color: var(--emerald); border-color: var(--emerald); }
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr; } }

        /* ---------- education ---------- */
        .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .edu-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 18px;
          padding: 30px; display: flex; gap: 18px;
        }
        .edu-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(124,135,255,0.12); color: var(--violet); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .edu-card h3 { font-size: 17px; margin: 0 0 6px; }
        .edu-degree { color: var(--emerald); font-size: 13.5px; margin-bottom: 6px; }
        .edu-period { font-family: 'JetBrains Mono', monospace; color: var(--faint); font-size: 12.5px; margin-bottom: 8px; }
        .edu-detail { color: var(--muted); font-size: 13.5px; }
        @media (max-width: 800px) { .edu-grid { grid-template-columns: 1fr; } }

        /* ---------- featured ---------- */
        .featured-list { display: flex; flex-direction: column; gap: 1px; background: var(--borderSoft); border: 1px solid var(--borderSoft); border-radius: 16px; overflow: hidden; }
        .featured-row {
          background: var(--bgAlt); padding: 24px 28px; display: flex; align-items: center;
          justify-content: space-between; gap: 20px; transition: background 0.2s ease; text-decoration: none; color: inherit;
        }
        .featured-row:hover { background: var(--surface); }
        .featured-row h3 { font-size: 16.5px; margin: 0 0 6px; }
        .featured-row p { color: var(--muted); font-size: 13.5px; margin: 0; line-height: 1.6; max-width: 640px; }
        .featured-arrow { color: var(--faint); flex-shrink: 0; transition: all 0.2s ease; }
        .featured-row:hover .featured-arrow { color: var(--emerald); transform: translate(3px,-3px); }

        /* ---------- contact ---------- */
        .contact-section { text-align: center; padding-bottom: 10vw; }
        .contact-card {
          max-width: 620px; margin: 0 auto; padding: 60px 40px; border-radius: 24px;
          border: 1px solid var(--border);
          background: radial-gradient(circle at 50% 0%, rgba(47,232,174,0.09), transparent 60%);
        }
        .contact-card h2 { font-size: clamp(26px, 3.2vw, 38px); margin: 0 0 14px; }
        .contact-card p { color: var(--muted); font-size: 15px; margin: 0 0 30px; }
        .contact-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        footer {
          border-top: 1px solid var(--borderSoft); padding: 26px 5vw; display: flex;
          align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
        }
        footer .nav-logo { font-size: 16px; }
        .footer-copy { color: var(--faint); font-size: 13px; }

        @media (prefers-reduced-motion: reduce) {
          .node, .pulse-dot { animation: none !important; }
        }
      `}</style>

      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <ExperienceAndPublications />
      {/* <Experience /> */}
      {/* <Publications /> */}
      <Research />
      <Awards />
      <Projects />
      <Education />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}