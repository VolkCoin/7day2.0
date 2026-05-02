import { useLang } from "@/context/LangContext";

type FeatureItem = { title: string; desc: string };

type WhyChooseUsTranslations = {
  heading: string;
  subheading: string;
  features: [FeatureItem[], FeatureItem[]];
};

const translations: Record<"EN" | "RU", WhyChooseUsTranslations> = {
  EN: {
    heading: "Why choose us",
    subheading:
      "By choosing us, you get a reliable partner in the world of cryptocurrencies. Join us and start exchanging cryptocurrency with confidence.",
      features: [
    [
      { title: "Rate lock", desc: "Final quote can be locked for up to 15 minutes." },
      { title: "Manual execution", desc: "Each deal is confirmed and processed by manager." },
    ],
    [
      { title: "City support", desc: "Dubai, Miami, Paris, Rio de Janeiro + other city on request." },
      { title: "24/7 communication", desc: "Fast response in Telegram support chat." },
    ],
  ],
},
  RU: {
    heading: "Почему выбирают нас",
    subheading:
      "Выбирая нас, вы получаете надежного партнера в мире криптовалют. Присоединяйтесь и обменивайте криптовалюту с уверенностью.",
      features: [
      [
        { title: "Фиксация курса", desc: "Финальный курс можно зафиксировать до 15 минут." },
        { title: "Ручное исполнение", desc: "Каждая сделка подтверждается и проводится менеджером." },
      ],
      [
        { title: "Города", desc: "Dubai, Miami, Paris, Rio de Janeiro + другой город по запросу." },
        { title: "Связь 24/7", desc: "Быстрый ответ в Telegram-чате поддержки." },
      ],
    ],
  },
};

export default function WhyChooseUs() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative isolate w-full pt-12 md:pt-24 pb-14 md:pb-24 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[520px] md:w-[700px] h-[520px] md:h-[700px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.26) 0%, transparent 72%)",
          filter: "blur(110px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl lg:text-[56px] leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-montserrat text-[#E5E5E5] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <FeaturesGrid features={t.features} />
      </div>
    </section>
  );
}

function FeaturesGrid({ features }: { features: [FeatureItem[], FeatureItem[]] }) {
  const items = [...features[0], ...features[1]];

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden grid grid-cols-1 gap-3">
        {items.map((f, i) => (
          <div
            key={i}
            className="relative z-10 rounded-xl px-4 py-4 border bg-[rgba(68,74,70,0.78)]"
            style={{ borderColor: "rgba(20,160,73,0.45)" }}
          >
            <h3 className="font-gilroy font-bold text-white text-[clamp(1.75rem,7vw,2.1rem)] leading-tight mb-2 text-center">
              {f.title}
            </h3>
            <p className="font-montserrat text-[#E5E5E5] text-[clamp(1.55rem,4.8vw,1rem)] leading-snug text-center">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop / Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-[rgba(20,160,73,0.35)] bg-[rgba(68,74,70,0.45)] px-5 py-7 text-center min-h-[180px] flex flex-col justify-center"
            >
              <h3 className="font-gilroy font-bold text-white text-2xl md:text-3xl leading-tight mb-3">
                {f.title}
              </h3>
              <p className="font-montserrat text-[#E5E5E5] text-base md:text-lg leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      
    </>
  );
}

function FeatureCell({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-4 py-8 lg:py-10 border-r min-h-[180px]"
      style={{ borderColor: "rgba(20,160,73,0.3)" }}
    >
      <h3 className="font-gilroy font-bold text-white text-base lg:text-lg mb-2 leading-snug break-words">{title}</h3>
      <p className="font-montserrat text-[#E5E5E5] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
