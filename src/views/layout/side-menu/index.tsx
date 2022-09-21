import { ContentCopy } from "@mui/icons-material";
import { Drawer, Stack, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import SideMenuButton from "./SideMenuButton";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  const pathname = useLocation();
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
        <SideMenuButton
          icon={<ContentCopy />}
          label="Home"
          isActive={
            pathname.pathname === "/home" || pathname.pathname === "/"
              ? true
              : false
          }
          pathname="home"
        />
        <SideMenuButton
          icon={<ContentCopy />}
          label="Tags"
          isActive={pathname.pathname === "/tags" ? true : false}
          isBadge={true}
          pathname="tags"
        />
      </Stack>
    </Drawer>
  );
}
