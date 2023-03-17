import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import ExchangeBtn from "../../exchangeBtn/ExchangeBtn";
import ExchangeTab from "../../exchangeTab/ExchangeTab";
import LoginBtn from "../../LoginBtn";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import "./trade.scss";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Spot from "./spot/Spot";
import Margin from "./spot/Margin";

const Trade = () => {
  const [tradeHeaderActive, setTradeHeaderActive] = useState("Spot Trading");
  const [tradeTagActive, setTradeTagActive] = useState("Limit");
  const [advancedTagActive, setAdvancedTagActive] = useState("AL");
  return (
    <Box className="exchange-trade">
      <Box
        className="exchange-trade-header"
        sx={{ borderBottomColor: "gray_light.main" }}
      >
        <Box sx={{ display: "flex", pr: 3 }} className="font-md-14 font-lg-16">
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
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            "&:hover": { overflowX: "scroll" },
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
          <div>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ExchangeBtn
                text="Limit"
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-placeholder_tag"
              />
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "block", lg: "none" } }}
              className="font-14"
            >
              <ExchangeTab
                text={"Limit"}
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-header_tab"
              />
            </Box>
          </div>
          <div>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ExchangeBtn
                text="Market"
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-placeholder_tag"
              />
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "block", lg: "none" } }}
              className="font-14"
            >
              <ExchangeTab
                text={"Market"}
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-header_tab"
              />
            </Box>
          </div>
          <div>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ExchangeBtn
                text="Stop-Limit"
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-placeholder_tag"
              />
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "block", lg: "none" } }}
              className="font-14"
            >
              <ExchangeTab
                text={"Stop-Limit"}
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-header_tab"
              />
            </Box>
          </div>
          <div>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ExchangeBtn
                text="Stop-Market"
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-placeholder_tag"
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
              <ExchangeTab
                text={"Stop-Market"}
                activeState={tradeTagActive}
                setActiveState={(val) => setTradeTagActive(val)}
                class_name="exchange-trade-header_tab"
              />
            </Box>
          </div>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", mt: 3 }}
          className="font-14"
        >
          <Box sx={{ color: "gray.main", fontWeight: "bold" }}>Advanced:</Box>
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
            <Grid item md={12} lg={6}>
              {tradeHeaderActive === "Spot Trading" ? (
                <Spot class_name={"exchange-trade-placeholder_input"} />
              ) : (
                <Margin class_name={"exchange-trade-placeholder_input"} />
              )}
              <Box sx={{ mt: "30px" }}>
                <LoginBtn />
              </Box>
            </Grid>
            <Grid item lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
              <Margin class_name={"exchange-trade-placeholder_input"} />
              <Box sx={{ mt: "30px" }}>
                <LoginBtn />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Trade;
