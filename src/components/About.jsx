import { motion } from "framer-motion";

/* ---------- LOGO IMPORTS ---------- */
import lookaLogo from "../assets/hallOfFame/looka.png";
import bayerLogo from "../assets/hallOfFame/bayer.png";
import sapLogo from "../assets/hallOfFame/sap.png";
import doeLogo from "../assets/hallOfFame/doe.png";
import springerLogo from "../assets/hallOfFame/springer.png";
import lenovoLogo from "../assets/hallOfFame/lenovo.png";
import nebraskaLogo from "../assets/hallOfFame/nebraska.png";
import ferrariLogo from "../assets/hallOfFame/ferrari.png";
import honeywellLogo from "../assets/hallOfFame/honeywell.png";
import accentureLogo from "../assets/hallOfFame/accenture.png";
import dfatLogo from "../assets/hallOfFame/dfat.png";

/* ---------- MAIN ---------- */
const LARGE_LOGO_COMPANIES = [
  "Looka",
  "University of Nebraska",
  "Bayer",
  "Ferrari",
  "U.S. Department of Energy",
];

const isLargeLogo = (name) => LARGE_LOGO_COMPANIES.includes(name);

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{
        padding: "70px 6% 90px",      // ⬆ pulled up
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "100px",     // ⬆ better anchor alignment
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%" }}>

        {/* ================= ABOUT HEADER ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "16px",     // ⬆ tighter
            background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto 44px",   // ⬆ reduced
            textAlign: "center",
            fontSize: "1.15rem",
            color: "#94a3b8",
            lineHeight: 1.7,
          }}
        >
          I am a DevOps Engineer with a strong foundation in Linux system
          administration, cloud infrastructure, and CI/CD automation. Alongside
          DevOps practices, I bring hands-on experience in Web Application
          Penetration Testing, enabling me to build scalable systems with a
          security-first mindset and support DevSecOps-driven environments.
        </motion.p>

        {/* ================= ABOUT CARDS ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",            // ⬆ slightly tighter
            marginTop: "24px",      // ⬆ pulled up
          }}
        >
          <AboutCard
            title="DevOps"
            items={[
              "End-to-end CI/CD pipeline design and automation",
              "Infrastructure automation to minimize manual provisioning",
              "Containerized application management across environments",
              "Monitoring and logging for reliability and faster recovery",
              "Collaboration with teams to improve deployment stability",
            ]}
          />

          <AboutCard
            title="Linux & System Administration"
            items={[
              "Linux system administration with focus on stability and security",
              "User, group, permission, and access management",
              "System services, logging, and scheduled job configuration",
              "System-level troubleshooting and issue resolution",
              "Patching and package management for system updates",
            ]}
          />

          <AboutCard
            title="Application Security (Web & Infrastructure)"
            items={[
              "Manual security assessments with ~3 years of experience",
              "Vulnerability identification and validation",
              "Authentication, authorization, and session testing",
              "Responsible security disclosure",
              "Security posture improvement guidance",
            ]}
          />
        </div>

        {/* ================= SECURITY HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            marginTop: "130px",      // ⬆ pulled UP (was 140+)
            padding: "18px 22px",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "14px",
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.95))",
            border: "1px solid rgba(148,163,184,0.12)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg,#22d3ee,#a78bfa,#f472b6)",
              borderTopLeftRadius: "14px",
              borderTopRightRadius: "14px",
            }}
          />

          <h3
            style={{
              textAlign: "center",
              fontSize: "1.45rem",
              fontWeight: 800,
              marginBottom: "6px",
              background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Security Achievements & Hall of Fame
          </h3>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "0.9rem",
            }}
          >
            Recognized by global organizations for responsible security disclosures.
          </p>
        </motion.div>

        {/* ================= HALL OF FAME GRID ================= */}
        {/* ================= HALL OF FAME GRID ================= */}
<div
  style={{
    marginTop: "130px",      // ✅ increased gap (clean & balanced)
    maxWidth: "1040px",
    marginLeft: "auto",
    marginRight: "auto",
    borderLeft: "1px solid rgba(255,255,255,0.18)",
    borderRight: "1px solid rgba(255,255,255,0.18)",
    paddingLeft: "32px",
    paddingRight: "32px",
  }}
>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
              gap: "22px",
            }}
          >
            {HALL_OF_FAME.map((company, idx) => (
              <motion.a
                key={idx}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                style={{
                  width: "140px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.35)",
                  boxShadow:
                    "0 10px 22px rgba(0,0,0,0.55), inset 0 2px 3px rgba(255,255,255,0.35)",
                }}
              >
                <motion.img
                  src={company.logo}
                  alt={company.name}
                  style={{
                    maxWidth: isLargeLogo(company.name) ? "92%" : "88%",
                    maxHeight: isLargeLogo(company.name) ? "78%" : "75%",
                    objectFit: "contain",
                    zIndex: 1,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT CARD ---------- */
function AboutCard({ title, items }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.2 }}
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(2,6,23,0.9))",
        border: "1px solid rgba(148,163,184,0.15)",
        borderRadius: "14px",
        padding: "32px",
        minHeight: "280px",   // ⬆ slightly shorter
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.45rem",
          fontWeight: 700,
          marginBottom: "20px",
          background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </h3>

      {items.map((item, idx) => (
        <p
          key={idx}
          style={{
            color: "#94a3b8",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            marginBottom: "8px",
          }}
        >
          • {item}
        </p>
      ))}
    </motion.div>
  );
}

/* ---------- HALL OF FAME DATA ---------- */
const HALL_OF_FAME = [
  { name: "Looka", logo: lookaLogo, url: "https://looka.com/vulnerability-disclosure-program/" },
  { name: "University of Nebraska", logo: nebraskaLogo, url: "https://nebraska.edu/offices-policies/its/vulnerability-disclosure-program/hall-of-fame" },
  { name: "Bayer", logo: bayerLogo, url: "https://www.bayer.com/en/cybersecurity-hall-of-fame" },
  { name: "Ferrari", logo: ferrariLogo, url: "https://www.ferrari.com/en-EN/hall-of-fame-responsible-disclosure-programme" },
  { name: "Springer Nature", logo: springerLogo, url: "https://www.springernature.com/gp/info/disclosure" },
  { name: "Lenovo", logo: lenovoLogo, url: "https://drive.google.com/file/d/14pasjMKwJDllbv95DvEF6qE-ZyJE-gPm/view" },
  { name: "SAP", logo: sapLogo, url: "https://support.sap.com/en/my-support/knowledge-base/security-notes-news/credits-for-security-researchers.html" },
  { name: "U.S. Department of Energy", logo: doeLogo, url: "https://doe.responsibledisclosure.com/hc/en-us/articles/360052066474-Acknowledgments" },
  { name: "Honeywell", logo: honeywellLogo, url: "https://www.honeywell.com/us/en/product-security#acknowledgments" },
  { name: "Accenture", logo: accentureLogo, url: "https://accenture.responsibledisclosure.com/hc/en-us/articles/360040573233-Acknowledgments" },
  { name: "DFAT", logo: dfatLogo, url: "https://www.dfat.gov.au/about-us/about-this-website/vulnerability-disclosure-policy" },
];
