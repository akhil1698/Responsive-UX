import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, Link } from "@mui/material";

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
          <CardContent style={{ padding: "20%" }}>
            <Link color="textPrimary" underline="none" href="#">
              Card Link
            </Link>
            {/* Card 1 */}
          </CardContent>
        </Card>
        <div>
          <Card
            sx={{ width: "360px", height: "180px", textAlign: "center" }}
            variant="outlined"
          >
            <CardContent style={{ padding: "20%" }}>Card 2</CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
}

export default TestCards;
