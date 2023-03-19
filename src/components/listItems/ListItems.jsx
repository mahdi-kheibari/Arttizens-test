import { Box, Button, Fade, MenuList, Paper } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";

const ListItems = ({ children, text, popover }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "list-popover" : undefined;
  return (
    <Box
      onMouseEnter={popover ? (e) => handlePopoverOpen(e) : null}
      onMouseLeave={popover ? (e) => handlePopoverClose(e) : null}
      sx={{ position: "relative" }}
    >
      <Button
        aria-describedby={id}
        variant="text"
        sx={{
          "&:hover": { color: "primary.main" },
          color: open ? "primary.main" : "secondary.main",
          textTransform: "capitalize",
        }}
      >
        {text}
        {popover ? (
          open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )
        ) : null}
      </Button>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: "37.5px",
          display: open ? "block" : "none",
        }}
      >
        {popover ? (
          <Fade in={open} timeout={500}>
            <Paper
              sx={{
                boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%) !important",
                borderRadius: "20px",
                bgcolor:"bgColor.main"
              }}
            >
              <MenuList
                sx={{ "& .MuiMenuItem-root": { color: "text.primary" } }}
              >
                {children}
              </MenuList>
            </Paper>
          </Fade>
        ) : null}
      </Box>
    </Box>
  );
};

export default ListItems;
