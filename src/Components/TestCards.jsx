import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent } from "@mui/material";

function TestCards() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          "@media (max-width:600px)": {
            display: "flex",
            gap: "16px",
            flexDirection: "column",
          },
        }}
      >
        <Card
          sx={{ width: "360px", height: "180px", textAlign: "center" }}
          variant="outlined"
        >
          <CardContent>Card 1</CardContent>
        </Card>
        <div>
          <Card
            sx={{ width: "360px", height: "180px", textAlign: "center" }}
            variant="outlined"
          >
            <CardContent>Card 2</CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
}

export default TestCards;
