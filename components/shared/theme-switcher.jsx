'use client';

import { useEffect, useState, useId } from 'react';

const storageKey = 'theme-preference';

export default function ThemeSwitcher() {
  const uniqueId = useId();
  const [theme, setTheme] = useState('light');

  const getColorPreference = () => {
    if (typeof window !== 'undefined' && localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  const setPreference = (newTheme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    }
  };

  const reflectPreference = (newTheme) => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
      const toggleButton = document.querySelector('#theme-toggle');
      if (toggleButton) {
        toggleButton.setAttribute('aria-label', `Switch to ${newTheme === 'light' ? 'Dark' : 'Light'} Mode`);
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setPreference(newTheme);
  };

  useEffect(() => {
    const currentTheme = getColorPreference();
    setTheme(currentTheme);
    reflectPreference(currentTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      setPreference(newTheme);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      aria-live="polite"
      onClick={toggleTheme}
    >
      <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask className="moon" id={uniqueId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle className="sun" cx="12" cy="12" r="6" mask={`url(#${uniqueId})`} fill="currentColor" />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}
