import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
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
      { name: "description", content: "Patang competition, Tiranga March, Umang, Festember literary events, Dandiya Night, Holi Hungama, NITTFEST and more — explore the cultural calendar of AAYAAM, NIT Trichy." },
    ],
  }),
  component: Events,
});

type Ev = {
  id: number;
  img: string;
  hi: string;
  en: string;
  dateHi: string;
  dateEn: string;
  tagHi: string;
  tagEn: string;
  descHi: string;
  descEn: string;
};

const EVENTS: Ev[] = [
  {
    id: 1,
    img: festember,
    hi: "पतंग प्रतियोगिता",
    en: "Kite Competition",
    dateHi: "१५ अगस्त",
    dateEn: "15 August",
    tagHi: "स्वतंत्रता दिवस",
    tagEn: "Independence Day",
    descHi: "स्वतंत्रता दिवस के अवसर पर आयोजित रंगारंग पतंग प्रतियोगिता, जहाँ देशभक्ति और मित्रता का अनूठा संगम देखने को मिलता है।",
    descEn: "A vibrant kite-flying competition held on Independence Day, where patriotism and friendship come together in a one-of-a-kind celebration of the sky.",
  },
  {
    id: 2,
    img: abhivyakti,
    hi: "स्वतंत्रता दिवस तिरंगा मार्च",
    en: "Independence Day Tiranga March",
    dateHi: "१५ अगस्त",
    dateEn: "15 August",
    tagHi: "राष्ट्रीय पर्व",
    tagEn: "National Day",
    descHi: "परिसर में आयोजित भव्य तिरंगा मार्च, जो राष्ट्र के प्रति समर्पण और एकता की भावना को जाग्रत करता है।",
    descEn: "A grand Tiranga March across the campus that awakens a deep sense of dedication, unity and devotion to the nation.",
  },
  {
    id: 3,
    img: sahityik,
    hi: "उमंग '२५",
    en: "Umang '25",
    dateHi: "१४ – १८ सितम्बर",
    dateEn: "14 – 18 September",
    tagHi: "हिंदी सप्ताह",
    tagEn: "Hindi Week",
    descHi: "हिंदी सप्ताह का शानदार आयोजन, जिसमें झंकार, मुशायरा, क्विज़, चक्रव्यूह और वाद-विवाद जैसी रोचक प्रतियोगिताएं शामिल हैं।",
    descEn: "A magnificent celebration of Hindi Week featuring engaging contests like Jhankaar, Mushaira, Quiz, Chakravyuh and Debate — a full week of language, music and ideas.",
  },
  {
    id: 4,
    img: festember,
    hi: "फेस्टेम्बर हिंदी साहित्यिक कार्यक्रम",
    en: "Festember Hindi Literary Events",
    dateHi: "१९ – २१ सितम्बर",
    dateEn: "19 – 21 September",
    tagHi: "फेस्टेम्बर",
    tagEn: "Festember",
    descHi: "फेस्टेम्बर के अंतर्गत रचनात्मक सोच, तात्कालिक भाषण, रोचक मंत्रणा और वाद-विवाद प्रतियोगिताओं का साहित्यिक उत्सव।",
    descEn: "A literary celebration under Festember featuring creative thinking, extempore speaking, witty discussions and high-energy debate competitions.",
  },
  {
    id: 5,
    img: shayari,
    hi: "डांडिया नाइट",
    en: "Dandiya Night",
    dateHi: "१८ अक्टूबर",
    dateEn: "18 October",
    tagHi: "नवरात्रि",
    tagEn: "Navratri",
    descHi: "नवरात्रि के पावन अवसर पर पारंपरिक गुजराती वेशभूषा, गरबा और डांडिया के साथ एक उल्लासपूर्ण सांस्कृतिक संध्या।",
    descEn: "A joyous cultural evening on the auspicious occasion of Navratri — traditional Gujarati attire, garba and dandiya bringing the campus alive.",
  },
  {
    id: 6,
    img: abhivyakti,
    hi: "गणतंत्र दिवस तिरंगा मार्च",
    en: "Republic Day Tiranga March",
    dateHi: "२६ जनवरी",
    dateEn: "26 January",
    tagHi: "राष्ट्रीय पर्व",
    tagEn: "National Day",
    descHi: "गणतंत्र दिवस के अवसर पर 100 मीटर लंबे भव्य तिरंगे के साथ निकाली गई विशाल रैली, जो देशभक्ति से ओत-प्रोत है।",
    descEn: "A massive Republic Day rally led by a magnificent 100-metre long Tricolour — a march steeped in patriotism and pride.",
  },
  {
    id: 7,
    img: sahityik,
    hi: "हिंदी लर्निंग क्लासेस",
    en: "Hindi Learning Classes",
    dateHi: "प्रज्ञान के दौरान",
    dateEn: "During Pragyan",
    tagHi: "शिक्षण",
    tagEn: "Learning",
    descHi: "प्रज्ञान तकनीकी उत्सव के दौरान आयोजित विशेष कक्षाएं, जहाँ विद्यार्थियों को व्यावहारिक और सरल तरीके से हिंदी सिखाई जाती है।",
    descEn: "Special classes held during the Pragyan tech-fest, where students are taught Hindi in a practical, simple and approachable way.",
  },
  {
    id: 8,
    img: festember,
    hi: "होली हंगामा",
    en: "Holi Hungama",
    dateHi: "४ मार्च",
    dateEn: "4 March",
    tagHi: "रंगोत्सव",
    tagEn: "Festival of Colours",
    descHi: "रंगों, संगीत और आनंद का अभूतपूर्व संगम। प्राकृतिक गुलाल, ठंडाई और पारंपरिक संगीत के साथ एक भव्य रंगोत्सव।",
    descEn: "An unmatched confluence of colours, music and joy. A grand festival of hues with natural gulaal, cool thandai and traditional music.",
  },
  {
    id: 9,
    img: abhivyakti,
    hi: "NITTFEST '२६",
    en: "NITTFEST '26",
    dateHi: "अंतर-एन.आई.टी. उत्सव",
    dateEn: "Inter-NIT Festival",
    tagHi: "महोत्सव",
    tagEn: "Mega Fest",
    descHi: "कला, संस्कृति और भाषाओं का महासंग्राम। इसमें सामाजिक मुद्दों पर आधारित नुक्कड़ नाटक और रूह को छू लेने वाली कव्वाली जैसी शानदार प्रस्तुतियां शामिल हैं।",
    descEn: "A grand convergence of art, culture and languages — featuring street plays on social issues and soul-stirring qawwali performances that linger long after the curtain falls.",
  },
  {
    id: 10,
    img: kavita,
    hi: "काव्य संध्या एवं ‘प्रतिबिंब’ विमोचन",
    en: "Kavya Sandhya & ‘Pratibimb’ Launch",
    dateHi: "११ अप्रैल",
    dateEn: "11 April",
    tagHi: "वार्षिक पत्रिका",
    tagEn: "Annual Magazine",
    descHi: "उभरते रचनाकारों के लिए एक खूबसूरत साहित्यिक मंच, जहाँ कविता पाठ के साथ-साथ क्लब की वार्षिक पत्रिका “प्रतिबिंब” का विमोचन किया जाता है।",
    descEn: "A beautiful literary stage for emerging writers, where poetry recitals are accompanied by the launch of the club’s annual magazine, “Pratibimb”.",
  },
];

