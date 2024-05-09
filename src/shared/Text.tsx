interface TextProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
  bold?: string;
  style?: string;
}

export default function Text({
  children,
  size = "text-md",
  color,
  bold,
  style,
}: TextProps) {
  return <p className={`${size} ${color} ${bold} ${style}`}>{children}</p>;
}
