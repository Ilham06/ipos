"use client";

import SearchBox from "@/components/forms/SearchBox";
import ProductCard from "@/components/pages/pos/ProductCard";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { ReceiptOutlined } from "@mui/icons-material";
import CartItemCard from "@/components/pages/pos/CartItemCard";
import ChooseDiscountDialog from "@/components/dialog/ChooseDiscountDialog";
import PaymentDialog from "@/components/dialog/PaymentDialog";

const categories = ["Semua", "Makanan", "Minuman", "Snack", "Mie"];

export default function Page() {

  const [discountModal, setDiscountModal] = useState(false)
  const [paymenttModal, setPaymenttModal] = useState(false)

  return (
    <>
      <Grid container>
        <Grid item lg={8} borderRight={1} borderColor={"#D9D9D9"}>
          <Box p={4}>
            <SearchBox
              onKeyPress={() => console.log("oke")}
              placeholder="cari menu ..."
              width="450px"
            />
            <Box my={4}>
              {categories.map((category, index) => {
                return (
                  
                  <Button
                  key={index}
                    size="large"
                    variant={index == 0 ? "contained" : "outlined"}
                    sx={{
                      mr: 2.5,
                      fontWeight: 600,
                      textTransform: "capitalize",
                      borderRadius: "6px",
                      color: index != 0 && '#2A1D1F',
                      borderColor: index != 0 && '#D9D9D9'
                    }}
                  >
                    {category}
                  </Button>
                );
              })}
            </Box>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => {
                return (
                  <Grid item lg={3} key={index}>
                    <ProductCard />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              px={4}
              pt={4}
            >
              <Typography fontSize={24} fontWeight={600}>
                Invoice
              </Typography>
              <Typography fontSize={18} display={"flex"} alignItems={"center"}>
                <ReceiptOutlined sx={{ mr: 2 }} />
                #0001
              </Typography>
            </Box>
            <Box my={5} px={4}>
              {[1, 2, 3].map((cart, index) => {
                return (
                  <Box mb={2} key={index}>
                    <CartItemCard />
                  </Box>
                );
              })}
            </Box>
            <Box borderTop={1} borderColor={"#D9D9D9"} pt={3} px={4}>
              <Button variant="contained" fullWidth sx={{ py: 1.5 }} onClick={() => setDiscountModal(true)}>
                Promo dan diskon
              </Button>
              <Stack mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={18}>Subtotal</Typography>
                  <Typography fontSize={18} fontWeight={600} color={"primary"}>
                    Rp. 60.000
                  </Typography>
                </Box>
              </Stack>
              <Stack mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={18}>Diskon</Typography>
                  <Typography fontSize={18} fontWeight={600} color={"primary"}>
                    - Rp. 6.000
                  </Typography>
                </Box>
              </Stack>
              <Stack mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={18}>Pajak</Typography>
                  <Typography fontSize={18} fontWeight={600} color={"primary"}>
                    Rp. 11.000
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  borderTop: 1,
                  borderTopStyle: "dashed",
                  mt: 2,
                  pt: 2,
                  borderColor: "primary.main",
                }}
              >
                <Stack>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={24} fontWeight={500}>
                      Total
                    </Typography>
                    <Typography
                      fontSize={24}
                      fontWeight={600}
                      color={"primary"}
                    >
                      Rp. 65.000
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ py: 1.5, textTransform: "capitalize", mt: 2 }}
                  onClick={() => setPaymenttModal(true)}
                >
                  Pembayaran
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ChooseDiscountDialog open={discountModal} onClose={() => setDiscountModal(false)}/>
      <PaymentDialog open={paymenttModal} onClose={() => setPaymenttModal(false)}/>
    </>
  );
}
