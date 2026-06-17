import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext(undefined);

const STORAGE_KEY = 'wd-theme';

function getSystemPreference() {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(mode) {
  if (mode === 'system') return getSystemPreference();
  return mode;
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    } catch {}
    return 'system';
  });

  const [resolved, setResolved] = useState(() => resolveTheme(mode));

  const applyTheme = useCallback((theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const current = resolveTheme(mode);
    setResolved(current);
    applyTheme(current);
    try { localStorage.setItem(STORAGE_KEY, mode); } catch {}
  }, [mode, applyTheme]);

  useEffect(() => {
    if (mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const val = getSystemPreference();
      setResolved(val);
      applyTheme(val);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode, applyTheme]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, resolved, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
