import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { ExpandMore } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import BookIcon from "@mui/icons-material/Book";
import CandlesChart from "../components/lightWeightChart/CandlesChart";
import ExchangeBtn from "../components/exchangeBtn/ExchangeBtn";
import ExchangeTab from "../components/exchangeTab/ExchangeTab";
import Orderbook from "../components/sections/orderbook/Orderbook";
import MarketQuota from "../components/sections/marketQuota/MarketQuota";
import Trade from "../components/sections/trade/Trade";
const Index = () => {
  const [tagActive, setTagActive] = useState("All");
  const [navAreaActive, setNavAreaActive] = useState("USDT");
  const exchangeListRow = [];
  const exchangeListColumn = [
    { field: "market", headerName: "Market" },
    { field: "price", headerName: "Price" },
    { field: "change", headerName: "24H Change" },
  ];
  const exchangeQuotaList = [
    { field: "price", headerName: "Price(USDT)" },
    { field: "amount", headerName: "Amount(STC)" },
    { field: "time", headerName: "Time" },
  ];
  return (
    <Grid container spacing={0} sx={{ alignItems: "stretch" }}>
      {/* exchange market section */}
      <Grid
        item
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          borderBottomColor: "gray_light.main",
          borderRight: "1px solid",
          borderRightColor: "gray_light.main",
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
            <ExchangeBtn
              text={"All"}
              activeState={tagActive}
              setActiveState={(val) => setTagActive(val)}
              class_name="tag-list"
            />
            <ExchangeBtn
              text={"AMM"}
              activeState={tagActive}
              setActiveState={(val) => setTagActive(val)}
              class_name="tag-list"
            />
            <ExchangeBtn
              text={"Margin"}
              activeState={tagActive}
              setActiveState={(val) => setTagActive(val)}
              class_name="tag-list"
            />
            <ExchangeBtn
              text={"AI"}
              activeState={tagActive}
              setActiveState={(val) => setTagActive(val)}
              class_name="tag-list"
            >
              <span>AI</span>
              <ExpandMore fontSize="small" />
            </ExchangeBtn>
          </Box>
          <Box className="nav-area">
            <div className="nav-area_icon">
              <StarIcon fontSize="small" color="gray" />
            </div>
            <ExchangeTab
              text={"USDT"}
              activeState={navAreaActive}
              setActiveState={(val) => setNavAreaActive(val)}
              class_name="nav-area_item"
            />
            <ExchangeTab
              text={"USDC"}
              activeState={navAreaActive}
              setActiveState={(val) => setNavAreaActive(val)}
              class_name="nav-area_item"
            />
            <ExchangeTab
              text={"BTC"}
              activeState={navAreaActive}
              setActiveState={(val) => setNavAreaActive(val)}
              class_name="nav-area_item"
            />
            <ExchangeTab
              text={"BCH"}
              activeState={navAreaActive}
              setActiveState={(val) => setNavAreaActive(val)}
              class_name="nav-area_item"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="exchange-market-list">
            <DataGrid
              rows={exchangeListRow}
              columns={exchangeListColumn}
              hideFooter
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  width: "100%",
                  p: "12px 16px 6px",
                  fontSize: "12px",
                  color: "gray.main",
                  height: "auto",
                  minHeight: "auto !important",
                  lineHeight: "normal !important",
                },
                "& .MuiDataGrid-columnHeader": {
                  height: "auto !important",
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
            <MarketQuota
              rowList={exchangeListRow}
              columnsList={exchangeQuotaList}
            />
          </div>
        </Box>
      </Grid>
      {/* exchange chart section */}
      <Grid item lg={9} xs={12}>
        <Box
          className="exchange-ticker"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderBottom: "1px solid",
            borderBottomColor: "gray_light.main",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "80%" },
              display: "flex",
              alignItems: "center",
              overflowX: "scroll",
            }}
          >
            <img src="/images/BTC.png" alt="BTC" width="30px" height="30px" />
            <Box sx={{ ml: 2, fontWeight: "bold" }} className="font-20">
              BTC/UDT
            </Box>
            <ExpandMore fontSize="small" color="gray" sx={{ ml: "10px" }} />
            <Box
              sx={{ px: 1, fontWeight: "bold" }}
              color="primary.main"
              className="font-20"
            >
              22,088.89
            </Box>
            <Box
              className="exchange-ticker-list"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                className="exchange-ticker-list_item font-12"
                sx={{ color: "gray.main" }}
              >
                24H Change
              </Box>
              <Box
                className="exchange-ticker-list_item font-12"
                sx={{ color: "gray.main" }}
              >
                24H Highest
              </Box>
              <Box
                className="exchange-ticker-list_item font-12"
                sx={{ color: "gray.main" }}
              >
                24H Lowest
              </Box>
              <Box
                className="exchange-ticker-list_item font-12"
                sx={{ color: "gray.main" }}
              >
                24H Volume
              </Box>
              <Box
                className="exchange-ticker-list_item font-12"
                sx={{ color: "gray.main" }}
              >
                24H Value
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            className="exchange-ticker-info"
          >
            <BookIcon
              fontSize="small"
              color="primary"
              sx={{ alignSelf: "flex-end" }}
            />
            <Box
              sx={{
                color: "primary.main",
                ml: "2px",
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
              }}
            >
              About Bitcoin
            </Box>
          </Box>
        </Box>
        <Grid container spacing={0} sx={{ height: "calc(100vh + 350px)" }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              borderRight: "1px solid",
              borderRightColor: "gray_light.main",
              height: "100%",
            }}
          >
            <Box sx={{ width: "100%", height: "445px" }}>
              <CandlesChart></CandlesChart>
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Trade />
            </Box>
            <Grid
              sx={{ display: { xs: "none", md: "flex", lg: "none" } }}
              container
              spacing={0}
            >
              <Grid item md={6}>
                <MarketQuota
                  rowList={exchangeListRow}
                  columnsList={exchangeQuotaList}
                />
              </Grid>
              <Grid item md={6}>
                <Orderbook
                  rowList={exchangeListRow}
                  columnsList={exchangeQuotaList}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* exchange orderbook section */}
          <Grid
            item
            md={4}
            sx={{ height: "100%", display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Orderbook
                rowList={exchangeListRow}
                columnsList={exchangeQuotaList}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
              <Trade />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
