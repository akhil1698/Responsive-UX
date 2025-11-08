import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent } from "@mui/material";

function TestCards() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "16px", textAlign: "center" }}>
        <Card sx={{ width: "360px", height: "180px", textAlign: "center", }} variant="outlined">
          <CardContent>Card 1</CardContent>
        </Card>
        <div>
         <Card sx={{ width: "360px", height: "180px", textAlign: "center", }} variant="outlined">
          <CardContent>Card 2</CardContent>
        </Card>
        </div>
      </Box>
    </>
  );
}

export default TestCards;
