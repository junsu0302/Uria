import "@/styles/displays/Timeline.scss";

export default function Timeline() {
  return (
    <div className="Timeline-layout">
      <ol className="Timeline-ol">
        <li className="Timeline-li">
          <div className="Timeline-dot" />
          <time className="Timeline-time">February 2022</time>
          <h3 className="Timeline-h3">Application UI code in Tailwind CSS</h3>
          <p className="Timeline-p">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li className="Timeline-li">
          <div className="Timeline-dot"></div>
          <time className="Timeline-time">March 2022</time>
          <h3 className="Timeline-h3">Marketing UI design in Figma</h3>
          <p className="Timeline-p">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-4">
          <div className="Timeline-dot" />
          <time className="Timeline-time">April 2022</time>
          <h3 className="Timeline-h3">E-Commerce UI code in Tailwind CSS</h3>
          <p className="Timeline-p">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
}
