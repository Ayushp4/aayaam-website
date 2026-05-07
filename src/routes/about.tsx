import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import gallery2 from "@/assets/gallery/gallery2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "परिचय · About — AAYAAM, NIT Trichy" },
      { name: "description", content: "AAYAAM was founded in 2006 at NIT Trichy. From Madhushala to Festember, our story is one of Hindi finding its voice in a non-Hindi land." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading kicker="परिचय · Our Story" hi="हमारी कहानी, हमारी आवाज़" en="Where our journey began" />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="font-hindi-display text-7xl text-gradient-saffron leading-none">२००६</div>
            <p className="font-hindi text-lg text-ink/85 leading-relaxed">
              आयाम की शुरुआत वर्ष <strong>2006</strong> में हुई — एक छोटे से सपने के साथ कि एक दक्षिण भारतीय संस्थान में हिंदी की मशाल जलाई जाए। हमारी पहली पहचान बनी “<em>मधुशाला</em>” — हरिवंश राय बच्चन की अमर कविता को समर्पित एक काव्य संध्या।
            </p>
            <p className="font-hindi text-lg text-ink/85 leading-relaxed">
              समय के साथ यह दीप एक उत्सव बन गया। <strong>Festember</strong> के मंच पर हमने हिंदी को नया आकार दिया — कविता पाठ, शायरी, नाटक और साहित्यिक प्रतियोगिताओं के रूप में।
            </p>
            <p className="font-serif-display italic text-base text-saffron-deep">
              From Madhushala to centerstage at Festember — Aayaam has always believed that Hindi is not a language of the past, but a heartbeat of the present.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-deep"
          >
            <img src={gallery2} alt="Hindi literature" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-cream">
              <div className="font-hindi-display text-3xl mb-2">मधुशाला</div>
              <div className="font-serif-display italic text-sm text-gold">where it all began</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-saffron-gradient rounded-3xl p-12 md:p-20 text-cream overflow-hidden mb-32"
        >
          <div className="absolute -top-20 -right-10 font-hindi-display text-[20rem] leading-none opacity-10 select-none">“</div>
          <div className="relative max-w-3xl">
            <div className="text-cream/80 uppercase tracking-[0.4em] text-xs mb-6">हमारा संकल्प</div>
            <p className="font-hindi-display text-3xl md:text-5xl leading-snug mb-6">
              “एक ग़ैर-हिंदी माहौल में, हमने हिंदी को घर बनाया।”
            </p>
            <p className="font-serif-display italic text-lg text-cream/90">
              In a campus where Hindi is not the mother tongue of most, AAYAAM became a home — a sanctuary for words, for verse, for the gentle music of Devanagari.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { hi: "कविता", en: "Poetry", desc: "जहाँ शब्द साँस लेते हैं" },
            { hi: "संगीत", en: "Music", desc: "धुनों में बसी हिंदी" },
            { hi: "रंगमंच", en: "Theatre", desc: "मंच पर जीवित कहानियाँ" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-gold/20 shadow-warm hover:shadow-deep transition-all duration-500 hover:-translate-y-2"
            >
              <div className="font-hindi-display text-5xl text-gradient-saffron mb-3">{p.hi}</div>
              <div className="font-serif-display italic text-saffron-deep text-sm mb-4">{p.en}</div>
              <p className="font-hindi text-ink/70">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
