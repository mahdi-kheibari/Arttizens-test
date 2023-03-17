import React, { useContext, useMemo, useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import AppFooter from "../components/shared/appFooter/AppFooter";
import AppHeader from "../components/shared/appHeader/AppHeader";
import Index from "../page/index";
import theme, { getDesignPalette } from "../theme";
import { store } from "../store/Context";

const AppLayout = () => {
  const { prefersthemeMode } = useContext(store);
  const [mode, setMode] = useState(prefersthemeMode);
  const newTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        ...getDesignPalette(mode),
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={newTheme}>
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "bgColor.main",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#909399" : "#79797a",
            "&:hover": {
              background: (theme) =>
                theme.palette.mode === "dark" ? "#212329" : "#e6e7eb",
            },
          },
          "&::-webkit-scrollbar-track": {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#1f2229" : "#fff",
          },
        }}
      >
        <Box sx={{ flex: "1 0 auto" }}>
          <AppHeader changeThemeMode={(newVal) => setMode(newVal)}></AppHeader>
          <Index></Index>
        </Box>
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <AppFooter></AppFooter>
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
