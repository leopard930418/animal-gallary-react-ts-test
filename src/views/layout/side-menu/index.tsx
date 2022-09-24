import { ContentCopy } from "@mui/icons-material";
import { Drawer, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import SideMenuButton from "./SideMenuButton";

export const DRAWER_WIDTH = 80;

export default function SideMenu() {
  const pathname = useLocation();
  const isPhoneMode = useMediaQuery("(max-width:640px)");

  return (
    <>
      {isPhoneMode ? (
        <div>
          {(pathname.pathname === "/" || pathname.pathname === "/home") && (
            <div className="fixed top-0 w-full h-[70px] bg-[#181818] flex justify-start items-center">
              <div className="pl-4">
                {/* <Logo /> */}
                <img src="/logo.svg" alt="logo" className="h-5"></img>
              </div>
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
            {/* <Logo /> */}
            <img src="/logo.svg" alt="logo"></img>
          </Toolbar>

          <Stack>
            <SideMenuButton
              // icon={<ContentCopy />}
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
              // icon={<ContentCopy />}
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
