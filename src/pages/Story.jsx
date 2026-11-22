import React from 'react';
import Sparkles from '../components/Sparkles';
import { storyMilestones } from '../data/weddingData';
import { useLanguage, T } from '../context/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  return (
    <section className="pg" id="p-story">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2><T>Our story</T></h2>
        <p className="note">
          <T>Replace these lines with your sister’s own words.</T>
        </p>
        <ol className="tl" data-stagger>
          {storyMilestones.map((item, idx) => (
            <li key={idx} style={{ animationDelay: item.delay }}>
              <h3>{t(item.year)} · {t(item.title)}</h3>
              <p>{t(item.description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
