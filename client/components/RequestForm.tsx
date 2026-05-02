import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";
import { ExchangeRequestPayload } from "@shared/api";

type City = "Dubai" | "Miami" | "Paris" | "Rio de Janeiro" | "Other city";
type Direction =
  | "USDT_TO_AED"
  | "AED_TO_USDT"
  | "USDT_TO_USD"
  | "USD_TO_USDT"
  | "USDT_TO_EUR"
  | "EUR_TO_USDT"
  | "USDT_TO_BRL"
  | "BRL_TO_USDT"
  | "USDT_TO_CASH"
  | "CASH_TO_USDT";

const RATE_USDT_TO_AED = 3.66;
const RATE_AED_TO_USDT = 3.69;

const cityDirections: Record<City, Direction[]> = {
  Dubai: ["USDT_TO_AED", "AED_TO_USDT"],
  Miami: ["USDT_TO_USD", "USD_TO_USDT"],
  Paris: ["USDT_TO_EUR", "EUR_TO_USDT"],
  "Rio de Janeiro": ["USDT_TO_BRL", "BRL_TO_USDT"],
  "Other city": ["USDT_TO_CASH", "CASH_TO_USDT"],
};

const translations = {
  EN: {
    title: "Create request",
    subtitle: "Send a structured request and manager will contact you shortly.",
    direction: "Direction",
    amount: "Amount",
    city: "City",
    handle: "Your Telegram @username",
    note: "Optional note",
    submit: "Create request",
    rate: "Rate",
    estimatedReceive: "Estimated receive",
    directions: {
      USDT_TO_AED: "USDT → AED Cash",
      AED_TO_USDT: "AED Cash → USDT",
      USDT_TO_USD: "USDT → USD Cash",
      USD_TO_USDT: "USD Cash → USDT",
      USDT_TO_EUR: "USDT → EUR Cash",
      EUR_TO_USDT: "EUR Cash → USDT",
      USDT_TO_BRL: "USDT → BRL Cash",
      BRL_TO_USDT: "BRL Cash → USDT",
      USDT_TO_CASH: "USDT → Cash",
      CASH_TO_USDT: "Cash → USDT",
    } as Record<Direction, string>,
    placeholders: {
      amount: "1000",
      handle: "@username",
      note: "e.g. urgent, today before 8 PM",
    },
    dubaiLockRate: "Please lock rate for 15 minutes.",
  },
  RU: {
    title: "Создать заявку",
    subtitle: "Отправьте структурированную заявку, и менеджер свяжется с вами в ближайшее время.",
    direction: "Направление",
    amount: "Сумма",
    city: "Город",
    handle: "Ваш Telegram @username",
    note: "Комментарий (необязательно)",
    submit: "Создать заявку",
    rate: "Курс",
    estimatedReceive: "Ориентировочно получите",
    directions: {
      USDT_TO_AED: "USDT → AED наличные",
      AED_TO_USDT: "AED наличные → USDT",
      USDT_TO_USD: "USDT → USD наличные",
      USD_TO_USDT: "USD наличные → USDT",
      USDT_TO_EUR: "USDT → EUR наличные",
      EUR_TO_USDT: "EUR наличные → USDT",
      USDT_TO_BRL: "USDT → BRL наличные",
      BRL_TO_USDT: "BRL наличные → USDT",
      USDT_TO_CASH: "USDT → Наличные",
      CASH_TO_USDT: "Наличные → USDT",
    } as Record<Direction, string>,
    placeholders: {
      amount: "1000",
      handle: "@username",
      note: "например: срочно, сегодня до 20:00",
    },
    dubaiLockRate: "Прошу зафиксировать курс на 15 минут.",
  },
};

