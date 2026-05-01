import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";

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

type Contact = "Telegram" | "WhatsApp";

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
    contactMethod: "Contact method",
    handle: "Your @username or phone",
    note: "Optional note",
    submit: "Send request",
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
  },
  RU: {
    title: "Создать заявку",
    subtitle: "Отправьте структурированную заявку, и менеджер свяжется с вами в ближайшее время.",
    direction: "Направление",
    amount: "Сумма",
    city: "Город",
    contactMethod: "Способ связи",
    handle: "Ваш @username или телефон",
    note: "Комментарий (необязательно)",
    submit: "Отправить заявку",
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
  },
};

export default function RequestForm() {
  const { lang } = useLang();
  const t = translations[lang];

  const [city, setCity] = useState<City>("Dubai");
  const [direction, setDirection] = useState<Direction>("USDT_TO_AED");
  const [amount, setAmount] = useState("");
  const [contactMethod, setContactMethod] = useState<Contact>("Telegram");
  const [handle, setHandle] = useState("");
  const [note, setNote] = useState("");

  const availableDirections = useMemo(() => cityDirections[city], [city]);

  const onCityChange = (nextCity: City) => {
    setCity(nextCity);
    setDirection(cityDirections[nextCity][0]);
  };

  const telegramUsername = "seven_day_rates";

  const submit = () => {
    const text =
      lang === "RU"
        ? `Новая заявка:%0A` +
          `Город: ${city}%0A` +
          `Направление: ${t.directions[direction]}%0A` +
          `Сумма: ${encodeURIComponent(amount || "-")}%0A` +
          `Связь: ${contactMethod}%0A` +
          `Контакт: ${encodeURIComponent(handle || "-")}%0A` +
          `Комментарий: ${encodeURIComponent(note || "-")}`
        : `New request:%0A` +
          `City: ${city}%0A` +
          `Direction: ${t.directions[direction]}%0A` +
          `Amount: ${encodeURIComponent(amount || "-")}%0A` +
          `Contact: ${contactMethod}%0A` +
          `Handle: ${encodeURIComponent(handle || "-")}%0A` +
          `Note: ${encodeURIComponent(note || "-")}`;

    window.open(`https://t.me/${telegramUsername}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="create-request" className="w-full py-8 md:py-12">
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
                placeholder="1000"
              />
            </Field>

            <Field label={t.contactMethod}>
              <select
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value as Contact)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
              >
                <option>Telegram</option>
                <option>WhatsApp</option>
              </select>
            </Field>

            <Field label={t.handle}>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
                placeholder="@username / +971..."
              />
            </Field>

            <Field label={t.note}>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-[#132419] border border-[rgba(20,160,73,0.4)] rounded-lg px-3 py-2.5 text-white"
                placeholder={lang === "RU" ? "Например: сегодня до 20:00" : "e.g. today before 8 PM"}
              />
            </Field>
          </div>

          <div className="mt-6">
            <button
              onClick={submit}
              className="w-full sm:w-auto bg-white text-[#0A170B] font-montserrat font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.submit}
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
