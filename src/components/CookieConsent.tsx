'use client';

import { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você aceita nossa{' '}
          <a href="/privacy" className="text-accent underline">
            política de privacidade
          </a>
          .
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}; 