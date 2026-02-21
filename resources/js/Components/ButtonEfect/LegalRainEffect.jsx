import "../../../css/LegalRainEffect.css";

export const LegalRainEffect = () => {
const icons = ['⚖️', '⚖️', '📜', '⚖️'];

  return (
    <div className="legal-container">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="legal-symbol"
          style={{
            '--delay': `${Math.random() * 8}s`,
            '--duration': `${2 + Math.random() * 4}s`,
            '--left': `${Math.random() * 100}%`,
            '--size': `${16 + Math.random() * 12}px`
          }}
        >
          {icons[i % icons.length]}
        </div>
      ))}
      <div className="legal-gradient" />
    </div>
  );
};