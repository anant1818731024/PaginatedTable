import { generateData } from "../utils/generateData";

const DATA = generateData(200, 100);

export function fetchData({
  page,
  pageSize,
  sortBy,
  sortOrder,
}: {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) {
  return new Promise<{ rows: any[]; totalCount: number }>((resolve) => {
    setTimeout(() => {
      let data = [...DATA];

      // sort before paginate
      if (sortBy && sortOrder) {
        data.sort((a, b) => {
          if (a[sortBy] === b[sortBy]) return 0;
          return sortOrder === "asc"
            ? a[sortBy] < b[sortBy] ? -1: 1
            : a[sortBy] > b[sortBy] ? -1: 1;
        });
      }

      const start = (page - 1) * pageSize;
      const paginated = data.slice(start, start + pageSize);

      resolve({
        rows: paginated,
        totalCount: DATA.length,
      });
    }, 500); // simulating latency
  });
}
