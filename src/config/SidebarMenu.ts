import { GridViewOutlined, FastfoodOutlined, ShoppingCartOutlined, CategoryOutlined, AccountBalanceOutlined, PeopleOutline, StorefrontOutlined } from "@mui/icons-material";

export const sidebarMenuList = [
   {
      label: "Dashboard",
      Icon: GridViewOutlined,
      to: "/",
   },
   {
      label: "Point Of Sales",
      Icon: ShoppingCartOutlined,
      to: "/pos",
   },
   {
      label: "Product",
      Icon: FastfoodOutlined,
      to: "/data-personel-polri",
   },
   {
      label: "Product Category",
      Icon: CategoryOutlined,
      to: "/laporan-kejadian",
   },
   {
      label: "Transaction",
      Icon: AccountBalanceOutlined,
      to: "/persetujuan",
   },
   {
      label: "Karyawan",
      Icon: PeopleOutline,
      to: "/persetujuan",
   },
   {
      label: "Cabang",
      Icon: StorefrontOutlined,
      to: "/persetujuan",
   },
];
