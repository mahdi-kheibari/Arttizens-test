import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Orderbook = ({columnsList,rowList}) => {
  return (
    <DataGrid
      rows={rowList}
      columns={columnsList}
      hideFooter
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          width: "100%",
          p: "0 16px 6px",
          fontSize: "12px",
          color: "gray.main",
          height: "auto",
          minHeight: "auto !important",
          lineHeight: "normal !important",
        },
        "& .MuiDataGrid-columnHeader": {
          height: "auto !important",
        },
        "& .MuiDataGrid-columnHeadersInner": {
          width: "100%",
          "& > div": { width: "100%" },
        },
        "& [aria-label='Amount(STC)']": {
          ml: "auto",
        },
        minHeight: "100%",
        borderRight: "0",
        borderTop: "0",
      }}
    />
  );
};

export default Orderbook;
