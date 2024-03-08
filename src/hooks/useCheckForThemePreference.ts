import { useEffect, useState } from "react";
import type { ThemeModes } from "../theme/ThemeContext";

const checkLocalStorageForThemePreference = (): ThemeModes | null => {
  const localTheme = window.localStorage.getItem("theme");
  return localTheme ? (localTheme as ThemeModes) : null;
};

const useCheckForThemePreference = (): {
  themePreference: ThemeModes | null;
  isLoading: boolean;
} => {
  const [themePreference, setThemePreference] = useState<ThemeModes | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let localThemePreference = checkLocalStorageForThemePreference();

    if (!localThemePreference) {
      localThemePreference =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : null;
      if (!localThemePreference) {
        localThemePreference =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : null;
      }
    }

    setThemePreference(localThemePreference);
    setIsLoading(false);
  }, []);

  return { themePreference, isLoading };
};

export { useCheckForThemePreference };
