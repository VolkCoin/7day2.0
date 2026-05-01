import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    team: "7 Day Rates Team",
    rights: "©2026 7 DAY RATES. All Rights Reserved",
    contacts: "Contacts",
    legal: "Legal",
    links: { terms: "Terms", privacy: "Privacy", aml: "AML / KYC" },
  },
  RU: {
    team: "Команда 7 Day Rates",
    rights: "©2026 7 DAY RATES. Все права защищены",
    contacts: "Контакты",
    legal: "Документы",
    links: { terms: "Условия", privacy: "Конфиденциальность", aml: "AML / KYC" },
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="w-full border-t py-10 md:py-16" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-brand-gold font-gilroy font-bold uppercase mb-3">{t.team}</p>
          <p className="text-[#BCBCBC]">{t.rights}</p>
        </div>

        <div>
          <p className="text-white mb-3">{t.contacts}</p>
          <ul className="space-y-2 text-[#BCBCBC]">
            <li>
              <a href="https://t.me/seven_day_rates" className="hover:text-white">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white mb-3">{t.legal}</p>
          <ul className="space-y-2 text-[#BCBCBC]">
            <li>
              <Link to="/terms" className="hover:text-white">
                {t.links.terms}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                {t.links.privacy}
              </Link>
            </li>
            <li>
              <Link to="/aml-kyc" className="hover:text-white">
                {t.links.aml}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
