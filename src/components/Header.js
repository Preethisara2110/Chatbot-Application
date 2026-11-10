import { useChat } from "../context/ChatContext";
import { MenuIcon, ThemeIcon } from "./Icons";

export default function Header({ onMenu }) {
  const { theme, toggleTheme } = useChat();
  return (
    <header className="header">
      <button type="button" className="icon-btn menu-btn" aria-label="Open menu" onClick={onMenu}>
        <MenuIcon />
      </button>
      <h1>Product Recommendation AI</h1>
      <button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
        <small>{theme === "light" ? "Light" : "Dark"}</small>
        <ThemeIcon />
      </button>
    </header>
  );
}
