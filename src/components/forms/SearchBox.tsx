"use client"

import {
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
type IProps = {
  onKeyPress: (event: any) => void;
  size: any;
  width: string;
  placeholder?: string;
};

export default function SearchBox(props: IProps) {

  return (
    <div className="searchBox">
      <TextField
        onKeyPress={props.onKeyPress}
        placeholder={props.placeholder ? props.placeholder : "Search"}
        type="search"
        variant="outlined"
        sx={{ width: props.width }}
        size={props.size}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
