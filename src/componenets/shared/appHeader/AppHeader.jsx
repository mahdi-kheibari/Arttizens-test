import { Box } from "@mui/material";
import React from "react";

const AppHeader = () => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "52px",
        px: "10px",
      }}
    >
      <div>
        <Box
          sx={{
            width: "122px",
            height: "30px",
            background: "url('/logo-black.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></Box>
        
      </div>
      <div>

      </div>
    </Box>
  );
};

export default AppHeader;
