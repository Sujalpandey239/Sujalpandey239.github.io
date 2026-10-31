import React, { createContext, useContext, useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface ThemeAccent {
  id: string;
  name: string;
  color: string;
  glow: string;
  soft: string;
}

interface ThemeContextType {
  currentAccent: ThemeAccent;
  setAccentById: (id: string) => void;
  palette: ThemeAccent[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const palette = PORTFOLIO_DATA.themeAccents;
  const [currentAccent, setCurrentAccent] = useState<ThemeAccent>(() => {
    const saved = localStorage.getItem('sujal_portfolio_accent');
    if (saved) {
      const found = palette.find(p => p.id === saved);
      if (found) return found;
    }
    return palette[0];
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', currentAccent.color);
    root.style.setProperty('--accent-glow', currentAccent.glow);
    root.style.setProperty('--accent-soft', currentAccent.soft);
    localStorage.setItem('sujal_portfolio_accent', currentAccent.id);
  }, [currentAccent]);

  const setAccentById = (id: string) => {
    const next = palette.find(p => p.id === id);
    if (next) setCurrentAccent(next);
  };

  return (
    <ThemeContext.Provider value={{ currentAccent, setAccentById, palette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
