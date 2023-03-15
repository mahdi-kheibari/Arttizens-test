import { Box, Button } from "@mui/material";
import React from "react";

const LoginBtn = () => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: "initial",
        color: "gray.main",
        bgcolor: "gray_light.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
      fullWidth
    >
      <Box sx={{ color: "primary.main" }}>Log In</Box>
      <span>&nbsp;or&nbsp;</span>
      <Box sx={{ color: "primary.main" }}>Sign Up</Box>
    </Button>
  );
};

export default LoginBtn;
