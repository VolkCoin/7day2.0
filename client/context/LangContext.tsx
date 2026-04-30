import { createContext, useContext, useState } from "react";

export type Language = "EN" | "RU";

export const LangContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "EN", setLang: () => {} });

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
