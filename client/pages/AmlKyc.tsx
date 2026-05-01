import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

const content = {
  EN: {
    title: "AML / KYC Policy",
    updated: "Last updated: May 1, 2026",
    sections: [
      {
        h: "1. Compliance approach",
        p: "We apply a risk-based AML/KYC approach to prevent fraud, money laundering, terrorist financing, and sanctions violations.",
      },
      {
        h: "2. Verification requests",
        p: "For certain transactions, we may request identity verification and source-of-funds information before execution.",
      },
      {
        h: "3. Transaction monitoring",
        p: "Transactions may be screened for high-risk patterns, sanctioned addresses, and suspicious behavior.",
      },
      {
        h: "4. Refusal rights",
        p: "We reserve the right to refuse, pause, or cancel requests that fail compliance checks or appear high-risk.",
      },
      {
        h: "5. Reporting obligations",
        p: "Where required by law, suspicious activity may be reported to competent authorities.",
      },
    ],
    back: "Back to home",
  },
  RU: {
    title: "Политика AML / KYC",
    updated: "Последнее обновление: 1 мая 2026",
    sections: [
      {
        h: "1. Подход к compliance",
        p: "Мы применяем риск-ориентированный подход AML/KYC для предотвращения мошенничества, отмывания средств, финансирования терроризма и нарушений санкционных режимов.",
      },
      {
        h: "2. Запросы на верификацию",
        p: "Для отдельных сделок мы можем запросить подтверждение личности и происхождения средств до выполнения обмена.",
      },
      {
        h: "3. Мониторинг транзакций",
        p: "Транзакции могут проверяться на высокорисковые паттерны, санкционные адреса и подозрительное поведение.",
      },
      {
        h: "4. Право отказа",
        p: "Мы оставляем за собой право отказать, приостановить или отменить заявку, если она не проходит compliance-проверки или выглядит высокорисковой.",
      },
      {
        h: "5. Обязанности по отчетности",
        p: "В случаях, предусмотренных законом, информация о подозрительной активности может передаваться компетентным органам.",
      },
    ],
    back: "На главную",
  },
};

export default function AmlKyc() {
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
