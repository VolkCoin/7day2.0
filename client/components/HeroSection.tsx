import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    title1: "Crypto",
    title2: "Exchange",
    subtitle: "Fast Easy Safe",
  },
  RU: {
    title1: "Крипто",
    title2: "Обмен",
    subtitle: "Быстро Легко Безопасно",
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative w-full overflow-hidden min-h-[560px] md:min-h-[750px] lg:min-h-[850px]">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative w-full px-4 md:px-16 pt-6 pb-10 md:pb-16 min-h-[560px] md:min-h-[750px] lg:min-h-[850px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center h-full">
          <div className="flex flex-col gap-3 md:gap-6 z-10 text-center md:text-left order-1">
            <h1 className="font-gilroy font-black text-white uppercase leading-[0.95] text-[clamp(2.2rem,11vw,6rem)]">
              {t.title1}
              <br />
              {t.title2}
            </h1>
            <p className="font-montserrat font-medium text-brand-green uppercase tracking-[0.16em] md:tracking-[0.2em] text-[clamp(0.8rem,3.4vw,1.75rem)]">
              {t.subtitle}
            </p>
          </div>

          <div className="relative order-2 flex justify-center md:justify-end">
            <div
              className="absolute bottom-0 left-0 right-0 h-28 md:h-40 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, #0A170B 0%, transparent 100%)" }}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
              alt="Crypto Exchange"
              className="w-[92%] sm:w-[85%] md:w-full h-auto object-contain max-h-[320px] sm:max-h-[430px] md:max-h-[700px]"
              style={{ transform: "rotate(3.4deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
