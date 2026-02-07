import { useSearchParams } from "react-router-dom";

export function useTableState() { 
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page") || 1);
  const sortBy = params.get("sortBy") || undefined;
  const sortOrder = params.get("sortOrder") as "asc" | "desc" | undefined;
  

  function updateState(next: Partial<{ page: number; sortBy: string; sortOrder: string }>) {
    setParams((prev) => {
      Object.entries(next).forEach(([k, v]) => {
        if (v === undefined) prev.delete(k);
        else prev.set(k, String(v));
      });
      return prev;
    });
  }

  return { page, sortBy, sortOrder,updateState};
}
