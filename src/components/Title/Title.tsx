type TitleProps = {
  columnCntInput: string;
  setColumnCntInput: (v: string) => void;
  setColumnCnt: (n: number) => void;
  title: string
};

export function Title({
  columnCntInput,
  setColumnCntInput,
  setColumnCnt,
  title,
}: TitleProps) {
  const handleApply = () => {
    if (!columnCntInput || isNaN(Number(columnCntInput)) || Number(columnCntInput) <= 0) return;
    setColumnCnt(Number(columnCntInput));
    setColumnCntInput("");
  }
  return (
    <div className="title">
      <h2>{title}</h2>

      <div className="column-configurator">
        Columns to show:
        <input
          id="columnCnt"
          type="text"
          value={columnCntInput}
          onChange={(e) => {
            const value = e.target.value;
            if(isNaN(Number(value))) return;
            setColumnCntInput(value);
          }}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              handleApply();
            }
          }}
        />

        <button
          onClick={handleApply}
          disabled={isNaN(Number(columnCntInput)) || Number(columnCntInput) <= 0}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
