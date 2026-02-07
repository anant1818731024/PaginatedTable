export function generateData(rows = 200, cols = 100) {
  return Array.from({ length: rows }, (_, r) => {
    const row: Record<string, any> = { id: r + 1 };

    for (let c = 1; c <= cols; c++) {
      switch (c % 5) {
        case 0:
          // ascending
          row[`col${c}`] = r;
          break;

        case 1:
          // descending
          row[`col${c}`] = rows - r;
          break;

        case 2:
          // random (stable per row/col)
          row[`col${c}`] = Math.floor(Math.random() * rows);
          break;

        case 3:
          // alternating pattern
          row[`col${c}`] = r % 2 === 0 ? r : rows - r;
          break;

        case 4:
          // string-based (different lexicographic order)
          row[`col${c}`] = `C${c}-R${(r * 7) % rows}`;
          break;
      }
    }

    return row;
  });
}

