import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProduct {
  name: string;
  image: string;
  price: number;
}

export default function ProductCard(props: IProduct) {
  return (
    <Box
      border={1}
      borderColor={"#D9D9D9"}
      borderRadius={4}
      sx={{ cursor: "pointer" }}
    >
      <Image
        src={"/images/products/nasi-goreng.png"}
        alt={props.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Box textAlign={"center"} py={1}>
        <Typography mb={1}>Nasi Goreng</Typography>
        <Typography color={"primary"} fontWeight={600}>
          Rp. 20.000.00
        </Typography>
      </Box>
    </Box>
  );
}
