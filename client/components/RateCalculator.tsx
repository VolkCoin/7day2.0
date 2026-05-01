import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";

type Direction = "USDT_TO_AED" | "AED_TO_USDT";

const RATE_USDT_TO_AED = 3.66; // 1 USDT = 3.66 AED (you give USDT)
const RATE_AED_TO_USDT = 3.69; // 1 USDT = 3.69 AED (you give AED cash -> divide by 3.69)

const translations = {
  EN: {
    title: "Exchange calculator",
    subtitle: "Choose direction and estimate payout instantly.",
    direction: "Direction",
    youGive: "You give",
    youGet: "You get",
    rate: "Rate",
    result: "Estimated receive",
    usdtToAedLabel: "USDT → AED Cash",
    aedToUsdtLabel: "AED Cash → USDT",
    disclaimer: "Indicative quote. Final terms are confirmed by manager.",
  },
  RU: {
    title: "Калькулятор обмена",
    subtitle: "Выберите направление и сразу увидите расчет.",
    direction: "Направление",
    youGive: "Вы отдаете",
    youGet: "Вы получаете",
    rate: "Курс",
    result: "Ориентировочно получите",
    usdtToAedLabel: "USDT → AED наличные",
    aedToUsdtLabel: "AED наличные → USDT",
    disclaimer: "Предварительный расчет. Финальные условия подтверждает менеджер.",
  },
};

export default function RateCalculator() {
  const { lang } = useLang();
  const t = translations[lang];

  const [direction, setDirection] = useState<Direction>("USDT_TO_AED");
  const [amount, setAmount] = useState<number>(1000);

  const safeAmount = Number.isFinite(amount) && amount > 0 ? amount : 0;

  const { giveCurrency, getCurrency, rateText, receiveAmount } = useMemo(() => {
    if (direction === "USDT_TO_AED") {
      return {
        giveCurrency: "USDT",
        getCurrency: "AED Cash",
        rateText: `1 USDT = ${RATE_USDT_TO_AED} AED`,
        receiveAmount: safeAmount * RATE_USDT_TO_AED,
      };
    }

    return {
      giveCurrency: "AED Cash",
      getCurrency: "USDT",
      rateText: `1 USDT = ${RATE_AED_TO_USDT} AED`,
      receiveAmount: safeAmount / RATE_AED_TO_USDT,
    };
  }, [direction, safeAmount]);

  return (
    <section id="rate-calculator" className="w-full py-8 md:py-12">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="card-glass rounded-2xl p-5 sm:p-6 md:p-8 border border-[rgba(20,160,73,0.45)]">
          <h2 className="font-gilroy font-semibold text-white text-2xl sm:text-3xl md:text-4xl mb-2">
            {t.title}
          </h2>
          <p className="font-montserrat text-[#D6D6D6] text-sm sm:text-base mb-6">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
            <div className="rounded-xl border border-[rgba(20,160,73,0.3)] bg-[rgba(19,36,25,0.45)] p-4">
              <label className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">
                {t.direction}
              </label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value as Direction)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
              >
                <option value="USDT_TO_AED">{t.usdtToAedLabel}</option>
                <option value="AED_TO_USDT">{t.aedToUsdtLabel}</option>
              </select>
            </div>

            <div className="rounded-xl border border-[rgba(20,160,73,0.3)] bg-[rgba(19,36,25,0.45)] p-4">
              <label className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">
                {t.youGive} ({giveCurrency})
              </label>
              <input
                type="number"
                min={0}
                step="any"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <StatCard label={t.youGet} value={getCurrency} />
            <StatCard label={t.rate} value={rateText} />
            <StatCard
              label={t.result}
              value={`${receiveAmount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })} ${getCurrency}`}
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm text-[#B8B8B8] font-montserrat leading-relaxed">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[rgba(20,160,73,0.35)] bg-[rgba(19,36,25,0.55)] px-3 py-3">
      <p className="text-xs text-[#B8DDBF] font-montserrat">{label}</p>
      <p className="text-white font-montserrat font-semibold mt-1 text-sm sm:text-base break-words">
        {value}
      </p>
    </div>
  );
}
