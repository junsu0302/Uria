interface IconProps {
  size?: number;
  color?: string;
}

export default function IconInfo({ size = 32, color = "#fde047" }: IconProps) {
  return (
    <svg
      height={`${size}`}
      width={`${size}`}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"
        fill="rgb(61, 102, 184)"
      />
    </svg>
  );
}
