import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:mulemangesh09@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "60px",
        paddingBottom: "110px",
        paddingLeft: "6%",
        paddingRight: "6%",
        scrollMarginTop: "80px",
      }}
    >
      {/* ===== HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "clamp(25px, 4vw, 45px)", // 🔥 reduced gap
          fontSize: "clamp(2.3rem, 5vw, 3.2rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #f43f5e, #fb7185)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Get In Touch
        <span
          style={{
            display: "block",
            width: "90px",
            height: "3px",
            margin: "16px auto 0",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
        }}
      >
        {/* LEFT CARD */}
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
              marginBottom: "36px",
            }}
          >
            📍 Open to remote & on-site opportunities
          </p>

          <h4 style={sectionTitle}>Contact Information</h4>

          <div style={contactRow}>
            <a href="mailto:mulemangesh09@gmail.com" style={iconButton}>
              <FaEnvelope />
            </a>
            <span style={contactText}>
              mulemangesh09@gmail.com
            </span>
          </div>

          <div style={contactRow}>
            <a href="tel:+919834639844" style={iconButton}>
              <FaPhone />
            </a>
            <span style={contactText}>
              +91 9834639844
            </span>
          </div>

          <h4 style={{ ...sectionTitle, marginTop: "32px" }}>
            Social Profiles
          </h4>

          <div style={socialRow}>
            <SocialIcon
              href="https://www.linkedin.com/in/mangesh-muley-877a26229/"
              icon={<FaLinkedin />}
            />
            <SocialIcon
              href="https://github.com/mangeshmule-devops"
              icon={<FaGithub />}
            />
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={cardStyle}
        >
          <h3 style={cardTitle}>Send Me a Message</h3>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <input name="name" placeholder="Your Name" style={inputStyle} required />
            <input name="email" type="email" placeholder="Your Email" style={inputStyle} required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              style={{ ...inputStyle, resize: "none" }}
              required
            />

            <button type="submit" style={buttonStyle}>
              ✈️ Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== SMALL COMPONENT ===== */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
  padding: "clamp(24px, 4vw, 40px)",
  border: "1px solid rgba(148,163,184,0.18)",
};

const cardTitle = {
  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
  fontWeight: 600,
  color: "#f43f5e",
  marginBottom: "20px",
};

const sectionTitle = {
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "#e5e7eb",
  marginBottom: "16px",
};

const descText = {
  color: "#cbd5f5",
  fontSize: "1rem",
  lineHeight: 1.7,
  marginBottom: "14px",
};

const contactRow = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "14px",
  flexWrap: "wrap",
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
};

const contactText = {
  color: "#e5e7eb",
  fontSize: "0.95rem",
  wordBreak: "break-word",
};

const socialRow = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
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
  marginTop: "10px",
  background: "#f43f5e",
  border: "none",
  borderRadius: "16px",
  padding: "14px",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#fff",
  cursor: "pointer",
};
