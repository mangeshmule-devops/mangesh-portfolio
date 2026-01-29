import { motion } from "framer-motion";
import "./FoldingPage.css";

export default function LightPage() {
  return (
    <motion.div
      initial={{ x: "110%", opacity: 0 }}
      animate={{ x: "-110%", opacity: [0, 0.25, 0] }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.5,
      }}
      className="light-page"
    />
  );
}
