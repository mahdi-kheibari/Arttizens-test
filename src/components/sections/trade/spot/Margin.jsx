import React from "react";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import ExchangeTextfield from "../../../exchangeTextfield/ExchangeTextfield";

const Margin = ({class_name}) => {
  return (
    <>
      <Box className="font-12" sx={{ color: "gray.main" }}>
        Available: -- BTC
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
      <Slider
        defaultValue={0}
        getAriaValueText={(val) => `${val}%`}
        valueLabelDisplay="auto"
        step={25}
        marks
        min={0}
        max={100}
        color="warning"
      />
      <ExchangeTextfield
        prepend="Value"
        append="USDT"
        class_name={class_name}
      />
    </>
  );
};

export default Margin;
