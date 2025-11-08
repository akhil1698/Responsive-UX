import { Box, Typography } from "@mui/material";
import React from "react";

function Profile() {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography align="center" variant="h4" fontWeight={700}>
        Hi Akhil
      </Typography>
    </Box>
  );
}

export default Profile;
