import { useLang } from "@/context/LangContext";
import { useMemo, useState, type MouseEventHandler } from "react";

const translations = {
  EN: {
    titleLines: ["CRYPTO EXCHANGE", "WITH FIXED", "RATES"],
    subtitle: "Real-time quotes • Cash & crypto deals • Secure manual execution",
    ctaPrimary: "Create request",
    ctaSecondary: "Contact support",
    trust: ["24/7 live support", "Rate lock for 15 minutes", "Step-by-step guidance"],
  },
  RU: {
    titleLines: ["ОБМЕН", "КРИПТОВАЛЮТЫ", "С ФИКСИРОВАННЫМ", "КУРСОМ"],
    subtitle: "Котировки в реальном времени • Сделки с кэшем и криптой • Безопасное ручное исполнение",
    ctaPrimary: "Создать заявку",
    ctaSecondary: "Связаться с поддержкой",
    trust: ["Поддержка 24/7", "Фиксация курса на 15 минут", "Пошаговое сопровождение"],
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const openTelegram = () => {
    window.open("https://t.me/seven_day_rates", "_blank", "noopener,noreferrer");
  };

  const scrollToRequest = () => {
    const el = document.getElementById("create-request");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePointerMove: MouseEventHandler<HTMLElement> = (event) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  const handlePointerLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      className="relative w-full overflow-hidden min-h-[560px] md:min-h-[650px] lg:min-h-[700px]"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <div className="relative z-10 px-4 md:px-16 pt-6 pb-8 md:pb-10 min-h-[560px] md:min-h-[650px] lg:min-h-[700px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,56%),minmax(0,44%)] items-center h-full">
          {/* LEFT */}
          <div className="order-1 z-20 w-full max-w-[860px] lg:max-w-[760px] xl:max-w-[820px] text-center lg:text-left">
            <h1 className="font-gilroy font-black text-white uppercase leading-[0.92] text-[clamp(2rem,4.7vw,5.2rem)]">
              {t.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-5 font-montserrat font-medium text-brand-green text-[clamp(1rem,1.85vw,2rem)] leading-[1.3] max-w-[30ch] mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToRequest}
                className="bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(255,255,255,0.24)] active:translate-y-0 active:scale-100"
              >
                {t.ctaPrimary}
              </button>

              <button
                onClick={openTelegram}
                className="border border-[rgba(20,160,73,0.5)] text-white font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[rgba(20,160,73,0.2)] hover:border-[rgba(20,160,73,0.95)] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(20,160,73,0.28)] active:translate-y-0 active:scale-100"
              >
                {t.ctaSecondary}
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
              {t.trust.map((item) => (
                <span
                  key={item}
                  className="text-[11px] md:text-xs text-[#D8F6DF] border border-[rgba(20,160,73,0.45)] bg-[rgba(20,160,73,0.14)] px-3 py-1 rounded-full font-montserrat"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-2 relative z-10 flex justify-end items-end mt-6 lg:mt-0">
            <div
              className="absolute bottom-0 left-0 right-0 h-24 md:h-40 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto Exchange"
              className="
                  block h-auto object-contain max-w-none
                  w-[122%] -mr-[14%] -mb-2
                  sm:w-[112%] sm:-mr-[8%]
                  lg:w-[128%] lg:-mr-[22%] lg:mb-0
                  xl:w-[132%] xl:-mr-[24%]
                  max-h-[390px] sm:max-h-[500px] lg:max-h-[700px]
                "
              style={{
                transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)`,
                transition: "transform 250ms ease-out",
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
