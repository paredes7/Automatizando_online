import "../../../css/CircuitEffect.css";

export const CircuitEffect = () => {
  return (
    <div className="tech-container">
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="tech-svg"
      >
        <path
          className="tech-line"
          d="M0 150 
             C 200 100, 400 180, 600 130
             S 1000 80, 1440 140"
        />

        <path
          className="tech-line delay-1"
          d="M0 170 
             C 250 120, 500 190, 750 140
             S 1150 90, 1440 160"
        />

        <path
          className="tech-line delay-2"
          d="M0 130 
             C 300 80, 600 160, 900 110
             S 1200 70, 1440 120"
        />
      </svg>

      <div className="tech-glow"></div>
    </div>
  );
};