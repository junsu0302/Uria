import "@/styles/display/Table.scss";

export default function Table() {
  return (
    <div className="layout">
      <table>
        <thead>
          <tr>
            <HeadIndex>Product Name</HeadIndex>
            <HeadIndex>Color</HeadIndex>
            <HeadIndex>Category</HeadIndex>
            <HeadIndex>Price</HeadIndex>
          </tr>
        </thead>
        <tbody>
          <tr className="divider">
            <td>Apple MacBook Pro 17</td>
            <td>Silver</td>
            <td>Laptop</td>
            <td>$2999</td>
          </tr>
          <tr className="divider">
            <td>Microsoft Surface Pro</td>
            <td>White</td>
            <td>Laptop PC</td>
            <td>$1999</td>
          </tr>
          <tr>
            <td>Magic Mouse 2</td>
            <td>Black</td>
            <td>Accessories</td>
            <td>$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export const HeadIndex: React.FC<{ children: string }> = ({ children }) => {
  return (
    <th>
      <div className="flex items-center">
        {children}
        {children && <IconSort />}
      </div>
    </th>
  );
};

function IconSort() {
  return (
    <svg
      className="w-3 h-3 ms-1.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
    </svg>
  );
}
