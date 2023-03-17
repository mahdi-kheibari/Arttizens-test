import React from "react";
import { Box, Slider } from "@mui/material";
import ExchangeTextfield from "../../../exchangeTextfield/ExchangeTextfield";

const Spot = ({ class_name }) => {
  const marks = [
    {
      value: 0,
    },
    {
      value: 25,
    },
    {
      value: 50,
    },
    {
      value: 75,
    },
    {
      value: 100,
    },
  ];
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
      <Slider
        defaultValue={0}
        getAriaValueText={(val) => `${val}%`}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={100}
      />
      <ExchangeTextfield
        prepend="Value"
        append="USDT"
        class_name={class_name}
      />
    </>
  );
};

export default Spot;
