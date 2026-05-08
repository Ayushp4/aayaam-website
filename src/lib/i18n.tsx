import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "hi" | "en";
const KEY = "aayaam-lang";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (hi: string, en: string) => string;
} | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hi");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "hi" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, lang);
      if (typeof document !== "undefined") document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "hi" ? "en" : "hi"));
  const t = (hi: string, en: string) => (lang === "hi" ? hi : en);

  return <LangContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}
