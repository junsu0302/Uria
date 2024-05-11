import "@/styles/display/Card.scss";
import Box from "../layouts/Box";

interface CardProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | string;
  color?: string;
  size?: string;
  round?: "sm" | "md" | "lg" | string;
  className?: string;
}

export default function Card({
  children,
  type = "deep",
  color,
  size,
  round = "md",
  className,
}: CardProps) {
  return (
    <Box className={`card ${round} ${type} ${color} ${size} ${className}`}>
      {children}
    </Box>
  );
}
