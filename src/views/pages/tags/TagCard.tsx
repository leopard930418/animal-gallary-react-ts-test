import React from "react";

export default function TagCard({ tagName = "", resultCount = 0 }) {
  return (
    <>
      <div className="w-[160px]">
        <div className="relative rounded-lg bg-white bg-opacity-5 w-full aspect-square">
          <div className="absolute max-w-[120px] bottom-2 left-2 rounded-md border-2 border-white text-2xl text-white px-2 py-1 ">
            <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">{tagName}</div>
          </div>
        </div>
        <div className="text-white text-base py-1">{tagName}</div>
        <div className="text-[#B2B2B2] text-xs py-1">
          {resultCount} Results
        </div>
      </div>
    </>
  );
}
