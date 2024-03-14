import { createContext } from "react";

export type ThemeModes = "dark" | "light";

type ThemeContextType = {
  mode: ThemeModes;
  setMode: React.Dispatch<React.SetStateAction<ThemeModes>>;
};

const ThemeContext = createContext<ThemeContextType | null>({
  mode: "dark",
  setMode: () => {},
});

export default ThemeContext;
