import React from "react";

export default function UserInfoCard({ isfollowing = false }) {
  return (
    <>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row space-x-4">
          <div className="rounded-md border-2 border-white">
            <img src="/images/User1.svg" alt="user1" />
          </div>
          <div className="flex flex-col">
            <div className="text-base text-white">Fullname</div>
            <div className="text-sm text-white text-opacity-50">@username</div>
          </div>
        </div>
        <div>
          {isfollowing ? (
            <button className="border border-white px-4 py-1 rounded-full bg-white text-black">
              Following
            </button>
          ) : (
            <button className="border border-white px-4 py-1 rounded-full">
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
}
