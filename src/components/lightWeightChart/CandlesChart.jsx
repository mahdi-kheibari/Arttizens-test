import { Box } from "@mui/system";
import { createChart, ColorType, CrosshairMode } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

const CandlesChart = (props) => {
  const {
    data = [],
    colors: {
      backgroundColor = "#F4F5F7",
      textColor = "#79797a",
      upColor = "#0EAD98",
      downColor = "#FA5252",
      borderDownColor = "#FA5252",
      borderUpColor = "#0EAD98",
      wickDownColor = "#FA5252",
      wickUpColor = "#0EAD98",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
      grid: {
        vertLines: {
          color: "#F4F5F7",
        },
        horzLines: {
          color: "#F4F5F7",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });
    chart.priceScale("right").applyOptions({
      borderColor: "#e6e7eb",
    });
    chart.timeScale().applyOptions({
      borderColor: "#e6e7eb",
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
    // create data for test
    for (let i = 0; i < 150; i++) {
      const bar = nextBar();
      newSeries.update(bar);
    }
    setInterval(() => {
      const bar = nextBar();
      newSeries.update(bar);
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    textColor,
    upColor,
    downColor,
    borderDownColor,
    borderUpColor,
    wickDownColor,
    wickUpColor,
  ]);

  return <Box sx={{ width: "100%" }} ref={chartContainerRef} />;
};

export default CandlesChart;
