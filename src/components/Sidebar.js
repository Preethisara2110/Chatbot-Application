import { Link, NavLink } from "react-router-dom";
import { useChat } from "../context/ChatContext";
import { LogoIcon, NewChatIcon } from "./Icons";

export default function Sidebar({ open, onClose }) {
  const { startNewChat } = useChat();

  const newSuggestion = () => {
    startNewChat();
    onClose();
  };

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <button type="button" className="close-row" onClick={onClose}>Close ✕</button>
      <Link to="/" className="new-chat" onClick={newSuggestion}>
        <LogoIcon />
        <span>Want new suggestion?</span>
        <NewChatIcon />
      </Link>
      <NavLink to="/history" className="prev-btn" onClick={onClose}>Previous Suggestions</NavLink>
    </aside>
  );
}
