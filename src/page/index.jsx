import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { ExpandMore } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
const Index = () => {
  const [tagActive, setTagActive] = useState("All");
  const [navAreaActive, setNavAreaActive] = useState("USDT");
  const exchangeListColumn = [
    { field: "market", headerName: "Market", width: "50%" },
    { field: "price", headerName: "Price", width: "20%" },
    { field: "change", headerName: "24H Change", width: "30%" },
  ];
  const exchangeQuotaList = [
    { field: "price", headerName: "Price(USDT)", width: "50%" },
    { field: "amount", headerName: "Amount(STC)", width: "20%" },
    { field: "time", headerName: "Time", width: "30%" },
  ];
  return (
    <Grid container spacing={0}>
      {/* exchange market section */}
      <Grid
        item
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          borderBottomColor: "gray_light.main",
        }}
        lg={3}
        className="exchange-market"
      >
        <Box sx={{ px: 3 }} className="exchange-market-search">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "0 12px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
            elevation={0}
          >
            <IconButton type="button" sx={{ p: 0 }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>
        </Box>
        <Box
          className="exchange-market-nav"
          sx={{ "& .tag-list": { "&:hover": { color: "primary.main" } } }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              className="tag-list"
              sx={{
                color: tagActive === "All" ? "primary.main" : "gray.main",
                backgroundColor:
                  tagActive === "All" ? "rgba(14, 173, 152, .1)" : "initial",
              }}
              onClick={() => setTagActive("All")}
            >
              All
            </Box>
            <Box
              className="tag-list"
              sx={{
                color: tagActive === "AMM" ? "primary.main" : "gray.main",
                backgroundColor:
                  tagActive === "AMM" ? "rgba(14, 173, 152, .1)" : "initial",
                ml: 2,
              }}
              onClick={() => setTagActive("AMM")}
            >
              AMM
            </Box>
            <Box
              className="tag-list"
              sx={{
                color: tagActive === "Margin" ? "primary.main" : "gray.main",
                backgroundColor:
                  tagActive === "Margin" ? "rgba(14, 173, 152, .1)" : "initial",
                ml: 2,
              }}
              onClick={() => setTagActive("Margin")}
            >
              Margin
            </Box>
            <Box
              className="tag-list"
              sx={{
                color: tagActive === "AI" ? "primary.main" : "gray.main",
                backgroundColor:
                  tagActive === "AI" ? "rgba(14, 173, 152, .1)" : "initial",
                display: "flex",
                alignItems: "center",
                ml: 2,
              }}
              onClick={() => setTagActive("AI")}
            >
              <span>AI</span>
              <ExpandMore fontSize="small" />
            </Box>
          </Box>
          <Box className="nav-area">
            <div className="nav-area_icon">
              <StarIcon fontSize="small" color="gray" />
            </div>
            <Box
              sx={{
                "&:hover": { color: "primary.main" },
                color: navAreaActive === "USDT" ? "primary.main" : "initial",
                borderBottom: navAreaActive === "USDT" ? "1px solid" : "0",
                borderBottomColor: "primary.main",
                ml: 3,
              }}
              className="nav-area_item"
              onClick={() => setNavAreaActive("USDT")}
            >
              USDT
            </Box>
            <Box
              sx={{
                "&:hover": { color: "primary.main" },
                color: navAreaActive === "USDC" ? "primary.main" : "initial",
                borderBottom: navAreaActive === "USDC" ? "1px solid" : "0",
                borderBottomColor: "primary.main",
                ml: 3,
              }}
              className="nav-area_item"
              onClick={() => setNavAreaActive("USDC")}
            >
              USDC
            </Box>
            <Box
              sx={{
                "&:hover": { color: "primary.main" },
                color: navAreaActive === "BTC" ? "primary.main" : "initial",
                borderBottom: navAreaActive === "BTC" ? "1px solid" : "0",
                borderBottomColor: "primary.main",
                ml: 3,
              }}
              className="nav-area_item"
              onClick={() => setNavAreaActive("BTC")}
            >
              BTC
            </Box>
            <Box
              sx={{
                "&:hover": { color: "primary.main" },
                color: navAreaActive === "BCH" ? "primary.main" : "initial",
                borderBottom: navAreaActive === "BCH" ? "1px solid" : "0",
                borderBottomColor: "primary.main",
                ml: 3,
              }}
              className="nav-area_item"
              onClick={() => setNavAreaActive("BCH")}
            >
              BCH
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="exchange-market-list">
            <DataGrid
              rows=""
              columns={exchangeListColumn}
              hideFooter
              columnHeaderHeight={"auto"}
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  width: "100%",
                  p: "12px 16px 6px",
                  fontSize: "12px",
                  color: "gray.main",
                  height: "auto",
                },
                "& .MuiDataGrid-columnHeadersInner": {
                  width: "100%",
                  "& > div": { width: "100%" },
                },
                "& [aria-label='Price']": {
                  ml: "auto",
                },
                minHeight: "100%",
                borderRight: "0",
              }}
            />
          </div>
          <div className="exchange-market-quota">
            <Box
              sx={{
                px: 3,
                height: "44px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
              className="font-16"
            >
              Latest Execution
            </Box>
            <DataGrid
              rows=""
              columns={exchangeQuotaList}
              hideFooter
              columnHeaderHeight={"auto"}
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  width: "100%",
                  p: "0 16px 6px",
                  fontSize: "12px",
                  color: "gray.main",
                  height: "auto",
                },
                "& .MuiDataGrid-columnHeadersInner": {
                  width: "100%",
                  "& > div": { width: "100%" },
                },
                "& [aria-label='Amount(STC)']": {
                  ml: "auto",
                },
                minHeight: "100%",
                borderRight: "0",
                borderTop: "0",
              }}
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
