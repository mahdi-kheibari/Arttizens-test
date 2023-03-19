import { Box } from "@mui/material";
import React from "react";
import DataTable from "../../dataTable/DataTable";
import "./marketQuota.scss";
const MarketQuota = ({ columnsList, rowList }) => {
  return (
    <>
      <Box
        sx={{
          px: 3,
          height: "44px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          color: "text.primary",
        }}
        className="font-16"
      >
        Latest Execution
      </Box>
      <DataTable
        rows={rowList}
        columns={columnsList}
        class_name="market-quote-header"
      />
    </>
  );
};

export default MarketQuota;
