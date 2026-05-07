import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "hi" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (hi: string, en: string) => string } | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("hi");
  const t = (hi: string, en: string) => (lang === "hi" ? hi : en);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}
