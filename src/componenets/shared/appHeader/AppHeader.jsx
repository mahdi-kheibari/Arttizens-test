import { Box, Link, Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { store } from "../../../store/Context";
import ListItems from "../../listItems/ListItems";
import PopoverItem from "../../listItems/popoverItem/PopoverItem";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./appHeader.scss";

const AppHeader = () => {
  const { headerItems } = useContext(store);
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
      <Box display={"flex"}>
        <Box
          sx={{
            width: "122px",
            height: "30px",
            background: "url('/logo-black.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            mr: "10px",
          }}
        ></Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {headerItems.map((item) => (
            <ListItems
              key={item.text ? item.text : item}
              text={item.text ? item.text : item}
              popover={item.text ? true : false}
            >
              {item.text
                ? item.menuItems.map((i) => (
                    <PopoverItem
                      key={i.text ? i.text : i}
                      item={i}
                    ></PopoverItem>
                  ))
                : null}
            </ListItems>
          ))}
          <Link
            component="button"
            underline="none"
            className="zone-btn font-14"
          >
            Newbie Zone
          </Link>
        </Box>
      </Box>
      <Box display={"flex"}>
        <Box sx={{ display: "flex", mx: "20px" }}>
          <Button
            variant="text"
            color="secondary"
            sx={{
              textTransform: "unset",
              "&:hover": { color: "primary.main" },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "unset", color: "white.main", p: "4px 24px" }}
            disableElevation
          >
            Sign Up
          </Button>
        </Box>
        <IconButton
          sx={{ "&:hover": { color: "primary.main" } }}
          aria-label="report"
        >
          <VolumeUpOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "primary.main" } }}
          aria-label="theme"
        >
          <NightlightOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "primary.main" } }}
          aria-label="download"
        >
          <CloudDownloadOutlinedIcon fontSize="small" />
        </IconButton>
        <Button
          variant="text"
          sx={{
            "&:hover": { color: "primary.main" },
            color: "gray.main",
            textTransform: "unset",
          }}
        >
          <LanguageIcon fontSize="small" sx={{ mx: 1 }} />
          {"/USD"}
          <KeyboardArrowDownIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default AppHeader;
