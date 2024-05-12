import "@/styles/displays/Badge.scss";
import Center from "../layouts/Center";

interface BadgeProps {
  children: React.ReactNode;
  type?: "ring" | "flat";
  color?: "purple" | "violet" | "red" | "blue" | "green" | string;
  size?: "sm" | "md" | "lg" | string;
  shape?: "box" | "card" | "pill";
  state?: "success" | "danger" | "warning" | "info" | string;
  dot?: true | false;
  deleteButton?: true | false;
  className?: string;
}

export default function Badge({
  children,
  type = "ring",
  color = "purple",
  size = "md",
  shape = "pill",
  state,
  dot = false,
  deleteButton = false,
  className,
}: BadgeProps) {
  return (
    <div className="flex">
      <Center className={`badge ${type} ${color} ${size} ${shape}`}>
        {dot && <div className="w-[20px] h-[20px] bg-red-400" />}
        <div>{children}</div>
        {deleteButton && <div className="w-[20px] h-[20px] bg-red-400" />}
      </Center>
    </div>
  );
}
