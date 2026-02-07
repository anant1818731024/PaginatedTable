export interface Props {
  fetchData: (params: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }) => Promise<any>;
  pageSize?: number;
  columnCnt?: number;
  dimensionControls?: {
    rowsControl?: boolean;
    columnsControl?: boolean;
  }
}