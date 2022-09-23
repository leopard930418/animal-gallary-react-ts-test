import { useState } from "react";
import User from "./User";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Drawer, paperClasses } from "@mui/material";
import { minWidth } from "@mui/system";

export default function UserDrawer() {
  const [isShow, setIsShow] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="w-full lg:w-1/3 px-2 pt-8 hidden xl-max:block">
        <User />
      </div>
      <div
        className="cursor-pointer fixed top-12 right-0 bg-white bg-opacity-10 rounded-l-xl block xl-max:hidden pl-4 py-4"
        onClick={handleToggle}
      >
        <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
      </div>
      <Drawer open={isShow} anchor="right" onClose={handleToggle}>
        <div style={{ minWidth: "375px" }}>
          <User />
        </div>
      </Drawer>
    </>
  );
}
