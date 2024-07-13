import { Box, Typography } from "@mui/material";
import React from "react";

export default function DiscountCard() {
  return (
    <Box
      borderRadius={2}
      borderColor={"primary.main"}
      border={1}
      p={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"end"}
      sx={{cursor: 'pointer'}}
    >
      <Box>
        <Typography fontSize={18} fontWeight={600} color={"primary"} mb={1}>
          Black Market
        </Typography>
        <Typography fontSize={14}>Diskon Snack & Minuman</Typography>
      </Box>
      <Typography>5%</Typography>
    </Box>
  );
}
