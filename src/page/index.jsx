import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, InputBase, Paper, Slider, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { ExpandMore } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import BookIcon from "@mui/icons-material/Book";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CandlesChart from "../components/lightWeightChart/CandlesChart";
import ExchangeBtn from "../components/exchangeBtn/ExchangeBtn";
import ExchangeTab from "../components/exchangeTab/ExchangeTab";
import ExchangeTextfield from "../components/exchangeTextfield/ExchangeTextfield";
import LoginBtn from "../components/LoginBtn";
const Index = () => {
  const [tagActive, setTagActive] = useState("All");
  const [navAreaActive, setNavAreaActive] = useState("USDT");
  const [tradeHeaderActive, setTradeHeaderActive] = useState("Spot Trading");
  const [tradeTagActive, setTradeTagActive] = useState("Limit");
  const [advancedTagActive, setAdvancedTagActive] = useState("AL");
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
              rows={exchangeListRow}
              columns={exchangeQuotaList}
              hideFooter
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  width: "100%",
                  p: "0 16px 6px",
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
          <Box sx={{ width: "80%", display: "flex", alignItems: "center" }}>
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
            <Box sx={{ color: "primary.main", ml: "2px", fontWeight: "bold" }}>
              About Bitcoin
            </Box>
          </Box>
        </Box>
        <Grid container spacing={0} sx={{ height: "calc(100vh + 350px)" }}>
          <Grid
            item
            xs={8}
            sx={{
              borderRight: "1px solid",
              borderRightColor: "gray_light.main",
              height: "100%",
            }}
          >
            <Box sx={{ width: "100%", height: "445px" }}>
              <CandlesChart></CandlesChart>
            </Box>
            <Box className="exchange-trade">
              <Box
                className="exchange-trade-header"
                sx={{ borderBottomColor: "gray_light.main" }}
              >
                <Box sx={{ display: "flex", pr: 3 }}>
                  <ExchangeTab
                    text={"Spot Trading"}
                    activeState={tradeHeaderActive}
                    setActiveState={(val) => setTradeHeaderActive(val)}
                    class_name="exchange-trade-header_tab"
                  />
                  <ExchangeTab
                    text={"Margin Trading*10"}
                    activeState={tradeHeaderActive}
                    setActiveState={(val) => setTradeHeaderActive(val)}
                    class_name="exchange-trade-header_tab"
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      color: "primary.main",
                      backgroundColor: "rgba(14, 173, 152, .1)",
                      cursor: "pointer",
                      p: 1,
                      borderRadius: "4px",
                      height: "32px",
                    }}
                  >
                    <DataSaverOffOutlinedIcon color="primary.main" />
                  </Box>
                  <Box
                    sx={{
                      color: "primary.main",
                      backgroundColor: "rgba(14, 173, 152, .1)",
                      cursor: "pointer",
                      ml: 2,
                      p: 1,
                      borderRadius: "4px",
                      height: "32px",
                    }}
                  >
                    <TuneOutlinedIcon color="primary.main" />
                  </Box>
                </Box>
              </Box>
              <Box className="exchange-trade-placeholder">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ExchangeBtn
                    text="Limit"
                    activeState={tradeTagActive}
                    setActiveState={(val) => setTradeTagActive(val)}
                    class_name="exchange-trade-placeholder_tag"
                  />
                  <ExchangeBtn
                    text="Market"
                    activeState={tradeTagActive}
                    setActiveState={(val) => setTradeTagActive(val)}
                    class_name="exchange-trade-placeholder_tag"
                  />
                  <ExchangeBtn
                    text="Stop-Limit"
                    activeState={tradeTagActive}
                    setActiveState={(val) => setTradeTagActive(val)}
                    class_name="exchange-trade-placeholder_tag"
                  />
                  <ExchangeBtn
                    text="Stop-Market"
                    activeState={tradeTagActive}
                    setActiveState={(val) => setTradeTagActive(val)}
                    class_name="exchange-trade-placeholder_tag"
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 3 }}
                  className="font-14"
                >
                  <Box sx={{ color: "gray.main", fontWeight: "bold" }}>
                    Advanced:
                  </Box>
                  <Box sx={{ ml: 1, display: "flex", alignItems: "center" }}>
                    <ExchangeBtn
                      text={"AL"}
                      activeState={advancedTagActive}
                      setActiveState={(val) => setAdvancedTagActive(val)}
                      class_name=""
                    >
                      <span>AL</span>
                      <ExpandMore fontSize="small" />
                    </ExchangeBtn>
                    <ExchangeBtn
                      text={"M"}
                      activeState={advancedTagActive}
                      setActiveState={(val) => setAdvancedTagActive(val)}
                      class_name=""
                    />
                    <ExchangeBtn
                      text={"hidden"}
                      activeState={advancedTagActive}
                      setActiveState={(val) => setAdvancedTagActive(val)}
                      class_name=""
                    >
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    </ExchangeBtn>
                  </Box>
                </Box>
                <Box sx={{ mt: { xs: "14px", md: "10px" } }}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Box className="font-12" sx={{ color: "gray.main" }}>
                        Available: -- USD
                      </Box>
                      <Box sx={{ mt: "12px" }}>
                        <ExchangeTextfield
                          prepend="Price"
                          append="USDT"
                          value={24656.42}
                          class_name="exchange-trade-placeholder_input"
                        />
                      </Box>
                      <Box sx={{ mt: "12px" }}>
                        <ExchangeTextfield
                          prepend="Amount"
                          append="BTC"
                          class_name="exchange-trade-placeholder_input"
                        />
                      </Box>
                      <Slider
                        defaultValue={0}
                        getAriaValueText={(val) => `${val}%`}
                        valueLabelDisplay="auto"
                        step={25}
                        marks
                        min={0}
                        max={100}
                      />
                      <ExchangeTextfield
                        prepend="Value"
                        append="USDT"
                        class_name="exchange-trade-placeholder_input"
                      />
                      <Box sx={{ mt: "30px" }}>
                        <LoginBtn />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box className="font-12" sx={{ color: "gray.main" }}>
                        Available: -- BTC
                      </Box>
                      <Box sx={{ mt: "12px" }}>
                        <ExchangeTextfield
                          prepend="Price"
                          append="USDT"
                          value={24656.42}
                          class_name="exchange-trade-placeholder_input"
                        />
                      </Box>
                      <Box sx={{ mt: "12px" }}>
                        <ExchangeTextfield
                          prepend="Amount"
                          append="BTC"
                          class_name="exchange-trade-placeholder_input"
                        />
                      </Box>
                      <Slider
                        defaultValue={0}
                        getAriaValueText={(val) => `${val}%`}
                        valueLabelDisplay="auto"
                        step={25}
                        marks
                        min={0}
                        max={100}
                        color="warning"
                      />
                      <ExchangeTextfield
                        prepend="Value"
                        append="USDT"
                        class_name="exchange-trade-placeholder_input"
                      />
                      <Box sx={{ mt: "30px" }}>
                        <LoginBtn />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
