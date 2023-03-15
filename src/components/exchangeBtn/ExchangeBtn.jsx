import { Box } from "@mui/system";
import React from "react";

const ExchangeBtn = ({
  text,
  activeState,
  setActiveState,
  class_name,
  children,
}) => {
  return (
    <Box
      className={class_name}
      sx={{
        "&:hover": {
          color: "primary.main",
          bgcolor: "rgba(14, 173, 152, .1) !important",
        },
        color: activeState === text ? "primary.main" : "gray.main",
        bgcolor:
          activeState === text
            ? "rgba(14, 173, 152, .1) !important"
            : "gray_light.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: 2,
        borderRadius:"4px",
        p:1,
        cursor:"pointer"
      }}
      onClick={() => setActiveState(text)}
    >
      {children || text}
    </Box>
  );
};

export default ExchangeBtn;
