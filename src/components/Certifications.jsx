import { motion } from "framer-motion";
import "./Certifications.css";

/* ===== CERTIFICATE IMAGES (DO NOT RENAME) ===== */
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
        padding: "110px 6% 180px", // ✅ extra bottom space (prevents clipping)
        background: "var(--bg-primary)",
        overflow: "visible",
      }}
    >
      {/* ===== HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "90px",
          fontSize: "clamp(2.6rem, 4vw, 3.2rem)",
          fontWeight: 700,
          color: "#ef4444",
        }}
      >
        Certifications
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "block",
            height: "3px",
            margin: "18px auto 0",
            background: "#ef4444",
            borderRadius: "999px",
          }}
        />
      </motion.h2>

      {/* ===== GRID ===== */}
      <div
        className="certifications-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "60px",
          justifyItems: "center",
        }}
      >
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10, // ✅ reduced hover lift
              scale: 1.03,
              boxShadow:
                "0 0 0 1px rgba(239,68,68,0.35), 0 0 32px rgba(239,68,68,0.45)",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              maxWidth: "460px",
              width: "100%",
              padding: "28px", // ✅ reduced padding
              borderRadius: "22px",
              background:
                "linear-gradient(180deg, rgba(239,68,68,0.1), rgba(15,23,42,1))",
              border: "0.75px solid rgba(148,163,184,0.25)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* ===== CERTIFICATE IMAGE ===== */}
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "contain",
                marginBottom: "14px",
                borderRadius: "6px",
                border: "1px solid rgba(148,163,184,0.35)",
                background: "transparent",
              }}
            />

            {/* ===== TITLE ===== */}
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 600,
                color: "#fecaca",
                marginBottom: "8px",
              }}
            >
              {cert.title}
            </h3>

            {/* ===== ISSUER ===== */}
            <p
              style={{
                color: "#fca5a5",
                fontSize: "1rem",
                marginBottom: "16px",
              }}
            >
              Issued by {cert.issuer} • {cert.date}
            </p>

            {/* ===== CREDENTIAL ===== */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#fecaca",
                marginBottom: "18px",
              }}
            >
              Credential ID: {cert.credentialId}
            </p>

            {/* ===== BUTTON ===== */}
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 28px",
                borderRadius: "999px",
                background: "#ef4444",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 500,
                textDecoration: "none",
                marginTop: "12px", // ✅ no auto push
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
