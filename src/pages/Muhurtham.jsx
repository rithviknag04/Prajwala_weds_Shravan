import React from 'react';
import Sparkles from '../components/Sparkles';
import CountdownTimer from '../components/CountdownTimer';
import { muhurthamDetails, weddingInfo } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Muhurtham({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <section className="pg" id="p-muhurtham">
      <Sparkles count={10} spread={25} durationBase={7} />

      <div className="paper event-paper">
        {/* Navigation Breadcrumb / Switcher */}
        <div className="event-nav-header">
          <button
            type="button"
            className="btn-event-nav"
            onClick={() => onNavigate('details')}
          >
            <T>Back to Details</T>
          </button>
          <button
            type="button"
            className="btn-event-nav btn-switch"
            onClick={() => onNavigate('reception')}
          >
            <T>Switch to Reception</T>
          </button>
        </div>

        <p className="details-invocation">{t(weddingInfo.invocation)}</p>

        <div className="event-badge gold-badge">
          ॐ <T>Shubha Muhurtham</T>
        </div>

        <h1 className="event-title">{t(muhurthamDetails.title)}</h1>
        <p className="event-date-time">
          🗓️ {t(muhurthamDetails.date)} &nbsp;•&nbsp; ⏰ {t(muhurthamDetails.time)}
        </p>

        {/* Traditional Vedic Panchanga */}
        <p className="panchanga-text">
          {t(muhurthamDetails.panchanga)}
        </p>

        {/* Live Countdown Timer */}
        <div className="event-timer-container">
          <CountdownTimer
            targetDate={muhurthamDetails.targetIso}
            title={{ en: "Countdown to Muhurtham", kn: "ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಕ್ಷಣಗಣನೆ" }}
          />
        </div>

        <hr className="event-divider" />

        {/* Event Information Cards */}
        <div className="event-info-grid">
          <div className="event-info-card">
            <div className="info-icon">🪔</div>
            <h3><T en="Sacred Mandapa" kn="ಕಲ್ಯಾಣ ಮಂಟಪ" /></h3>
            <p className="primary-text">{t(muhurthamDetails.venue)}</p>
            <p className="sub-text">{t(muhurthamDetails.venueAddress)}</p>
            <a
              href={muhurthamDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-link"
              style={{ marginTop: '8px' }}
            >
              <T en="Open in Google Maps 📍" kn="ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ 📍" />
            </a>
          </div>

          <div className="event-info-card">
            <div className="info-icon">✨</div>
            <h3><T en="Dress Code" kn="ಉಡುಪಿನ ಶೈಲಿ" /></h3>
            <p className="primary-text">{t(muhurthamDetails.dressCode)}</p>
            <p className="sub-text">
              <T
                en="Traditional silk sarees, dhotis, or festive ethnic wear"
                kn="ಸಾಂಪ್ರದಾಯಿಕ ರೇಷ್ಮೆ ಸೀರೆ, ಪಂಚೆ ಶಲ್ಯ ಅಥವಾ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು"
              />
            </p>
          </div>
        </div>

        {/* Vedic Rituals & Highlights */}
        <div className="event-section-block">
          <h3>
            🌿 <T>Ceremony Highlights</T>
          </h3>
          <ul className="event-highlights-list">
            {muhurthamDetails.highlights.map((item, idx) => (
              <li key={idx}>
                <span className="hl-bullet">✦</span>
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Traditional Feast Notice */}
        <div className="event-section-block feast-block">
          <h3>
            🍛 <T>Wedding Feast</T>
          </h3>
          <p>
            <T
              en="Sumptuous traditional South Indian wedding feast will be served on banana leaf following the sacred rituals."
              kn="ಪವಿತ್ರ ಮಾಂಗಲ್ಯ ಧಾರಣೆ ಮುಹೂರ್ತದ ನಂತರ ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಮದುವೆ ಮಹಾ ಭೋಜನ ವ್ಯವಸ್ಥೆ ಇರಲಿದೆ."
            />
          </p>
        </div>

        {/* Action Button */}
        <div className="event-footer-action">
          <button
            type="button"
            className="btn btn-wed"
            onClick={() => onNavigate('reception')}
          >
            <T en="← View Reception Details & Timer (13 Dec)" kn="← ಸ್ವಾಗತ ಸಮಾರಂಭದ ವಿವರಗಳು ಮತ್ತು ಕ್ಷಣಗಣನೆ (13 ಡಿಸೆಂಬರ್)" />
          </button>
        </div>
      </div>
    </section>
  );
}
