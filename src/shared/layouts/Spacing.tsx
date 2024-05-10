import "@/styles/layouts/Spacing.scss";

interface SpacingProps {
  axis: "x" | "y";
  color?: string;
  size?: "sm" | "md" | "lg" | string;
  className?: string;
}

export default function Spacing({
  axis,
  color,
  size = "md",
  className,
}: SpacingProps) {
  return <div className={`spacing ${axis} ${size} ${color} ${className}`} />;
}
