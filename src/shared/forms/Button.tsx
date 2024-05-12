import "@/styles/forms/Button.scss";
import Center from "../layouts/Center";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: "disalbed" | string;
  type?: "filled" | "outline";
  color?: "purple" | "violet" | "blue" | "red" | "green" | string;
  size?: "sm" | "md" | "lg" | string;
  shape?: "box" | "card" | "pill";
  className?: string;
}

export default function Button({
  children,
  disabled,
  type = "filled",
  color = "purple",
  size = "md",
  shape = "card",
  className,
}: ButtonProps) {
  return (
    <button className="flex">
      <Center
        className={`Button ${disabled} ${type} ${color} ${shape} ${size} ${className}`}
      >
        {children}
      </Center>
    </button>
  );
}
