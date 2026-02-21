import { FaJs, FaReact, FaLaravel, FaPython, FaCode } from "react-icons/fa";
import "../../../css/CodeRainEffect.css"; 

export const CodeRainEffect = () => {
  // Array de iconos para mayor variedad visual
  const icons = [
    <FaJs />, <FaReact />, <FaLaravel />, <FaPython />, <FaCode />, 
    <span className="font-mono text-[10px]">{"</>"}</span>,
    <span className="font-mono text-[10px]">{"{ }"}</span>
  ];

  return (
    <div className="code-container">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i} 
          className="code-item" 
          style={{ 
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${2 + Math.random() * 4}s`, // Mucho más rápido (antes era 12s)
            '--left': `${Math.random() * 100}%`,
            '--size': `${18 + Math.random() * 10}px`,
            '--opacity': Math.random() * 0.5 + 0.2
          }}
        >
          {icons[i % icons.length]}
        </div>
      ))}
      <div className="code-gradient" />
    </div>
  );
};