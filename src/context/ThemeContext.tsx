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
    main: "#4f46e5",
    light: "#6366f1",
    dark: "#4338ca",
  },
  secondary: {
    main: "#ec4899",
    light: "#f472b6",
    dark: "#be185d",
  },
  accent: {
    main: "#06b6d4",
    light: "#22d3ee",
    dark: "#0891b2",
  },
  background: {
    main: "#ffffff",
    secondary: "#f9fafb",
    tertiary: "#f3f4f6",
  },
  text: {
    primary: "#111827",
    secondary: "#4b5563",
    tertiary: "#6b7280",
    light: "#9ca3af",
  },
  border: {
    light: "#e5e7eb",
    main: "#d1d5db",
    dark: "#9ca3af",
  },
  surface: {
    card: "rgba(255, 255, 255, 0.95)",
    overlay: "rgba(255, 255, 255, 0.8)",
  },
  gradient: {
    background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
    card: "rgba(255, 255, 255, 0.9)",
  },
};

// Modern professional color palette - Dark theme
const darkColors = {
  primary: {
    main: "#6366f1",
    light: "#818cf8",
    dark: "#4f46e5",
  },
  secondary: {
    main: "#ec4899",
    light: "#f472b6",
    dark: "#db2777",
  },
  accent: {
    main: "#06b6d4",
    light: "#22d3ee",
    dark: "#0891b2",
  },
  background: {
    main: "#0f172a",
    secondary: "#1e293b",
    tertiary: "#334155",
  },
  text: {
    primary: "#f9fafb",
    secondary: "#e2e8f0",
    tertiary: "#cbd5e1",
    light: "#94a3b8",
  },
  border: {
    light: "#475569",
    main: "#334155",
    dark: "#1e293b",
  },
  surface: {
    card: "rgba(15, 23, 42, 0.95)",
    overlay: "rgba(15, 23, 42, 0.85)",
  },
  gradient: {
    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    card: "rgba(30, 41, 59, 0.9)",
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
