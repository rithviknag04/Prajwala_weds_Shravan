import React, { createContext, useContext, useState, useEffect } from 'react';
import { resolveTranslation } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('wedding_lang') || 'en';
  });

  // Show modal if user has never explicitly picked a language
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(() => {
    return !localStorage.getItem('wedding_lang');
  });

  const selectLanguage = (newLang) => {
    const validLang = newLang === 'kn' ? 'kn' : 'en';
    setLanguageState(validLang);
    localStorage.setItem('wedding_lang', validLang);
    setIsLanguageModalOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'kn') {
      document.body.classList.add('lang-kn');
    } else {
      document.body.classList.remove('lang-kn');
    }
  }, [language]);

  /**
   * Helper function to translate any text or bilingual object
   * Usage:
   *   t("Our story") -> "ನಮ್ಮ ಕಥೆ" (if Kannada)
   *   t({ en: "Welcome", kn: "ಸುಸ್ವಾಗತ" }) -> picks based on language
   */
  const t = (input, fallback) => {
    return resolveTranslation(input, language, fallback);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: selectLanguage,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

/**
 * Edit-friendly translation component for JSX.
 *
 * Supports all common developer workflows:
 *
 * 1. Explicit bilingual props:
 *    <T en="Wedding Details" kn="ಮದುವೆಯ ವಿವರಗಳು" />
 *
 * 2. Natural text inside tags (automatically translated via dictionary):
 *    <T>Our story</T>
 *
 * 3. Dynamic object:
 *    <T value={weddingInfo.bride} />
 */
export function T({ en, kn, value, children, fallback }) {
  const { language, t } = useLanguage();

  if (en !== undefined || kn !== undefined) {
    if (language === 'kn') {
      return <>{kn || en || fallback || ''}</>;
    }
    return <>{en || kn || fallback || ''}</>;
  }

  const content = value !== undefined ? value : children;
  return <>{t(content, fallback)}</>;
}

