import { createContext } from "react";

export type ThemeModes = "dark" | "light";

type ThemeContextType = {
  theme: ThemeModes;
  setTheme: React.Dispatch<React.SetStateAction<ThemeModes>>;
};

const ThemeContext = createContext<ThemeContextType | null>({
  theme: "dark",
  setTheme: () => {},
});

export default ThemeContext;
