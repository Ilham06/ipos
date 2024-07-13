import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

export default function PageHeader(props: IProps) {
  return (
    <>
      <Typography fontSize={32} fontWeight={600} mb={.5} color={'netral.darken'}>{props.title}</Typography>
      <Typography>{props.subtitle}</Typography>
    </>
  );
}
