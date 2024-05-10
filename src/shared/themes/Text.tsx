import "@/styles/themes/Typography.scss";

interface TextProps {
  children: React.ReactNode;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "content-sm"
    | "content"
    | "content-lg";
  color?: string;
  bold?: string;
  className?: string;
}

export default function Text({
  children,
  size = "content",
  color,
  bold,
  className,
}: TextProps) {
  return <p className={`${size} ${color} ${bold} ${className}`}>{children}</p>;
}
