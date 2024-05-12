import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBoxProps {
  children: string | string[];
}

export default function CodeBox({ children }: CodeBoxProps) {
  return (
    <SyntaxHighlighter className="text-sm" language="html" style={dracula}>
      {children}
    </SyntaxHighlighter>
  );
}
