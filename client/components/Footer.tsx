import React, { FC, useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { useLang } from '../context/LangContext';

// Инициализация (ключ у тебя уже должен быть в переменных окружения или App.tsx)
builder.init('753046f5619446d39695f269a9043231'); 

const Footer: FC = () => {
  const { lang } = useLang();
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    // Загружаем контент футера специально для выбранного языка
    builder.get('footer', { locale: lang.toLowerCase() })
      .promise()
      .then(setFooterContent);
  }, [lang]);

  return (
    <BuilderComponent 
      model="footer" 
      content={footerContent} 
    />
  );
};

export default Footer;
