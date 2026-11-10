import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { KEYS, load, save } from "../utils/storage";
import { formatTime, getReply, uid } from "../utils/reply";

const ChatContext = createContext(null);
export const useChat = () => useContext(ChatContext);

const newChatState = () => ({ id: uid(), messages: [] });

export function ChatProvider({ children }) {
  const [chat, setChat] = useState(() => load(KEYS.current, null) || newChatState());
  const [history, setHistory] = useState(() => load(KEYS.history, []));
  const [theme, setTheme] = useState(() => load(KEYS.theme, "light"));
  const [toast, setToast] = useState("");

  useEffect(() => save(KEYS.current, chat), [chat]);
  useEffect(() => save(KEYS.history, history), [history]);
  useEffect(() => {
    save(KEYS.theme, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const sendMessage = useCallback((text) => {
    const clean = text.trim();
    if (!clean) return;
    const userMsg = { id: uid(), sender: "user", text: clean, time: formatTime() };
    const botMsgs = getReply(clean).map((t) => ({
      id: uid(), sender: "bot", text: t, time: formatTime(), liked: null, rating: 0, feedback: "",
    }));
    setChat((c) => ({ ...c, messages: [...c.messages, userMsg, ...botMsgs] }));
  }, []);

  const updateMessage = useCallback((id, patch) => {
    setChat((c) => ({
      ...c,
      messages: c.messages.map((m) => (m.id === id ? { ...m, ...patch } : m)),
    }));
  }, []);

  const upsertHistory = (conv) => {
    setHistory((h) => {
      const exists = h.some((x) => x.id === conv.id);
      return exists ? h.map((x) => (x.id === conv.id ? conv : x)) : [conv, ...h];
    });
  };

  const saveConversation = () => {
    if (chat.messages.length === 0) return false;
    upsertHistory({ id: chat.id, date: new Date().toISOString(), messages: chat.messages });
    setToast("Conversation saved");
    return true;
  };

  const startNewChat = () => {
    if (chat.messages.length > 0) {
      upsertHistory({ id: chat.id, date: new Date().toISOString(), messages: chat.messages });
    }
    setChat(newChatState());
  };

  return (
    <ChatContext.Provider
      value={{ chat, history, theme, toast, toggleTheme, sendMessage, updateMessage, saveConversation, startNewChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}
