import { Badge } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
interface SideMenuButtonProps {
  icon?: React.ReactElement | null;
  label?: string;
  isActive?: boolean;
  isBadge?: boolean;
  pathname?: string;
}

export default function SideMenuButton({
  label = "",
  icon = null,
  isActive = false,
  isBadge = false,
  pathname = "",
}: SideMenuButtonProps) {
  const navigation = useNavigate();
  return (
    <div
      className={
        "flex flex-col justify-center items-center cursor-pointer m-2 text-white"
      }
      onClick={() => navigation(`/${pathname}`)}
    >
      <Badge color="info" variant="dot" invisible={!isBadge}>
        <div
          className={
            isActive
              ? "opacity-100 hover:opacity-80"
              : "opacity-60 hover:opacity-80"
          }
        >
          {icon}
        </div>
      </Badge>
      <div className="text-xs">{label}</div>
    </div>
  );
}
