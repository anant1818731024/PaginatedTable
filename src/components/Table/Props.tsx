export interface Props {
  fetchData: (params: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }) => Promise<any>;
  columnCnt?: number;
  dimensionControls?: {
    rowsControl?: boolean;
    columnsControl?: boolean;
  }
}