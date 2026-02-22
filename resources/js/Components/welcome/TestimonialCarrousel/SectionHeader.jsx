export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",          // "center" | "left"
  size = "default",          // "sm" | "default" | "lg"
  gradient = true,
  className = "",
}) {

  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  const titleSizes = {
    sm: "text-2xl md:text-3xl",
    default: "text-3xl md:text-5xl",
    lg: "text-4xl md:text-6xl",
  };

  return (
    <div className={`flex flex-col ${alignment} px-6 ${className}`}>

      {/* Badge opcional */}
      {badge && (
        <span className="mb-4 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-cyan-400 backdrop-blur-md">
          {badge}
        </span>
      )}

      {/* Título */}
      <h2
        className={`
          font-bold tracking-tight leading-tight
          ${titleSizes[size]}
          ${
            gradient
              ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
              : "text-white"
          }
        `}
      >
        {title}
      </h2>

      {/* Línea decorativa */}
      <div className="mt-1 w-16 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full" />

      {/* Subtítulo */}
      {subtitle && (
        <p className="mt-2 max-w-2xl text-gray-400 text-base md:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}

    </div>
  );
}