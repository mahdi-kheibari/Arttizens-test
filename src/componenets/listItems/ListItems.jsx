import {
  Button,
  MenuList,
  Paper,
  Popover,
} from "@mui/material";
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
    <div>
      <Button
        aria-describedby={id}
        variant="text"
        onMouseEnter={popover ? handlePopoverOpen : null}
        onMouseLeave={popover ? handlePopoverClose : null}
      >
        {text}
      </Button>
      {popover ? (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Paper>
            <MenuList>{children}</MenuList>
          </Paper>
        </Popover>
      ) : null}
    </div>
  );
};

export default ListItems;
