import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import kavita from "@/assets/events/kavita-path.jpg";
import shayari from "@/assets/events/shayari-sandhya.jpg";
import festember from "@/assets/events/festember.jpg";
import sahityik from "@/assets/events/sahityik.jpg";
import abhivyakti from "@/assets/events/abhivyakti.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "आयोजन · Events — AAYAAM, NIT Trichy" },
      { name: "description", content: "Kavita Path, Shayari Sandhya, Festember performances — explore the cultural events of AAYAAM, NIT Trichy." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  { id: 1, img: kavita, hi: "कविता पाठ", en: "Kavita Path", desc: "एक संध्या जहाँ हर पंक्ति एक प्रार्थना बन जाती है — कवि अपनी रचनाएँ पढ़ते हैं और श्रोता उनमें खो जाते हैं।", tag: "Poetry" },
  { id: 2, img: shayari, hi: "शायरी संध्या", en: "Shayari Sandhya", desc: "ग़ज़लों की रौशनी में डूबी एक रात — जहाँ मोहब्बत, ग़म, और उम्मीद लफ़्ज़ों में बहते हैं।", tag: "Ghazal" },
  { id: 3, img: sahityik, hi: "साहित्यिक प्रतियोगिताएँ", en: "Sahityik Pratiyogitaayein", desc: "लेखन, वाद-विवाद, और रचनात्मकता का संगम — जहाँ हर शब्द एक संघर्ष है, हर वाक्य एक जीत।", tag: "Literary" },
  { id: 4, img: festember, hi: "Festember प्रस्तुतियाँ", en: "Festember Performances", desc: "NIT Trichy के सबसे बड़े सांस्कृतिक मंच पर हमारी हिंदी आवाज़ — हज़ारों दर्शकों के सामने।", tag: "Festival" },
  { id: 5, img: abhivyakti, hi: "अभिव्यक्ति मंच", en: "Abhivyakti Manch", desc: "एक खुला मंच — जहाँ कोई भी आ सकता है, कुछ भी कह सकता है। बस शर्त एक — दिल से कहो।", tag: "Open Mic" },
];

function Events() {
  const [active, setActive] = useState<typeof EVENTS[number] | null>(null);

  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading kicker="आयोजन · Events" hi="हमारे मंच, हमारे क्षण" en="Our stages, our moments" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <motion.button
              key={e.id}
              onClick={() => setActive(e)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-warm text-left ${
                i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <img src={e.img} alt={e.en} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                <div className="text-gold text-[10px] tracking-[0.4em] uppercase mb-3">{e.tag}</div>
                <h3 className="font-hindi-display text-4xl md:text-5xl mb-2">{e.hi}</h3>
                <div className="font-serif-display italic text-sm text-cream/70">{e.en}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  विस्तार से पढ़ें →
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-maroon/80 backdrop-blur-md grid place-items-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream rounded-3xl max-w-3xl w-full overflow-hidden shadow-deep"
            >
              <div className="relative aspect-[16/9]">
                <img src={active.img} alt={active.en} className="w-full h-full object-cover" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 text-maroon grid place-items-center hover:bg-saffron hover:text-cream transition-colors">×</button>
              </div>
              <div className="p-10">
                <div className="text-saffron text-[10px] tracking-[0.4em] uppercase mb-2">{active.tag}</div>
                <h3 className="font-hindi-display text-5xl text-maroon mb-2">{active.hi}</h3>
                <div className="font-serif-display italic text-saffron-deep mb-6">{active.en}</div>
                <p className="font-hindi text-lg text-ink/80 leading-relaxed">{active.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
