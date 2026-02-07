import "./DataTable.css";
import type { Props } from "./Props";

export function DataTable({ rows, columnSort, columnCnt }: Props) {
  const { sortBy, sortOrder, onSort } = columnSort || {};
  const columns = rows[0] ? Object.keys(rows[0]).slice(0, columnCnt) : [];

  return (
    <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col} onClick={() => onSort?.(col)} style={{ cursor: "pointer" }}>
                  {col}
                  {sortBy === col && <span className="sort-indicator">{(sortOrder === "asc" ? "▲" : "▼")}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                {columns.map((c, i) => (
                  <td key={c+i}>{r[c]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
