import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function TransactionSuccess() {
  return (
    <Box pt={4}>
      <Box textAlign={"center"}>
        <Image
          width={120}
          height={120}
          src={"/images/icons/success.png"}
          alt="success"
          loading="lazy"
        ></Image>

        <Typography fontSize={24} fontWeight={600} mt={3} mb={2}>
          Cash
        </Typography>
        <Typography>Total Transaksi</Typography>
        <Typography fontSize={24} fontWeight={600} mt={3} mb={2}>
          Rp. 60.000
        </Typography>
        <Stack gap={2}>
          <Button variant="contained" sx={{ textTransform: "capitalize", py: 1.5 }}>
            Cetak Invoice
          </Button>
          <Button variant="outlined" sx={{ textTransform: "capitalize", py: 1.5, borderRadius: 2 }}>
            Transaksi Baru
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
