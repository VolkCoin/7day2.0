import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    title: "Crypto exchange with fixed rates",
    subtitle: "Real-time quotes • Cash & crypto deals • Secure manual execution",
    ctaPrimary: "Create request",
    ctaSecondary: "Contact support",
    trust: ["24/7 live support", "Rate lock for 15 minutes", "Step-by-step guidance"],
  },
  RU: {
    title: "Обмен криптовалюты с фиксированным курсом",
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[560px] md:min-h-[680px] lg:min-h-[760px]">
      {/* glow */}
      <div
        className="absolute -top-40 -left-40 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.48) 0%, transparent 72%)",
          filter: "blur(56px)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-8 md:pt-14 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h1 className="font-gilroy font-black text-white leading-[1.02] text-[clamp(2rem,7vw,4.7rem)] max-w-[16ch] mx-auto lg:mx-0">
              {t.title}
            </h1>

            <p className="mt-4 font-montserrat text-brand-green text-[clamp(0.9rem,2.6vw,1.25rem)] leading-relaxed max-w-[58ch] mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
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

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute bottom-0 left-0 right-0 h-20 md:h-28 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto exchange with fixed rates"
              className="w-[108%] sm:w-[96%] lg:w-full h-auto object-contain max-h-[360px] sm:max-h-[460px] lg:max-h-[620px]"
              style={{ transform: "rotate(1.5deg)" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
