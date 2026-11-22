import React, { useState, useRef } from 'react';
import Sparkles from '../components/Sparkles';
import { weddingInfo } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';
import brideImg from '../assets/photos/bride-portrait.jpg';
import groomImg from '../assets/photos/groom-portrait.jpg';
import stack1 from '../assets/photos/stack-1-celebration.jpg';
import stack2 from '../assets/photos/stack-2-hands.jpg';
import stack3 from '../assets/photos/stack-3-garden.jpg';
import stack4 from '../assets/photos/stack-4-embrace.jpg';

const coupleStackPhotos = [
  {
    id: 1,
    src: stack1,
    objectPosition: 'center 18%',
    title: { en: "Celebration of Love", kn: "ಪ್ರೀತಿಯ ಸಂಭ್ರಮ" },
    sub: { en: "Prajwala & Shravan", kn: "ಪ್ರಜ್ವಲಾ ಮತ್ತು ಶ್ರವಣ್" }
  },
  {
    id: 2,
    src: stack2,
    objectPosition: 'center 35%',
    title: { en: "The Sacred Promise", kn: "ಪವಿತ್ರ ಬಂಧನ" },
    sub: { en: "Holding Hands into Forever", kn: "ಕೈಹಿಡಿದು ಜೊತೆಯಾಗಿ" }
  },
  {
    id: 3,
    src: stack3,
    objectPosition: 'center 40%',
    title: { en: "Moments of Serenity", kn: "ಪ್ರಶಾಂತ ಕ್ಷಣಗಳು" },
    sub: { en: "In Every Glance", kn: "ಪ್ರತಿ ನೋಟದಲ್ಲೂ ಒಲವು" }
  },
  {
    id: 4,
    src: stack4,
    objectPosition: 'center 22%',
    title: { en: "Two Hearts, One Soul", kn: "ಎರಡು ಮನಸು, ಒಂದು ಬಂಧ" },
    sub: { en: "Beginning of Our Forever", kn: "ಹೊಸ ಪಯಣದ ಆರಂಭ" }
  }
];

