import { useState } from "react";

export default function ChatInput({ hasMessages, onAsk, onSave }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitter = e.nativeEvent && e.nativeEvent.submitter;
    if (submitter && submitter.name === "save") {
      onSave();
      return;
    }
    if (!value.trim()) return;
    onAsk(value);
    setValue("");
  };

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={hasMessages ? "Anything Else?" : "Please tell me about your query!"}
        aria-label="Chat input"
      />
      <button type="submit" name="ask" className="btn primary">Ask</button>
      {/* Save is disabled (and not yet a submit button) until a conversation exists */}
      <button
        type={hasMessages ? "submit" : "button"}
        name="save"
        className={`btn ${hasMessages ? "outline" : "disabled"}`}
        disabled={!hasMessages}
      >
        Save
      </button>
    </form>
  );
}
