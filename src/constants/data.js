import { Brain, Languages, Radar } from "lucide-react";

import devImg from "../assets/featured/c1.jpg";
import digitalMarketingImg from "../assets/featured/c2.jpg";
import eeeFestImg from "../assets/featured/c3.png";
import researchPaperImg from "../assets/featured/c4.jpg";
import icccntImg from "../assets/featured/c5.png";
import carromChampionImg from "../assets/featured/c6.png";


export const TOKENS = {
  bg: "#060A12",
  bgAlt: "#0A1120",
  surface: "#0E1830",
  surface2: "#122040",
  border: "#1E2C48",
  borderSoft: "#16223A",
  text: "#EAF1FB",
  textMuted: "#8C9AB6",
  textFaint: "#5C6A87",
  emerald: "#2FE8AE",
  emeraldDim: "#1B8F6E",
  violet: "#7C87FF",
  gold: "#F4B942",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience-publications", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Honors & Awards" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "featured", label: "Featured" },
];

export const EXPERIENCE = [
  {
    date: "2026 — Present",
    tag: "Full-time",
    title: "Software Frontend Developer",
    org: "Debonair Group",
    points: [
    "Designed and developed responsive, user-friendly frontend interfaces for large-scale ERP systems, built for real-world business use",
    "Worked closely with designers to turn Figma files into pixel-accurate, production-ready UI",
    ],
  },
  {
    date: "2024 — 2026",
    tag: "Freelance",
    title: "Web Developer",
    org: "Self-employed",
    points: [
      "Delivered full websites end-to-end for small businesses, from planning to launch",
      "Handled everything from layout and styling to deployment and post-launch fixes",
    ],
  },
];

export const PUBLICATIONS = [
  {
    date: "Feb 2025",
    tag: "Journal Article",
    title: "Reducing False Alarms in Fire Detection Systems with YOLOv11 and Multi-Sensor Validation",
    venue: "Iranian Journal of Electrical and Electronic Engineering (IJEEE)",
    points: [
      "Proposed a three-layer verification system for indoor fire detection",
      "Combined YOLOv11 with multi-sensor validation for 0.979 precision and 0.971 recall",
    ],
  },
  {
    date: "July 2025",
    tag: "Conference Paper",
    title: "ResNet50 for Glaucoma Detection: Hyperparameter Tuned Transfer Learning on Retinal OCT Images",
    venue: "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT), IIT Indore",
    points: [
      "Built an automated glaucoma detection pipeline using transfer learning",
      "Reached 97.62% specificity and 95.33% sensitivity through selective hyperparameter tuning",
    ],
  },
];

export const RESEARCH_INTERESTS = [
  {
    icon: Brain,
    title: "Machine Learning",
    body: "Classical algorithms and deep learning architectures applied to real, messy problems rather than clean benchmarks.",
  },
  {
    icon: Radar,
    title: "RAG Systems",
    body: "Multimodal retrieval-augmented generation that grounds model output in real, checkable sources.",
  },
  {
    icon: Languages,
    title: "Natural Language Processing",
    body: "Low-resource language modeling — building NLP that actually works for underrepresented languages like Bangla.",
  },
];

export const AWARDS = [
{
    date: "Apr 2026",
    tag: "Project Showcase",
    title: "Champion — ULAB EEE Fest Project Showcasing",
    body: "Secured 1st place championship at the ULAB EEE Fest 2026 Project Showcasing with a team prototype presentation.",
  },
  {
    date: "Sept 2025",
    tag: "AI & Data Science",
    title: "Honorable Mention — Blockchain Olympiad Bangladesh (BCOLBD) 2025",
    body: "Officially nominated to represent Bangladesh at the International Data Science Olympiad (IDSOL 2025) in Hong Kong. Awarded Honorable Mention for the project EXIREN.",
  },
  {
    date: "July 2025",
    tag: "Hackathon",
    title: "1st Runner-Up — ULAB CSE FEST Hackathon",
    body: "Achieved the 1st Runner-Up position competing among multiple teams in the idea formulation, prototyping, and presentation phases.",
  },
  {
    date: "2025",
    tag: "Sports / Athletics",
    title: "Silver Medal (100m Sprint) — ULAB CSE Annual Sports",
    body: "Won the silver medal in the 100m sprint competition during the annual departmental sports event.",
  },
  {
    date: "2025",
    tag: "Sports / Indoor",
    title: "1st Runner-Up — Inter-University Carrom Championship",
    body: "Secured the 1st Runner-Up position representing the university in a highly competitive inter-university carrom tournament.",
  },
  {
    date: "2024",
    tag: "Sports / Indoor",
    title: "Carrom Champion — EEE Indoor Games Tournament",
    body: "Emerged as the first carrom champion in the departmental indoor games tournament.",
  },
  {
    date: "2023",
    tag: "Mathematics",
    title: "12th Position — ULAB Math Olympiad",
    body: "Secured the 12th position overall in the university-wide mathematics olympiad competition.",
  }
];

