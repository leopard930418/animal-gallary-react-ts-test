import React from "react";
import ImageWithFallback from "../../components/ImageWithFallback";

export default function ResultCard({
  imgsrc = "",
  title = "This is a title",
  username = "by username",
}) {
  return (
    <>
      <div className="p-2">
        <ImageWithFallback
          fallbackSrc={"/images/Image1.svg"}
          src={imgsrc}
          alt="Image"
          width={219}
          height={146}
        />
        <div className="text-white  text-[15px]">{title}</div>
        <div className="text-[#B2B2B2] text-xs">{username}</div>
      </div>
    </>
  );
}
