import XLSX from "xlsx";

export const generateInvalidExcel = (rows: any[]) => {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Invalid Rows");
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
};
