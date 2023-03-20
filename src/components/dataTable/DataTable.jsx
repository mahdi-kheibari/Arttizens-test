import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Box } from "@mui/system";

const DataTable = ({
  rows,
  columns,
  class_name,
  density,
  columnsColor,
  footer,
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      hideFooter={footer ? false : true}
      className={class_name || ""}
      density={density || "standard"}
      rowHeight={26}
      slots={{
        footer: footer || <Box></Box>,
      }}
      getRowClassName={(params) => {
        return parseInt(params.row.amount) > 100
          ? "row-100"
          : `row-${parseInt(params.row.amount)}`;
      }}
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
        "& .MuiDataGrid-row": {
          minHeight: "26px !important",
          maxHeight: "26px !important",
          backgroundImage:
            columnsColor === "primary.main"
              ? "linear-gradient(rgba(14,173,152,.06),rgba(14,173,152,.06))"
              : "linear-gradient(rgba(219,85,65,.06),rgba(219,85,65,.06))",
          backgroundPosition: "100% 0",
          backgroundRepeat: "no-repeat",
          "& .MuiDataGrid-cell": {
            minHeight: "26px !important",
            maxHeight: "26px !important",
            "& .MuiDataGrid-cellContent": {
              ml: "auto",
              fontSize: "12px",
              lineHeight: "1.5",
            },
          },
          [`& [data-field='${columns[0].field}']`]: {
            "& .MuiDataGrid-cellContent": {
              ml: "initial !important",
              color: columnsColor || "initial",
            },
          },
        },
        "& .MuiDataGrid-virtualScroller": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#909399" : "#79797a",
            "&:hover": {
              background: (theme) =>
                theme.palette.mode === "dark" ? "#212329" : "#e6e7eb",
            },
          },
          "&::-webkit-scrollbar-track": {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#1f2229" : "#fff",
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
