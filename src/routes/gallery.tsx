import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import g1 from "@/assets/gallery/gallery1.jpg";
import g2 from "@/assets/gallery/gallery2.jpg";
import g3 from "@/assets/gallery/gallery3.jpg";
import g4 from "@/assets/gallery/gallery4.jpg";
import g5 from "@/assets/gallery/gallery5.jpg";
import g6 from "@/assets/gallery/gallery6.jpg";
import kavita from "@/assets/events/kavita-path.jpg";
import shayari from "@/assets/events/shayari-sandhya.jpg";
import abhivyakti from "@/assets/events/abhivyakti.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "गैलरी · Gallery — AAYAAM, NIT Trichy" },
      { name: "description", content: "Cinematic moments from AAYAAM's events, performances, and gatherings at NIT Trichy." },
    ],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: g1, span: "md:col-span-7 aspect-[16/10]", caption: "उत्सव की संध्या" },
  { src: g2, span: "md:col-span-5 aspect-[4/5]", caption: "शब्दों का संसार" },
  { src: shayari, span: "md:col-span-5 aspect-square", caption: "शायरी की रौशनी" },
  { src: g3, span: "md:col-span-7 aspect-[16/10]", caption: "मंच पर जीवन" },
  { src: g4, span: "md:col-span-4 aspect-[3/4]", caption: "दीप जलते हैं" },
  { src: kavita, span: "md:col-span-8 aspect-[16/9]", caption: "कविता की संध्या" },
  { src: g5, span: "md:col-span-7 aspect-[16/9]", caption: "तालियों की गूँज" },
  { src: abhivyakti, span: "md:col-span-5 aspect-[4/5]", caption: "खुला मंच" },
  { src: g6, span: "md:col-span-12 aspect-[21/9]", caption: "कलम और काग़ज़ — हमारी विरासत" },
];

function Gallery() {
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading kicker="गैलरी · Gallery" hi="हमारे यादगार लम्हें" en="Moments preserved in light & verse" />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {ITEMS.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`col-span-12 ${item.span} relative overflow-hidden rounded-2xl shadow-warm group cursor-pointer`}
            >
              <motion.img
                src={item.src}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-px bg-gold mb-3 group-hover:w-16 transition-all duration-500" />
                <div className="font-hindi-display text-2xl md:text-3xl">{item.caption}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </main>
  );
}
