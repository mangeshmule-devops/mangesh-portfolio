import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const clickLockRef = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      if (clickLockRef.current) return;

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", link: "about" },
    { label: "Skills", link: "skills" },
    { label: "Projects", link: "projects" },
    { label: "Education", link: "education" },
    { label: "Certifications", link: "certifications" },
    { label: "Contact", link: "contact" },
  ];

  const handleClick = (link) => {
    setActive(link); // ⚡ instant visual feedback
    clickLockRef.current = true;

    // release scroll lock quickly
    setTimeout(() => {
      clickLockRef.current = false;
    }, 150);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        background: "rgba(10,15,30,0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontSize: "1.55rem",
          fontWeight: 900,
          background:
            "linear-gradient(90deg,#ec4899,#3b82f6,#ef4444)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          userSelect: "none",
        }}
      >
        Mangesh
      </div>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "30px" }}>
        {navItems.map((item) => {
          const isActive = active === item.link;

          return (
            <a
              key={item.label}
              href={`#${item.link}`}
              onClick={() => handleClick(item.link)}
              style={{
                position: "relative",
                color: isActive ? "#3b82f6" : "#e5e7eb",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.4px",
                paddingBottom: "6px",

                // ⚡ ultra-fast feedback
                transition: "color 0.08s linear, transform 0.08s linear",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {item.label}

              {/* ACTIVE UNDERLINE */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: isActive ? "100%" : "0%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg,#ec4899,#3b82f6,#ef4444)",

                  // ⚡ faster underline
                  transition: "width 0.1s linear",

                  boxShadow: isActive
                    ? "0 0 10px rgba(239,68,68,0.65)"
                    : "none",
                }}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
