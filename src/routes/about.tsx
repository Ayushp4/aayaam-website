import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
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
  const { t } = useLang();
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          kickerHi="परिचय"
          kickerEn="Our Story"
          hi="हमारी कहानी, हमारी आवाज़"
          en="Our story, our voice"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="font-hindi-display text-7xl text-gradient-saffron leading-none">
              {t("२००६", "2006")}
            </div>
            <p className="font-hindi text-lg text-ink/85 leading-relaxed">
              {t(
                "आयाम की शुरुआत वर्ष 2006 में हुई — एक छोटे से सपने के साथ कि एक दक्षिण भारतीय संस्थान में हिंदी की मशाल जलाई जाए। हमारी पहली पहचान बनी “मधुशाला” — हरिवंश राय बच्चन की अमर कविता को समर्पित एक काव्य संध्या।",
                "AAYAAM began in 2006 with a small dream — to keep the flame of Hindi alive in a South Indian campus. Our very first identity was “Madhushala” — a poetry evening dedicated to Harivansh Rai Bachchan’s immortal verses.",
              )}
            </p>
            <p className="font-hindi text-lg text-ink/85 leading-relaxed">
              {t(
                "समय के साथ यह दीप एक उत्सव बन गया। फेस्टेम्बर के मंच पर हमने हिंदी को नया आकार दिया — काव्य पाठ, मुशायरा, नुक्कड़ नाटक और साहित्यिक प्रतियोगिताओं के रूप में।",
                "With time, that single lamp grew into a festival. On the stage of Festember, we gave Hindi a new shape — through poetry recitals, mushairas, street plays and literary contests.",
              )}
            </p>
            <p className="font-hindi text-lg text-ink/85 leading-relaxed">
              {t(
                "आज आयाम केवल एक क्लब नहीं है — यह उन सभी के लिए एक घर है जो भाषा को भाव की तरह जीते हैं।",
                "Today, AAYAAM is not just a club — it is a home for everyone who lives language as emotion.",
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-deep"
          >
            <img src={gallery2} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-cream">
              <div className="font-hindi-display text-3xl mb-2">{t("मधुशाला", "Madhushala")}</div>
              <div className="font-serif-display italic text-sm text-gold">
                {t("जहाँ से सब शुरू हुआ", "where it all began")}
              </div>
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
            <div className="text-cream/85 uppercase tracking-[0.4em] text-xs mb-6">
              {t("हमारा संकल्प", "Our Promise")}
            </div>
            <p className="font-hindi-display text-3xl md:text-5xl leading-snug mb-6">
              {t(
                "“एक ग़ैर-हिंदी माहौल में, हमने हिंदी को घर बनाया।”",
                "“In a non-Hindi land, we made Hindi a home.”",
              )}
            </p>
            <p className="font-hindi text-lg text-cream/95 leading-relaxed">
              {t(
                "एक ऐसे परिसर में जहाँ हिंदी अधिकांश के लिए मातृभाषा नहीं है, आयाम एक आश्रय बन गया — शब्दों के लिए, छंदों के लिए, और देवनागरी के मधुर संगीत के लिए।",
                "On a campus where Hindi is not the mother tongue of most, AAYAAM became a sanctuary — for words, for verse, and for the gentle music of Devanagari.",
              )}
            </p>
          </div>
        </motion.div>

        <SectionHeading
          kickerHi="हमारे स्तंभ"
          kickerEn="Our Pillars"
          hi="तीन आयाम, एक भाव"
          en="Three dimensions, one feeling"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              hi: "कविता",
              en: "Poetry",
              dHi: "जहाँ शब्द साँस लेते हैं — काव्य संध्या, मुशायरा और कवि गोष्ठियों के माध्यम से।",
              dEn: "Where words breathe — through poetry evenings, mushairas and writers’ circles.",
            },
            {
              hi: "संगीत",
              en: "Music",
              dHi: "धुनों में बसी हिंदी — कव्वाली, गीत और सांस्कृतिक प्रस्तुतियों के रूप में।",
              dEn: "Hindi that lives in melody — through qawwali, songs and cultural performances.",
            },
            {
              hi: "रंगमंच",
              en: "Theatre",
              dHi: "मंच पर जीवित कहानियाँ — नुक्कड़ नाटक, संवाद और तात्कालिक अभिनय।",
              dEn: "Stories that live on stage — street plays, dialogue and improvised theatre.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-gold/20 shadow-warm hover:shadow-deep transition-all duration-500 hover:-translate-y-2"
            >
              <div className="font-hindi-display text-5xl text-gradient-saffron mb-4">
                {t(p.hi, p.en)}
              </div>
              <p className="font-hindi text-ink/80 leading-relaxed">{t(p.dHi, p.dEn)}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
