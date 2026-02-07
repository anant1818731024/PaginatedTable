import { useState } from "react";

export function useTableFetch(fetchData: Function) {
    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState<any[]>([]);
    const [total, setTotal] = useState(0);

    const loadData = (page: number,
        pageSize: number,
        sortBy?: string,
        sortOrder?: "asc" | "desc") => {
            console.log("calling: ");
        setLoading(true);
        fetchData({page, pageSize, sortBy, sortOrder}).then((res: any) => {
            setRows(res.rows);
            setTotal(res.totalCount);
            setLoading(false);
        });
    };

    return {
        loading,
        rows,
        total,
        loadData
    }
}