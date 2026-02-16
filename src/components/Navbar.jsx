import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
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
    setActive(link);
    clickLockRef.current = true;
    setMenuOpen(false);

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
        padding: "0 clamp(20px, 6vw, 80px)", // 🔥 responsive padding
        background: "rgba(10,15,30,0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontSize: "clamp(1.2rem, 4vw, 1.55rem)",
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

      {/* DESKTOP NAV */}
      <div
        style={{
          display: window.innerWidth > 768 ? "flex" : "none",
          gap: "30px",
        }}
      >
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
                paddingBottom: "6px",
                transition: "0.2s",
              }}
            >
              {item.label}

              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: isActive ? "100%" : "0%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg,#ec4899,#3b82f6,#ef4444)",
                  transition: "width 0.2s",
                }}
              />
            </a>
          );
        })}
      </div>

      {/* HAMBURGER (Mobile) */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: window.innerWidth <= 768 ? "flex" : "none",
          flexDirection: "column",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span style={{ width: "25px", height: "3px", background: "#fff" }} />
        <span style={{ width: "25px", height: "3px", background: "#fff" }} />
        <span style={{ width: "25px", height: "3px", background: "#fff" }} />
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            width: "100%",
            background: "#0b0f1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0",
            gap: "18px",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.link}`}
              onClick={() => handleClick(item.link)}
              style={{
                color: "#e5e7eb",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
