import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'fr' as const, label: 'FR' },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`language-button ${language === lang.code ? 'active' : ''}`}
          aria-label={`Switch to ${lang.label}`}
          type="button"
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;