export default function RequestForm() {
  const { lang } = useLang();
  const t = translations[lang];

  const [city, setCity] = useState<City>("Dubai");
  const [direction, setDirection] = useState<Direction>("USDT_TO_AED");
  const [amount, setAmount] = useState("");
  const [handle, setHandle] = useState("");
  const [note, setNote] = useState("");
  const [isSending, setIsSending] = useState(false);

  const availableDirections = useMemo(() => cityDirections[city], [city]);
  const isDubai = city === "Dubai";

  const numericAmount = useMemo(() => {
    const normalized = amount.replace(",", ".");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [amount]);

  const dubaiEstimate = useMemo(() => {
    if (!isDubai) return null;

    if (direction === "USDT_TO_AED") {
      return {
        rateText: "1 USDT = 3.66 AED",
        receive: `${(numericAmount * RATE_USDT_TO_AED).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })} AED`,
      };
    }

    if (direction === "AED_TO_USDT") {
      return {
        rateText: "1 USDT = 3.69 AED",
        receive: `${(numericAmount / RATE_AED_TO_USDT).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })} USDT`,
      };
    }

    return null;
  }, [isDubai, direction, numericAmount]);

  const onCityChange = (nextCity: City) => {
    setCity(nextCity);
    setDirection(cityDirections[nextCity][0]);
  };

  const submit = async () => {
    if (isSending) return;
    setIsSending(true);
    try {
      const payload: ExchangeRequestPayload = {
        city,
        direction: t.directions[direction],
        amount: amount.trim() || "-",
        telegram: handle.trim() || "-",
        note: note.trim() || (city === "Dubai" ? t.dubaiLockRate : "-"),
        lang,
      };

      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const asJson = (await response.json().catch(() => null)) as { error?: string } | null;
        if (asJson?.error) throw new Error(asJson.error);
        const asText = await response.text().catch(() => "");
        throw new Error(asText || `Request failed (${response.status})`);
      }

      alert(lang === "RU" ? "Заявка отправлена ✅" : "Request sent ✅");
      setAmount("");
      setHandle("");
      setNote("");
    } catch (error) {
      const details = error instanceof Error ? error.message : "";
      const prefix = lang === "RU" ? "Ошибка отправки." : "Failed to send.";
      alert(`${prefix} ${details}`.trim());
    } finally {
      setIsSending(false);
    }
  };

  return (
  <section id="create-request" className="w-full py-4 md:py-6">
    <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="card-glass rounded-2xl p-5 sm:p-6 md:p-8 border border-[rgba(20,160,73,0.45)]">
          <h2 className="font-gilroy font-semibold text-white text-2xl sm:text-3xl md:text-4xl mb-2">
            {t.title}
          </h2>
          <p className="font-montserrat text-[#D6D6D6] text-sm sm:text-base mb-6">{t.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <Field label={t.city}>
              <select
                value={city}
                onChange={(e) => onCityChange(e.target.value as City)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
              >
                <option>Dubai</option>
                <option>Miami</option>
                <option>Paris</option>
                <option>Rio de Janeiro</option>
                <option>Other city</option>
              </select>
            </Field>

            <Field label={t.direction}>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value as Direction)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
              >
                {availableDirections.map((d) => (
                  <option key={d} value={d}>
                    {t.directions[d]}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t.amount}>
              <input
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
                placeholder={t.placeholders.amount}
              />
            </Field>

            <Field label={t.handle}>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
                placeholder={t.placeholders.handle}
              />
            </Field>

            <Field label={t.note}>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
                placeholder={t.placeholders.note}
              />
            </Field>
          </div>

          {isDubai && dubaiEstimate && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <StatCard label={t.rate} value={dubaiEstimate.rateText} />
              <StatCard label={t.estimatedReceive} value={dubaiEstimate.receive} />
            </div>
          )}

          <div className="mt-6">
            <button
              type="button"
              onClick={submit}
              disabled={isSending}
              className="w-full sm:w-auto bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(255,255,255,0.22)] active:translate-y-0 active:scale-100"
            >
              {isSending ? (lang === "RU" ? "Отправка..." : "Sending...") : t.submit}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-montserrat text-sm text-[#E5E5E5] mb-2">{label}</span>
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
