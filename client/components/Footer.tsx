import React, { FC } from 'react';
import styles from '../styles/Footer.module.css';
import { useLang } from '../context/LangContext'; // Импортируем контекст

const Footer: FC = () => {
  const { lang } = useLang(); // Получаем текущий язык

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <h2 className={styles.logo}>7DAY</h2>
            <p className={styles.description}>
              {lang === 'ru' 
                ? 'Ваш надежный партнер в мире обмена криптовалют.' 
                : 'Your reliable partner in the world of cryptocurrency exchange.'}
            </p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4>{lang === 'ru' ? 'Навигация' : 'Navigation'}</h4>
              <ul>
                <li><a href="#hero">{lang === 'ru' ? 'Главная' : 'Home'}</a></li>
                <li><a href="#rates">{lang === 'ru' ? 'Курсы' : 'Rates'}</a></li>
                <li><a href="#services">{lang === 'ru' ? 'Услуги' : 'Services'}</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>{lang === 'ru' ? 'Поддержка' : 'Support'}</h4>
              <ul>
                <li><a href="https://t.me/your_tg_link" target="_blank" rel="noreferrer">Telegram</a></li>
                <li><a href="mailto:info@7day.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} 7DAY. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

