import { ContentCopy } from "@mui/icons-material";
import { Drawer, Stack, Toolbar } from "@mui/material";
import Logo from "../../components/Logo";
import SideMenuButton from "./SideMenuButton";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Logo />
      </Toolbar>

      <Stack>
        <SideMenuButton icon={<ContentCopy />} label="Home" isActive={true} pathname="home"/>
        <SideMenuButton icon={<ContentCopy />} label="Tags" isBadge={true} pathname="tags"/>
      </Stack>
    </Drawer>
  );
}
