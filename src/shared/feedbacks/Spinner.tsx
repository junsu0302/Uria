import "@/styles/feedbacks/Spinner.scss";

interface SpinnerProps {
  size: "sm" | "md" | "lg" | string;
}

export default function Spinner({ size = "md" }: SpinnerProps) {
  return <div className={`Spinner ${size}`}></div>;
}