export const PROJECTS = [
  {
    title: "AlterUSE",
    desc: "AlterUSE — a platform designed to promote sustainable recycling practices and bridge the gap between individuals and businesses in managing recyclable materials. The vision is to deploy autonomous collection booths across the city, allowing users to recycle their products conveniently while incentivizing them through a points-based system. Businesses can source recyclable materials through the platform, enabling a circular economy.",
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "Flask"],
    github: "https://github.com/musa0789/AlterUse",
    demo: "https://alteruse.vercel.app/",
  },
  {
    title: "ShunnoWaste",
    desc: "ShunnoWaste is designed as a smart recycling management system that integrates digital tracking, automated inventory management, and a structured rewards mechanism to encourage recycling. By leveraging software-driven automation, this system ensures efficient material flow between users and businesses while promoting sustainable practices.",
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL"],
    github: "https://github.com/musa0789/ShunnoWaste",
    demo: "https://shunno-waste.vercel.app/",
  },
  {
    title: "Club_Registration",
    desc: "ULAB Club Membership Registration System An interactive web application for managing university club memberships. It allows students to register for clubs, view club details, and manage their memberships efficiently.",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/musa0789/Club_Registration",
    demo: "#",
  },
];

export const EDUCATION = [
  {
    place: "University of Liberal Arts Bangladesh (ULAB)",
    degree: "BSc in Computer Science and Engineering (CSE)",
    period: "Oct 2022 — Present",
    detail: "CGPA 3.68 / 4.00",
  },
  {
    place: "Police Lines School, Rangpur",
    degree: "Higher Secondary Certificate — Science",
    period: "Jul 2018 — Sept 2020",
    detail: "Result 5.00 / 5.00",
  },
];

export const FEATURED = [
 {
    title: "Web Development Bootcamp Certificate",
    body: "Successfully completed a two-week Web Development Bootcamp by bongoDev, focused on practical web development skills and hands-on learning.",
    link: "#",
    image: devImg, 
  },
  {
  title: "Digital Marketing Workshop Certificate",
  body: "Successfully participated in a 6-hour Digital Marketing 03 Days Workshop by WIT Institute, focused on practical digital marketing concepts and learning.",
  link: "#",
  image: digitalMarketingImg,
  },
  {
     title: "EEE FEST 2026 Project Showcasing Certificate",
  body: "Received a Certificate of Excellence for participating in project showcasing at EEE FEST 2026 with the project “IoT Based Smart Helmet for Advanced Safety” at the University of Liberal Arts Bangladesh (ULAB).",
  link: "#",
  image: eeeFestImg,
  },
  {
  title: "Research Paper Writing and Publication Certificate",
  body: "Successfully participated in the session titled “Research Paper Writing and Publication,” organized by the ULAB Rotaract Club on August 3, 2025.",
  link: "#",
  image: researchPaperImg,
  },
  {
  title: "ICCCNT 2025 Conference Paper Presentation Certificate",
  body: "Successfully presented a research paper titled “ResNet50 for Glaucoma Detection: Hyperparameter Tuned Transfer Learning on Retinal OCT Images” at the 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), held at IIT Indore, India.",
  link: "#",
  image: icccntImg,
  },
    {
   title: "EEE Indoor Games Carrom Champion Certificate",
  body: "Awarded as the Champion in the Carrom competition at the EEE Indoor Games Tournament, organized by the ULAB EEE Department in partnership with the ULAB Electronics and Robotics Club on June 27, 2024.",
  link: "#",
  image: carromChampionImg,
  },
];