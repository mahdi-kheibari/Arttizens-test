import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
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
import DataTable from "../components/dataTable/DataTable";
const Index = () => {
  const [tagActive, setTagActive] = useState("All");
  const [navAreaActive, setNavAreaActive] = useState("USDT");
  const [summaryActive, setSummaryActive] = useState("Current Order");
  const [summaryBtnActive, setSummaryBtnActive] = useState("Normal Order(0)");
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
    <>
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
            bgcolor: "bgColor.secondary",
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
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "dark.main" : "light.main",
                borderRadius: "8px",
              }}
              elevation={0}
            >
              <IconButton
                type="button"
                sx={{ p: 0, color: "text.primary" }}
                aria-label="search"
              >
                <SearchIcon fontSize="small" />
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
              <Box
                sx={{
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "dark.main" : "#f7f8fa",
                }}
                className="nav-area_icon"
              >
                <StarIcon fontSize="small" sx={{ color: "#b4b7bd" }} />
              </Box>
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
              <DataTable rows={exchangeListRow} columns={exchangeListColumn} />
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
              backgroundColor: (theme) =>
                theme.palette.mode === "light" ? "#FAFBFC" : "bgColor.main",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", md: "80%" },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                "&:hover": {
                  overflowX: "scroll",
                },
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
              className="test1"
            >
              <img src="/images/BTC.png" alt="BTC" width="30px" height="30px" />
              <Box
                sx={{ ml: 2, fontWeight: "bold", color: "text.primary" }}
                className="font-20"
              >
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
          <Grid
            container
            spacing={0}
            sx={{ height: { md: "calc(100vh + 350px)" } }}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? "light.main"
                    : "bgColor.main",
                borderRight: "1px solid",
                borderRightColor: "gray_light.main",
                height: "100%",
              }}
            >
              <Box sx={{ width: "100%", height: "445px" }}>
                <CandlesChart></CandlesChart>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  overflow: "hidden",
                  "&:hover": {
                    overflowY: "scroll",
                  },
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
                <Trade />
              </Box>
              <Grid
                sx={{
                  display: { xs: "none", md: "flex", lg: "none" },
                  height: "400px",
                }}
                container
                spacing={0}
              >
                <Grid item md={6} sx={{ height: "fit-content" }}>
                  <MarketQuota
                    rowList={exchangeListRow}
                    columnsList={exchangeQuotaList}
                  />
                </Grid>
                <Grid item md={6}>
                  <Box sx={{ height: "100%" }}>
                    <Orderbook />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* exchange orderbook section */}
            <Grid
              item
              md={4}
              sx={{ height: "100%", display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{ display: { xs: "none", lg: "block" }, height: "100%" }}
              >
                <Orderbook />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
                <Trade />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* exchange summary section */}
      <Box className="exchange-summary">
        <Box
          className="exchange-summary-header"
          sx={{ borderColor: "gray_light.main" }}
        >
          <ExchangeTab
            text={"Current Order"}
            activeState={summaryActive}
            setActiveState={(val) => setSummaryActive(val)}
            class_name="exchange-summary-header_item"
          />
          <ExchangeTab
            text={"Order History"}
            activeState={summaryActive}
            setActiveState={(val) => setSummaryActive(val)}
            class_name="exchange-summary-header_item"
          />
          <ExchangeTab
            text={"Execution History"}
            activeState={summaryActive}
            setActiveState={(val) => setSummaryActive(val)}
            class_name="exchange-summary-header_item"
          />
          <ExchangeTab
            text={"Margin(P)"}
            activeState={summaryActive}
            setActiveState={(val) => setSummaryActive(val)}
            class_name="exchange-summary-header_item"
          />
        </Box>
        <Box
          className="exchange-summary-btn font-14"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "flex-start" },
          }}
        >
          <ExchangeBtn
            text={"Normal Order(0)"}
            activeState={summaryBtnActive}
            setActiveState={(val) => setSummaryBtnActive(val)}
            class_name="exchange-summary-btn_item"
          />
          <ExchangeBtn
            text={"Stop Order(0)"}
            activeState={summaryBtnActive}
            setActiveState={(val) => setSummaryBtnActive(val)}
            class_name="exchange-summary-btn_item"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="exchange-summary-login"
            sx={{ display: "flex", color: "text.primary" }}
          >
            <Box sx={{ color: "primary.main" }}>Log In</Box>
            <span>&nbsp;or&nbsp;</span>
            <Box sx={{ color: "primary.main" }}>Sign Up</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
