import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";

type Currency = "USDT" | "BTC" | "ETH";
type PayoutMethod = "USD Cash" | "AED Cash" | "USD Bank Transfer";

const ratesToUsd: Record<Currency, number> = {
  USDT: 1,
  BTC: 63800,
  ETH: 3120,
};

const payoutMultipliers: Record<PayoutMethod, number> = {
  "USD Cash": 0.997,
  "AED Cash": 3.66,
  "USD Bank Transfer": 0.995,
};

const FEE = 0.008; // 0.8%

const translations = {
  EN: {
    title: "Exchange calculator",
    subtitle: "Estimate payout before creating a request.",
    youSend: "You send",
    youGet: "You get",
    amount: "Amount",
    rate: "Rate",
    fee: "Fee",
    receive: "You receive",
    disclaimer:
      "Indicative quote. Final rate is confirmed by manager and can be locked for 15 minutes.",
  },
  RU: {
    title: "Калькулятор обмена",
    subtitle: "Оцените сумму к получению до создания заявки.",
    youSend: "Вы отправляете",
    youGet: "Вы получаете",
    amount: "Сумма",
    rate: "Курс",
    fee: "Комиссия",
    receive: "К получению",
    disclaimer:
      "Предварительный расчет. Финальный курс подтверждает менеджер и может быть зафиксирован на 15 минут.",
  },
};

export default function RateCalculator() {
  const { lang } = useLang();
  const t = translations[lang];

  const [fromCurrency, setFromCurrency] = useState<Currency>("USDT");
  const [toMethod, setToMethod] = useState<PayoutMethod>("USD Cash");
  const [amount, setAmount] = useState<number>(1000);

  const safeAmount = Number.isFinite(amount) && amount > 0 ? amount : 0;

  const { rateLine, receiveValue } = useMemo(() => {
    const usdValue = safeAmount * ratesToUsd[fromCurrency];
    const afterFee = usdValue * (1 - FEE);
    const payout = afterFee * payoutMultipliers[toMethod];

    const pairRate = (ratesToUsd[fromCurrency] * payoutMultipliers[toMethod]).toFixed(4);

    return {
      rateLine: `1 ${fromCurrency} = ${pairRate} ${toMethod}`,
      receiveValue: payout,
    };
  }, [safeAmount, fromCurrency, toMethod]);

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

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
            <div className="rounded-xl border border-[rgba(20,160,73,0.3)] bg-[rgba(19,36,25,0.45)] p-4">
              <label className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">
                {t.youSend}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-2">
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value as Currency)}
                  className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
                >
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                </select>

                <input
                  type="number"
                  min={0}
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder={t.amount}
                  className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-[rgba(20,160,73,0.3)] bg-[rgba(19,36,25,0.45)] p-4">
              <label className="block font-montserrat text-xs sm:text-sm text-[#E5E5E5] mb-2">
                {t.youGet}
              </label>

              <select
                value={toMethod}
                onChange={(e) => setToMethod(e.target.value as PayoutMethod)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white text-sm sm:text-base outline-none"
              >
                <option value="USD Cash">USD Cash</option>
                <option value="AED Cash">AED Cash</option>
                <option value="USD Bank Transfer">USD Bank Transfer</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <StatCard label={t.rate} value={rateLine} />
            <StatCard label={t.fee} value={`${(FEE * 100).toFixed(1)}%`} />
            <StatCard
              label={t.receive}
              value={`${receiveValue.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })} ${toMethod}`}
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
