import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import ImageWithFallback from "../../components/ImageWithFallback";

export default function UserInfoCard({
  name = "",
  username = "",
  avatar = "",
  isFollowing = false,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row space-x-4">
          <div className="rounded-md border-2 border-white">
            <ImageWithFallback
              fallbackSrc={"/images/User1.svg"}
              src={avatar}
              alt="userAvatar"
              width={40}
              height={40}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="flex flex-col">
            {isLoading ? (
              <div className="py-1">
                <Skeleton
                  animation="wave"
                  width={140}
                  height={14}
                  component="div"
                  sx={{ transform: "scale(1)" }}
                />
              </div>
            ) : (
              <div className="text-base text-white">{name}</div>
            )}
            {isLoading ? (
              <div className="py-1">
                <Skeleton
                  animation="wave"
                  width={100}
                  height={10}
                  component="div"
                  sx={{ transform: "scale(1)" }}
                />
              </div>
            ) : (
              <div className="text-sm text-white text-opacity-50">
                @{username}
              </div>
            )}
          </div>
        </div>
        <div>
          {isFollowing ? (
            <button className="border border-white px-4 py-1 rounded-full bg-white text-black  hover:text-white hover:bg-black hover:border hover:border-white text-xs">
              Following
            </button>
          ) : (
            <button className="border border-white px-4 py-1 rounded-full text-white  hover:text-black hover:bg-white hover:border hover:border-black text-xs">
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
}
