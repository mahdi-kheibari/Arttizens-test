import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const MarketQuota = ({columnsList,rowList}) => {
  return (
    <>
      <Box
        sx={{
          px: 3,
          height: "44px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          color:"text.primary"
        }}
        className="font-16"
      >
        Latest Execution
      </Box>
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
            borderColor: "gray_light.main",
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
          borderColor: "gray_light.main",
        }}
      />
    </>
  );
};

export default MarketQuota;
