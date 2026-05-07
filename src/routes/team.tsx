import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
  { role: "President", hi: "अध्यक्ष", name: "गगन", en: "Gagan", quote: "जहाँ शब्द ख़त्म होते हैं, वहाँ संगीत शुरू होता है।" },
  { role: "OC", hi: "मुख्य संयोजक", name: "गर्गी", en: "Gargi", quote: "हर आयोजन एक कविता है।" },
  { role: "Vice President", hi: "उपाध्यक्ष", name: "महेश", en: "Mahesh", quote: "भाषा बहती है, रुकती नहीं।" },
  { role: "Treasurer", hi: "कोषाध्यक्ष", name: "आर्यन", en: "Aryan", quote: "हर अंक के पीछे एक भाव है।" },
  { role: "General Secretary", hi: "महासचिव", name: "प्रियंशु", en: "Priyanshu", quote: "लिखना ही जीना है।" },
];

const HEADS = [
  { area: "Design & Content", hi: "डिज़ाइन व विषय", name: "कैलाश", en: "Kailash" },
  { area: "Marketing", hi: "विपणन", name: "महेश", en: "Mahesh" },
  { area: "Events", hi: "आयोजन", name: "पंकज", en: "Pankaj" },
  { area: "Quality & WebOps", hi: "गुणवत्ता व वेब", name: "आयुष", en: "Ayush" },
  { area: "Publicity", hi: "प्रचार", name: "आदित्य", en: "Aditya" },
  { area: "Video", hi: "वीडियो", name: "आदित्य", en: "Aditya" },
  { area: "Ambience", hi: "वातावरण", name: "मनीष", en: "Manish" },
];

function Avatar({ name, big = false }: { name: string; big?: boolean }) {
  // Use first Devanagari character as avatar since we don't have photos
  const initial = name.charAt(0);
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
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <SectionHeading kicker="टीम · Core Team" hi="हमारे शब्दकार" en="The voices behind AAYAAM" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CORE.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card rounded-3xl p-8 text-center border border-gold/20 shadow-warm hover:shadow-deep transition-all duration-500"
            >
              <div className="text-saffron text-[10px] tracking-[0.4em] uppercase mb-6">{m.role}</div>
              <Avatar name={m.name} big />
              <div className="font-hindi-display text-3xl text-maroon mt-6 mb-1">{m.name}</div>
              <div className="font-serif-display italic text-sm text-saffron-deep mb-4">{m.hi}</div>
              <div className="ornament-divider mb-4">
                <span className="text-gold text-sm">✦</span>
              </div>
              <p className="font-hindi text-sm text-ink/70 italic leading-relaxed">“{m.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading kicker="नेतृत्व · Heads" hi="विभाग प्रमुख" en="Department Heads" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HEADS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card rounded-2xl p-6 text-center border border-gold/15 hover:border-saffron/50 transition-all duration-500 hover:-translate-y-1"
            >
              <Avatar name={h.name} />
              <div className="font-hindi-display text-2xl text-maroon mt-4 mb-1">{h.name}</div>
              <div className="text-[10px] text-saffron tracking-[0.3em] uppercase mb-1">{h.area}</div>
              <div className="font-hindi text-xs text-ink/60">{h.hi}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
