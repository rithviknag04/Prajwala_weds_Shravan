import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageModal() {
  const { isLanguageModalOpen, setIsLanguageModalOpen, language, setLanguage } = useLanguage();

  if (!isLanguageModalOpen) return null;

  const handleSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="lang-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="lang-modal-title">
      <div className="lang-modal-box">
        {/* Close button if user already had a language selected and opened modal manually */}
        {localStorage.getItem('wedding_lang') && (
          <button
            className="lang-modal-close"
            onClick={() => setIsLanguageModalOpen(false)}
            aria-label="Close language selector"
          >
            ✕
          </button>
        )}

        <div className="lang-modal-header">
          <div className="lang-modal-om">ॐ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ॐ</div>
          <h2 id="lang-modal-title" className="lang-modal-title">
            Prajwala & Shravan
          </h2>
          <div className="lang-modal-sub">
            Wedding Celebration Invitation • ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ
          </div>
          <div className="lang-modal-divider">
            <span className="lang-modal-gem">✦</span>
          </div>
          <p className="lang-modal-instruction">
            Please choose your language to view the invitation
            <br />
            <span className="kn-sub">ಆಮಂತ್ರಣವನ್ನು ವೀಕ್ಷಿಸಲು ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</span>
          </p>
        </div>

        <div className="lang-modal-options">
          {/* English Option */}
          <button
            type="button"
            className={`lang-option-card ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleSelect('en')}
            autoFocus
          >
            <div className="lang-badge">EN</div>
            <div className="lang-name">English</div>
            <div className="lang-desc">View invitation & details in English</div>
            <span className="lang-select-btn">
              Select English →
            </span>
          </button>

          {/* Kannada Option */}
          <button
            type="button"
            className={`lang-option-card lang-option-kn ${language === 'kn' ? 'active' : ''}`}
            onClick={() => handleSelect('kn')}
          >
            <div className="lang-badge">ಕ</div>
            <div className="lang-name">ಕನ್ನಡ</div>
            <div className="lang-desc">ಕನ್ನಡದಲ್ಲಿ ಆಮಂತ್ರಣ ಹಾಗೂ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ</div>
            <span className="lang-select-btn">
              ಕನ್ನಡ ಆಯ್ಕೆಮಾಡಿ →
            </span>
          </button>
        </div>

        <div className="lang-modal-footer">
          <small>
            You can also switch language at any time from the top menu bar.
            <br />
            ಮೇಲ್ಭಾಗದ ಮೆನುವಿನಿಂದ ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಭಾಷೆ ಬದಲಾಯಿಸಬಹುದು.
          </small>
        </div>
      </div>
    </div>
  );
}

