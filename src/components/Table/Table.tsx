import { DataTable } from "../DataTable/DataTable";
import { Pagination } from "../Pagination/Pagination";
import { useTableState } from "../../hooks/useTableState";
import { useEffect, useState } from "react";
import type { Props } from "./Props";
import { TableSkeleton } from "../TableSkelton/TableSkelton";
import { useTableFetch } from "../../hooks/useTableFetch";
import "./Table.css";

export function Table({ fetchData, pageSize:initialPageSize, columnCnt }: Props) {
    const { page, sortBy, sortOrder, updateState } = useTableState();
    const { loading, rows, total, loadData } = useTableFetch(fetchData);

    const [pageSize, setPageSize] = useState(initialPageSize || 10);

    function handleSort(column: string) {
        if (sortBy !== column) {
            updateState({ sortBy: column, sortOrder: "asc", page: 1 });
        } else if (sortOrder === "asc") {
            updateState({ sortOrder: "desc", page: 1 });
        } else {
            updateState({ sortBy: undefined, sortOrder: undefined, page: 1 });
        }
    }

    useEffect(() => {
        loadData(page, pageSize, sortBy, sortOrder);
    }, [page, sortBy, sortOrder]);

    useEffect(() => {
        if(page === 1) loadData(page, pageSize, sortBy, sortOrder);
        updateState({ page: 1 });
    },[pageSize])

    return (
        <div >
            {loading ? <TableSkeleton /> : <DataTable rows={rows} columnSort={{ sortBy, sortOrder, onSort: handleSort }} columnCnt={columnCnt} />}
            <Pagination
                page={page}
                total={total}
                pageSize={pageSize}
                onPageSizeUpdate={(s:number) => setPageSize(s)}
                onPageChange={(p) => updateState({ page: p })}
            />
        </div>
    );
}
