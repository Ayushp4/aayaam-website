import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery/gallery1.jpg";
import gallery2 from "@/assets/gallery/gallery2.jpg";
import gallery3 from "@/assets/gallery/gallery3.jpg";
import gallery6 from "@/assets/gallery/gallery6.jpg";
import kavita from "@/assets/events/kavita-path.jpg";
import shayari from "@/assets/events/shayari-sandhya.jpg";
import festember from "@/assets/events/festember.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAYAAM · आयाम — Bhasha Se Bhav Tak | NIT Trichy" },
      { name: "description", content: "आयाम — Hindi Literary & Cultural Club of NIT Trichy. Where words become feelings." },
    ],
  }),
  component: Index,
});

const FLOATING = ["अ", "आ", "क", "म", "श", "स"];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/40 to-cream" />
      </motion.div>

      {FLOATING.map((l, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.18, 0.1], y: [20, -20, 20] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute font-hindi-display text-saffron-deep pointer-events-none select-none"
          style={{
            fontSize: `${100 + i * 30}px`,
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        >
          {l}
        </motion.span>
      ))}

      <motion.div style={{ y }} className="relative text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-saffron uppercase tracking-[0.5em] text-xs md:text-sm mb-8 font-medium"
        >
          Hindi Literary &amp; Cultural Club · NIT Trichy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-hindi-display text-[20vw] md:text-[16rem] leading-[0.85] text-gradient-saffron mb-6"
        >
          आयाम
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="ornament-divider max-w-md mx-auto mb-6"
        >
          <span className="font-hindi-display text-gold text-3xl">॥</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-serif-display italic text-2xl md:text-3xl text-maroon mb-3"
        >
          Bhasha Se Bhav Tak
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-hindi text-xl md:text-2xl text-maroon/80 max-w-2xl mx-auto"
        >
          “शब्दों से भाव तक, यही हमारी पहचान है।”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Link to="/events" className="group relative px-8 py-3.5 bg-saffron-gradient text-cream rounded-full font-medium shadow-warm overflow-hidden">
            <span className="relative z-10 font-hindi">हमारे आयोजन देखें</span>
            <div className="absolute inset-0 bg-maroon translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link to="/about" className="px-8 py-3.5 border border-maroon/30 text-maroon rounded-full font-medium hover:bg-maroon hover:text-cream transition-all duration-500 font-hindi">
            परिचय
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-maroon/60 text-xs tracking-[0.3em] uppercase"
      >
        Scroll · आगे बढ़ें
      </motion.div>
    </section>
  );
}

function AboutPreview() {
  const { t } = useLang();
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -top-8 -left-8 font-hindi-display text-[12rem] leading-none text-saffron/10 select-none">“</div>
          <div className="text-saffron uppercase tracking-[0.4em] text-xs mb-4">{t("परिचय", "About Us")}</div>
          <h2 className="font-hindi-display text-5xl md:text-6xl text-maroon mb-8 leading-[1.05]">
            एक मंच जहाँ <br /><span className="text-gradient-saffron">शब्द जीते हैं।</span>
          </h2>
          <p className="font-hindi text-lg text-ink/80 leading-relaxed mb-6">
            “AAYAAM एक मंच है जहाँ शब्द सिर्फ लिखे नहीं जाते, बल्कि महसूस किए जाते हैं। यह कविता है, यह कहानी है, यह संगीत है — यह वह आयाम है जहाँ हर भाव अपनी भाषा पाता है।”
          </p>
          <p className="font-serif-display italic text-base text-saffron-deep mb-8">
            A space where Hindi is not just spoken — it is lived, felt, and celebrated.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 text-maroon group">
            <span className="font-hindi text-base border-b border-maroon">और पढ़ें</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-deep">
            <img src={gallery2} alt="Hindi literature" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-cream rounded-2xl p-6 shadow-gold border border-gold/30 max-w-[220px]">
            <div className="font-hindi-display text-4xl text-gradient-gold leading-none">२००६</div>
            <div className="font-hindi text-sm text-maroon mt-1">{t("से अब तक की यात्रा", "since our beginning")}</div>
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/40 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function EventsPreview() {
  const events = [
    { img: kavita, hi: "कविता पाठ", en: "Poetry Recitation" },
    { img: shayari, hi: "शायरी संध्या", en: "Shayari Evening" },
    { img: festember, hi: "Festember मंच", en: "Festember Stage" },
  ];
  return (
    <section className="py-32 px-6 relative">
      <SectionHeading kicker="आयोजन · Events" hi="मंच जहाँ भाव जीते हैं" en="Stages where emotions come alive" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-warm cursor-pointer"
          >
            <img src={e.img} alt={e.en} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
              <div className="font-serif-display italic text-sm text-gold mb-2 tracking-wider uppercase">{e.en}</div>
              <h3 className="font-hindi-display text-4xl mb-3 group-hover:translate-y-0 translate-y-2 transition-transform duration-500">{e.hi}</h3>
              <div className="w-12 h-px bg-gold group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/events" className="inline-flex items-center gap-3 px-8 py-3 border border-maroon/30 rounded-full text-maroon hover:bg-maroon hover:text-cream transition-all duration-500 font-hindi">
          सभी आयोजन देखें →
        </Link>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [gallery1, gallery3, gallery6];
  return (
    <section className="py-32 px-6">
      <SectionHeading kicker="गैलरी · Gallery" hi="क्षण जो ठहर गए" en="Moments preserved in time" />
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
        {imgs.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`relative overflow-hidden rounded-2xl shadow-warm group ${
              i === 0 ? "col-span-12 md:col-span-7 aspect-[16/10]" :
              i === 1 ? "col-span-6 md:col-span-5 aspect-square" :
              "col-span-12 md:col-span-12 aspect-[21/8]"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/gallery" className="font-hindi text-maroon border-b border-maroon hover:text-saffron hover:border-saffron transition-colors">
          पूरी गैलरी देखें →
        </Link>
      </div>
    </section>
  );
}

function LegacyStrip() {
  return (
    <section className="py-24 bg-maroon-gradient text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 font-hindi-display text-[30rem] leading-none text-cream pointer-events-none flex items-center justify-center select-none">
        २००६
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <div className="text-gold uppercase tracking-[0.5em] text-xs mb-6">Legacy · विरासत</div>
        <h2 className="font-hindi-display text-6xl md:text-8xl mb-6 text-gradient-gold">Since 2006</h2>
        <p className="font-hindi text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
          दो दशक की काव्य यात्रा — मधुशाला से शुरू हुआ यह सिलसिला आज भी हर शब्द में जीवित है।
        </p>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <GalleryPreview />
      <LegacyStrip />
    </main>
  );
}
