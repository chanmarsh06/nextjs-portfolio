"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";

type ColorObject = {
  main?: string;
  light?: string;
  dark?: string;
  [key: string]: string | undefined;
};

type ColorStructure = {
  primary: ColorObject;
  secondary: ColorObject;
  accent: ColorObject;
  background: ColorObject;
  text: ColorObject;
  border: ColorObject;
  surface: ColorObject;
};

type ThemeError = {
  message: string;
  code: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  colors: ColorStructure;
};

// Modern professional color palette - Light theme
const lightColors = {
  primary: {
    main: "#667eea",
    light: "#667eea",
    dark: "#667eea",
  },
  secondary: {
    main: "#764ba2",
    light: "#764ba2",
    dark: "#764ba2",
  },
  accent: {
    main: "#667eea",
    light: "#667eea",
    dark: "#667eea",
  },
  background: {
    main: "#ffffff",
    secondary: "#f8fafb",
    tertiary: "#f8fafb",
  },
  text: {
    primary: "#334155",
    secondary: "#64748b",
    tertiary: "#94a3b8",
    light: "#cbd5e1",
  },
  border: {
    light: "#e2e8f0",
    main: "#cbd5e1",
    dark: "#94a3b8",
  },
  surface: {
    card: "rgba(255, 255, 255, 0.95)",
    overlay: "rgba(255, 255, 255, 0.8)",
  },
  gradient: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    card: "rgba(255, 255, 255, 0.95)",
  },
};

// Modern professional color palette - Dark theme
const darkColors = {
  primary: {
    main: "#8b5cf6",
    light: "#a855f7",
    dark: "#8b5cf6",
  },
  secondary: {
    main: "#a855f7",
    light: "#a855f7",
    dark: "#a855f7",
  },
  accent: {
    main: "#8b5cf6",
    light: "#a855f7",
    dark: "#8b5cf6",
  },
  background: {
    main: "#0f172a",
    secondary: "#1e293b",
    tertiary: "#334155",
  },
  text: {
    primary: "#f1f5f9",
    secondary: "#94a3b8",
    tertiary: "#64748b",
    light: "#475569",
  },
  border: {
    light: "#334155",
    main: "#475569",
    dark: "#64748b",
  },
  surface: {
    card: "rgba(30, 41, 59, 0.95)",
    overlay: "rgba(15, 23, 42, 0.8)",
  },
  gradient: {
    primary: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    card: "rgba(30, 41, 59, 0.95)",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<ThemeError | null>(null);

  const safeLocalStorage = useCallback(() => {
    try {
      return typeof window !== 'undefined' ? window.localStorage : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    try {
      setMounted(true);
      const storage = safeLocalStorage();
      const saved = storage?.getItem("theme") as Theme | null;
      
      if (saved && (saved === 'light' || saved === 'dark')) {
        setTheme(saved);
      } else if (typeof window !== 'undefined') {
        setTheme(
          window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        );
      }
    } catch (err) {
      setError({ message: 'Failed to initialize theme', code: 'THEME_INIT_ERROR' });
      console.warn('Theme initialization failed:', err);
    }
  }, [safeLocalStorage]);

  useEffect(() => {
    if (!mounted) return;
    
    try {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      
      const storage = safeLocalStorage();
      storage?.setItem("theme", theme);
    } catch (err) {
      setError({ message: 'Failed to apply theme', code: 'THEME_APPLY_ERROR' });
      console.warn('Theme application failed:', err);
    }
  }, [theme, mounted, safeLocalStorage]);

  const toggleTheme = useCallback(() => {
    try {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      setError(null);
    } catch (err) {
      setError({ message: 'Failed to toggle theme', code: 'THEME_TOGGLE_ERROR' });
      console.warn('Theme toggle failed:', err);
    }
  }, []);

  const colors = theme === "light" ? lightColors : darkColors;

  if (error) {
    console.error('Theme context error:', error);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
