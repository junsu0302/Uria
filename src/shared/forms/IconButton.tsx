import { MouseEventHandler } from "react";
import Avatar from "../layouts/Avatar";

interface IconButtonProps {
  children?: React.ReactNode;
  type?: "deep" | "soft" | "light" | "background" | string;
  shape?: "card" | "circle" | string;
  color?: string;
  size?: "sm" | "md" | "lg" | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function IconButton({
  children,
  type = "background",
  shape = "card",
  color,
  size = "md",
  onClick,
  className,
}: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <Avatar className={`${type} ${shape} ${color} ${size} ${className}`}>
        {children}
      </Avatar>
    </button>
  );
}
