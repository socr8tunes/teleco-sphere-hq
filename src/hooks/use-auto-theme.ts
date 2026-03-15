import { useEffect } from "react";

/**
 * Auto-switches between light and dark mode based on time of day.
 * Dark mode: 6 PM – 6 AM | Light mode: 6 AM – 6 PM
 * Checks every minute to handle transitions while the page is open.
 */
export function useAutoTheme() {
  useEffect(() => {
    const applyTheme = () => {
      const hour = new Date().getHours();
      const isDark = hour >= 18 || hour < 6;
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();
    const interval = setInterval(applyTheme, 60_000);
    return () => clearInterval(interval);
  }, []);
}
