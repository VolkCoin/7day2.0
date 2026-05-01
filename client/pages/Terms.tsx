import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

const content = {
  EN: {
    title: "Terms of Use",
    updated: "Last updated: May 1, 2026",
    sections: [
      {
        h: "1. Service scope",
        p: "7 Day Rates provides manual crypto exchange coordination and quote support. Final terms are confirmed with a manager before execution.",
      },
      {
        h: "2. Quote validity",
        p: "Displayed rates are indicative. A manager may lock a final rate for a limited window (typically up to 15 minutes).",
      },
      {
        h: "3. User responsibility",
        p: "You are responsible for providing correct wallet/payment details. Transfers sent to incorrect details provided by the user cannot be reversed by us.",
      },
      {
        h: "4. Prohibited use",
        p: "You must not use the service for unlawful activity, fraud, sanctions evasion, or third-party impersonation.",
      },
      {
        h: "5. Limitation of liability",
        p: "We are not liable for delays caused by blockchain congestion, bank processing times, or force majeure events.",
      },
    ],
    back: "Back to home",
  },
  RU: {
    title: "Условия использования",
    updated: "Последнее обновление: 1 мая 2026",
    sections: [
      {
        h: "1. Объем сервиса",
        p: "7 Day Rates предоставляет ручное сопровождение обмена криптовалют и поддержку по котировкам. Финальные условия подтверждаются менеджером до выполнения сделки.",
      },
      {
        h: "2. Срок действия курса",
        p: "Курсы на сайте являются ориентировочными. Менеджер может зафиксировать финальный курс на ограниченное время (обычно до 15 минут).",
      },
      {
        h: "3. Ответственность пользователя",
        p: "Пользователь несет ответственность за корректность реквизитов кошелька/платежа. Переводы на ошибочные реквизиты, предоставленные пользователем, не могут быть отменены сервисом.",
      },
      {
        h: "4. Запрещенное использование",
        p: "Запрещено использовать сервис для незаконной деятельности, мошенничества, обхода санкций и действий от имени третьих лиц.",
      },
      {
        h: "5. Ограничение ответственности",
        p: "Мы не несем ответственности за задержки, вызванные загрузкой блокчейна, сроками банковской обработки или форс-мажорными обстоятельствами.",
      },
    ],
    back: "На главную",
  },
};

export default function Terms() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <h1 className="font-gilroy font-bold text-3xl md:text-5xl mb-3">{t.title}</h1>
        <p className="text-[#BFC7C1] mb-8">{t.updated}</p>

        <div className="space-y-6">
          {t.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-gilroy text-xl md:text-2xl mb-2">{s.h}</h2>
              <p className="text-[#E2E8E4] leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>

        <Link to="/" className="inline-block mt-10 text-brand-green hover:underline">
          ← {t.back}
        </Link>
      </div>
    </main>
  );
}
