import { ContentCopy } from "@mui/icons-material";
import { Drawer, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import SideMenuButton from "./SideMenuButton";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  const pathname = useLocation();
  const isPhoneMode = useMediaQuery("(max-width:600px)");

  return (
    <>
      {console.log(
        "test",
        pathname.pathname === "/" || pathname.pathname === "/home"
      )}
      {isPhoneMode ? (
        <div>
          {(pathname.pathname === "/" || pathname.pathname === "/home") && (
            <div className="fixed top-0 w-full bg-[#181818] justify-start items-center">
              <Toolbar>
                <Logo />
              </Toolbar>
            </div>
          )}
        </div>
      ) : (
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
                pathname.pathname === "/home" ||
                pathname.pathname === "/" ||
                pathname.pathname === "/result"
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
      )}
    </>
  );
}
