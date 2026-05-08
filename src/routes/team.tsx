import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "टीम · Team — AAYAAM, NIT Trichy" },
      { name: "description", content: "Meet the people behind AAYAAM — the Hindi Literary & Cultural Club of NIT Trichy." },
    ],
  }),
  component: Team,
});

const CORE = [
  { roleHi: "अध्यक्ष", roleEn: "President", nameHi: "गगन", nameEn: "Gagan", quoteHi: "जहाँ शब्द ख़त्म होते हैं, वहाँ संगीत शुरू होता है।", quoteEn: "Where words end, music begins." },
  { roleHi: "मुख्य संयोजक", roleEn: "Organising Convenor", nameHi: "गर्गी", nameEn: "Gargi", quoteHi: "हर आयोजन एक कविता है।", quoteEn: "Every event is a poem in itself." },
  { roleHi: "उपाध्यक्ष", roleEn: "Vice President", nameHi: "महेश", nameEn: "Mahesh", quoteHi: "भाषा बहती है, रुकती नहीं।", quoteEn: "Language flows — it never stops." },
  { roleHi: "कोषाध्यक्ष", roleEn: "Treasurer", nameHi: "आर्यन", nameEn: "Aryan", quoteHi: "हर अंक के पीछे एक भाव है।", quoteEn: "Behind every number lies an emotion." },
  { roleHi: "महासचिव", roleEn: "General Secretary", nameHi: "प्रियंशु", nameEn: "Priyanshu", quoteHi: "लिखना ही जीना है।", quoteEn: "To write is to truly live." },
];

const HEADS = [
  { areaHi: "डिज़ाइन एवं विषय-वस्तु", areaEn: "Design & Content", nameHi: "कैलाश", nameEn: "Kailash" },
  { areaHi: "विपणन", areaEn: "Marketing", nameHi: "महेश", nameEn: "Mahesh" },
  { areaHi: "आयोजन", areaEn: "Events", nameHi: "पंकज", nameEn: "Pankaj" },
  { areaHi: "गुणवत्ता एवं वेब", areaEn: "Quality & WebOps", nameHi: "आयुष", nameEn: "Ayush" },
  { areaHi: "प्रचार-प्रसार", areaEn: "Publicity", nameHi: "आदित्य", nameEn: "Aditya" },
  { areaHi: "वीडियो", areaEn: "Video", nameHi: "आदित्य", nameEn: "Aditya" },
  { areaHi: "वातावरण", areaEn: "Ambience", nameHi: "मनीष", nameEn: "Manish" },
];

function Avatar({ initial, big = false }: { initial: string; big?: boolean }) {
  return (
    <div className={`relative ${big ? "w-40 h-40" : "w-28 h-28"} mx-auto`}>
      <div className="absolute inset-0 rounded-full bg-saffron-gradient blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cream-deep to-saffron/30 border-2 border-gold/40 grid place-items-center shadow-warm overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <span className={`font-hindi-display text-maroon ${big ? "text-7xl" : "text-5xl"} leading-none`}>{initial}</span>
      </div>
      <div className="absolute -inset-2 rounded-full border border-gold/20 group-hover:rotate-180 transition-transform duration-[1.5s]" />
    </div>
  );
}

function Team() {
  const { t, lang } = useLang();
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <SectionHeading
          kickerHi="मूल टीम"
          kickerEn="Core Team"
          hi="हमारे शब्दकार"
          en="The voices behind AAYAAM"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CORE.map((m, i) => {
            const name = t(m.nameHi, m.nameEn);
            const initial = lang === "hi" ? m.nameHi.charAt(0) : m.nameEn.charAt(0);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card rounded-3xl p-8 text-center border border-gold/20 shadow-warm hover:shadow-deep transition-all duration-500"
              >
                <div className="text-saffron text-[10px] tracking-[0.4em] uppercase mb-6">
                  {t(m.roleHi, m.roleEn)}
                </div>
                <Avatar initial={initial} big />
                <div className="font-hindi-display text-3xl text-maroon mt-6 mb-4">{name}</div>
                <div className="ornament-divider mb-4">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <p className="font-hindi text-sm text-ink/75 italic leading-relaxed">
                  “{t(m.quoteHi, m.quoteEn)}”
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading
          kickerHi="नेतृत्व"
          kickerEn="Leadership"
          hi="विभाग प्रमुख"
          en="Department Heads"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HEADS.map((h, i) => {
            const name = t(h.nameHi, h.nameEn);
            const initial = lang === "hi" ? h.nameHi.charAt(0) : h.nameEn.charAt(0);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card rounded-2xl p-6 text-center border border-gold/15 hover:border-saffron/50 transition-all duration-500 hover:-translate-y-1"
              >
                <Avatar initial={initial} />
                <div className="font-hindi-display text-2xl text-maroon mt-4 mb-1">{name}</div>
                <div className="text-[10px] text-saffron tracking-[0.3em] uppercase">
                  {t(h.areaHi, h.areaEn)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
