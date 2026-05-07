import { motion } from "framer-motion";

export function SectionHeading({ kicker, hi, en, align = "center" }: { kicker?: string; hi: string; en: string; align?: "center" | "left" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`max-w-3xl ${a} mb-16`}
    >
      {kicker && (
        <div className="text-saffron uppercase tracking-[0.4em] text-xs mb-4 font-medium">{kicker}</div>
      )}
      <h2 className="font-hindi-display text-5xl md:text-7xl text-maroon leading-[1.05] mb-3 text-balance">
        {hi}
      </h2>
      <p className="font-serif-display italic text-lg text-saffron-deep/80">{en}</p>
    </motion.div>
  );
}
