import { fetchData } from "../../api/mockApi";
import "./Home.css";
import { Table } from "../../components/Table/Table";
import { useState } from "react";
import { Title } from "../../components/Title/Title";

export function HomePage() {
  const [columnCnt, setColumnCnt] = useState<number | undefined>(undefined);
  const [columnCntInput, setColumnCntInput] = useState<string>("");
  

  return (
    <div className="homePage">
      <Title columnCntInput={columnCntInput} setColumnCntInput={setColumnCntInput} setColumnCnt={setColumnCnt} title="Paginated Table" />
      <Table fetchData={fetchData} pageSize={10} columnCnt={columnCnt}/>
    </div>
  )
}
