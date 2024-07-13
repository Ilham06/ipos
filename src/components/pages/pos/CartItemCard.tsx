import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Add, Remove, DeleteOutline } from "@mui/icons-material";

export default function CartItemCard() {
  return (
    <Box
      p={2}
      border={1}
      borderColor={"#D9D9D9"}
      bgcolor={"#F5F5F5"}
      borderRadius={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={2}>
        <Image
          src={"/images/products/nasi-goreng2.svg"}
          alt="nasi"
          width={90}
          height={90}
          style={{ borderRadius: "8px" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={18}>Nasi Goreng</Typography>
          <Typography color={"primary"} fontWeight={600}>
            Rp. 20.000
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Button
              size="small"
              variant="contained"
              sx={{ minWidth: 0, borderRadius: 2, p: 0.5 }}
            >
              <Add sx={{ fontSize: "14px" }} />
            </Button>
            <Typography fontWeight={600}>1</Typography>
            <Button
              size="small"
              variant="contained"
              sx={{ minWidth: 0, borderRadius: 2, p: 0.5 }}
            >
              <Remove sx={{ fontSize: "14px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
      <IconButton>
        <DeleteOutline color="error" />
      </IconButton>
    </Box>
  );
}
