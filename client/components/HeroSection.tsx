import { useLang } from "@/context/LangContext";

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

  const openTelegram = () => {
    window.open("https://t.me/seven_day_rates", "_blank", "noopener,noreferrer");
  };

  const scrollToCalculator = () => {
    const el = document.getElementById("rate-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 px-4 md:px-16 pt-6 pb-16 min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center h-full">
          {/* LEFT */}
          <div className="order-1 w-full max-w-[720px] lg:max-w-[760px] text-center md:text-left md:pr-6 lg:pr-10">
            <h1 className="font-gilroy font-black text-white uppercase leading-[0.95] text-[clamp(2rem,5.2vw,5.4rem)]">
              {t.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-4 font-montserrat font-medium text-brand-green tracking-[0.01em] text-[clamp(1rem,2.2vw,1.8rem)] max-w-[28ch] md:max-w-[32ch]">
              {t.subtitle}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={scrollToCalculator}
                className="bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t.ctaPrimary}
              </button>

              <button
                onClick={openTelegram}
                className="border border-[rgba(20,160,73,0.5)] text-white font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-[rgba(20,160,73,0.12)] transition-colors"
              >
                {t.ctaSecondary}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
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
          <div className="order-2 relative flex justify-end items-end">
            <div
              className="absolute bottom-0 left-0 right-0 h-24 md:h-40 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto Exchange"
              className="
                block h-auto object-contain max-w-none
                w-[126%] -mr-[16%] -mb-2
                sm:w-[114%] sm:-mr-[10%]
                md:w-[108%] md:-mr-[6%] md:mb-0
                lg:w-[112%] lg:-mr-[10%]
                max-h-[430px] sm:max-h-[520px] md:max-h-[700px]
              "
              style={{ transform: "rotate(1.5deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
