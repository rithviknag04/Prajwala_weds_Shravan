import React, { useState, useEffect } from 'react';
import { useLanguage, T } from '../context/LanguageContext';

export default function CountdownTimer({ targetDate, title }) {
  const { t, language } = useLanguage();

  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isCompleted) {
    return (
      <div className="countdown-box completed">
        <div className="countdown-complete-msg">
          🎉 <T>The Celebration has Begun!</T> 🎉
        </div>
      </div>
    );
  }

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-box">
      {title && (
        <div className="countdown-title">
          <span className="countdown-icon">⏳</span> {t(title)}
        </div>
      )}
      <div className="countdown-grid">
        <div className="countdown-unit">
          <div className="countdown-num">{timeLeft.days}</div>
          <div className="countdown-lbl">
            {language === 'kn' ? 'ದಿನಗಳು' : 'Days'}
          </div>
        </div>
        <div className="countdown-sep">:</div>
        <div className="countdown-unit">
          <div className="countdown-num">{pad(timeLeft.hours)}</div>
          <div className="countdown-lbl">
            {language === 'kn' ? 'ಗಂಟೆಗಳು' : 'Hours'}
          </div>
        </div>
        <div className="countdown-sep">:</div>
        <div className="countdown-unit">
          <div className="countdown-num">{pad(timeLeft.minutes)}</div>
          <div className="countdown-lbl">
            {language === 'kn' ? 'ನಿಮಿಷಗಳು' : 'Mins'}
          </div>
        </div>
        <div className="countdown-sep">:</div>
        <div className="countdown-unit">
          <div className="countdown-num countdown-seconds">{pad(timeLeft.seconds)}</div>
          <div className="countdown-lbl">
            {language === 'kn' ? 'ಸೆಕೆಂಡುಗಳು' : 'Secs'}
          </div>
        </div>
      </div>
    </div>
  );
}
