import { useEffect, useRef, useState } from "react";
import { useChat } from "../context/ChatContext";
import ChatInput from "./ChatInput";
import FeedbackModal from "./FeedbackModal";
import Message from "./Message";
import Welcome from "./Welcome";

export default function Chat() {
  const { chat, sendMessage, updateMessage, saveConversation, toast } = useChat();
  const [feedbackFor, setFeedbackFor] = useState(null);
  const endRef = useRef(null);
  const hasMessages = chat.messages.length > 0;

  useEffect(() => {
    if (endRef.current && endRef.current.scrollIntoView) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages.length]);

  const like = (m) => updateMessage(m.id, { liked: m.liked === "up" ? null : "up", rating: m.liked === "up" ? 0 : m.rating });
  const dislike = (m) => {
    updateMessage(m.id, { liked: "down", rating: 0 });
    setFeedbackFor(m);
  };

  return (
    <>
      <div className="chat-area">
        {!hasMessages ? (
          <Welcome onPick={sendMessage} />
        ) : (
          <div className="messages">
            {chat.messages.map((m) => (
              <Message
                key={m.id}
                message={m}
                interactive
                onLike={() => like(m)}
                onDislike={() => dislike(m)}
                onRate={(n) => updateMessage(m.id, { rating: n })}
              />
            ))}
            <div ref={endRef} />
          </div>
        )}
      </div>
      {toast && <div className="toast" role="status">{toast}</div>}
      <ChatInput hasMessages={hasMessages} onAsk={sendMessage} onSave={saveConversation} />
      {feedbackFor && (
        <FeedbackModal
          initial={feedbackFor.feedback}
          onClose={() => setFeedbackFor(null)}
          onSubmit={(text) => {
            updateMessage(feedbackFor.id, { feedback: text });
            setFeedbackFor(null);
          }}
        />
      )}
    </>
  );
}
