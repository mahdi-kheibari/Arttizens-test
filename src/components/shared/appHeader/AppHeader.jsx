import {
  Box,
  Link,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { store } from "../../../store/Context";
import ListItems from "../../listItems/ListItems";
import PopoverItem from "../../listItems/popoverItem/PopoverItem";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./appHeader.scss";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AppHeader = () => {
  const { headerItems } = useContext(store);
  const [drawer, setDrawer] = useState(false);
  const [drawerItemClick, setDrawerItemClick] = useState("");
  const [drawerCollapseItem, setDrawerCollapseItem] = useState({
    Futures: false,
    Finance: false,
    Promotion: false,
  });

  function drawerItemClicked(text, collapse) {
    if (drawerItemClick === text) {
      setDrawerItemClick("");
    } else {
      setDrawerItemClick(text);
    }
    if (collapse) {
      setDrawerCollapseItem({
        ...drawerCollapseItem,
        [text]: !drawerCollapseItem[text],
      });
    }
  }
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "52px",
        px: "10px",
        borderBottom: "1px solid",
        borderBottomColor: "gray_light.main",
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
            <Box
              key={item.text || item}
              sx={{
                display: item.display
                  ? { xs: "none", [item.display]: "block" }
                  : { xs: "none", md: "block" },
              }}
            >
              <ListItems
                text={item.text || item}
                popover={item.text ? true : false}
              >
                {item.text
                  ? item.menuItems.map((i) => (
                      <PopoverItem key={i.text || i} item={i}></PopoverItem>
                    ))
                  : null}
              </ListItems>
            </Box>
          ))}
          <Link
            component="button"
            underline="none"
            className="zone-btn font-14"
            sx={{ display: { xs: "none", xl: "block" } }}
          >
            Newbie Zone
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", xl: "flex" } }}>
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
      <Box sx={{ display: { xs: "flex", xl: "none" } }}>
        <IconButton
          sx={{ "&:hover": { color: "primary.main" } }}
          aria-label="Account"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "primary.main" } }}
          aria-label="Account"
          onClick={() => setDrawer(!drawer)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor={"right"}
        open={drawer}
        onClose={() => setDrawer(false)}
        sx={{
          "&.MuiDrawer-root": { top: "52px" },
          "& .MuiPaper-root": {
            minWidth: { xs: "100%", md: "375px" },
            top: "52px",
            borderRadius: "20px 0 0 20px",
          },
          "& .MuiBackdrop-root": { top: "52px" },
        }}
      >
        <List disablePadding>
          {headerItems.map((item) => (
            <ListItem
              key={item.text || item}
              sx={{
                display: item.display
                  ? { xs: "block", [item.display]: "none" }
                  : { xs: "block", md: "none" },
              }}
            >
              <ListItemButton
                onClick={() =>
                  drawerItemClicked(item.text || item, item.text ? true : false)
                }
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url('${
                        drawerItemClick === (item.text || item)
                          ? `/images/header/${item.text || item}-sm-click.png`
                          : `/images/header/${item.text || item}-sm.png`
                      }')`,
                      backgroundSize: "contain",
                    }}
                    className={"popover-item-icon"}
                  ></Box>
                </ListItemIcon>
                <ListItemText primary={item.text || item} />
                {item.text ? (
                  drawerCollapseItem[item.text] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              {item.text ? (
                <Collapse
                  in={drawerCollapseItem[item.text]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {item.menuItems.map((i) => (
                      <ListItem key={i.text || i}>
                        <ListItemButton>
                          <ListItemText primary={i.text || i} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              ) : null}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default AppHeader;
