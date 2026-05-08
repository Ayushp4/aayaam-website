import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function SectionHeading({
  kickerHi,
  kickerEn,
  hi,
  en,
  subHi,
  subEn,
  align = "center",
}: {
  kickerHi?: string;
  kickerEn?: string;
  hi: string;
  en: string;
  subHi?: string;
  subEn?: string;
  align?: "center" | "left";
}) {
  const { t } = useLang();
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`max-w-3xl ${a} mb-16`}
    >
      {(kickerHi || kickerEn) && (
        <div className="text-saffron uppercase tracking-[0.4em] text-xs mb-4 font-medium">
          {t(kickerHi || "", kickerEn || "")}
        </div>
      )}
      <h2 className="font-hindi-display text-4xl md:text-6xl text-maroon leading-[1.05] mb-3 text-balance">
        {t(hi, en)}
      </h2>
      {(subHi || subEn) && (
        <p className="font-serif-display italic text-lg text-saffron-deep/80">{t(subHi || "", subEn || "")}</p>
      )}
    </motion.div>
  );
}
