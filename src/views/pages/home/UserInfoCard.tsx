import React from "react";

export default function UserInfoCard({
  name = "",
  username = "",
  avatar = "",
  isFollowing = false,
}) {
  return (
    <>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row space-x-4">
          <div className="rounded-md border-2 border-white">
            <img src={avatar} alt="userAvatar" />
          </div>
          <div className="flex flex-col">
            <div className="text-base text-white">{name}</div>
            <div className="text-sm text-white text-opacity-50">
              @{username}
            </div>
          </div>
        </div>
        <div>
          {isFollowing ? (
            <button className="border border-white px-4 py-1 rounded-full bg-white text-black text-xs">
              Following
            </button>
          ) : (
            <button className="border border-white px-4 py-1 rounded-full text-white text-xs">
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
}