export default function Welcome({ onNavigate }) {
  const { t } = useLanguage();
  const [cards, setCards] = useState(coupleStackPhotos);
  const [topCardStyle, setTopCardStyle] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, startY: 0, startTime: 0, currentX: 0 });
  const isTransitioningRef = useRef(false);

  const stackAngles = [0, -4, 3.5, -2.5];

  // Cycle to next photo with smooth slide/flip animation
  const nextCard = (direction = 1) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const exitX = direction >= 0 ? 140 : -140;
    const exitRot = direction >= 0 ? 25 : -25;

    setTopCardStyle({
      transform: `translateX(${exitX}%) rotate(${exitRot}deg)`,
      opacity: 0,
      transition: 'transform 0.4s ease, opacity 0.4s ease'
    });

    setTimeout(() => {
      setCards((prev) => {
        const next = [...prev];
        next.push(next.shift());
        return next;
      });
      setTopCardStyle({});
      isTransitioningRef.current = false;
    }, 420);
  };

  // Pointer drag, touch, and click events for Photo Stack
  const handlePointerDown = (e) => {
    if (isTransitioningRef.current) return;
    dragRef.current = {
      isDown: true,
      startX: e.clientX,
      startY: e.clientY,
      startTime: Date.now(),
      currentX: 0
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDown || isTransitioningRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.currentX = dx;
    setTopCardStyle({
      transform: `translateX(${dx}px) rotate(${dx / 18}deg)`
    });
  };

  const handlePointerUp = () => {
    if (!dragRef.current.isDown) return;
    dragRef.current.isDown = false;
    setIsDragging(false);

    if (isTransitioningRef.current) return;

    const dx = dragRef.current.currentX;
    const timeDiff = Date.now() - dragRef.current.startTime;

    // If dragged/swiped more than 40px
    if (Math.abs(dx) > 40) {
      nextCard(dx > 0 ? 1 : -1);
    }
    // If it was a touch or click (minimal drag and quick release)
    else if (Math.abs(dx) < 15 && timeDiff < 600) {
      nextCard(1);
    } else {
      setTopCardStyle({});
    }
  };

  const handleCardClick = (e) => {
    if (!isTransitioningRef.current && Math.abs(dragRef.current.currentX) < 10) {
      nextCard(1);
    }
  };

  return (
    <section className="pg cv" id="p-welcome">
      {/* Ambient Falling Particles */}
      <Sparkles count={16} spread={19} durationBase={7} />

      {/* Divine Vedic Invocation */}
      <p className="welcome-invocation" style={{ animationDelay: '0.4s' }}>
        {t(weddingInfo.invocation)}
      </p>

      <div className="duo">
        {/* Ambient Twinkles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="tw"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 31) % 100}%`,
              fontSize: `${10 + (i % 12)}px`,
              animationDelay: `${(i * 0.4) % 2.4}s`
            }}
          >
            ✦
          </span>
        ))}

        <figure className="ph">
          <div className="img">
            <img src={brideImg} alt={t(weddingInfo.bride)} className="couple-avatar" />
          </div>
          <figcaption>
            {t(weddingInfo.bride)}
            <span className="degree-tag">B.Arch</span>
          </figcaption>
        </figure>
        <div className="amp">&</div>
        <figure className="ph r">
          <div className="img">
            <img src={groomImg} alt={t(weddingInfo.groom)} className="couple-avatar" />
          </div>
          <figcaption>
            {t(weddingInfo.groom)}
            <span className="degree-tag">B.E, M.Tech</span>
          </figcaption>
        </figure>
      </div>

      <p className="t big" style={{ animationDelay: '1.7s' }}>
        <T>are getting married</T>
      </p>
      <p className="t date-highlight" style={{ animationDelay: '2s' }}>
        🗓️ {t(weddingInfo.datesCombined)} • <T en="Mysuru" kn="ಮೈಸೂರು" />
      </p>

      <section className="tg">
        {/* Rising Hearts */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="ht"
            style={{
              left: `${(i * 27) % 100}%`,
              fontSize: `${12 + (i % 12)}px`,
              animationDuration: `${6 + (i % 5)}s`,
              animationDelay: `${-(i * 1.5)}s`
            }}
          >
            ♥
          </span>
        ))}

        <h2 className="sr">{t(weddingInfo.tagline)}</h2>
        <div className="tgw sr">
          <div
            className="stk"
            id="stk"
            role="button"
            tabIndex={0}
            title={t("Tap to view next photo")}
            aria-label={`${t(weddingInfo.bride)} & ${t(weddingInfo.groom)} - ${t("Tap to view next photo")}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClick={handleCardClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextCard(1);
              }
            }}
          >
            {cards.map((card, i) => {
              const depth = Math.min(i, 3);
              const defaultTransform = `translateY(${depth * 14}px) scale(${1 - depth * 0.05}) rotate(${stackAngles[depth]}deg)`;
              const style =
                i === 0 && (isDragging || topCardStyle.transform)
                  ? {
                      zIndex: cards.length,
                      opacity: 1,
                      pointerEvents: 'auto',
                      ...topCardStyle
                    }
                  : {
                      zIndex: cards.length - i,
                      opacity: i > 3 ? 0 : 1,
                      transform: defaultTransform,
                      pointerEvents: i === 0 ? 'auto' : 'none'
                    };

              return (
                <div
                  key={card.id}
                  className={`pc ${i === 0 && isDragging ? 'drag' : ''}`}
                  style={style}
                >
                  {card.src ? (
                    <div className="pc-photo-wrapper">
                      <img
                        src={card.src}
                        alt={t(card.title)}
                        style={{ objectPosition: card.objectPosition || 'center center' }}
                      />
                      <div className="pc-photo-caption">
                        <span className="pc-title">{t(card.title)}</span>
                        {card.sub && <span className="pc-sub">{t(card.sub)}</span>}
                      </div>
                    </div>
                  ) : (
                    t(card.text)
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <p className="sr" style={{ fontSize: '.9rem', opacity: 0.8, marginTop: '44px' }}>
          <T>Tap or swipe the photos</T>
        </p>
        <p className="sr big" style={{ marginTop: '24px' }}>
          {t(weddingInfo.bride)} & {t(weddingInfo.groom)}
        </p>
        <p className="sr">{t(weddingInfo.dateFormatted)}</p>
        <a
          className="btn btn-wed sr"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <T>Open the invitation</T>
        </a>
      </section>
    </section>
  );
}