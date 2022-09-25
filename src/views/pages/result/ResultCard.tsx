import { Skeleton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ImageWithFallback from "../../components/ImageWithFallback";

export default function ResultCard({
  imgsrc = "",
  title = "This is a title",
  username = "by username",
}) {
  const isPhoneMode = useMediaQuery("(max-width:640px)");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="p-2 ">
        <ImageWithFallback
          fallbackSrc={"/images/Image1.svg"}
          src={imgsrc}
          alt="Image"
          width={isPhoneMode ? 335 : 219}
          height={isPhoneMode ? 222 : 146}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading ? (
          <div className="py-2">
            <Skeleton
              animation="wave"
              width={200}
              height={10}
              component="div"
              sx={{ transform: "scale(1)" }}
            />
          </div>
        ) : (
          <div className="text-white  text-[15px] py-2">{title}</div>
        )}
        {isLoading ? (
          <div className="pb-2">
            <Skeleton
              animation="wave"
              width={160}
              height={10}
              component="div"
              sx={{ transform: "scale(1)" }}
            />
          </div>
        ) : (
          <div className="text-[#B2B2B2] text-xs">{username}</div>
        )}
      </div>
    </>
  );
}
