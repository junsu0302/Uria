import "@/styles/layouts/Flex.scss";
import Box from "./Box";

interface CenterProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | "basic" | string;
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
    <Box className={`flex-between ${type} ${color} ${size} ${className}`}>
      {children}
    </Box>
  );
}
