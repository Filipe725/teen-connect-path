import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;       // em ms, ex: 100, 200, 300
  duration?: number;    // em ms, padrão 600
  distance?: string;    // ex: "30px"
  className?: string;
  threshold?: number;
}

const transforms: Record<Direction, string> = {
  up:    "translateY(40px)",
  down:  "translateY(-40px)",
  left:  "translateX(40px)",
  right: "translateX(-40px)",
  none:  "none",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const { ref, visible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}