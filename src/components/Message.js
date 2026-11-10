import { BotAvatar, ThumbDown, ThumbUp, UserAvatar } from "./Icons";
import StarRating from "./StarRating";

const linkify = (text) =>
  text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noreferrer">{part}</a>
    ) : (
      part
    )
  );

export default function Message({ message, interactive = false, onLike, onDislike, onRate }) {
  const isBot = message.sender === "bot";
  return (
    <div className={`message ${isBot ? "bot" : "user"}`}>
      <div className="avatar">{isBot ? <BotAvatar /> : <UserAvatar />}</div>
      <div className="body">
        <div className="name">{isBot ? "Product Recommendation AI" : "You"}</div>
        <div className="text">{linkify(message.text)}</div>
        <div className="meta">
          <span className="time">{message.time}</span>
          {isBot && interactive && (
            <span className={`actions ${message.liked ? "pinned" : ""}`}>
              <button type="button" className={`icon-btn ${message.liked === "up" ? "active" : ""}`} aria-label="Like" onClick={onLike}>
                <ThumbUp filled={message.liked === "up"} />
              </button>
              <button type="button" className={`icon-btn ${message.liked === "down" ? "active" : ""}`} aria-label="Dislike" onClick={onDislike}>
                <ThumbDown filled={message.liked === "down"} />
              </button>
            </span>
          )}
        </div>
        {isBot && message.liked === "up" && (
          <div className="rate">
            <small>Rate this reponse:</small>
            {interactive ? <StarRating value={message.rating} onChange={onRate} /> : <StarRating value={message.rating} readOnly />}
          </div>
        )}
        {isBot && message.feedback && <div className="feedback-text">Feedback: {message.feedback}</div>}
      </div>
    </div>
  );
}
