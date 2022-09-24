import { Badge } from "@mui/material";
import React, { useState } from "react";
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
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={
        isActive
          ? "flex flex-col justify-center items-center cursor-pointer m-2 text-white"
          : "flex flex-col justify-center items-center cursor-pointer m-2 text-white opacity-60 hover:opacity-100"
      }
      onClick={() => navigation(`/${pathname}`)}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Badge color="info" variant="dot" invisible={!isBadge}>
        {/* <div className="">{icon}</div> */}
        <img src="/images/homeIcon.svg" alt="icon" />
      </Badge>
      {isActive || isHover ? (
        <div className="text-xs">{label}</div>
      ) : (
        <div className="text-xs text-transparent">{label}</div>
      )}
    </div>
  );
}
