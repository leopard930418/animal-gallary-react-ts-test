import { ContentCopy } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import SideMenuButton from "../side-menu/SideMenuButton";

export default function Footer() {
  const pathname = useLocation();
  const isPhoneMode = useMediaQuery("(max-width:640px)");
  return (
    <div>
      {isPhoneMode ? (
        <>
          {(pathname.pathname === "/" || pathname.pathname === "/home") && (
            <div className="w-full fixed bottom-0 flex flex-row space-x-4 justify-center items-center bg-[#181818]">
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
                // isActive={pathname.pathname === "/tags" ? true : false}
                isBadge={true}
                pathname="tags"
              />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
