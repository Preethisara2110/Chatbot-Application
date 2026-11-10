import { BotAvatar } from "./Icons";

const SUGGESTIONS = ["Jeans", "Smartphone", "Laptop", "T-Shirt"];

export default function Welcome({ onPick }) {
  return (
    <div className="welcome">
      <h2>Hi, Please tell me what you want?</h2>
      <div className="welcome-bot"><BotAvatar size={36} /></div>
      <div className="cards">
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" className="card" onClick={() => onPick(s)}>
            <strong>{s}</strong>
            <span>Get immediate AI generated response</span>
          </button>
        ))}
      </div>
    </div>
  );
}
