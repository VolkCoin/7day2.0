import { useState, createContext, useContext } from "react";

export type Language = "EN" | "RU";

export const LangContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "EN", setLang: () => {} });

export default function Header() {
  const [lang, setLang] = useState<Language>("EN");
  const [open, setOpen] = useState(false);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <header className="relative w-full flex items-center justify-between pl-8 md:pl-16 pr-8 md:pr-16 py-6 md:py-8 z-50">
        {/* Language Switcher */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="font-gilroy font-bold text-xl md:text-2xl text-white uppercase tracking-wide">
              {lang}
            </span>
            <div
              className="w-3 h-3 border-b-2 border-l-2 border-white transition-transform"
              style={{ transform: open ? "rotate(135deg)" : "rotate(-45deg)" }}
            />
          </div>

          {open && (
            <div className="absolute top-10 left-0 bg-white rounded-lg shadow-xl overflow-hidden z-50">
              {(["EN", "RU"] as Language[]).map((l) => (
                <div
                  key={l}
                  className="px-6 py-3 cursor-pointer hover:bg-gray-100 font-gilroy font-bold text-[#0A170B]"
                  onClick={() => { setLang(l); setOpen(false); }}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5b75acc1be8116f3461081d22abd1178065085fa?width=800"
            alt="7 DAY RATES"
            className="h-10 md:h-14 w-auto"
          />
        </div>

        <div className="w-10" />
      </header>
    </LangContext.Provider>
  );
}
