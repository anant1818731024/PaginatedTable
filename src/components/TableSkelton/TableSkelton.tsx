// TableSkeleton.tsx
import { SkeletonCell } from "./SkeletonCell";

export function TableSkeleton({
  rows = 10,
  columns = 10,
}: {
  rows?: number;
  columns?: number;
}) {
  return (
    <div>
      <table style={{borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} style={{ padding: 12 }}>
                <SkeletonCell height={18} />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              {Array.from({ length: columns }).map((_, c) => (
                <td key={c} style={{ padding: 12 }}>
                  <SkeletonCell />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
