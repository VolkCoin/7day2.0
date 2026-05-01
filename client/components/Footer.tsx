import React, { FC } from 'react';
import { useLang } from '../context/LangContext';

const translations = {
  RU: {
    description: 'Ваш надежный партнер в мире обмена криптовалют.',
    nav: 'Навигация',
    support: 'Поддержка',
    home: 'Главная',
    rates: 'Курсы',
    rights: 'Все права защищены.'
  },
  EN: {
    description: 'Your reliable partner in the world of cryptocurrency exchange.',
    nav: 'Navigation',
    support: 'Support',
    home: 'Home',
    rates: 'Rates',
    rights: 'All rights reserved.'
  }
};

const Footer: FC = () => {
  const { lang } = useLang();
  // Приводим lang к верхнему регистру, чтобы совпадало с ключами объекта translations
  const t = lang.toUpperCase() === 'RU' ? translations.RU : translations.EN;

  return (
    <footer className="footer"> 
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h2 className="footer-logo">7DAY</h2>
            <p className="footer-description">{t.description}</p>
          </div>

          <div className="footer-links">
            <div className="footer-group">
              <h4>{t.nav}</h4>
              <ul>
                <li><a href="#hero">{t.home}</a></li>
                <li><a href="#rates">{t.rates}</a></li>
              </ul>
            </div>

            <div className="footer-group">
              <h4>{t.support}</h4>
              <ul>
                <li><a href="https://t.me/7day_exchange" target="_blank" rel="noreferrer">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 7DAY. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
