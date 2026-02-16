import { motion } from "framer-motion";

/* ===== CERTIFICATE IMAGES ===== */
import rhcsaImg from "../assets/certifications/redhat.png";
import claImg from "../assets/certifications/linux-academy.png";

const certificationsData = [
  {
    title: "Red Hat Certified System Administrator - (RHCSA)",
    issuer: "Red Hat",
    date: "September 2025 - September 2028",
    credentialId: "250-137-585",
    image: rhcsaImg,
    verifyLink:
      "https://www.credly.com/badges/9dc23e77-10d7-4c47-91dc-87dad1eaaed3",
  },
  {
    title: "Certified Linux Administrator - (CLA)",
    issuer: "Linux Academy Australia",
    date: "July 2025 – July 2028",
    credentialId: "XZ9NW6MULFQ",
    image: claImg,
    verifyLink:
      "https://drive.google.com/file/d/1AcIBT_j_BYKJMu7stixGNBmFY7tRgVbm/view",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        paddingTop: "55px",        // 🔥 moved more UP
        paddingBottom: "110px",
        paddingLeft: "6%",
        paddingRight: "6%",
        scrollMarginTop: "75px",   // 🔥 tighter navbar offset
      }}
    >
      {/* ===== HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "45px",  // 🔥 slightly tighter
          fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #ef4444, #f87171)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Certifications
        <span
          style={{
            display: "block",
            width: "90px",
            height: "3px",
            margin: "16px auto 0",
            background: "#ef4444",
            borderRadius: "999px",
          }}
        />
      </motion.h2>

      {/* ===== GRID ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow:
                "0 0 0 1px rgba(239,68,68,0.35), 0 0 28px rgba(239,68,68,0.35)",
            }}
            transition={{ duration: 0.35 }}
            style={{
              maxWidth: "460px",
              width: "100%",
              padding: "24px",
              borderRadius: "22px",
              background:
                "linear-gradient(180deg, rgba(239,68,68,0.1), rgba(15,23,42,1))",
              border: "1px solid rgba(239,68,68,0.25)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* IMAGE */}
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "auto",
                objectFit: "contain",
                marginBottom: "16px",
                borderRadius: "8px",
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            />

            {/* TITLE */}
            <h3
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                fontWeight: 600,
                color: "#fecaca",
                marginBottom: "8px",
              }}
            >
              {cert.title}
            </h3>

            {/* ISSUER */}
            <p
              style={{
                color: "#fca5a5",
                fontSize: "0.95rem",
                marginBottom: "12px",
              }}
            >
              Issued by {cert.issuer} • {cert.date}
            </p>

            {/* CREDENTIAL */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "#fecaca",
                marginBottom: "18px",
              }}
            >
              Credential ID: {cert.credentialId}
            </p>

            {/* BUTTON */}
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                borderRadius: "999px",
                background: "#ef4444",
                color: "#ffffff",
                fontSize: "0.9rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              🔗 View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
