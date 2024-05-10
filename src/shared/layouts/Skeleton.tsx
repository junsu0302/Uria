import "@/styles/layouts/Skeleton.scss";

interface SkeletonProps {
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "content-sm"
    | "content"
    | "content-lg";
  size: string;
}

export default function Skeleton({ type, size }: SkeletonProps) {
  return <div className={`skeleton ${type} ${size}`}></div>;
}
