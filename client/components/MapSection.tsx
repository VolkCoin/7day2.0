import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    cardText: "Many other cities, on request from the manager",
    button: "Request",
  },
  RU: {
    cardText: "Многие другие города, по запросу у менеджера",
    button: "Запросить",
  },
};

export default function MapSection() {
  return (
    <section className="relative w-full py-8 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative w-full rounded-xl overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c92f4354c48ea872881665b42ccc1e9fd275a1a5?width=2499"
            alt="Global presence map"
            className="w-full h-auto object-cover"
            style={{
              boxShadow:
                "0 119px 80px 0 rgba(56,38,193,0.07), 0 35.875px 48.082px 0 rgba(54,36,184,0.05), 0 14.901px 11.24px 0 rgba(64,50,171,0.05), 0 5.389px 1.02px 0 rgba(15,8,67,0.04)",
            }}
          />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <CitiesCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function CitiesCard() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="card-glass rounded-[10px] px-6 py-8 flex flex-col items-center gap-5 w-[220px] md:w-[280px]">
      <p className="font-montserrat text-white text-center text-sm md:text-base leading-snug">
        {t.cardText}
      </p>
      <button
        className="w-full bg-white text-[#0A170B] font-montserrat font-medium text-sm md:text-base py-3 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => window.open("https://t.me/seven_day_rates", "_blank")}
      >
        {t.button}
      </button>
    </div>
  );
}
