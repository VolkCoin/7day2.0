import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    title: "How it works",
    subtitle: "A simple and transparent exchange flow from request to completion.",
    steps: [
      {
        title: "1. Create request",
        desc: "Choose city, direction and amount in the form.",
      },
      {
        title: "2. Confirm fixed rate",
        desc: "Manager confirms final terms and locks rate (up to 15 min).",
      },
      {
        title: "3. Complete exchange",
        desc: "You receive cash/USDT with step-by-step support in Telegram.",
      },
    ],
    cta: "Start exchange",
  },
  RU: {
    title: "Как проходит обмен",
    subtitle: "Простой и прозрачный процесс: от заявки до завершения сделки.",
    steps: [
      {
        title: "1. Создайте заявку",
        desc: "Выберите город, направление и сумму в форме.",
      },
      {
        title: "2. Подтвердите фиксированный курс",
        desc: "Менеджер подтверждает условия и фиксирует курс (до 15 минут).",
      },
      {
        title: "3. Завершите обмен",
        desc: "Вы получаете наличные/USDT с пошаговой поддержкой в Telegram.",
      },
    ],
    cta: "Начать обмен",
  },
};

export default function MapSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative isolate w-full py-10 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 85% 20%, rgba(20,160,73,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="card-glass rounded-2xl p-5 sm:p-7 md:p-10 border border-[rgba(20,160,73,0.4)]">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl leading-tight mb-3">
              {t.title}
            </h2>
            <p className="font-montserrat text-[#E5E5E5] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {t.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-[rgba(20,160,73,0.35)] bg-[rgba(68,74,70,0.45)] px-4 py-5 md:px-5 md:py-6"
              >
                <h3 className="font-gilroy font-bold text-white text-xl md:text-2xl mb-2">{step.title}</h3>
                <p className="font-montserrat text-[#E5E5E5] text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => window.open("https://t.me/seven_day_rates", "_blank")}
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
