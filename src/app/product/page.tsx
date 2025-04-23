"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Add, EditOutlined, DeleteOutline } from "@mui/icons-material";
import SearchBox from "@/components/forms/SearchBox";
import Link from "next/link";

const headers = ["No", "Product", "Category", "Price", "Action"];

const data = [
  {
    product: "Nasi Goreng",
    category: "Makanan",
    price: "Rp. 20.000",
  },
  {
    product: "Nasi Goreng",
    category: "Makanan",
    price: "Rp. 20.000",
  },
  {
    product: "Nasi Goreng",
    category: "Makanan",
    price: "Rp. 20.000",
  },
  {
    product: "Nasi Goreng",
    category: "Makanan",
    price: "Rp. 20.000",
  },
  {
    product: "Nasi Goreng",
    category: "Makanan",
    price: "Rp. 20.000",
  },
];

export default function Page() {
  return (
    <Box p={4}>
      <PageHeader
        title={"Menu Management"}
        subtitle={"Daftar produk yang ada di restoran"}
      />
      <Box mt={5} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={1}>
          <SearchBox
            onKeyPress={() => console.log("oke")}
            placeholder="cari menu ..."
            width="450px"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              sx={{ width: "200px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1}
              label="Category"
            >
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={10}>Makanan</MenuItem>
              <MenuItem value={20}>Minuman</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Link href={"/product/create"}>
            <Button variant="contained" size="large" startIcon={<Add />}>
              Add Product
            </Button>
          </Link>
        </Box>
      </Box>
      <TableContainer component={Box} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => {
                return (
                  <TableCell sx={{ fontWeight: 600, color: "#898989" }} key={index}>
                    {header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product, index) => (
              <TableRow
                key={index}
                //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  width={"5%"}
                  sx={{ fontWeight: 500 }}
                >
                  {index + 1}
                </TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={"/images/products/nasi-goreng2.svg"}
                    width={75}
                    height={75}
                    alt="img"
                  />
                  <Typography fontWeight={600} ml={2}>
                    {product.product}
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>
                  {product.category}
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{product.price}</TableCell>
                <TableCell width={"12%"}>
                  <Button startIcon={<EditOutlined />} color="success">
                    Edit
                  </Button>
                  <Button startIcon={<DeleteOutline />} color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display={"flex"} justifyContent={"end"} mt={5}>
        <Stack spacing={2}>
          <Pagination
            size="large"
            count={10}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
}
