import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";
const PopoverItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <MenuItem
      sx={{
        color: "gray.main",
        "&:hover": {
          "& .popover-item-title": { color: "primary.main" },
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.text ? (
        <Box
          sx={{
            height: "77px !important",
            minWidth: "336px",
            display: "flex",
            alignItems: "center",
            px: "12px",
          }}
        >
          <Box
            sx={{
              width: "36px",
              height: "36px",
              mr: "20px",
              backgroundImage: `url('${
                hover
                  ? `/images/header/${item.icon}-hover.png`
                  : `/images/header/${item.icon}.png`
              }')`,
              backgroundSize: "contain",
            }}
            className={"popover-item-icon"}
          ></Box>
          <Box>
            <Box
              sx={{ color: "secondary.main" }}
              className="popover-item-title font-16"
            >
              {item.text}
            </Box>
            <Box color={"gray"} className="font-12">
              {item.description}
            </Box>
          </Box>
        </Box>
      ) : (
        item
      )}
    </MenuItem>
  );
};

export default PopoverItem;
