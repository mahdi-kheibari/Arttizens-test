import { Box } from "@mui/system";
import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import DataTable from "../../dataTable/DataTable";
import "./orderbook.scss";

const Orderbook = () => {
  const topPriceInfo = useSelector(
    (state) => state.chart.topPriceInfo,
    shallowEqual
  );
  const bottomPriceInfo = useSelector(
    (state) => state.chart.bottomPriceInfo,
    shallowEqual
  );
  const exchangeQuotaList = [
    { field: "price", headerName: "Price(USDT)" },
    { field: "amount", headerName: "Amount(STC)" },
    { field: "time", headerName: "Time" },
  ];
  const [activeFilter, setActiveFilter] = useState("bid");
  const filters = ["bid", "ask"];
  function OrderbookFooter() {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "52px",
          padding: "0 15px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {filters.map((item) => (
          <Box
            sx={{
              display: "flex",
              width: "20px",
              height: "20px",
              cursor: "pointer",
              border: "1px solid",
              borderColor:
                activeFilter === item ? "primary.main" : "gray_light.main",
              borderRadius: "4px",
              alignItems: "center",
              justifyContent: "center",
              ml: 2,
            }}
            onClick={() => {
              setActiveFilter(item);
            }}
          >
            <img src={`/images/orderbook/${item}.png`} />
          </Box>
        ))}
      </Box>
    );
  }
  return activeFilter === "bid" ? (
    <DataTable
      rows={topPriceInfo}
      columns={exchangeQuotaList}
      class_name="orderbook-list_header"
      density={"compact"}
      columnsColor="primary.main"
      footer={OrderbookFooter}
    />
  ) : (
    <DataTable
      rows={bottomPriceInfo}
      columns={exchangeQuotaList}
      class_name="orderbook-list_header"
      density={"compact"}
      columnsColor="danger.main"
      footer={OrderbookFooter}
    />
  );
};

export default Orderbook;
