import { Box, InputBase, Paper } from "@mui/material";
import React from "react";
import './exchangeTextfield.scss'
const ExchangeTextfield = ({ prepend, append, value, class_name }) => {
  return (
    <Paper
      component="form"
      className={class_name}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "gray_light.main",
        borderRadius: "4px",
        border: "1px solid",
        borderColor: "light.main",
        px:"20px",
        py:0,
        "&:hover": {
          borderColor: "primary.main",
        },
        boxSizing: "border-box",
      }}
      elevation={0}
    >
      <Box sx={{ pr: 1, display: "flex", alignItems: "center" }}>
        <Box className="font-14" sx={{ color: "gray.main", minWidth: "50px" }}>
          {prepend}
        </Box>
        <Box
          sx={{ width: "1px", height: "20px", bgcolor: "#a7aebc", mx: 2 }}
        ></Box>
      </Box>
      <InputBase className="input-inner" value={value || ""} />
      <Box className="font-14" sx={{ fontWeight: "bold" }}>
        {append}
      </Box>
    </Paper>
  );
};

export default ExchangeTextfield;
