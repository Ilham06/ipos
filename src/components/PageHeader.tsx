import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

export default function PageHeader(props: IProps) {
  return (
    <>
      <Typography fontSize={32} fontWeight={600} mb={.5} color={'#2A1D1F'}>{props.title}</Typography>
      <Typography>{props.subtitle}</Typography>
    </>
  );
}
