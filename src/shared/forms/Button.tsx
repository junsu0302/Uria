import "@/styles/forms/Button.scss";
import Center from "../layouts/Center";
import { MouseEventHandler } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: "disalbed" | string;
  type?: "filled" | "outline";
  color?: "purple" | "violet" | "blue" | "red" | "green" | string;
  size?: "sm" | "md" | "lg" | string;
  shape?: "box" | "card" | "pill";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  children,
  disabled,
  type = "filled",
  color = "purple",
  size = "md",
  shape = "card",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button className="flex" onClick={onClick}>
      <Center
        className={`Button ${disabled} ${type} ${color} ${shape} ${size} ${className}`}
      >
        {children}
      </Center>
    </button>
  );
}
