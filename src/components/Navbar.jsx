import React, { useState } from 'react';
import { useLanguage, T } from '../context/LanguageContext';
import psMonogramGold from '../assets/logos/ps-monogram-gold.png';

export default function Navbar({ currentPage, onNavigate }) {
  const [navOpen, setNavOpen] = useState(false);
  const { language, setLanguage, setIsLanguageModalOpen } = useLanguage();

  const handleLinkClick = (target) => {
    onNavigate(target);
    setNavOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  const openLanguageModal = (e) => {
    e.stopPropagation();
    setIsLanguageModalOpen(true);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top" aria-label="Pages">
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand"
          href="#welcome"
          title="Prajwala & Shravan"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('welcome');
          }}
        >
          <img
            src={psMonogramGold}
            alt="P & S"
            className="navbar-monogram-icon"
          />
          <span className="navbar-brand-name"><T en="P & S" kn="ಪ್ರ & ಶ್ರ" /></span>
        </a>

        {/* Mobile Language Switcher (Visible only on mobile <= 768px next to hamburger) */}
        <div className="nav-lang-mobile">
          <button
            type="button"
            className="btn-lang-pill"
            onClick={toggleLanguage}
            title="Switch language (Click 🌐 for dialog) / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
          >
            <span className="lang-globe" onClick={openLanguageModal} title="Choose language dialog">
              🌐
            </span>
            <span className={language === 'en' ? 'active-lang' : ''}>EN</span>
            <span className="divider">|</span>
            <span className={language === 'kn' ? 'active-lang' : ''}>ಕನ್ನಡ</span>
          </button>
        </div>

        {/* Hamburger Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="nv">
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home');
                }}
              >
                <T>Invitation</T>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'details' || currentPage === 'reception' || currentPage === 'muhurtham' ? 'active' : ''}`}
                href="#details"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('details');
                }}
              >
                <T>Details</T>
              </a>
            </li>

            {/* Single Desktop Language Switcher (Visible only on desktop > 768px) */}
            <li className="nav-item nav-lang-desktop">
              <button
                type="button"
                className="btn-lang-pill"
                onClick={toggleLanguage}
                title="Switch language (Click 🌐 for dialog) / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
              >
                <span className="lang-globe" onClick={openLanguageModal} title="Choose language dialog">
                  🌐
                </span>
                <span className={language === 'en' ? 'active-lang' : ''}>EN</span>
                <span className="divider">|</span>
                <span className={language === 'kn' ? 'active-lang' : ''}>ಕನ್ನಡ</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
