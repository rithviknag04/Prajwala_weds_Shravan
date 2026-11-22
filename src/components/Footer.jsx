import React from 'react';
import { weddingInfo } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';
import nagLogo from '../assets/logos/nag-digital-logo-transparent.png';
import advikaLogo from '../assets/logos/advika-logo-transparent.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        {/* 1. Top Couple & Family Header */}
        <div className="footer-top-header">
          <div className="footer-couple-brand">
            {t(weddingInfo.bride)} <i>&</i> {t(weddingInfo.groom)}
          </div>
          <div className="footer-meta">
            <span>{t(weddingInfo.datesCombined)} • <T en="Mysuru" kn="ಮೈಸೂರು" /></span>
            <span className="footer-meta-sep">•</span>
            <span>{t(weddingInfo.family)}</span>
            <span className="footer-meta-sep">•</span>
            <span>{t(weddingInfo.brother)}</span>
          </div>
        </div>

        {/* 2. With Best Wishes from Logos (At the bottom, unboxed logo-strip) */}
        <div className="footer-wishes-wrapper">
          <div className="footer-wishes-title">
            <T en="With Best Wishes from:" kn="ಶುಭಾಶಯಗಳೊಂದಿಗೆ:" />
          </div>
          <div className="footer-logos-strip">
            <div className="footer-logo-wrap" title="Nag Digital Network">
              <img
                src={nagLogo}
                alt="Nag Digital Network"
                className="footer-logo-img logo-nag"
              />
            </div>
            <div className="footer-logo-wrap" title="Advika Architecture Design Studio">
              <img
                src={advikaLogo}
                alt="Advika Architecture Design Studio"
                className="footer-logo-img logo-advika"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
