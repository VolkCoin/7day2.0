import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";

type City = "Dubai" | "Miami" | "Paris" | "Rio de Janeiro" | "Other city";
type DubaiDirection = "USDT_TO_AED" | "AED_TO_USDT";

const RATE_USDT_TO_AED = 3.66;
const RATE_AED_TO_USDT = 3.69;

const translations = {
  EN: {
    title: "Exchange calculator",
    subtitle: "Get instant estimate for Dubai. Other cities are quoted by manager.",
    city: "City",
    direction: "Direction",
    youGive: "You give",
    youGet: "You get",
    rate: "Rate",
    result: "Estimated receive",
    quoteOnlyTitle: "Quote on request",
    quoteOnlyText:
      "Live numeric quote is currently available for Dubai only. For this city, manager will provide a fixed rate in 1–3 minutes.",
    requestBtn: "Create request",
    directions: {
      USDT_TO_AED: "USDT → AED Cash",
      AED_TO_USDT: "AED Cash → USDT",
    },
    currencies: {
      usdt: "USDT",
      aedCash: "AED Cash",
    },
    disclaimer:
      "Indicative estimate. Final terms are confirmed by manager and may be locked for up to 15 minutes.",
  },
  RU: {
    title: "Калькулятор обмена",
    subtitle: "Мгновенный расчет для Дубая. По другим городам курс дает менеджер.",
    city: "Город",
    direction: "Направление",
    youGive: "Вы отдаете",
    youGet: "Вы получаете",
    rate: "Курс",
    result: "Ориентировочно получите",
    quoteOnlyTitle: "Курс по запросу",
    quoteOnlyText:
      "Онлайн-расчет сейчас доступен только для Дубая. Для этого города менеджер даст фиксированный курс за 1–3 минуты.",
    requestBtn: "Создать заявку",
    directions: {
      USDT_TO_AED: "USDT → AED наличные",
      AED_TO_USDT: "AED наличные → USDT",
    },
    currencies: {
      usdt: "USDT",
      aedCash: "AED наличные",
    },
    disclaimer:
      "Предварительный расчет. Финальные условия подтверждает менеджер, курс может фиксироваться до 15 минут.",
  },
};

export default function RateCalculator() {
  const { lang } = useLang();
  const t = translations[lang];

  const [city, setCity] = useState<City>("Dubai");
  const [direction, setDirection] = useState<DubaiDirection>("USDT_TO_AED");
  const [amountInput, setAmountInput] = useState("1000");

  const isDubai = city === "Dubai";

  const amount = useMemo(() => {
    const normalized = amountInput.replace(",", ".");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [amountInput]);

  const { giveCurrency, getCurrency, rateText, receiveAmount } = useMemo(() => {
    if (direction === "USDT_TO_AED") {
      return {
        giveCurrency: t.currencies.usdt,
        getCurrency: t.currencies.aedCash,
        rateText: `1 USDT = ${RATE_USDT_TO_AED} AED`,
        receiveAmount: amount * RATE_USDT_TO_AED,
      };
    }

    return {
      giveCurrency: t.currencies.aedCash,
      getCurrency: t.currencies.usdt,
      rateText: `1 USDT = ${RATE_AED_TO_USDT} AED`,
      receiveAmount: amount / RATE_AED_TO_USDT,
    };
  }, [direction, amount, t.currencies.aedCash, t.currencies.usdt]);

  const handleAmountChange = (raw: string) => {
    const cleaned = raw.replace(/[^\d.,]/g, "");
    const parts = cleaned.split(/[.,]/);

    if (parts.length <= 1) {
      setAmountInput(cleaned);
      return;
    }

    setAmountInput(`${parts[0]}.${parts.slice(1).join("")}`);
  };

  const goToRequestForm = () => {
    const el = document.getElementById("create-request");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="rate-calculator" className="w-full py-8 md:py-12">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="card-glass rounded-2xl p-5 sm:p-6 md:p-8 border border-[rgba(20,160,73,0.45)]">
          <h2 className="font-gilroy font-semibold text-white text-2xl sm:text-3xl md:text-4xl mb-2">
            {t.title}
          </h2>
          <p className="font-montserrat text-[#D6D6D6] text-sm sm:text-base mb-6">{t.subtitle}</p>

          {/* City selector */}
          <div className="rounded-xl border border-[rgba(20,160,73,0.3)] bg-[rgba(19,36,25,0.45)] p-4 mb-5">
            <label className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">
              {t.city}
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value as City)}
              className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
            >
              <option>Dubai</option>
              <option>Miami</option>
              <option>Paris</option>
              <option>Rio de Janeiro</option>
              <option>Other city</option>
            </select>
          </div>

          {/* Dubai: full numeric calculator */}
          {isDubai ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
                <Field label={t.direction}>
                  <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value as DubaiDirection)}
                    className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
                  >
                    <option value="USDT_TO_AED">{t.directions.USDT_TO_AED}</option>
                    <option value="AED_TO_USDT">{t.directions.AED_TO_USDT}</option>
                  </select>
                </Field>

                <Field label={`${t.youGive} (${giveCurrency})`}>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amountInput}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder="0"
                    className="
                      w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg
                      px-3 py-2.5 text-white text-sm sm:text-base outline-none
                      appearance-none
                      [&::-webkit-outer-spin-button]:appearance-none
                      [&::-webkit-inner-spin-button]:appearance-none
                      [-moz-appearance:textfield]
                    "
                  />
                </Field>
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
            </>
          ) : (
            /* Other cities: quote on request */
            <div className="rounded-xl border border-[rgba(20,160,73,0.35)] bg-[rgba(19,36,25,0.55)] p-4 sm:p-5">
              <p className="text-white font-gilroy text-xl sm:text-2xl mb-2">{t.quoteOnlyTitle}</p>
              <p className="text-[#D6D6D6] font-montserrat text-sm sm:text-base leading-relaxed">
                {t.quoteOnlyText}
              </p>

              <button
                onClick={goToRequestForm}
                className="mt-4 bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t.requestBtn}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">{label}</span>
      {children}
    </label>
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