function Events() {
  const { t } = useLang();
  const [active, setActive] = useState<Ev | null>(null);

  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading
          kickerHi="आयोजन"
          kickerEn="Events"
          hi="हमारे मंच, हमारे क्षण"
          en="Our stages, our moments"
          subHi="वर्ष भर का सांस्कृतिक एवं साहित्यिक कैलेंडर"
          subEn="A year-round literary and cultural calendar"
        />

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
              <img src={e.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-cream/90 text-maroon text-[10px] tracking-[0.2em] uppercase font-medium">
                  {t(e.dateHi, e.dateEn)}
                </span>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                <div className="text-gold text-[10px] tracking-[0.4em] uppercase mb-3">
                  {t(e.tagHi, e.tagEn)}
                </div>
                <h3 className="font-hindi-display text-3xl md:text-4xl mb-3 leading-tight">
                  {t(e.hi, e.en)}
                </h3>
                <div className="inline-flex items-center gap-2 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t("विस्तार से पढ़ें", "Read more")} →
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
              className="bg-cream rounded-3xl max-w-3xl w-full overflow-hidden shadow-deep max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-[16/9]">
                <img src={active.img} alt="" className="w-full h-full object-cover" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 text-maroon grid place-items-center hover:bg-saffron hover:text-cream transition-colors text-2xl leading-none">×</button>
              </div>
              <div className="p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-saffron text-[10px] tracking-[0.4em] uppercase">{t(active.tagHi, active.tagEn)}</span>
                  <span className="text-maroon/40">·</span>
                  <span className="text-maroon text-xs tracking-wider">{t(active.dateHi, active.dateEn)}</span>
                </div>
                <h3 className="font-hindi-display text-4xl md:text-5xl text-maroon mb-6 leading-tight">
                  {t(active.hi, active.en)}
                </h3>
                <p className="font-hindi text-lg text-ink/85 leading-relaxed">
                  {t(active.descHi, active.descEn)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
