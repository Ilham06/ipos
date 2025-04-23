import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { sidebarMenuList } from "@/config/SidebarMenu";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <Box>
      <Box
        height={120}
        width={"100%"}
        bgcolor={"primary.main"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={5}
      >
        <Image
          src={"/images/logo/sidebar-logo.svg"}
          alt="logo"
          width={177}
          height={72}
        />
      </Box>
      <List>
        {sidebarMenuList.map((text, index) => (
          <Link key={index} href={text.to} style={{textDecoration: 'none'}}>
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemButton>
                <text.Icon sx={{ mr: 1.5, color: "#2A1D1F" }} />
                <ListItemText
                  primary={text.label}
                  sx={{ color: "#2A1D1F" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}
