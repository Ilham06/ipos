"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  PersonAdd,
  Settings,
  Logout,
  CalendarToday,
  Storefront,
} from "@mui/icons-material";
import AppBarProfile from "@/components/partials/AppBarProfile";
import SideBar from "@/components/partials/SideBar";

interface IProps {
  children: React.ReactNode;
}

export default function MainLayout(props: IProps) {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        variant="outlined"
        sx={{ background: "#FFF", py: 2 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              color={"primary"}
              component="div"
              fontSize={18}
              fontWeight={600}
            >
              Poslite
            </Typography>
            <Typography color={"primary"} fontSize={14}>
              Easy way to transaction
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                gap: 3,
              }}
            >
              <Button
                sx={{ py: 1.5, px: 3 }}
                variant="contained"
                startIcon={<Storefront />}
              >
                Outlet 1
              </Button>
              <Typography
                color={"primary"}
                fontWeight={600}
                display={"flex"}
                alignItems={"center"}
                gap={1}
              >
                <CalendarToday />
                07 Agustus 2024
              </Typography>
              <AppBarProfile/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {props.children}

      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
         <SideBar/>
        </Box>
      </Drawer>
    </Box>
  );
}
