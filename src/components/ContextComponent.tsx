import { useContext } from "react";

import { ThemeContext } from "../Context";

export default function ContextComponent() {
    const { theme, update } = useContext(ThemeContext);
    const toggleTheme = () => update(theme === 'light' ? 'dark' : 'light');

    return (
        <>
          <div>Current theme is {theme}</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )

}