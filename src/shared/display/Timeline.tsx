import "@/styles/display/Timeline.scss";
import Text from "../themes/Text";

export default function Timeline() {
  return (
    <div className="layout">
      <ol>
        <li>
          <div className="dot" />
          <time>February 2022</time>
          <h3>Application UI code in Tailwind CSS</h3>
          <p>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="dot"></div>
          <time>March 2022</time>
          <h3>Marketing UI design in Figma</h3>
          <p>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-4">
          <div className="dot"></div>
          <time>April 2022</time>
          <h3>E-Commerce UI code in Tailwind CSS</h3>
          <p>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
}
