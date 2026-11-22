import React from 'react';
import Sparkles from '../components/Sparkles';
import { galleryPhotos } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Gallery({ onOpenLightbox }) {
  const { t } = useLanguage();

  return (
    <section className="pg" id="p-gallery">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2><T>Gallery</T></h2>
        <p className="note">
          <T>Tap any photo to view in high definition</T>
        </p>

        <div className="gallery-grid">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => onOpenLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpenLightbox(idx);
              }}
            >
              <div className="gallery-img-wrap">
                <img src={photo.src} alt={t(photo.title)} loading="lazy" />
              </div>
              <div className="gallery-card-badge">{t(photo.title)}</div>
            </div>
          ))}
        </div>

        <p className="note" style={{ marginTop: '22px' }}>
          <T>Cherished moments leading to our special day</T>
        </p>
      </div>
    </section>
  );
}
