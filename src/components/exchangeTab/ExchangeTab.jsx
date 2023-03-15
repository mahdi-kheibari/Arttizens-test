import { Box } from "@mui/system";
import React from "react";

const ExchangeTab = ({
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
        },
        color: activeState === text ? "primary.main" : "secondary.main",
        borderBottom: activeState === text ? "1px solid" : "0",
        borderBottomColor: "primary.main",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      onClick={() => setActiveState(text)}
    >
      {children || text}
    </Box>
  );
};

export default ExchangeTab;
