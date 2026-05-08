import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

const NAV = [
  { to: "/", hi: "मुखपृष्ठ", en: "Home" },
  { to: "/about", hi: "परिचय", en: "About" },
  { to: "/events", hi: "आयोजन", en: "Events" },
  { to: "/team", hi: "टीम", en: "Team" },
  { to: "/gallery", hi: "गैलरी", en: "Gallery" },
] as const;

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-cream/85 border-b border-maroon/10 shadow-warm" : "py-5 bg-cream/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-saffron-gradient grid place-items-center shadow-gold group-hover:scale-110 transition-transform duration-500">
              <span className="font-hindi-display text-cream text-2xl leading-none">अ</span>
            </div>
            <div className="absolute -inset-1 rounded-full border border-gold/40 group-hover:rotate-180 transition-transform duration-1000" />
          </div>
          <div className="leading-tight">
            <div className="font-hindi-display text-maroon text-xl tracking-wide">{t("आयाम", "AAYAAM")}</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-saffron font-medium">
              {t("एन.आई.टी. त्रिची", "NIT Trichy")}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 group"
              activeProps={{ className: "text-saffron" }}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <>
                  <span className={`font-hindi text-base ${isActive ? "text-saffron" : "text-maroon"} group-hover:text-saffron transition-colors`}>
                    {t(item.hi, item.en)}
                  </span>
                  <span className={`absolute left-1/2 -bottom-0.5 h-px bg-saffron transition-all duration-300 -translate-x-1/2 ${isActive ? "w-8" : "w-0 group-hover:w-8"}`} />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center rounded-full border border-maroon/25 bg-cream/70 backdrop-blur p-1 shadow-sm"
          >
            <button
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                lang === "hi" ? "bg-saffron-gradient text-cream shadow-warm" : "text-maroon hover:text-saffron"
              }`}
              aria-pressed={lang === "hi"}
            >
              हिं
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                lang === "en" ? "bg-saffron-gradient text-cream shadow-warm" : "text-maroon hover:text-saffron"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <button
            className="md:hidden p-2 text-maroon"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-maroon mb-1.5" />
            <div className="w-6 h-0.5 bg-maroon mb-1.5" />
            <div className="w-4 h-0.5 bg-maroon" />
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-maroon/10 mt-3"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-hindi text-lg text-maroon">
                {t(item.hi, item.en)}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
