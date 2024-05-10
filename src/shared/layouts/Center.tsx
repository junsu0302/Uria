import "@/styles/layouts/Center.scss";
import Box from "./Box";

interface CenterProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | string;
  color?: string;
  size?: string;
  className?: string;
}

export default function Center({
  children,
  type,
  color,
  size,
  className,
}: CenterProps) {
  return (
    <Box className={`center ${type} ${color} ${size} ${className}`}>
      {children}
    </Box>
  );
}
