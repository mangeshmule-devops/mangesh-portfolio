import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import "./Hero.css";

const Motion = motion;

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "70px",
      }}
    >
      <div
        className="container hero-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          className="hero-left"
          style={{
            maxWidth: "720px",
            textAlign: "center",
            transform: "translateX(-120px)",
          }}
        >
          {/* NAME */}
          <Motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "4.8rem",
              fontWeight: 900,
              background:
                "linear-gradient(90deg,#ec4899,#3b82f6,#ef4444)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Mangesh
          </Motion.h1>

          {/* ROLE */}
          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontSize: "1.3rem",
              color: "#dbeafe",
            }}
          >
            DevOps Engineer | Cloud | Linux | Security
          </Motion.p>

          {/* DESCRIPTION */}
          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            style={{
              marginTop: "12px",
              fontSize: "1.15rem",
              color: "#94a3b8",
            }}
          >
            I build scalable, automated and secure cloud systems & CI/CD pipelines.
          </Motion.p>

          {/* BUTTONS */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{
              marginTop: "34px",
              display: "flex",
              gap: "18px",
              justifyContent: "center",
            }}
          >
            <Motion.a
              href="#about"
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 10px 35px rgba(236,72,153,0.55)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                background: "#ec4899",
                color: "#ffffff",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Know More ↓
            </Motion.a>

            <Motion.a
              href="https://drive.google.com/file/d/1idLdPeeoRGibkYcXsn8w1NHoP5q9jM-F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 10px 35px rgba(59,130,246,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                border: "2px solid #3b82f6",
                color: "#bfdbfe",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View Resume 📄
            </Motion.a>
          </Motion.div>
        </div>

        {/* RIGHT IMAGE – HEXAGON */}
        <Motion.div
          className="hero-right"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "340px",
            height: "340px",
            padding: "6px",
            marginRight: "80px",
            background:
              "linear-gradient(135deg,#ec4899,#3b82f6)",
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* IMAGE */}
          <img
            src={profileImg}
            alt="Mangesh"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            }}
          />

          {/* RED SCAN ANIMATION */}
          <Motion.div
            animate={{ y: ["-120%", "120%", "-120%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(239,68,68,0.35) 50%, transparent 100%)",
              mixBlendMode: "screen",
              pointerEvents: "none",
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            }}
          />
        </Motion.div>
      </div>
    </section>
  );
}
