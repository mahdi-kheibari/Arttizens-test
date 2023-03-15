import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./appFooter.scss";
const AppFooter = () => {
  const [clock, setClock] = useState("");
  useEffect(() => {
    function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      setClock(`${today.getFullYear()}-${today.getMonth()}-${today.getDay()} ${h}:${m}:${s} UTC+${today.getUTCFullYear()}`);
    }
    setInterval(startTime, 1000);
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "primary.main",
      }}
      className="app-footer"
    >
      <Box>{clock}</Box>
      <div>24H value: --</div>
    </Box>
  );
};

export default AppFooter;
