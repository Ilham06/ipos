import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack, TextField, Typography } from "@mui/material";
import DiscountCard from "../pages/pos/DiscountCard";
import TransactionSuccess from "../pages/pos/TransactionSuccess";
import { useState } from "react";

interface IProps {
  open: boolean;
  onClose: any;
}

const eWallets = ["GOPAY", "OVO", "DANA", "SHOPEEPAY"];
const others = [
  "QR Code",
  "BCA Bank Transfer",
  "BRI Bank Transfer",
  "Mandiri Bank Transfer",
];

export default function PaymentDialog(props: IProps) {
  const [isDone, setisDone] = useState(false);
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { borderRadius: 2 } }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Typography fontSize={24} fontWeight={600}>
            {!isDone && 'Metode Pembayaran'}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {!isDone ? (
            <>
              <Box>
                <Stack gap={1} mb={3}>
                  <Typography>Cash</Typography>
                  <TextField placeholder="Rp. 25.000" fullWidth></TextField>
                </Stack>
                <Stack gap={1} mb={3}>
                  <Typography>E-Wallet</Typography>
                  <Stack direction={"row"}>
                    {eWallets.map((item, index) => {
                      return (
                        <Button
                          key={index}
                          sx={{ mr: 1, borderRadius: 2 }}
                          variant="outlined"
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack gap={1} spacing={1}>
                  <Typography>Lainnya</Typography>
                  <Stack direction={"row"} flexWrap={"wrap"} rowGap={1}>
                    {others.map((item, index) => {
                      return (
                        <Button
                          key={index}
                          sx={{ mr: 1, borderRadius: 2 }}
                          variant="outlined"
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Box>
              <Button
                onClick={() => setisDone(true)}
                variant="contained"
                fullWidth
                sx={{ py: 1, textTransform: "capitalize", mt: 4 }}
              >
                Bayar
              </Button>
            </>
          ) : (
            <TransactionSuccess />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
