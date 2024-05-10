import "@/styles/layouts/Divider.scss";

interface DividerProps {
  axis?: "x" | "y";
  color?: string;
  size?: "sm" | "md" | "lg" | string;
  className?: string;
}

export default function Divider({
  axis = "x",
  color,
  size = "md",
  className,
}: DividerProps) {
  return <div className={`divider ${axis} ${size} ${color} ${className}`} />;
}
