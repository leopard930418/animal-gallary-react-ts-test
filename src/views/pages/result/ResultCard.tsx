import { useMediaQuery } from "@mui/material";
import React from "react";
import ImageWithFallback from "../../components/ImageWithFallback";

export default function ResultCard({
  imgsrc = "",
  title = "This is a title",
  username = "by username",
}) {
  const isPhoneMode = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className="p-2 ">
        <ImageWithFallback
          fallbackSrc={"/images/Image1.svg"}
          src={imgsrc}
          alt="Image"
          width={isPhoneMode ? 335 : 219}
          height={isPhoneMode ? 222 : 146}
        />
        <div className="text-white  text-[15px] py-2">{title}</div>
        <div className="text-[#B2B2B2] text-xs">{username}</div>
      </div>
    </>
  );
}
