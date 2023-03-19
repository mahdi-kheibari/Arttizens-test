import React from "react";
import { Slider } from "@mui/material";

const TradeSlider = ({ varient }) => {
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
    <Slider
      defaultValue={0}
      getAriaValueText={(val) => `${val}%`}
      valueLabelDisplay="auto"
      step={1}
      marks={marks}
      min={0}
      max={100}
      color={varient}
      sx={{
        "& .MuiSlider-thumb": {
          width: "12px",
          height: "12px",
          color: "bgColor.main",
          border: "3.5px solid",
          borderColor: `${varient}.main`,
        },
        "& .MuiSlider-rail": {
          backgroundColor: "sliderBg.main",
          height: "2px",
        },
        "& .MuiSlider-mark": {
          backgroundColor: "sliderBg.main",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
        },
        "& .MuiSlider-markActive": {
          backgroundColor: `${varient}.main`,
        },
        "& .MuiSlider-track": {
          height: "2px",
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: "bgColor.main",
          border: "1px solid",
          borderColor: `${varient}.main`,
          color: "text.primary",
          "&:before": {
            borderRight: "1px solid",
            borderBottom: "1px solid",
            borderColor: `${varient}.main`,
          },
          "& .MuiSlider-valueLabelLabel": {
            "&:after": {
              content: '"%"',
              color: "text.primary",
            },
          },
        },
      }}
    />
  );
};

export default TradeSlider;
