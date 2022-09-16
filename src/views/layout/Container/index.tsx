import React from "react";

interface ContainerProps {
  children: React.ReactElement | null;
}

export default function Container({ children = null }: ContainerProps) {
  return <div className="px-32 pt-12 min-h-screen">{children}</div>;
}
