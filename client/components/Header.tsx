import { useEffect, useRef, useState } from "react";
import { useLang, Language } from "@/context/LangContext";

export default function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const selectLang = (l: Language) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <header className="relative w-full flex items-center justify-between pl-6 md:pl-16 pr-6 md:pr-16 py-5 md:py-8 z-50">
      {/* Language Switcher */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer select-none rounded-md px-2 py-1 hover:bg-white/5 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <span className="font-gilroy font-bold text-xl md:text-2xl text-white uppercase tracking-wide">
            {lang}
          </span>
          <div
            className="w-3 h-3 border-b-2 border-l-2 border-white transition-transform"
            style={{ transform: open ? "rotate(135deg)" : "rotate(-45deg)" }}
          />
        </button>

        {open && (
          <div
            role="listbox"
            className="absolute top-11 left-0 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[88px]"
          >
            {(["EN", "RU"] as Language[]).map((l) => (
              <button
                key={l}
                type="button"
                className={`w-full text-left px-5 py-3 hover:bg-gray-100 font-gilroy font-bold text-[#0A170B] ${
                  lang === l ? "bg-gray-50" : ""
                }`}
                onClick={() => selectLang(l)}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5b75acc1be8116f3461081d22abd1178065085fa?width=800"
          alt="7 DAY RATES"
          className="h-9 md:h-14 w-auto"
        />
      </div>

      <div className="w-10" />
    </header>
  );
}
