import { useMemo, useState } from "react";
import { useChat } from "../context/ChatContext";
import Message from "./Message";

const dayLabel = (iso) => {
  const d = new Date(iso);
  return d.toDateString() === new Date().toDateString()
    ? "Today's chats"
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) + " chats";
};

export default function History() {
  const { history } = useChat();
  const [filter, setFilter] = useState("all");

  const groups = useMemo(() => {
    const visible = history.filter(
      (c) => filter === "all" || c.messages.some((m) => m.sender === "bot" && m.rating === Number(filter))
    );
    const map = new Map();
    visible.forEach((c) => {
      const k = dayLabel(c.date);
      map.set(k, [...(map.get(k) || []), c]);
    });
    return [...map.entries()];
  }, [history, filter]);

  return (
    <div className="history">
      <h2>Previous Suggestions</h2>
      <label className="filter">
        <span>Filter by rating</span>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter by rating">
          <option value="all">All Ratings</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n} Star{n > 1 ? "s" : ""}</option>
          ))}
        </select>
      </label>

      {groups.length === 0 && <p className="empty">No saved conversations found.</p>}

      {groups.map(([label, convs]) => (
        <section key={label}>
          <h3>{label}</h3>
          {convs.map((c) => (
            <div className="conversation" key={c.id}>
              {c.messages.map((m) => (
                <Message key={m.id} message={m} />
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
