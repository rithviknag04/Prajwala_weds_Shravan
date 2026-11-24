import React from 'react';
import Sparkles from '../components/Sparkles';
import {
  weddingInfo,
  receptionDetails,
  muhurthamDetails,
  weddingDetails
} from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Details({ onNavigate }) {
  const { t, lang } = useLanguage();

  return (
    <section className="pg" id="p-details">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <p className="details-invocation">{t(weddingInfo.invocation)}</p>
        <h2 style={{ marginBottom: '6px' }}><T>Wedding details</T></h2>
        <p className="note" style={{ marginBottom: '22px' }}>
          <T
            en="Join us to celebrate the wedding ceremonies of Prajwala & Shravan in Mysuru. Tap below to view live countdowns and directions."
            kn="ಪ್ರಜ್ವಲಾ ಮತ್ತು ಶ್ರವಣ್ ಅವರ ಶುಭ ವಿವಾಹ ಸಮಾರಂಭಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ ನವದಂಪತಿಗಳನ್ನು ಹರಸಿ. ಕ್ಷಣಗಣನೆ ಹಾಗೂ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಕೆಳಗೆ ವೀಕ್ಷಿಸಿ."
          />
        </p>

        {/* Event 1: Reception */}
        <div className="event-card-row main-event-card">
          <div className="event-card-header">
            <span className="event-card-tag main-tag">
              <T en="Day 1" kn="ದಿನ ೧" />
            </span>
            <h3><T>Wedding Reception</T></h3>
          </div>
          <div className="event-card-body">
            <p className="event-card-line">
              <strong><T en="Date" kn="ದಿನಾಂಕ" />:</strong> {t(receptionDetails.date)}
            </p>
            <p className="event-card-line">
              <strong><T en="Program" kn="ಕಾರ್ಯಕ್ರಮ" />:</strong>{' '}
              <T
                en="Devatha Karya at 4:00 pm • Reception at 7:00 pm onwards"
                kn="ದೇವತಾ ಕಾರ್ಯಗಳು ಸಂಜೆ 4:00 • ಆರತಕ್ಷತೆ ಸಂಜೆ 7:00 ರಿಂದ"
              />
            </p>
            <p className="event-card-line">
              <strong><T en="Venue" kn="ಸ್ಥಳ" />:</strong> {t(receptionDetails.venue)}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-wed btn-event-cta"
            onClick={() => onNavigate('reception')}
          >
            <T en="View Reception Details & Timer →" kn="ಆರತಕ್ಷತೆ ವಿವರಗಳು & ಕ್ಷಣಗಣನೆ ವೀಕ್ಷಿಸಿ →" />
          </button>
        </div>

        {/* Event 2: Muhurtham */}
        <div className="event-card-row gold-card">
          <div className="event-card-header">
            <span className="event-card-tag gold-tag">Day 2</span>
            <h3><T>Shubha Muhurtham</T></h3>
          </div>
          <div className="event-card-body">
            <p className="event-card-line">
              <strong><T en="Date" kn="ದಿನಾಂಕ" />:</strong> {t(muhurthamDetails.date)}
            </p>
            <p className="event-card-line">
              <strong><T en="Lagna" kn="ಲಗ್ನ" />:</strong>{' '}
              <T
                en="12:10 pm to 12:35 pm (Kumbha Lagna)"
                kn="ಮಧ್ಯಾಹ್ನ 12:10 ರಿಂದ 12:35 ರ ಶುಭ ಕುಂಭ ಲಗ್ನದಲ್ಲಿ"
              />
            </p>
            <p className="event-card-line">
              <strong><T en="Venue" kn="ಸ್ಥಳ" />:</strong> {t(muhurthamDetails.venue)}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-wed btn-event-cta"
            onClick={() => onNavigate('muhurtham')}
          >
            <T en="View Muhurtham & Live Timer →" kn="ಮುಹೂರ್ತ & ಕ್ಷಣಗಣನೆ ವೀಕ್ಷಿಸಿ →" />
          </button>
        </div>

        {/* Main Venue & Map Link */}
        <div className="venue-highlight-box">
          <h4><T en="Wedding & Reception Venue" kn="ವಿವಾಹ ಹಾಗೂ ಆರತಕ್ಷತೆ ಸ್ಥಳ" /></h4>
          <p className="venue-address-text">{t(weddingInfo.venueFull)}</p>
          <a
            href={weddingInfo.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wed btn-map-main"
          >
            <T en="Open Venue in Google Maps" kn="ವಿವಾಹ ಸ್ಥಳ ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ" />
          </a>
        </div>

        {/* Special Appeal (From PDF Page 8) */}
        <div className="special-appeal-card">
          <div className="appeal-icon">✦</div>
          <h4><T en="Special Appeal / ವಿಶೇಷ ಮನವಿ" kn="ವಿಶೇಷ ಮನವಿ / Special Appeal" /></h4>
          <p className="appeal-text-primary">
            {lang === 'kn' ? weddingInfo.specialAppeal.messageKn : weddingInfo.specialAppeal.messageEn}
          </p>
          <p className="appeal-text-secondary">
            {lang === 'kn' ? weddingInfo.specialAppeal.messageEn : weddingInfo.specialAppeal.messageKn}
          </p>
        </div>
      </div>
    </section>
  );
}
