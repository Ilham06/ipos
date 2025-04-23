import PageHeader from "@/components/PageHeader";
import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box p={4}>
      <PageHeader title={"Add Menu"} subtitle={"Form tambah menu"} />
    </Box>
  );
}
