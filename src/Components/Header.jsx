import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onClickProfile = () => {
    navigate("/profile");
  };

  const uploadProfile = (event) => {
    console.log("profile event", event);
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          My Responsive App
        </Typography>
        {/* <IconButton sx={{ ml: "auto" }} onClick={uploadProfile}>
          <Avatar></Avatar>
        </IconButton> */}
        {/* <Button color="inherit" sx={{ ml: "auto" }} onClick={onClickProfile}>
          Edit pprofile
        </Button> */}
        <Box
          sx={{
            ml: "auto",
            display: "flex",
            direction: "row",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Button color="inherit" sx={{ ml: "auto" }} onClick={onClickProfile}>
            Edit pprofile
          </Button>
          <IconButton onClick={uploadProfile}>
            <Avatar></Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
