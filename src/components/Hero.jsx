import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

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
        className="container"
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap", // 🔥 allows stacking on mobile
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            maxWidth: "720px",
            textAlign: "center",
          }}
        >
          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4.8rem)", // 🔥 responsive
              fontWeight: 900,
              background:
                "linear-gradient(90deg,#ec4899,#3b82f6,#ef4444)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Mangesh
          </motion.h1>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontSize: "clamp(1rem, 4vw, 1.3rem)", // 🔥 responsive
              color: "#dbeafe",
            }}
          >
            DevOps Engineer | Cloud | Linux | Security
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            style={{
              marginTop: "12px",
              fontSize: "clamp(0.95rem, 3.5vw, 1.15rem)", // 🔥 responsive
              color: "#94a3b8",
            }}
          >
            I build scalable, automated and secure cloud systems & CI/CD pipelines.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{
              marginTop: "34px",
              display: "flex",
              flexWrap: "wrap", // 🔥 stack on mobile
              gap: "18px",
              justifyContent: "center",
            }}
          >
            <motion.a
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
            </motion.a>

            <motion.a
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
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE – HEXAGON */}
        <motion.div
          animate={{ scale: [1, 1.045, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "clamp(220px, 60vw, 340px)", // 🔥 responsive
            height: "clamp(220px, 60vw, 340px)",
            padding: "6px",
            background:
              "linear-gradient(135deg,#ec4899,#3b82f6)",
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
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

          {/* RED SCAN ANIMATION (UNCHANGED) */}
          <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
