import "@/styles/forms/Input.scss";

interface InputProps {
  children?: React.ReactNode;
  disabled?: "disalbed" | string;
  type?: "info" | "danger" | "success";
  label: string;
  className?: string;
}

export default function Input({
  children,
  disabled,
  type = "info",
  label,
  className,
}: InputProps) {
  return (
    <div className="relative">
      <input type="text" className={`InputBox ${type} peer`} placeholder=" " />
      <label className={`InputLabel ${type}`}>{label}</label>
    </div>
  );
}
