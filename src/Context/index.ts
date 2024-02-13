import { createContext } from "react";

export type Theme = "light" | "dark";

const defaultValue = {
  theme: "light",
  update: (_: Theme) => {}
}

export const ThemeContext = createContext(defaultValue);