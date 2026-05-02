import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

const translations = {
  EN: {
    team: "7 Day Rates Team",
    rights: "©2026 7 DAY RATES. All Rights Reserved",
    contacts: "Contacts",
    legal: "Legal",
    links: {
      terms: "Terms",
      privacy: "Privacy",
      aml: "AML / KYC",
    },
  },
  RU: {
    team: "Команда 7 Day Rates",
    rights: "©2026 7 DAY RATES. Все права защищены",
    contacts: "Контакты",
    legal: "Документы",
    links: {
      terms: "Условия",
      privacy: "Конфиденциальность",
      aml: "AML / KYC",
    },
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer
      className="w-full border-t py-10 md:py-14"
      style={{ borderColor: "rgba(255,255,255,0.2)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-sm">
        {/* Brand */}
        <div>
          <p className="text-brand-gold font-gilroy font-bold uppercase tracking-wide mb-3">
            {t.team}
          </p>
          <p className="text-[#B7B7B7] leading-relaxed">{t.rights}</p>
        </div>

        {/* Contacts */}
        <div>
          <p className="text-white font-montserrat font-semibold mb-3">{t.contacts}</p>
          <ul className="space-y-2 text-[#B7B7B7]">
            <li>
              <a
                href="https://t.me/seven_day_rates"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-white font-montserrat font-semibold mb-3">{t.legal}</p>
          <ul className="space-y-2 text-[#B7B7B7]">
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                {t.links.terms}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                {t.links.privacy}
              </Link>
            </li>
            <li>
              <Link to="/aml-kyc" className="hover:text-white transition-colors">
                {t.links.aml}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
