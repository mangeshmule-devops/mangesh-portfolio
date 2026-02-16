import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Linux",
    skills: [
      "Linux Distributions",
      "Access Control",
      "Process Management",
      "Package Management",
      "Networking",
      "Log Analysis",
      "Bash Scripting",
      "Services & Port Management",
    ],
  },
  {
    title: "Containerization & Orchestration",
    skills: [
      "Docker",
      "Podman",
      "containerd",
      "Buildah",
      "Docker Swarm",
      "Cluster Architecture & Management",
      "Kubernetes",
      "Elastic Kubernetes Service (EKS)",
      "Azure Kubernetes Service (AKS)",
    ],
  },
  {
    title: "CI / CD",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "Continuous Deployment",
      "Release Automation",
      "AWS CodePipeline",
      "Azure CI/CD",
    ],
  },
  {
    title: "Cloud (AWS)",
    skills: [
      "Cloud Architecture",
      "Compute Services",
      "Virtual Networking",
      "Identity & Access Management",
      "Storage Services",
      "Notification Services (SNS)",
    ],
  },
  {
    title: "Infrastructure as Code & Automation",
    skills: [
      "Configuration Management",
      "Provisioning Automation",
      "Terraform",
      "AWS CloudFormation",
      "Ansible",
      "Chef",
    ],
  },
  {
    title: "Web Application Penetration Testing",
    skills: [
      "OWASP Top 10",
      "Burp Suite",
      "Authentication & Authorization",
      "Business Logic Flaws",
      "Misconfiguration Testing",
      "Vulnerability Assessment",
      "Automation Testing",
    ],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(80px, 10vw, 100px) 6%",
      }}
    >
      {/* ===== SECTION HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "clamp(50px, 8vw, 80px)",
          fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Skills
        <span
          style={{
            display: "block",
            width: "90px",
            height: "3px",
            margin: "18px auto 0",
            background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
            borderRadius: "999px",
          }}
        />
      </motion.h2>

      {/* ===== RESPONSIVE GRID ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))", // 🔥 responsive fix
          gap: "clamp(20px, 4vw, 34px)",
        }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -18,
              scale: 1.06,
              boxShadow: [
                "0 0 0 1px rgba(139,92,246,0.35)",
                "0 0 0 1px rgba(236,72,153,0.9)",
                "0 0 0 1px rgba(139,92,246,0.35)",
              ],
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            style={{
              padding: "clamp(22px, 4vw, 28px)",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(139,92,246,0.08), rgba(17,22,42,1))",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
          >
            {/* ===== CARD HEADING ===== */}
            <motion.h3
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                marginBottom: "22px",
                fontSize: "clamp(1.2rem, 3vw, 1.35rem)",
                fontWeight: 600,
                color: "#c4b5fd",
                textAlign: "center",
              }}
            >
              {category.title}
              <span
                style={{
                  display: "block",
                  width: "46px",
                  height: "2px",
                  margin: "8px auto 0",
                  background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                  borderRadius: "999px",
                }}
              />
            </motion.h3>

            {/* ===== SKILLS ===== */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,0.9), rgba(236,72,153,0.9))",
                    color: "#ffffff",
                    boxShadow: "0 0 12px rgba(139,92,246,0.6)",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#e5e7eb",
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.28)",
                    cursor: "pointer",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
