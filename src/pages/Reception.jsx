import React from 'react';
import Sparkles from '../components/Sparkles';
import CountdownTimer from '../components/CountdownTimer';
import { receptionDetails, weddingInfo } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Reception({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <section className="pg" id="p-reception">
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
            onClick={() => onNavigate('muhurtham')}
          >
            <T>Switch to Muhurtham</T>
          </button>
        </div>

        <p className="details-invocation">{t(weddingInfo.invocation)}</p>

        <div className="event-badge main-event-badge">
          <T>Wedding Reception</T>
        </div>

        <h1 className="event-title">{t(receptionDetails.title)}</h1>
        <p className="event-date-time">
          {t(receptionDetails.date)} &nbsp;•&nbsp; {t(receptionDetails.time)}
        </p>

        {/* Live Countdown Timer */}
        <div className="event-timer-container">
          <CountdownTimer
            targetDate={receptionDetails.targetIso}
            title={{ en: "Countdown to Reception", kn: "ಆರತಕ್ಷತೆ ಸಮಾರಂಭಕ್ಕೆ ಕ್ಷಣಗಣನೆ" }}
          />
        </div>

        <hr className="event-divider" />

        {/* Event Information Cards */}
        <div className="event-info-grid">
          <div className="event-info-card">
            <div className="info-icon">✦</div>
            <h3><T en="Venue" kn="ಸ್ಥಳ" /></h3>
            <p className="primary-text">{t(receptionDetails.venue)}</p>
            <p className="sub-text">{t(receptionDetails.venueAddress)}</p>
            <a
              href={receptionDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-link"
              style={{ marginTop: '8px' }}
            >
              <T en="Open in Google Maps" kn="ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ" />
            </a>
          </div>

          <div className="event-info-card">
            <div className="info-icon">✦</div>
            <h3><T en="Dress Code" kn="ಉಡುಪಿನ ಶೈಲಿ" /></h3>
            <p className="primary-text">{t(receptionDetails.dressCode)}</p>
            <p className="sub-text">
              <T
                en="Dress elegantly for an evening of music, felicitation & celebration"
                kn="ಸಂಜೆಯ ಸಂಗೀತ ಹಾಗೂ ಆರತಕ್ಷತೆ ಸಂಭ್ರಮಕ್ಕೆ ತಕ್ಕಂತೆ ಶೃಂಗಾರಗೊಳ್ಳಿ"
              />
            </p>
          </div>
        </div>

        {/* Evening Highlights */}
        <div className="event-section-block">
          <h3>
            <T>Ceremony Highlights</T>
          </h3>
          <ul className="event-highlights-list">
            {receptionDetails.highlights.map((item, idx) => (
              <li key={idx}>
                <span className="hl-bullet">✦</span>
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Host Contacts */}
        <div className="event-section-block" style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#8a1c2f', marginBottom: '8px', fontSize: '1.15rem' }}>
            <T en="Host & Assistance" kn="ಆತಿಥ್ಯ ಮತ್ತು ವಿಚಾರಣೆ" />
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#5a0f1f' }}>
            {t(weddingInfo.brideParents)} • {t(weddingInfo.brother)}
          </p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            {weddingInfo.contacts.map((c, i) => (
              <a key={i} href={`tel:${c.phone}`} className="contact-call-btn" style={{ fontSize: '0.82rem' }}>
                {c.phone}
              </a>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="event-footer-action">
          <button
            type="button"
            className="btn btn-wed"
            onClick={() => onNavigate('muhurtham')}
          >
            <T en="Explore Shubha Muhurtham Details (14 Dec) →" kn="ಮುಹೂರ್ತದ ವಿವರಗಳು ಮತ್ತು ಕ್ಷಣಗಣನೆ ವೀಕ್ಷಿಸಿ (14 ಡಿಸೆಂಬರ್) →" />
          </button>
        </div>
      </div>
    </section>
  );
}
