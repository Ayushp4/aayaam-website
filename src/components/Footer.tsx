import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative bg-maroon-gradient text-cream pt-20 pb-10 mt-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="font-hindi-display text-[20rem] leading-none text-cream absolute -top-20 -right-10 select-none">आयाम</div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-hindi-display text-5xl text-gold mb-4">{t("आयाम", "AAYAAM")}</div>
            <p className="font-hindi text-cream/85 leading-relaxed text-sm">
              {t(
                "“शब्दों से भाव तक, यही हमारी पहचान है।” आयाम — एन.आई.टी. त्रिची का हिंदी साहित्यिक एवं सांस्कृतिक मंच।",
                "“From words to feelings — that is who we are.” AAYAAM is the Hindi Literary & Cultural Club of NIT Trichy.",
              )}
            </p>
            <p className="text-cream/60 text-xs mt-4 tracking-wider uppercase">
              {t("स्थापना २००६ · एन.आई.टी. त्रिची", "Since 2006 · NIT Trichy")}
            </p>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{t("संपर्क", "Contact")}</h4>
            <ul className="space-y-2 font-hindi text-cream/85 text-sm">
              <li>aayaam@nitt.edu</li>
              <li>{t("इंस्टाग्राम: @aayaam.nitt", "Instagram: @aayaam.nitt")}</li>
              <li>
                {t(
                  "राष्ट्रीय प्रौद्योगिकी संस्थान, तिरुचिरापल्ली, तमिलनाडु — ६२००१५",
                  "National Institute of Technology, Tiruchirappalli, Tamil Nadu — 620015",
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{t("हमारा वचन", "Our Promise")}</h4>
            <p className="font-hindi-display text-2xl text-cream/95 leading-snug italic">
              {t("“भाषा से भाव तक की यात्रा।”", "“A journey from language to emotion.”")}
            </p>
            <p className="font-hindi text-cream/70 text-sm mt-4 leading-relaxed">
              {t(
                "हर वर्ष, हर मंच, हर कविता — हिंदी को जीवित रखने का संकल्प।",
                "Every year, every stage, every verse — a commitment to keep Hindi alive.",
              )}
            </p>
          </div>
        </div>
        <div className="ornament-divider">
          <span className="font-hindi-display text-gold text-2xl">॥</span>
        </div>
        <div className="text-center text-cream/60 text-xs mt-8 tracking-wider">
          © {new Date().getFullYear()} {t(
            "आयाम · हिंदी साहित्यिक एवं सांस्कृतिक मंच, एन.आई.टी. त्रिची",
            "AAYAAM · Hindi Literary & Cultural Club, NIT Trichy",
          )}
        </div>
      </div>
    </footer>
  );
}
