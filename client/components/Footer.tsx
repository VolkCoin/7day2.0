import React, { FC } from 'react';
import { useLang } from '../context/LangContext';

const Footer: FC = () => {
  const { lang } = useLang();

  return (
    <footer className="w-full py-10 bg-black text-white"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">7DAY</h2>
            <p className="text-gray-400">
              {lang === 'ru' 
                ? 'Ваш надежный партнер в мире обмена криптовалют.' 
                : 'Your reliable partner in the world of cryptocurrency exchange.'}
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold mb-3">{lang === 'ru' ? 'Навигация' : 'Navigation'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hero">{lang === 'ru' ? 'Главная' : 'Home'}</a></li>
                <li><a href="#rates">{lang === 'ru' ? 'Курсы' : 'Rates'}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{lang === 'ru' ? 'Поддержка' : 'Support'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://t.me/7day_exchange" target="_blank" rel="noreferrer">Telegram</a></li>
                <li><a href="mailto:info@7day.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 7DAY. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


