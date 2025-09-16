'use client';

import { useEffect, useState, useMemo } from 'react';

export default function Countdown() {
  const target = useMemo(() => new Date('2026-09-17'), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: false });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: true });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds, completed: false });
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (timeLeft.completed) {
    return <span className="text-6xl md:text-8xl font-bold text-pink-600">Happy Anniversary! 💕</span>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
        <div className="text-3xl md:text-5xl font-bold text-pink-600">{timeLeft.days}</div>
        <div className="text-sm md:text-lg text-pink-800">Days</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
        <div className="text-3xl md:text-5xl font-bold text-pink-600">{timeLeft.hours}</div>
        <div className="text-sm md:text-lg text-pink-800">Hours</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
        <div className="text-3xl md:text-5xl font-bold text-pink-600">{timeLeft.minutes}</div>
        <div className="text-sm md:text-lg text-pink-800">Minutes</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
        <div className="text-3xl md:text-5xl font-bold text-pink-600">{timeLeft.seconds}</div>
        <div className="text-sm md:text-lg text-pink-800">Seconds</div>
      </div>
    </div>
  );
}