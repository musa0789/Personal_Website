import React from "react";

export default function Footer() {
  return (
    <footer 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        padding: "30px 0",
        position: "relative",
        clear: "both"
      }}
    >
      <div 
        style={{ 
          textAlign: "center", 
          fontFamily: "monospace", 
          color: "#8C9AB6", 
          fontSize: "14px",
          letterSpacing: "1px"
        }}
      >
        © 2026 Emran Khan Musa
      </div>
    </footer>
  );
}