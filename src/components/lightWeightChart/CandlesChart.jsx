import { Box } from "@mui/system";
import { createChart, ColorType, CrosshairMode } from "lightweight-charts";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Crop32OutlinedIcon from "@mui/icons-material/Crop32Outlined";
import CropDinOutlinedIcon from "@mui/icons-material/CropDinOutlined";
import "./candlesChart.scss";
import { useTheme } from "@mui/material";
const CandlesChart = (props) => {
  const theme = useTheme();
  const [volumeValue, setVolumeValue] = useState(0);
  const [volume, setVolume] = useState(true);
  const {
    data = [],
    colors: {
      backgroundColor = theme.palette.mode === "light" ? "#F4F5F7" : "#1a191f",
      textColor = theme.palette.mode === "light" ? "#79797a" : "#909399",
      upColor = "#0EAD98",
      downColor = "#FA5252",
      borderDownColor = "#FA5252",
      borderUpColor = "#0EAD98",
      wickDownColor = "#FA5252",
      wickUpColor = "#0EAD98",
    } = {},
  } = props;
  const dataMemo = useMemo(() => data, []);

  const chartContainerRef = useRef();
  const volumeContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
      grid: {
        vertLines: {
          color: theme.palette.mode === "light" ? "#F4F5F7" : "#212329",
        },
        horzLines: {
          color: theme.palette.mode === "light" ? "#F4F5F7" : "#212329",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });
    chart.priceScale("right").applyOptions({
      borderColor: theme.palette.mode === "light" ? "#e6e7eb" : "#212329",
    });
    chart.timeScale().applyOptions({
      borderColor: theme.palette.mode === "light" ? "#e6e7eb" : "#212329",
    });
    chart.timeScale().fitContent();
    const newSeries = chart.addCandlestickSeries({
      upColor,
      downColor,
      borderDownColor,
      borderUpColor,
      wickDownColor,
      wickUpColor,
    });
    var volumeSeries = {};
    // if volume series
    if (volume) {
      var volumeChart = createChart(volumeContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        width: chartContainerRef.current.clientWidth,
        height: volumeContainerRef.current.clientHeight,
        grid: {
          vertLines: {
            color: theme.palette.mode === "light" ? "#F4F5F7" : "#212329",
          },
          horzLines: {
            color: theme.palette.mode === "light" ? "#F4F5F7" : "#212329",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
      });
      volumeSeries = volumeChart.addHistogramSeries({
        color: "#79797a",
        lineWidth: 2,
        priceFormat: {
          type: "volume",
        },
        overlay: true,
        scaleMargins: {
          bottom: 0,
        },
      });
      chart.timeScale().applyOptions({
        visible: false,
      });
      volumeChart.priceScale("right").applyOptions({
        borderColor: theme.palette.mode === "light" ? "#e6e7eb" : "#212329",
      });
      volumeChart.timeScale().applyOptions({
        borderColor: theme.palette.mode === "light" ? "#e6e7eb" : "#212329",
      });
    }
    // create data for test
    for (let i = 0; i < 150; i++) {
      const bar = nextBar();
      newSeries.update(bar);
      if (volume) {
        volumeSeries.update(bar);
        if (i === 149) setVolumeValue(bar.close);
      }
    }
    setInterval(() => {
      const bar = nextBar();
      newSeries.update(bar);
      if (volume) {
        volumeSeries.update(bar);
        setVolumeValue(bar.close);
      }
    }, 3000);
    function nextBar() {
      if (!nextBar.date) nextBar.date = new Date(2023, 0, 0);
      if (!nextBar.bar)
        nextBar.bar = { open: 100, high: 104, low: 98, close: 103 };

      nextBar.date.setDate(nextBar.date.getDate() + 1);
      nextBar.bar.time = {
        year: nextBar.date.getFullYear(),
        month: nextBar.date.getMonth() + 1,
        day: nextBar.date.getDate(),
      };

      let old_price = nextBar.bar.close;
      let volatility = 0.1;
      let rnd = Math.random();
      let change_percent = 2 * volatility * rnd;

      if (change_percent > volatility) change_percent -= 2 * volatility;

      let change_amount = old_price * change_percent;
      nextBar.bar.open = nextBar.bar.close;
      nextBar.bar.close = old_price + change_amount;
      nextBar.bar.high =
        Math.max(nextBar.bar.open, nextBar.bar.close) +
        Math.abs(change_amount) * Math.random();
      nextBar.bar.low =
        Math.min(nextBar.bar.open, nextBar.bar.close) -
        Math.abs(change_amount) * Math.random();
      nextBar.bar.value = Math.random() * 100;
      nextBar.bar.color =
        nextBar.bar.close < nextBar.bar.open ? "#FA5252" : "#0EAD98";

      return nextBar.bar;
    }
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      if (volume)
        volumeChart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
      if (volume) volumeChart.remove();
    };
  }, [
    dataMemo,
    backgroundColor,
    textColor,
    upColor,
    downColor,
    borderDownColor,
    borderUpColor,
    wickDownColor,
    wickUpColor,
    volume,
    theme.palette.mode,
  ]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          "&:hover": { "& .toggle-volume": { display: "block" } },
        }}
      >
        <Box
          className="toggle-volume"
          sx={{
            display: "none",
            position: "absolute",
            top: "4px",
            right: "62px",
            zIndex: 3,
            bgcolor: theme.palette.mode === "dark" ? "dark.main" : "white.main",
            border: "1px solid",
            borderColor: "gray_light.main",
          }}
          onClick={() => setVolume(!volume)}
        >
          {volume ? (
            <CropDinOutlinedIcon fontSize="small" color="secondary.main" />
          ) : (
            <Crop32OutlinedIcon fontSize="small" color="secondary.main" />
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 2,
          }}
          ref={chartContainerRef}
        ></Box>
      </Box>
      {volume ? (
        <Box sx={{ position: "relative" }}>
          <Box className="volume-value" sx={{ color: "gray.main" }}>
            Volume{` ${Math.floor(volumeValue)}`}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "95px",
              borderTop: "1px solid",
              borderTopColor: "gray_light.main",
              position: "absolute",
              top: "350px",
            }}
            ref={volumeContainerRef}
          ></Box>
        </Box>
      ) : null}
    </>
  );
};

export default CandlesChart;
