import { Box } from "@mui/material";
import React, { useContext } from "react";
import { store } from "../../../store/Context";
import ListItems from "../../listItems/ListItems";
import PopoverItem from "../../listItems/popoverItem/PopoverItem";

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
        <Box sx={{ display: "flex" }}>
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
        </Box>
      </Box>
      <div></div>
    </Box>
  );
};

export default AppHeader;
