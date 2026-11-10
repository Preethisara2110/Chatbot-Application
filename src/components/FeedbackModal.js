import { useEffect, useState } from "react";
import { CommentIcon } from "./Icons";

export default function FeedbackModal({ initial = "", onSubmit, onClose }) {
  const [text, setText] = useState(initial);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(text.trim());
  };

  return (
    <div className="overlay" onClick={onClose}>
      <form className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="modal-head">
          <span className="modal-title"><CommentIcon /> Provide Additional Feedback</span>
          <button type="button" className="icon-btn" aria-label="Close" onClick={onClose}>✕</button>
        </div>
        <textarea
          className="modal-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Feedback"
          autoFocus
        />
        <div className="modal-actions">
          <button type="submit" className="btn primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
