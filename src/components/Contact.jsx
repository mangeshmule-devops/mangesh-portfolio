import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 6%",
        background: "var(--bg-primary)",
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
          color: "#f43f5e",
        }}
      >
        Get In Touch
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "block",
            height: "3px",
            margin: "18px auto 0",
            background: "#f43f5e",
            borderRadius: "999px",
          }}
        />
      </motion.h2>

      {/* ===== GRID ===== */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
        }}
      >
        {/* ===== LEFT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={cardStyle}
        >
          <h3 style={cardTitle}>
            Let’s build something reliable & scalable
          </h3>

          <p style={descText}>
            I’m open to roles and collaborations in{" "}
            <strong>
              DevOps, Cloud Infrastructure, Linux Administration & Security
            </strong>.
            <br />
            If you value secure, production-ready systems — let’s connect.
          </p>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.95rem",
              marginBottom: "40px",
            }}
          >
            📍 Open to remote & on-site opportunities
          </p>

          {/* CONTACT INFO */}
          <h4 style={sectionTitle}>Contact Information</h4>

          <div style={contactRow}>
            <a
              href="mailto:mulemangesh09@gmail.com"
              style={iconButton}
              title="Send Email"
            >
              <FaEnvelope />
            </a>
            <span style={contactText}>mulemangesh09@gmail.com</span>
          </div>

          <div style={contactRow}>
            <a
              href="tel:+919175319509"
              style={iconButton}
              title="Call Phone"
            >
              <FaPhone />
            </a>
            <span style={contactText}>+91 9834639844</span>
          </div>

          {/* SOCIAL */}
          <h4 style={{ ...sectionTitle, marginTop: "36px" }}>
            Social Profiles
          </h4>

          <div style={socialRow}>
            <SocialIcon
              href="https://www.linkedin.com/in/mangesh-muley-877a26229/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://github.com/mangeshmule-devops"
              icon={<FaGithub />}
              label="GitHub"
            />
          </div>
        </motion.div>

        {/* ===== RIGHT : FORM ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={cardStyle}
        >
          <h3 style={cardTitle}>Send Me a Message</h3>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Your Email" style={inputStyle} />
            <textarea
              placeholder="Your Message"
              rows={5}
              style={{ ...inputStyle, resize: "none" }}
            />

            <button style={buttonStyle}>✈️ Send Message</button>
          </form>
        </motion.div>
      </div>

      {/* ===== RESPONSIVE ===== */}
      <style>
        {`
          @media (max-width: 900px) {
            #contact > div {
              grid-template-columns: 1fr;
              gap: 60px;
            }
          }
        `}
      </style>
    </section>
  );
}

/* ===== SMALL COMPONENT ===== */
function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={socialIcon}
    >
      {icon}
    </a>
  );
}

/* ===== STYLES ===== */

const cardStyle = {
  background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(15,23,42,1))",
  borderRadius: "22px",
  padding: "40px",
  border: "1px solid rgba(148,163,184,0.18)",
};

const cardTitle = {
  fontSize: "1.6rem",
  fontWeight: 600,
  color: "#f43f5e",
  marginBottom: "22px",
};

const sectionTitle = {
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#e5e7eb",
  marginBottom: "18px",
};

const descText = {
  color: "#cbd5f5",
  fontSize: "1.05rem",
  lineHeight: 1.8,
  marginBottom: "16px",
};

const contactRow = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "14px",
};

const iconButton = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(244,63,94,0.15)",
  color: "#f43f5e",
  fontSize: "1.1rem",
  border: "1px solid rgba(244,63,94,0.35)",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
};

const contactText = {
  color: "#e5e7eb",
  fontSize: "0.95rem",
};

const socialRow = {
  display: "flex",
  gap: "18px",
};

const socialIcon = {
  width: "46px",
  height: "46px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(244,63,94,0.12)",
  color: "#f43f5e",
  fontSize: "1.4rem",
  transition: "all 0.25s ease",
};

const inputStyle = {
  background: "#020617",
  border: "1px solid rgba(148,163,184,0.25)",
  borderRadius: "14px",
  padding: "14px 16px",
  color: "#e5e7eb",
  fontSize: "0.95rem",
};

const buttonStyle = {
  marginTop: "12px",
  background: "#f43f5e",
  border: "none",
  borderRadius: "16px",
  padding: "14px",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#fff",
  cursor: "pointer",
};
