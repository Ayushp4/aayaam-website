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
            <div className="font-hindi-display text-5xl text-gold mb-4">आयाम</div>
            <p className="font-hindi text-cream/80 leading-relaxed text-sm">
              “शब्दों से भाव तक, यही हमारी पहचान है।”
            </p>
            <p className="text-cream/60 text-xs mt-4 tracking-wider uppercase">Since 2006 · NIT Trichy</p>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{t("संपर्क", "Connect")}</h4>
            <ul className="space-y-2 font-hindi text-cream/80">
              <li>aayaam@nitt.edu</li>
              <li>@aayaam.nitt</li>
              <li>NIT Tiruchirappalli, Tamil Nadu</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{t("हमारा वचन", "Our Word")}</h4>
            <p className="font-hindi-display text-2xl text-cream/90 leading-snug italic">
              “भाषा से भाव तक की यात्रा।”
            </p>
          </div>
        </div>
        <div className="ornament-divider">
          <span className="font-hindi-display text-gold text-2xl">॥</span>
        </div>
        <div className="text-center text-cream/50 text-xs mt-8 tracking-wider">
          © {new Date().getFullYear()} AAYAAM · Hindi Literary &amp; Cultural Club, NIT Trichy
        </div>
      </div>
    </footer>
  );
}
