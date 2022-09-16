import { Badge } from "@mui/material";
import React from "react";

interface SideMenuButtonProps {
  icon?: React.ReactElement | null;
  label?: string;
  isActive?: boolean;
  isBadge?: boolean;
}

export default function SideMenuButton({
  label = "",
  icon = null,
  isActive = false,
  isBadge = false,
}: SideMenuButtonProps) {
  return (
    <div
      className={
        "flex flex-col justify-center items-center cursor-pointer m-2 text-white "
      }
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
