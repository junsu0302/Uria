interface IconProps {
  size?: number;
  color?: string;
}

export default function IconSuccess({
  size = 24,
  color = "#fde047",
}: IconProps) {
  return (
    <svg
      height={`${size}`}
      width={`${size}`}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="64" cy="64" r="64" fill="rgb(61, 184, 163)" />
      </g>
      <g>
        <path
          d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2   c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"
          fill="#111111"
        />
      </g>
    </svg>
  );
}
