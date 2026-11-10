export default function StarRating({ value = 0, onChange, readOnly = false }) {
  return (
    <div className="stars" role="radiogroup" aria-label="Rating out of 5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? "on" : ""}`}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          disabled={readOnly}
          onClick={() => onChange && onChange(n)}
        >
          {n <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}
