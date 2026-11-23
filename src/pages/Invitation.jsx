import React, { useState } from 'react';
import Sparkles from '../components/Sparkles';
import { weddingInfo } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';
import psMonogram from '../assets/logos/ps-monogram-maroon.png';

export default function Invitation({ onNavigate }) {
  const { t } = useLanguage();
  const [envelopeState, setEnvelopeState] = useState({ open: false, out: false });
  const [confetti, setConfetti] = useState([]);

  // Burst of 30 petals/confetti
  const triggerBurst = () => {
    const petals = [];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * 6.28;
      const dist = 110 + Math.random() * 170;
      petals.push({
        id: Math.random(),
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 70,
        bg: i % 3 ? '#c8942e' : '#e08a9a',
        delay: Math.random() * 0.25
      });
    }
    setConfetti(petals);
    setTimeout(() => setConfetti([]), 2300);
  };

  const handleEnvelopeClick = () => {
    if (envelopeState.open) return;
    setEnvelopeState({ open: true, out: false });

    setTimeout(() => {
      setEnvelopeState({ open: true, out: true });
      triggerBurst();
    }, 750);
  };

  return (
    <section
      className={`pg ${envelopeState.open ? 'open' : ''} ${envelopeState.out ? 'out' : ''}`}
      id="p-home"
      style={{ textAlign: 'center' }}
    >
      {/* Ambient Falling Particles */}
      <Sparkles count={14} spread={21} durationBase={7} />

      <div className="par" id="par">
        <p className="par-invocation">{t(weddingInfo.invocation)}</p>
        <p className="par-memorial"><small>{t(weddingInfo.grandparents)}</small></p>
        <div className="par-family-banner">
          <b>{t(weddingInfo.family)}</b>
        </div>
        <div className="par-parents-grid">
          <div>
            <small><T en="Bride's Parents" kn="ವಧುವಿನ ಪೋಷಕರು" /></small>
            <p className="pn">{t(weddingInfo.brideParents)}</p>
          </div>
          <div>
            <small><T en="Groom's Parents" kn="ವರನ ಪೋಷಕರು" /></small>
            <p className="pn">{t(weddingInfo.groomParents)}</p>
          </div>
        </div>
      </div>

      <div className="stage">
        <div className="envwrap">
          <button
            className={`env ${envelopeState.open ? 'open' : ''}`}
            id="ev"
            aria-label={t("Open the invitation")}
            onClick={handleEnvelopeClick}
          >
            <b className="env-seal">
              <img
                src={psMonogram}
                alt="Prajwala & Shravan Monogram"
                className="env-seal-logo"
              />
            </b>
          </button>
          <p className="hint" id="hint">
            <T>Tap the seal to open your invitation</T>
          </p>
        </div>

        <div className="paper" id="card">
          <p className="card-invocation" style={{ '--d': '0.50s' }}>
            {t(weddingInfo.invocation)}
          </p>

          <div className="card-lead-text" style={{ '--d': '0.58s' }}>
            <span className="card-family-highlight">{t(weddingInfo.family)}</span>
            <p className="card-lead-sub">
              <T
                en="cordially invite you and your family to grace the wedding of"
                kn="ತಮ್ಮ ಸುಪುತ್ರಿಯ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವಕ್ಕೆ ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಲು ಕೋರುತ್ತಾರೆ"
              />
            </p>
          </div>

          <div className="card-couple-royal" style={{ '--d': '0.68s' }}>
            <div className="card-person-box">
              <span className="card-person-name">{t(weddingInfo.bride)}</span>
              <span className="card-person-degree-pill">B.Arch</span>
            </div>

            <div className="card-conjunction-wrap">
              <span className="card-conjunction-flourish">❧</span>
              <span className="card-conjunction-text"><T en="with" kn="ಮತ್ತು" /></span>
              <span className="card-conjunction-flourish">❧</span>
            </div>

            <div className="card-person-box">
              <span className="card-person-name">{t(weddingInfo.groom)}</span>
              <span className="card-person-degree-pill">B.E, M.Tech</span>
              <p className="card-groom-parents">
                <T
                  en="(Son of Smt. Sudhamani M J & Sri Sanjeevachar K)"
                  kn="(ಶ್ರೀಮತಿ ಸುಧಾಮಣಿ ಎಂ ಜೆ ಮತ್ತು ಶ್ರೀ ಸಂಜೀವಾಚಾರ್ ಕೆ ಇವರ ದ್ವಿತೀಯ ಪುತ್ರ)"
                />
              </p>
            </div>
          </div>

          <hr className="card-ornate-divider" style={{ '--d': '0.84s' }} />

          {/* RECEPTION GOLD BOX */}
          <div className="card-reception-gold-box" style={{ '--d': '0.94s' }}>
            <p className="card-event-badge-tag">
              ✨ <T en="Wedding Reception" kn="ವಿವಾಹ ಸ್ವಾಗತ ಸಮಾರಂಭ" />
            </p>
            <p className="card-event-date-row">
              <T en="Sunday, 13 December 2026" kn="ಭಾನುವಾರ, 13 ಡಿಸೆಂಬರ್ 2026" />
            </p>
            <p className="card-event-timings-row">
              <T
                en="Devatha Karya at 4:00 pm • Reception at 7:00 pm onwards"
                kn="ದೇವತಾ ಕಾರ್ಯಗಳು ಸಂಜೆ 4:00 • ಆರತಕ್ಷತೆ ಸಂಜೆ 7:00 ರಿಂದ"
              />
            </p>
          </div>

          {/* MUHURTHAM GOLD BOX */}
          <div className="card-reception-gold-box" style={{ '--d': '1.04s' }}>
            <p className="card-event-badge-tag">
              🪔 <T en="Shubha Muhurtham" kn="ಶುಭ ಮುಹೂರ್ತ" />
            </p>
            <p className="card-event-date-row">
              <T en="Monday, 14 December 2026" kn="ಸೋಮವಾರ, 14 ಡಿಸೆಂಬರ್ 2026" />
            </p>
            <p className="card-event-timings-row">
              <T
                en="Muhurtham: 12:10 pm to 12:35 pm (Kumbha Lagna)"
                kn="ಮುಹೂರ್ತ: ಮಧ್ಯಾಹ್ನ 12:10 ರಿಂದ 12:35 ರ ಶುಭ ಕುಂಭ ಲಗ್ನದಲ್ಲಿ"
              />
            </p>
          </div>

          {/* VENUE */}
          <div className="card-venue-container" style={{ '--d': '1.14s' }}>
            <div className="card-venue-title">
              📍 <T en="Venue" kn="ಸ್ಥಳ" />: {t(weddingInfo.venue)}
            </div>
            <div className="card-venue-sub">
              {t(weddingInfo.venueAddress)}
            </div>
          </div>

          {/* BEST REGARDS */}
          <div className="card-regards-box" style={{ '--d': '1.24s' }}>
            <div className="card-regards-title">
              <T en="With Best Regards:" kn="ಆಹ್ವಾನಿಸುವವರು:" />
            </div>
            <div className="card-regards-names">
              <span>{t(weddingInfo.brideParents)}</span>
              <span className="regards-sep">•</span>
              <span>{t(weddingInfo.brother)}</span>
            </div>
          </div>

          <a
            className="btn btn-wed"
            href="#details"
            style={{ '--d': '1.34s', marginTop: '16px' }}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('details');
            }}
          >
            <T>See all details</T>
          </a>
        </div>

        {/* Confetti Petals */}
        {confetti.map((p) => (
          <span
            key={p.id}
            className="pt"
            style={{
              '--x': `${p.x}px`,
              '--y': `${p.y}px`,
              background: p.bg,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}