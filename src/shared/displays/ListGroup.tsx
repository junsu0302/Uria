import "@/styles/displays/ListGroup.scss";

interface CardProps {
  title?: string;
  contents?: string | string[];
  size?: string;
  className?: string;
}

export default function ListGroup({
  title,
  contents,
  size,
  className,
}: CardProps) {
  return (
    <ul className={`ListGroup-layout ${size}`}>
      <li className="ListGroup-title divider">Profile</li>
      <li className="ListGroup-list divider">Settings</li>
      <li className="ListGroup-list divider">Messages</li>
      <li className="ListGroup-list">Download</li>
    </ul>
  );
}
