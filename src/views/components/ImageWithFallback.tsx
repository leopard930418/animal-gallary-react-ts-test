import React from "react";
import Skeleton from "@mui/material/Skeleton";

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  ...props
}: {
  src: string;
  fallbackSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="w-full">
      {loading && (
        <Skeleton
          animation="wave"
          width={width}
          height={height}
          component="div"
          sx={{ transform: "scale(1)" }}
        />
      )}
      <img
        src={src}
        onError={() => {
          if (imgRef && imgRef.current) {
            imgRef.current.src = fallbackSrc;
          }
        }}
        alt={alt || src}
        ref={imgRef}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
