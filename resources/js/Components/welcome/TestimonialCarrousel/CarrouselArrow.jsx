import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselArrow({
  direction = "left",   // "left" | "right"
  onClick,
  size = "md",          // "sm" | "md" | "lg"
  className = "",
}) {

  const sizeStyles = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const positionStyles =
    direction === "left"
      ? "left-6"
      : "right-6";

  return (
    <button
      onClick={onClick}
      className={`
        absolute ${positionStyles} top-1/2 -translate-y-1/2
        z-20 flex items-center justify-center
        rounded-full
        bg-white/10 backdrop-blur-md
        text-white/60 hover:text-yellow-400
        hover:bg-white/20
        transition-all duration-300
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {direction === "left" ? (
        <FaChevronLeft />
      ) : (
        <FaChevronRight />
      )}
    </button>
  );
}