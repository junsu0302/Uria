import "@/styles/layouts/Box.scss";

interface BoxProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | "basic" | string;
  color?: string;
  size?: string;
  className?: string;
}

export default function Box({
  children,
  type,
  color,
  size,
  className,
}: BoxProps) {
  return (
    <div className={`Box ${type} ${color} ${size} ${className}`}>
      {children}
    </div>
  );
}
