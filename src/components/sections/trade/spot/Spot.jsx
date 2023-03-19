import React from "react";
import { Box } from "@mui/material";
import ExchangeTextfield from "../../../exchangeTextfield/ExchangeTextfield";
import TradeSlider from "../tradeSlider/TradeSlider";

const Spot = ({ class_name }) => {
  return (
    <>
      <Box className="font-12" sx={{ color: "gray.main" }}>
        Available: -- USD
      </Box>
      <Box sx={{ mt: "12px" }}>
        <ExchangeTextfield
          prepend="Price"
          append="USDT"
          value={24656.42}
          class_name={class_name}
        />
      </Box>
      <Box sx={{ mt: "12px" }}>
        <ExchangeTextfield
          prepend="Amount"
          append="BTC"
          class_name={class_name}
        />
      </Box>
      <TradeSlider varient={"primary"} />
      <ExchangeTextfield
        prepend="Value"
        append="USDT"
        class_name={class_name}
      />
    </>
  );
};

export default Spot;
