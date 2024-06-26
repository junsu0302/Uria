import "@/styles/forms/SearchBox.scss";
import IconButton from "./IconButton";

interface SearchBoxProps {
  size: string;
}

export default function SearchBox({ size }: SearchBoxProps) {
  return (
    <form className={`${size}`}>
      <div className="SearchBox layout">
        <input className="SearchBox input-box" placeholder="Search" />
        <IconButton shape="circle" type="basic">
          <IconSearch />
        </IconButton>
      </div>
    </form>
  );
}

export function IconSearch() {
  return (
    <svg
      className="text-gray-dark-200 dark:text-gray-light-200"
      width="16px"
      height="16px"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
