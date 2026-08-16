import React, { useMemo, useRef, useState, useEffect } from "react";
import { TOKENS } from "../../constants/data";
import { useOnScreen } from "../../hooks/useOnScreen";

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(22px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function Constellation() {
  const nodes = useMemo(() => {
    const seeded = [
      [8, 18], [22, 9], [35, 24], [15, 42], [42, 12], [55, 30], [30, 55],
      [48, 48], [62, 15], [70, 40], [12, 65], [58, 62], [78, 22], [85, 55],
      [25, 75], [40, 80], [66, 78], [90, 35], [5, 40], [72, 65],
    ];
    return seeded.map(([x, y], i) => ({ id: i, x, y, r: 1.3 + ((i * 37) % 5) / 3 }));
  }, []);

  const edges = useMemo(() => {
    const list = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 22) list.push([nodes[i], nodes[j], dist]);
      }
    }
    return list;
  }, [nodes]);

  return (
    <svg className="constellation" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={a.x} y1={a.y} x2={b.x} y2={b.y}
          stroke={TOKENS.emerald}
          strokeWidth="0.12"
          opacity={Math.max(0.05, 0.22 - edges[i][2] / 220)}
        />
      ))}
      {nodes.map((n) => (
        <circle
          key={n.id}
          cx={n.x} cy={n.y} r={n.r * 0.35}
          fill={TOKENS.emerald}
          className="node"
          style={{ animationDelay: `${(n.id * 0.37) % 4}s` }}
        />
      ))}
    </svg>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} />;
}

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}