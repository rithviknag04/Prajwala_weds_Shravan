import React from 'react';
import Sparkles from '../components/Sparkles';
import { familyDetails } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Family() {
  const { t } = useLanguage();

  return (
    <section className="pg" id="p-family">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2><T>The families</T></h2>
        <div className="list-group list-group-flush rows" data-stagger>
          {familyDetails.map((item, idx) => (
            <div key={idx} className="list-group-item" style={{ animationDelay: item.delay }}>
              <b>{t(item.title)}</b>
              {t(item.desc)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
