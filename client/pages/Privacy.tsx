import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

const content = {
  EN: {
    title: "Privacy Policy",
    updated: "Last updated: May 1, 2026",
    sections: [
      {
        h: "1. Data we collect",
        p: "We may collect contact details (Telegram/WhatsApp/email), transaction preferences, and technical analytics needed to operate and improve the service.",
      },
      {
        h: "2. How we use data",
        p: "Your data is used for request processing, communication, fraud prevention, and compliance checks where required.",
      },
      {
        h: "3. Data sharing",
        p: "We do not sell personal data. We may share limited data with payment/compliance partners only when required to complete or verify transactions.",
      },
      {
        h: "4. Data retention",
        p: "Data is retained for as long as necessary for operational, legal, and security purposes.",
      },
      {
        h: "5. Your rights",
        p: "You can request access, correction, or deletion of your data by contacting support.",
      },
    ],
    back: "Back to home",
  },
  RU: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 1 мая 2026",
    sections: [
      {
        h: "1. Какие данные мы собираем",
        p: "Мы можем собирать контактные данные (Telegram/WhatsApp/email), предпочтения по сделке и техническую аналитику, необходимую для работы и улучшения сервиса.",
      },
      {
        h: "2. Как мы используем данные",
        p: "Данные используются для обработки заявок, коммуникации, предотвращения мошенничества и compliance-проверок при необходимости.",
      },
      {
        h: "3. Передача данных",
        p: "Мы не продаем персональные данные. Ограниченная передача возможна только партнерам по оплате/проверкам, если это нужно для завершения или верификации сделки.",
      },
      {
        h: "4. Срок хранения",
        p: "Данные хранятся столько, сколько необходимо для операционных, юридических и защитных целей.",
      },
      {
        h: "5. Права пользователя",
        p: "Вы можете запросить доступ, исправление или удаление данных через поддержку.",
      },
    ],
    back: "На главную",
  },
};

export default function Privacy() {
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
