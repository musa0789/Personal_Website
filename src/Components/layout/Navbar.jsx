import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/data";

import myLogo from "../../assets/Navber/EKmusa.png"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav 
        className="nav" 
        style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100%", 
          zIndex: 100,
          background: scrolled ? "rgba(6,10,18,0.95)" : "rgba(6,10,18,0.72)",
          backdropFilter: "blur(14px)",
          transition: "background 0.3s ease"
        }}
      >
        
        <div className="nav-logo" onClick={() => scrollTo("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <img 
            src={myLogo} 
            alt="Emran Logo" 
            style={{ height: "26px", width: "auto", objectFit: "contain" }} 
          />
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        
        <div className="nav-right">
          <a className="social-btn" href="https://www.linkedin.com/in/emran-khan-musa-470549264/" aria-label="LinkedIn"><FaLinkedin size={15} /></a>
          <a className="social-btn" href="https://www.facebook.com/emran.khan.musa.2024" aria-label="Facebook"><FaFacebook size={15} /></a>
          <a className="social-btn" href="https://github.com/musa0789" aria-label="GitHub"><FaGithub size={15} /></a>
          <a className="social-btn" href="https://www.instagram.com/emrankhanmusa/" aria-label="Instagram"><FaInstagram size={15} /></a>
          <button className="btn-solid" onClick={() => scrollTo("contact")}>
            <span className="long">Let's Connect</span>
            <span className="short" style={{ display: "none" }}>Connect</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" style={{ position: "fixed", top: "72px", zIndex: 99, width: "100%" }}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
          ))}
        </div>
      )}
    </>
  );
}