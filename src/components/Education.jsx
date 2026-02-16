import { motion } from "framer-motion";

const degreeCertificateUrl =
  "https://drive.google.com/file/d/1AcIBT_j_BYKJMu7stixGNBmFY7tRgVbm/view?usp=drive_link";

const educationData = [
  {
    level: "Undergraduate Degree",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institute: "CSMSS Chh. Shahu College of Engineering, Aurangabad",
    university:
      "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
    performance: "CGPA: 6.49 / 10.00",
    class: "First Class",
    year: "June 2025",
    certificate: true,
  },
  {
    level: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institute: "Maharashtra State Board",
    performance: "Percentage: 92.17%",
    class: "",
    year: "March 2021",
  },
  {
    level: "Secondary Education",
    degree: "Secondary School Certificate (SSC)",
    field: "General Studies",
    institute: "Maharashtra State Board",
    performance: "Percentage: 86.40%",
    class: "",
    year: "March 2019",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "80px 6% 100px",   // 🔥 reduced top padding
        scrollMarginTop: "90px",    // 🔥 tighter navbar offset
      }}
    >
      {/* ===== HEADING (NOW MATCHES SKILLS VISUALLY) ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "60px",   // 🔥 reduced gap below heading
          fontSize: "clamp(2.6rem, 4vw, 3.2rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education
        <span
          style={{
            display: "block",
            width: "90px",
            height: "3px",
            margin: "18px auto 0",
            background: "#3b82f6",
            borderRadius: "999px",
          }}
        />
      </motion.h2>

      {/* ===== GRID ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "34px",
        }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "28px",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(59,130,246,0.08), rgba(15,23,42,1))",
              border: "1px solid rgba(59,130,246,0.35)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              {edu.level}
            </p>

            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#bfdbfe",
                marginBottom: "6px",
              }}
            >
              {edu.degree}
            </h3>

            <p
              style={{
                color: "#93c5fd",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              {edu.field}
            </p>

            <p
              style={{
                color: "#e5e7eb",
                fontSize: "0.95rem",
                marginBottom: "6px",
              }}
            >
              {edu.institute}
            </p>

            {edu.university && (
              <p
                style={{
                  color: "#cbd5f5",
                  fontSize: "0.9rem",
                  marginBottom: "14px",
                }}
              >
                {edu.university}
              </p>
            )}

            <div
              style={{
                marginTop: "12px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(59,130,246,0.25)",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#e0f2fe",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  {edu.performance}
                </div>

                {edu.class && (
                  <div
                    style={{
                      color: "#bfdbfe",
                      fontSize: "0.85rem",
                    }}
                  >
                    Class: {edu.class}
                  </div>
                )}
              </div>

              <div
                style={{
                  color: "#93c5fd",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {edu.year}
              </div>
            </div>

            {edu.certificate && (
              <div style={{ marginTop: "18px" }}>
                <a
                  href={degreeCertificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "8px 20px",
                    borderRadius: "999px",
                    background: "#3b82f6",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  🎓 View Degree Certificate
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
