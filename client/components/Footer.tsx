import React, { FC } from 'react';
import { useLang } from '../context/LangContext';
import { RenderBuilderContent } from './builder'; // Возвращаем рендер билдера

const Footer: FC = () => {
  const { lang } = useLang();

  // Мы передаем текущий язык (lang) прямо в модель Builder.io
  // Чтобы это сработало, у тебя в админке Builder.io для модели 'footer' 
  // должна быть включена локализация.
  return (
    <RenderBuilderContent 
      model="footer" 
      locale={lang.toLowerCase()} 
    />
  );
};

export default Footer;
