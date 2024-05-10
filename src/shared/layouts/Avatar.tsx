import "@/styles/layouts/Avatar.scss";
import Center from "./Center";

interface AvatarProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | string;
  shape?: "card" | "circle" | string;
  color?: string;
  size?: "sm" | "md" | "lg" | string;
  className?: string;
}

export default function Avatar({
  children,
  type = "background",
  shape = "card",
  color,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <Center className={`${type} ${shape} ${color} ${size} ${className}`}>
      {children}
    </Center>
  );
}
