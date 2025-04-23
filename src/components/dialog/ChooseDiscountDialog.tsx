import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import DiscountCard from "../pages/pos/DiscountCard";

interface IProps {
  open: boolean;
  onClose: any;
}

export default function ChooseDiscountDialog(props: IProps) {
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
            Pilih diskon dan promo
          </Typography>
        </DialogTitle>
        <DialogContent>
          {[1, 2, 3].map((discount, index) => {
            return (
              <Box mb={2} key={index}>
                <DiscountCard />
              </Box>
            );
          })}
          <Button
            onClick={props.onClose}
            variant="contained"
            fullWidth
            sx={{ py: 1, textTransform: "capitalize", mt: 2.5 }}
          >
            Pilih
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
