export type Props = {
  rows: any[];
  columnSort?: {
    sortBy: string | undefined;
    sortOrder: "asc" | "desc" | undefined;
    onSort: (column: string) => void;
  };
  columnCnt?: number
};
