import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface IProps {
  children: React.ReactNode;
}

export default function MainLayout(props: IProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="outlined" sx={{background: '#FFF'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color={'primary'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IPost
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </Box>
  );
}
