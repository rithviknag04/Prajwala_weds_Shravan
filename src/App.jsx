import React, { useState, useEffect } from 'react';

// Context
import { LanguageProvider } from './context/LanguageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';

// Pages
import Welcome from './pages/Welcome';
import Invitation from './pages/Invitation';
import Details from './pages/Details';
import Reception from './pages/Reception';
import Muhurtham from './pages/Muhurtham';

function WeddingApp() {
  const [page, setPage] = useState('welcome');

  // Sync state with URL hash and pathnames for robust refresh handling
  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
      const validPages = ['welcome', 'home', 'details', 'reception', 'muhurtham'];

      let target = 'welcome';
      if (validPages.includes(hash)) {
        target = hash;
      } else if (validPages.includes(path)) {
        target = path;
      }

      setPage(target);
      window.scrollTo(0, 0);
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  const navigateTo = (target) => {
    window.location.hash = target;
  };

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigateTo} />

      <main className="container">
        {page === 'welcome' && <Welcome onNavigate={navigateTo} />}
        {page === 'home' && <Invitation onNavigate={navigateTo} />}
        {page === 'details' && <Details onNavigate={navigateTo} />}
        {page === 'reception' && <Reception onNavigate={navigateTo} />}
        {page === 'muhurtham' && <Muhurtham onNavigate={navigateTo} />}
      </main>

      <Footer />

      {/* Language Selection Alert / Modal */}
      <LanguageModal />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <WeddingApp />
    </LanguageProvider>
  );
}
