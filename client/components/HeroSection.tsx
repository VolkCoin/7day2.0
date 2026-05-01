import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    titleLines: ["Crypto exchange", "with fixed rates"],
    subtitle: "Real-time quotes • Cash & crypto deals • Secure manual execution",
    ctaPrimary: "Create request",
    ctaSecondary: "Contact support",
    trust: ["24/7 live support", "Rate lock for 15 minutes", "Step-by-step guidance"],
  },
  RU: {
    // Явно задаем переносы, чтобы заголовок выглядел стабильно
    titleLines: ["Обмен", "криптовалюты", "с фиксированным", "курсом"],
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
      {/* Left glow */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 pt-6 pb-16 min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center h-full">
          {/* Left text */}
          <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left order-1 md:pr-6 lg:pr-10">
            <h1 className="font-gilroy font-black text-white uppercase leading-[0.95] text-[clamp(2.1rem,7vw,6rem)]">
              {t.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <p className="font-montserrat font-medium text-brand-green tracking-[0.02em] md:tracking-[0.03em] text-[clamp(0.95rem,2.3vw,1.8rem)] max-w-[26ch] md:max-w-none mx-auto md:mx-0">
              {t.subtitle}
            </p>

            <div className="pt-1 md:pt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
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

            <div className="pt-1 md:pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
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

          {/* Right image - жестко прижата к правому краю */}
          <div className="relative order-2 flex justify-end items-end mt-2 md:mt-0">
            <div
              className="absolute bottom-0 left-0 right-0 h-24 md:h-40 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto Exchange"
              className="
                block
                w-[128%] max-w-none
                -mr-[18%] -mb-2
                sm:w-[116%] sm:-mr-[10%]
                md:w-[108%] md:-mr-[6%] md:mb-0
                lg:w-[112%] lg:-mr-[10%]
                h-auto object-contain
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
