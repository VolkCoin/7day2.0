import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    title1: "Crypto",
    title2: "Exchange",
    subtitle: "Fast Easy Safe",
    cta: "Start exchange",
    trust: ["24/7 support", "20+ locations", "From 0.1% fee"],
  },
  RU: {
    title1: "Крипто",
    title2: "Обмен",
    subtitle: "Быстро Легко Безопасно",
    cta: "Начать обмен",
    trust: ["Поддержка 24/7", "20+ локаций", "Комиссия от 0.1%"],
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const openTelegram = () => {
    window.open("https://t.me/seven_day_rates", "_blank");
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative w-full px-4 md:px-16 pt-6 pb-16 md:pb-16 min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center h-full">
          {/* Left content */}
          <div className="flex flex-col gap-4 md:gap-6 z-10 text-center md:text-left order-1 md:pr-6 lg:pr-10">
            <h1 className="font-gilroy font-black text-white uppercase leading-[0.95] text-[clamp(2.2rem,7.2vw,6rem)] whitespace-nowrap">
              <span className="block">{t.title1}</span>
              <span className="block">{t.title2}</span>
            </h1>

            <p className="font-montserrat font-medium text-brand-green uppercase tracking-[0.16em] md:tracking-[0.2em] text-[clamp(0.8rem,3.4vw,1.75rem)]">
              {t.subtitle}
            </p>

            {/* CTA */}
            <div className="pt-1 md:pt-2">
              <button
                onClick={openTelegram}
                className="bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t.cta}
              </button>
            </div>

            {/* Trust badges */}
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

          {/* Right image */}
          <div className="relative order-2 flex justify-center md:justify-end mt-2 md:mt-0">
            <div
              className="absolute bottom-0 left-0 right-0 h-24 md:h-40 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto Exchange"
              className="
                w-[125%] max-w-none
                -mr-[16%] -mb-2
                sm:w-[112%] sm:-mr-[8%]
                md:w-full md:mr-0 md:mb-0
                h-auto object-contain
                max-h-[430px] sm:max-h-[520px] md:max-h-[700px]
              "
              style={{ transform: "rotate(2deg)" }}
            />
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button
          onClick={openTelegram}
          className="w-full bg-white text-[#0A170B] font-montserrat font-semibold text-sm py-3 rounded-xl shadow-xl"
        >
          {t.cta}
        </button>
      </div>
    </section>
  );
}
