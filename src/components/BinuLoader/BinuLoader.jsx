import { useEffect, useState } from "react";
import "./BinuLoader.css";

export default function BinuLoader({ text = "BINU", ready = true, minDuration = 2800, onDone }) {
  const [minPassed, setMinPassed] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinPassed(true), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  useEffect(() => {
    if (ready && minPassed) setLeaving(true);
  }, [ready, minPassed]);

  return (
    <div
      className={`bl-overlay ${leaving ? "bl-leave" : ""}`}
      onTransitionEnd={(event) => {
        if (leaving && event.target === event.currentTarget) onDone?.();
      }}
      role="status"
      aria-label="Memuat portfolio"
    >
      <div className="bl-box">
        <div className="bl-spinner" />
        <div className="bl-text">
          {text.split("").map((character, index) => (
            <span key={`${character}-${index}`} style={{ animationDelay: `${index * 0.18}s` }}>
              {character}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
