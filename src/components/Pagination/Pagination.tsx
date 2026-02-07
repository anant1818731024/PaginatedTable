import { useEffect, useState } from "react";
import "./Pagination.css";

export function Pagination({
  page,
  total,
  pageSize,
  onPageChange,
  onPageSizeUpdate,
}: {
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (p: number) => void;
  onPageSizeUpdate: (s: number) => void;
}) {
  const [pageInput, setPageInput] = useState(page);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    setPageInput(page);
  }, [page]);

  const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

  return (
    <div className="pagination">

      <div className="pagination-info">
        {/* Page info */}
        <span >
          Page
          <input
            type="text"
            className="page-input"
            value={pageInput}
            onChange={(e) => {
              const raw = e.target.value.replace(/^0+(?=\d)/, "");
              const value = Number(raw);

              if (!Number.isNaN(value)) {
                setPageInput(value);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = Number(pageInput);
                if (value >= 1 && value <= totalPages) {
                  onPageChange(value);
                }
              }
            }}
          />
          of {totalPages}
        </span>

        {/* Page size changer */}
        <div className="page-size">
          <label htmlFor="pageSize">Rows per page:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              onPageSizeUpdate(newSize);
            }}
          >
            {PAGE_SIZE_OPTIONS.filter((size) => size <= total).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="pagination-actions">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Prev
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
