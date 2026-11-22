import React, { useEffect } from 'react';
import { useLanguage, T } from '../context/LanguageContext';

export default function LightboxModal({ photos, activeIndex, onClose, onSelectIndex }) {
  const { t } = useLanguage();

  if (activeIndex === null || !photos || !photos[activeIndex]) {
    return null;
  }

  const currentPhoto = photos[activeIndex];
  const total = photos.length;

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" aria-label={t("Close")} onClick={onClose}>
          ✕
        </button>
        <div className="lightbox-img-area">
          <img src={currentPhoto.src} alt={t(currentPhoto.title)} />
        </div>
        <div className="lightbox-title">{t(currentPhoto.title)}</div>
        <div className="lightbox-counter">
          {t(currentPhoto.sub)} • {activeIndex + 1} <T en="of" kn="/" /> {total}
        </div>
        <div className="lightbox-nav">
          <button className="lightbox-btn" onClick={handlePrev}>
            <T>‹ Previous</T>
          </button>
          <button className="lightbox-btn" onClick={handleNext}>
            <T>Next ›</T>
          </button>
        </div>
      </div>
    </div>
  );
}
