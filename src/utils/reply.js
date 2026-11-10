import replies from "../data/replies.json";

export const FALLBACK = "Sorry, I did not understand your query!";

export const getReply = (query) => {
  const q = query.trim().toLowerCase();
  const found = replies.find((r) => r.question.toLowerCase() === q);
  return found ? found.response : [FALLBACK];
};

export const formatTime = (d = new Date()) =>
  d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
