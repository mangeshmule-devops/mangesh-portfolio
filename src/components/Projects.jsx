import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* 🔹 IMPORT YOUR SCREENSHOTS */
import demo1 from "../assets/projects/dd-task-1.png";
import demo2 from "../assets/projects/dd-task-2.png";

const projectsData = [
  {
    title: "Automated Deployment of MEAN Stack Application",
    description:
      "Designed a one-click CI/CD pipeline to containerize and deploy a MEAN stack application on AWS using Docker and GitHub Actions.",
    tech: ["Docker", "GitHub Actions", "AWS EC2", "Linux", "Nginx Reverse Proxy"],
    github: "https://github.com/mangeshmule-devops/One-Click-Deployment",
    live: true,
  },
];

export default function Projects() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <>
      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        style={{
          padding: "110px 6% 160px", // ✅ extra bottom space
          background: "var(--bg-primary)",
          minHeight: "100vh",        // ✅ fills viewport (prevents Education peek)
          scrollMarginTop: "110px",  // ✅ navbar offset fix
        }}
      >
        {/* ===== HEADING ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "80px",
            fontSize: "clamp(2.6rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: "#3b82f6",
          }}
        >
          Projects

          {/* Animated underline */}
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "90px", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "block",
              height: "3px",
              margin: "18px auto 0",
              background: "#3b82f6",
              borderRadius: "999px",
            }}
          />
        </motion.h2>

        {/* ===== PROJECT CARD ===== */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              style={{
                maxWidth: "560px",
                width: "100%",
                padding: "32px",
                borderRadius: "20px",
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.08), rgba(15,23,42,1))",
                border: "1px solid rgba(59,130,246,0.35)",
                textAlign: "center",
              }}
            >
              {/* ===== PROJECT TITLE ===== */}
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: "#bfdbfe",
                  marginBottom: "8px",
                  fontSize: "1.35rem",
                }}
              >
                {project.title}

                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "60%", opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    display: "block",
                    height: "2px",
                    margin: "8px auto 0",
                    background: "#60a5fa",
                    borderRadius: "999px",
                  }}
                />
              </motion.h3>

              {/* ===== DESCRIPTION ===== */}
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: "0.95rem",
                  marginBottom: "22px",
                }}
              >
                {project.description}
              </p>

              {/* ===== TECH STACK ===== */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "26px",
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#e0f2fe",
                      background: "rgba(59,130,246,0.18)",
                      border: "1px solid rgba(59,130,246,0.45)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ===== BUTTONS ===== */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "10px 22px",
                    borderRadius: "999px",
                    background: "#0f172a",
                    color: "#ffffff",
                    textDecoration: "none",
                    border: "1px solid rgba(59,130,246,0.4)",
                  }}
                >
                  🔗 GitHub
                </a>

                <motion.button
                  onClick={() => setOpenDemo(true)}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(59,130,246,0)",
                      "0 0 16px rgba(59,130,246,0.7)",
                      "0 0 0 rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    background: "#3b82f6",
                    color: "#ffffff",
                  }}
                >
                  Live Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LIVE DEMO MODAL ================= */}
      <AnimatePresence>
        {openDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(2,6,23,0.75)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.35 }}
              style={{
                background: "#020617",
                padding: "28px",
                borderRadius: "20px",
                maxWidth: "900px",
                width: "90%",
                border: "1px solid rgba(59,130,246,0.4)",
              }}
            >
              <h3
                style={{
                  color: "#bfdbfe",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Live Application Preview
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <img
                  src={demo1}
                  alt="DD Task App - Add Task"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
                <img
                  src={demo2}
                  alt="DD Task App - Task List"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              </div>

              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <button
                  onClick={() => setOpenDemo(false)}
                  style={{
                    padding: "8px 22px",
                    borderRadius: "999px",
                    background: "#020617",
                    color: "#ffffff",
                    border: "1px solid rgba(59,130,246,0.4)",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
