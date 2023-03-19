import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, class_name }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      hideFooter
      className={class_name || ""}
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          "& *": {
            height: "initial !important",
            minHeight: "initial !important",
            maxHeight: "20px !important",
            lineHeight: "normal !important",
          },
          width: "100%",
          p: "12px 16px 6px",
          fontSize: "12px",
          height: "initial",
          minHeight: "initial !important",
          maxHeight: "initial !important",
          lineHeight: "normal !important",
          borderColor: "gray_light.main",
          color: (theme) =>
            theme.palette.mode === "dark" ? "#909399" : "#707580",
        },
        "& .MuiDataGrid-columnHeader": {
          height: "auto !important",
        },
        "& .MuiDataGrid-columnHeadersInner": {
          width: "100%",
          "& > div": { width: "100%" },
        },
        "& .MuiDataGrid-columnHeaderTitleContainerContent": {
          ml: "auto",
        },
        [`& [aria-label='${columns[0].headerName}']`]: {
          "& .MuiDataGrid-columnHeaderTitleContainerContent": {
            ml: "initial",
          },
        },
        minHeight: "100%",
        borderRight: "0",
        borderColor: "gray_light.main",
        borderTop: "0",
      }}
    />
  );
};

export default DataTable;
